import { useState } from "react";
import { Star, Truck, Shield, CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Variation {
  id: string;
  name: string;
  value: string;
  available: boolean;
}

const colors: Variation[] = [
  { id: "rose", name: "Cor", value: "Rosé Gold", available: true },
  { id: "silver", name: "Cor", value: "Prata", available: true },
  { id: "black", name: "Cor", value: "Preto", available: false },
];

const models: Variation[] = [
  { id: "standard", name: "Modelo", value: "Standard", available: true },
  { id: "premium", name: "Modelo", value: "Premium", available: true },
];

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const { toast } = useToast();

  const originalPrice = 299.9;
  const currentPrice = 254.9;
  const installments = 12;
  const installmentPrice = (currentPrice / installments).toFixed(2);

  const canBuy = selectedColor && selectedModel;

  const handleAddToCart = () => {
    if (!canBuy) {
      toast({
        title: "Selecione as opções",
        description: "Por favor, escolha a cor e o modelo antes de continuar.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Produto adicionado!",
      description: "O item foi adicionado ao seu carrinho.",
    });
  };

  const handleBuyNow = () => {
    if (!canBuy) {
      toast({
        title: "Selecione as opções",
        description: "Por favor, escolha a cor e o modelo antes de continuar.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o checkout.",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Product Title & Rating */}
      <div>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
          Massageador Premium Multifuncional com Tecnologia Avançada
        </h1>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  "h-4 w-4",
                  star <= 4 ? "fill-star text-star" : "text-border"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(127 avaliações)</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-1">
        <p className="price-original">
          De: R$ {originalPrice.toFixed(2).replace(".", ",")}
        </p>
        <p className="price-current">
          R$ {currentPrice.toFixed(2).replace(".", ",")}
        </p>
        <p className="price-installment">
          ou {installments}x de R$ {installmentPrice.replace(".", ",")} sem juros
        </p>
      </div>

      {/* Variations - Color */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">
          Cor: <span className="font-normal text-muted-foreground">{selectedColor ? colors.find(c => c.id === selectedColor)?.value : "Selecione"}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => color.available && setSelectedColor(color.id)}
              disabled={!color.available}
              className={cn(
                "variation-button",
                selectedColor === color.id && "selected",
                !color.available && "opacity-50 cursor-not-allowed line-through"
              )}
            >
              {color.value}
            </button>
          ))}
        </div>
      </div>

      {/* Variations - Model */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">
          Modelo: <span className="font-normal text-muted-foreground">{selectedModel ? models.find(m => m.id === selectedModel)?.value : "Selecione"}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => model.available && setSelectedModel(model.id)}
              disabled={!model.available}
              className={cn(
                "variation-button",
                selectedModel === model.id && "selected",
                !model.available && "opacity-50 cursor-not-allowed"
              )}
            >
              {model.value}
            </button>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 pt-2">
        <Button
          onClick={handleBuyNow}
          className="product-cta w-full text-base"
          size="lg"
        >
          COMPRAR
        </Button>
        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="w-full text-base border-2 border-primary text-primary hover:bg-primary-light"
          size="lg"
        >
          ADICIONAR AO CARRINHO
        </Button>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
            <Truck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Frete Grátis</p>
            <p className="text-xs text-muted-foreground">Para todo Brasil</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Garantia</p>
            <p className="text-xs text-muted-foreground">12 meses</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
            <CreditCard className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Parcelamento</p>
            <p className="text-xs text-muted-foreground">Em até 12x</p>
          </div>
        </div>
      </div>

      {/* Stock indicator */}
      <div className="flex items-center gap-2 text-success">
        <Check className="h-4 w-4" />
        <span className="text-sm font-medium">Produto disponível</span>
      </div>
    </div>
  );
};

export default ProductInfo;
