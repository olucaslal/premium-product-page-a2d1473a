import { useState } from "react";
import { cn } from "@/lib/utils";
import productMain from "@/assets/product-main.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const images = [
  { id: 1, src: productMain, alt: "Produto principal - vista frontal" },
  { id: 2, src: product2, alt: "Produto - vista lateral" },
  { id: 3, src: product3, alt: "Produto - detalhe" },
  { id: 4, src: product4, alt: "Produto - embalagem" },
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
            "h-full w-full object-cover transition-transform duration-500",
            isZoomed && "scale-110"
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
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
              selectedImage === index
                ? "border-primary ring-2 ring-primary ring-offset-2"
                : "border-border hover:border-primary/50"
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
