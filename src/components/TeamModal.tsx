import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  imdbUrl: string;
}

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal = ({ member, isOpen, onClose }: TeamModalProps) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-auto"
          >
            <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto my-8 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-foreground-muted hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-64 h-64 object-cover rounded-2xl mx-auto shadow-lg"
                  />
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                    {member.name}
                  </h2>
                  <p className="text-xl text-primary mb-6 font-semibold">
                    {member.role}
                  </p>
                  <p className="text-foreground-muted leading-relaxed mb-8">
                    {member.bio}
                  </p>
                  
                  <a 
                    href={member.imdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                      <ExternalLink className="mr-2" size={20} />
                      View IMDb Profile
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;