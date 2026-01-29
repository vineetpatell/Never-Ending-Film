import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import {
  Send,
  Film,
  Tv,
  Music,
  Megaphone,
  MonitorPlay,
  FileVideo,
  HelpCircle,
} from "lucide-react";

const ContactFormWithDropdown = () => {
  const { toast } = useToast();


  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectCategory: "",
    message: "",
  });

  const projectCategories = [
    { label: "Feature Films", value: "feature_film", icon: Film },
    { label: "Web Series", value: "web_series", icon: Tv },
    { label: "Music Videos", value: "music_video", icon: Music },
    { label: "Commercial Films", value: "commercial_film", icon: Megaphone },
    { label: "Digital Ads", value: "digital_ad", icon: MonitorPlay },
    { label: "Documentaries", value: "documentary", icon: FileVideo },
    { label: "Other", value: "other", icon: HelpCircle },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitContactForm = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/contact",
      formData,
      { withCredentials: true }
    );
    console.log(response);
    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.projectCategory
    ) {
      toast({
        title: "Missing required fields",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      await submitContactForm();

      toast({
        title: "Message sent successfully 🎬",
        description: "We'll contact you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectCategory: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="cinema-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-glow">
            Start Your Journey
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Email *</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Phone & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Project Category *</Label>
                <Select
                  value={formData.projectCategory}
                  onValueChange={(value) =>
                    handleInputChange("projectCategory", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        <span className="flex items-center gap-2">
                          <category.icon className="w-4 h-4 text-primary" />
                          {category.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label>Project Details *</Label>
              <Textarea
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Describe your project vision..."
                required
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="btn-cinema w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && (
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactFormWithDropdown;
