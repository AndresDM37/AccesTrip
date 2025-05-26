import { motion } from "@motionone/react";

export default function CategoryCard({ category, index }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="text-2xl mb-2">{category.icon}</div>
      <span className="text-sm font-medium">{category.name}</span>
    </motion.div>
  );
}