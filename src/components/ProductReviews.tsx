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
    name: "Maria S.",
    rating: 5,
    date: "20/12/2024",
    comment: "Produto excelente! Chegou muito rápido e bem embalado. A qualidade é impressionante, superou todas as minhas expectativas. Recomendo muito!",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Ana P.",
    rating: 5,
    date: "18/12/2024",
    comment: "Muito satisfeita com a compra. O material é de alta qualidade e funciona perfeitamente. Entrega discreta e rápida.",
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    name: "Juliana M.",
    rating: 4,
    date: "15/12/2024",
    comment: "Bom produto, atende bem ao que promete. A bateria dura bastante e é bem silencioso. Só achei que poderia ter mais opções de intensidade.",
    helpful: 12,
    verified: true,
  },
  {
    id: 4,
    name: "Fernanda L.",
    rating: 5,
    date: "10/12/2024",
    comment: "Incrível! Vale cada centavo. A embalagem veio super discreta e o produto é lindo. Estou amando!",
    helpful: 31,
    verified: true,
  },
  {
    id: 5,
    name: "Camila R.",
    rating: 4,
    date: "05/12/2024",
    comment: "Gostei muito! Produto de qualidade, bem feito e bonito. A entrega foi mais rápida do que esperava.",
    helpful: 9,
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
