import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDescription = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container">
        <Accordion type="single" collapsible defaultValue="description" className="w-full">
          {/* Description */}
          <AccordionItem value="description" className="border-b border-border">
            <AccordionTrigger className="section-title hover:no-underline py-6">
              Descrição do Produto
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
              <div className="space-y-4 max-w-3xl">
                <p>
                  O Massageador Premium Multifuncional representa o que há de mais avançado em tecnologia de bem-estar pessoal. 
                  Desenvolvido com materiais de altíssima qualidade e design ergonômico, este produto oferece uma experiência 
                  única de relaxamento e cuidado pessoal.
                </p>
                <p>
                  Com múltiplos modos de intensidade e padrões de vibração, você pode personalizar completamente sua experiência. 
                  O revestimento em silicone médico hipoalergênico garante máximo conforto e segurança durante o uso.
                </p>
                <h3 className="font-heading font-semibold text-foreground pt-4">Características Principais:</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>10 modos de intensidade programáveis</li>
                  <li>Material em silicone médico premium</li>
                  <li>Design ergonômico e discreto</li>
                  <li>Bateria recarregável de longa duração</li>
                  <li>Resistente à água - IPX7</li>
                  <li>Motor silencioso de alta performance</li>
                  <li>Carregamento USB universal</li>
                </ul>
                <p>
                  Ideal para momentos de relaxamento e autocuidado, o produto vem em embalagem discreta e inclui 
                  cabo USB para carregamento, manual de instruções em português e bolsa de armazenamento.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* How to Use */}
          <AccordionItem value="usage" className="border-b border-border">
            <AccordionTrigger className="section-title hover:no-underline py-6">
              Modo de Uso
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
              <div className="space-y-4 max-w-3xl">
                <ol className="list-decimal list-inside space-y-4 pl-2">
                  <li>
                    <span className="font-medium text-foreground">Carregamento inicial:</span> Antes do primeiro uso, 
                    carregue completamente o produto por aproximadamente 2 horas utilizando o cabo USB incluso.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Ligar o aparelho:</span> Pressione e segure o 
                    botão principal por 3 segundos até a luz indicadora acender.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Selecionar modo:</span> Toque brevemente no botão 
                    para alternar entre os diferentes modos de intensidade.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Durante o uso:</span> Utilize movimentos suaves 
                    e explore as diferentes configurações para encontrar sua preferência.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Desligar:</span> Pressione e segure o botão 
                    principal por 3 segundos até a luz apagar.
                  </li>
                </ol>
                <div className="bg-primary-light p-4 rounded-lg mt-6">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Dica:</span> Para maior durabilidade, limpe o produto após cada uso 
                    com água morna e sabão neutro. Seque completamente antes de guardar.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Technical Specs */}
          <AccordionItem value="specs" className="border-b border-border">
            <AccordionTrigger className="section-title hover:no-underline py-6">
              Ficha Técnica
            </AccordionTrigger>
            <AccordionContent className="pb-8">
              <div className="max-w-2xl">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Material</td>
                      <td className="py-3 text-muted-foreground">Silicone Médico + ABS</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Dimensões</td>
                      <td className="py-3 text-muted-foreground">18cm x 4cm x 3.5cm</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Peso</td>
                      <td className="py-3 text-muted-foreground">120g</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Bateria</td>
                      <td className="py-3 text-muted-foreground">Li-ion 500mAh recarregável</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Tempo de carga</td>
                      <td className="py-3 text-muted-foreground">2 horas</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Autonomia</td>
                      <td className="py-3 text-muted-foreground">Até 90 minutos</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Modos de vibração</td>
                      <td className="py-3 text-muted-foreground">10 intensidades</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Resistência à água</td>
                      <td className="py-3 text-muted-foreground">IPX7 (submersível)</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Garantia</td>
                      <td className="py-3 text-muted-foreground">12 meses contra defeitos</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Itens inclusos</td>
                      <td className="py-3 text-muted-foreground">Produto, cabo USB, manual, bolsa de armazenamento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default ProductDescription;
