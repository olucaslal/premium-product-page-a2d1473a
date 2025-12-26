import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";
import ProductReviews from "@/components/ProductReviews";
import Footer from "@/components/Footer";

const Index = () => {
  const productName = "Sugador de Clitóris em Formato de Rosa e Vibrador Vai e Vem";
  const productDescription = "Sugador de clitóris com 10 modos de sucção e vibrador vai e vem. Silicone médico, design discreto, bateria recarregável. Frete grátis para todo Brasil.";

  return (
    <>
      <Helmet>
        <title>{productName} | LUXE Store</title>
        <meta name="description" content={productDescription} />
        <meta name="keywords" content="sugador, vibrador, rosa, bem-estar, prazer feminino" />
        <link rel="canonical" href="https://luxestore.com/produto/sugador-rosa-vibrador" />
        
        {/* Open Graph */}
        <meta property="og:title" content={productName} />
        <meta property="og:description" content={productDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://luxestore.com/produto/sugador-rosa-vibrador" />
        
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
            "price": "156.49",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "LUXE Store"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "89"
          }
        })}
      </script>
    </>
  );
};

export default Index;