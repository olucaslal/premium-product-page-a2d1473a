import { useState } from "react";
import { Star, Truck, Shield, Check, Package, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import CountdownTimer from "@/components/CountdownTimer";

interface Variation {
  id: string;
  name: string;
  value: string;
  available: boolean;
}

const colors: Variation[] = [
  { id: "red", name: "Cor", value: "Vermelho", available: true },
  { id: "pink", name: "Cor", value: "Rosa", available: false },
  { id: "purple", name: "Cor", value: "Roxo", available: false },
];

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [cep, setCep] = useState("");
  const [shippingResult, setShippingResult] = useState<{ show: boolean } | null>(null);
  const { toast } = useToast();

  const originalPrice = 200;
  const currentPrice = 149.90;
  const discountPercent = 25;

  const canBuy = selectedColor !== null;

  const handleAddToCart = () => {
    if (!canBuy) {
      toast({
        title: "Selecione uma opção",
        description: "Por favor, escolha a cor antes de continuar.",
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
        title: "Selecione uma opção",
        description: "Por favor, escolha a cor antes de continuar.",
        variant: "destructive",
      });
      return;
    }
    
    window.open("https://wa.me/5531993753060?text=Quero%20comprar%20o%20%22Sugador%20de%20Clit%C3%B3ris%20Em%20Formato%20de%20Rosa%20e%20Vibrador%20Vai%20e%20Vem%22", "_blank");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Product Title & Rating */}
      <div>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
          Sugador de Clitóris em Formato de Rosa e Vibrador Vai e Vem
        </h1>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  "h-4 w-4",
                  star <= 5 ? "fill-star text-star" : "text-border"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(89 avaliações)</span>
        </div>
      </div>

      {/* Stock Alert */}
      <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-2 rounded-lg flex items-center gap-2">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-sm font-medium">Restam apenas 23 unidades!</span>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <p className="price-original">
            De: R$ {originalPrice.toFixed(2).replace(".", ",")}
          </p>
          <span className="bg-success text-success-foreground text-xs font-bold px-2 py-1 rounded">
            -{discountPercent}% OFF
          </span>
        </div>
        <p className="price-current">
          R$ {currentPrice.toFixed(2).replace(".", ",")}
        </p>
        <div className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-2">
          <p className="text-sm font-medium text-primary">
            Por enquanto só aceitamos pagamento via PIX
          </p>
        </div>
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

      {/* CTA Button */}
      <div className="pt-2">
        <Button
          onClick={handleBuyNow}
          className="product-cta w-full text-base"
          size="lg"
        >
          COMPRAR
        </Button>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
            <Truck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Entrega Rápida</p>
            <p className="text-xs text-muted-foreground">Até 24h para BH e região</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Garantia</p>
            <p className="text-xs text-muted-foreground">90 dias</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Entrega Discreta</p>
            <p className="text-xs text-muted-foreground">Embalagem sem identificação</p>
          </div>
        </div>
      </div>

      {/* Shipping Calculator */}
      <div className="p-4 bg-muted/50 rounded-lg border border-border space-y-3">
        <p className="text-sm font-medium text-foreground">Calcular frete e prazo</p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 8);
              setCep(value);
              setShippingResult(null);
            }}
            className="flex-1"
            maxLength={9}
          />
          <Button
            variant="outline"
            onClick={() => {
              if (cep.length >= 8) {
                setShippingResult({ show: true });
              } else {
                toast({
                  title: "CEP inválido",
                  description: "Por favor, digite um CEP válido com 8 dígitos.",
                  variant: "destructive",
                });
              }
            }}
            className="border-primary text-primary hover:bg-primary-light"
          >
            Calcular
          </Button>
        </div>
        <a 
          href="https://buscacepinter.correios.com.br/app/endereco/index.php" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline"
        >
          Não sei meu CEP
        </a>
        
        {shippingResult?.show && (
          <div className="mt-3 p-3 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-success" />
              <div>
                <p className="text-sm font-medium text-success">Frete Grátis</p>
                <p className="text-xs text-muted-foreground">Entrega em até 3 dias úteis</p>
              </div>
            </div>
          </div>
        )}
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