import React from "react";
import { motion } from "framer-motion";

interface FadingShadowProps {
  children: React.ReactNode;
}

const FadingShadow: React.FC<FadingShadowProps> = ({ children }) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden group hover:shadow-inner"
    >
      {children}
    </motion.div>
  );
};

export default FadingShadow;
