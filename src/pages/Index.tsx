import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";
import ProductReviews from "@/components/ProductReviews";
import Footer from "@/components/Footer";

const Index = () => {
  const productName = "Massageador Premium Multifuncional com Tecnologia Avançada";
  const productDescription = "Massageador premium com 10 modos de intensidade, silicone médico, design ergonômico e bateria recarregável. Frete grátis e garantia de 12 meses.";

  return (
    <>
      <Helmet>
        <title>{productName} | LUXE Store</title>
        <meta name="description" content={productDescription} />
        <meta name="keywords" content="massageador, premium, bem-estar, autocuidado, relaxamento" />
        <link rel="canonical" href="https://luxestore.com/produto/massageador-premium" />
        
        {/* Open Graph */}
        <meta property="og:title" content={productName} />
        <meta property="og:description" content={productDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://luxestore.com/produto/massageador-premium" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={productName} />
        <meta name="twitter:description" content={productDescription} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Product Section */}
          <section className="py-8 md:py-12">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Gallery */}
                <div className="animate-fade-in">
                  <ProductGallery />
                </div>

                {/* Product Info */}
                <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <ProductInfo />
                </div>
              </div>
            </div>
          </section>

          {/* Description, Usage, Specs */}
          <ProductDescription />

          {/* Reviews */}
          <ProductReviews />
        </main>

        <Footer />
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": productName,
          "description": productDescription,
          "brand": {
            "@type": "Brand",
            "name": "LUXE Store"
          },
          "offers": {
            "@type": "Offer",
            "price": "254.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "LUXE Store"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "127"
          }
        })}
      </script>
    </>
  );
};

export default Index;
