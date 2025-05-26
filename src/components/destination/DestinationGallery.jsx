import { motion } from "@motionone/react";

export default function DestinationGallery({ images = [] }) {
  return (
    <div className="mb-6">
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: idx * 0.1,
              ease: "easeOut",
            }}
            className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden"
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}