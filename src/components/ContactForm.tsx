import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectCategory: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ ENUM-SAFE categories (label for UI, value for DB)
  const projectCategories = [
    { label: "Feature Films", value: "feature_film" },
    { label: "Web Series", value: "web_series" },
    { label: "Music Videos", value: "music_video" },
    { label: "Commercial Films", value: "commercial_film" },
    { label: "Digital Ads", value: "digital_ad" },
    { label: "Documentaries", value: "documentary" },
    { label: "Other", value: "other" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.projectCategory) {
      toast({
        title: "Project category required",
        description: "Please select a project category",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter your message",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      await axios.post(
        "http://localhost:3000/api/contact",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: formData.projectCategory, // ✅ enum value
          project: formData.message,
        },
        { withCredentials: true }
      );

      toast({
        title: "Message sent successfully 🎬",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectCategory: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Submission failed",
        description:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6 glass-panel p-8 max-w-2xl mx-auto"
    >
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          placeholder="Your full name *"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          required
        />

        <Input
          type="email"
          placeholder="your.email@example.com *"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
      </div>

      {/* Phone & Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />

        <Select
          value={formData.projectCategory}
          onValueChange={(value) =>
            handleInputChange("projectCategory", value)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select project category *" />
          </SelectTrigger>
          <SelectContent>
            {projectCategories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <Textarea
        rows={6}
        placeholder="Tell us about your project..."
        value={formData.message}
        onChange={(e) => handleInputChange("message", e.target.value)}
        required
      />

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-cinema w-full py-3 text-lg group"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            Send Message
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
