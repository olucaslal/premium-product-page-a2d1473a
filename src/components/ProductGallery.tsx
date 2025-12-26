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
        className="relative aspect-square overflow-hidden rounded-xl bg-secondary cursor-zoom-in max-h-[70vh] md:max-h-none"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          className={cn(
            "h-full w-full object-contain transition-transform duration-500",
            isZoomed && "md:scale-125"
          )}
          loading="eager"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 flex flex-col gap-2">
          <span className="badge-promo text-xs md:text-sm">-25% OFF</span>
          <span className="bg-primary text-primary-foreground text-xs md:text-sm font-semibold px-2 py-1 rounded-lg">SOMENTE PIX</span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-7 gap-2 md:flex md:gap-3 md:overflow-x-auto md:pb-2 scrollbar-thin">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "aspect-square w-full md:flex-shrink-0 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-secondary",
              selectedImage === index
                ? "border-primary ring-2 ring-primary ring-offset-1 md:ring-offset-2"
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