import { useState, useEffect } from "react";
import ModelPage from "../../components/ModelPage";

const importAllImages = () => {
  const images = import.meta.glob(
    "../../assets/properties/SablePalm/*.{jpg,png}",
    { eager: true }
  );
  return Object.values(images).map(
    (mod) => (mod as { default: string }).default
  );
};

const SablePalm = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = () => {
      const imagePaths = importAllImages();
      setImages(imagePaths);
    };

    loadImages();
  }, []);

  return <ModelPage images={images} />;
};

export default SablePalm;
