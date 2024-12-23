import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const HomePage = () => {
  const [homeImage, setHomeImage] = useState(
    "https://images.tv9hindi.com/wp-content/uploads/2024/08/chin-tapak-dum-dum-1.png"
  );
  const [imageAspectRatio, setImageAspectRatio] = useState(16 / 9);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-500, 500], [5, -5]);
  const rotateY = useTransform(x, [-500, 500], [-5, 5]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.onload = () => {
        setImageAspectRatio(img.width / img.height);
      };
      img.src = homeImage;
    }
  }, [homeImage]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <div
      className="w-full h-screen px-10 flex items-center justify-center overflow-hidden -mt-20"
      onMouseMove={handleMouse}
    >
      <motion.div
        className="w-full h-full flex flex-col items-center justify-center"
        style={{ rotateX, rotateY, perspective: 1000 }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="absolute inset-0 bg-purple-500 rounded-full opacity-30 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div
            style={{
              width: `min(80vw, ${imageAspectRatio * 60}vh)`,
              height: `min(${80 / imageAspectRatio}vw, 60vh)`,
              position: "relative",
            }}
          >
            <img
              src={homeImage}
              alt="Home Page Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="rounded-full shadow-2xl z-10 relative"
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(45deg, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 70%)",
              zIndex: 20,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <motion.h1
          className="mt-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.h1>
      </motion.div>
    </div>
  );
};

export default HomePage;
