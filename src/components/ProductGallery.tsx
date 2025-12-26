import { useState } from "react";
import { cn } from "@/lib/utils";
import product1 from "@/assets/product-1.webp";
import product2 from "@/assets/product-2.webp";
import product3 from "@/assets/product-3.webp";
import product4 from "@/assets/product-4.webp";
import product5 from "@/assets/product-5.webp";
import product6 from "@/assets/product-6.webp";
import product7 from "@/assets/product-7.webp";

const images = [
  { id: 1, src: product1, alt: "Sugador em formato de rosa com vibrador - vista completa" },
  { id: 2, src: product2, alt: "Produto em funcionamento - demonstração" },
  { id: 3, src: product3, alt: "Detalhe da rosa - parte superior" },
  { id: 4, src: product4, alt: "Produto completo - vista lateral" },
  { id: 5, src: product5, alt: "Detalhe do vibrador vai e vem" },
  { id: 6, src: product6, alt: "Opções de carregamento USB" },
  { id: 7, src: product7, alt: "10 frequências de sucção" },
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div 
        className="relative aspect-square overflow-hidden rounded-xl bg-secondary cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          className={cn(
            "h-full w-full object-contain transition-transform duration-500",
            isZoomed && "scale-125"
          )}
          loading="eager"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="badge-promo">-15% OFF</span>
          <span className="badge-new">NOVO</span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-secondary",
              selectedImage === index
                ? "border-primary ring-2 ring-primary ring-offset-2"
                : "border-border hover:border-primary/50"
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;