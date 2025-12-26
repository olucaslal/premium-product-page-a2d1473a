import { Star, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Mariana S.",
    rating: 5,
    date: "20/12/2024",
    comment: "Comprei por curiosidade e me surpreendi muito. O formato é lindo e discreto, ninguém imagina o que é 😅. O sugador funciona muito bem e os modos de vibração são bem variados. Chegou rápido e bem embalado.",
    helpful: 42,
    verified: true,
  },
  {
    id: 2,
    name: "Ana Paula R.",
    rating: 5,
    date: "18/12/2024",
    comment: "Produto excelente! Já tive outros sugadores e esse foi o que mais gostei. É silencioso, confortável de usar e o material parece de ótima qualidade. Valeu cada centavo.",
    helpful: 38,
    verified: true,
  },
  {
    id: 3,
    name: "Camila T.",
    rating: 5,
    date: "15/12/2024",
    comment: "Confesso que fiquei com receio no começo, mas superou minhas expectativas. Fácil de usar, bateria dura bastante e o design em formato de rosa é um charme à parte.",
    helpful: 35,
    verified: true,
  },
  {
    id: 4,
    name: "Juliana M.",
    rating: 4,
    date: "12/12/2024",
    comment: "Gostei bastante do produto. Cumpre o que promete, tem várias intensidades e é bem potente. Só achei que poderia vir com um manual mais detalhado, mas nada que atrapalhe.",
    helpful: 28,
    verified: true,
  },
  {
    id: 5,
    name: "Renata L.",
    rating: 5,
    date: "10/12/2024",
    comment: "Simplesmente maravilhoso! Muito confortável e eficiente. Dá pra usar sozinha ou a dois, o que torna a experiência ainda melhor. Já indiquei para amigas.",
    helpful: 45,
    verified: true,
  },
  {
    id: 6,
    name: "Fernanda C.",
    rating: 5,
    date: "08/12/2024",
    comment: "Produto discreto, bonito e funcional. O carregamento é rápido e a bateria dura bastante tempo. Achei fácil de higienizar também, ponto muito positivo.",
    helpful: 31,
    verified: true,
  },
  {
    id: 7,
    name: "Patrícia G.",
    rating: 4,
    date: "05/12/2024",
    comment: "Entrega rápida e produto bem embalado. O sugador é potente e as vibrações são intensas, mas dá pra ajustar bem. No geral, fiquei muito satisfeita com a compra.",
    helpful: 22,
    verified: true,
  },
  {
    id: 8,
    name: "Larissa D.",
    rating: 5,
    date: "02/12/2024",
    comment: "Foi meu primeiro sugador e amei! Muito intuitivo de usar, confortável e realmente faz diferença. O formato de rosa é lindo e passa muita discrição.",
    helpful: 36,
    verified: true,
  },
  {
    id: 9,
    name: "Bruna F.",
    rating: 5,
    date: "28/11/2024",
    comment: "Já testei várias marcas e esse modelo me surpreendeu. A combinação de sucção com vibração é incrível. Produto de qualidade e acabamento muito bom.",
    helpful: 29,
    verified: true,
  },
  {
    id: 10,
    name: "Daniela P.",
    rating: 5,
    date: "25/11/2024",
    comment: "Comprei para dar de presente e acabou sendo sucesso total. A pessoa que recebeu adorou! Design bonito, funciona perfeitamente e chegou dentro do prazo.",
    helpful: 33,
    verified: false,
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 78 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
];

const averageRating = 4.7;
const totalReviews = 127;

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={cn(
          "h-4 w-4",
          star <= rating ? "fill-star text-star" : "text-border"
        )}
      />
    ))}
  </div>
);

const ProductReviews = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <h2 className="section-title text-center mb-10">Avaliações de Clientes</h2>

        {/* Rating Summary */}
        <div className="card-elevated p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Average Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-5xl font-bold text-foreground font-heading">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-5 w-5",
                          star <= Math.round(averageRating)
                            ? "fill-star text-star"
                            : "text-border"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {totalReviews} avaliações
                  </p>
                </div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-12">
                    {item.stars} {item.stars === 1 ? "estrela" : "estrelas"}
                  </span>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-10 text-right">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="card-elevated p-6 animate-fade-in"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{review.name}</span>
                    {review.verified && (
                      <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">
                        Compra verificada
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  Útil ({review.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
