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
                  O Sugador de Clitóris em Formato de Rosa com Vibrador Vai e Vem é a combinação perfeita 
                  de design elegante e tecnologia de prazer avançada. Com seu formato discreto de rosa, 
                  este produto oferece dupla estimulação para momentos inesquecíveis.
                </p>
                <p>
                  A parte superior em formato de rosa possui tecnologia de sucção por ondas de pressão, 
                  que simula a sensação de sucção oral com 10 intensidades diferentes. Já o vibrador 
                  flexível com movimento vai e vem proporciona estimulação interna profunda.
                </p>
                <h3 className="font-heading font-semibold text-foreground pt-4">Características Principais:</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>10 modos de sucção por ondas de pressão</li>
                  <li>Vibrador com movimento vai e vem automático</li>
                  <li>Material em silicone médico ultra macio</li>
                  <li>Design discreto e elegante em formato de rosa</li>
                  <li>Bateria recarregável via USB</li>
                  <li>Resistente à água - pode ser usado no banho</li>
                  <li>Motor silencioso para uso discreto</li>
                  <li>Haste flexível que se adapta à anatomia</li>
                </ul>
                <p>
                  Perfeito para uso solo ou a dois, o produto vem em embalagem 100% discreta sem 
                  identificação do conteúdo, garantindo sua privacidade.
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
                    <span className="font-medium text-foreground">Carregamento:</span> Antes do primeiro uso, 
                    carregue completamente o produto por aproximadamente 2 horas utilizando o cabo USB magnético incluso.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Ligar a rosa (sucção):</span> Pressione e segure o 
                    botão superior por 2 segundos. Cada toque adicional alterna entre os 10 modos de sucção.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Ligar o vibrador:</span> Pressione o botão inferior 
                    para ativar o movimento vai e vem. Cada toque ajusta a velocidade.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Uso recomendado:</span> Utilize gel lubrificante 
                    à base de água para maior conforto. A haste flexível permite ajuste ao corpo.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Desligar:</span> Pressione e segure qualquer 
                    botão por 2 segundos para desligar a função correspondente.
                  </li>
                </ol>
                <div className="bg-primary-light p-4 rounded-lg mt-6">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Dica:</span> Limpe o produto antes e após cada uso com 
                    água morna e sabonete neutro ou higienizador específico para toys. Seque completamente antes de guardar.
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
                      <td className="py-3 pr-4 font-medium text-foreground">Dimensões totais</td>
                      <td className="py-3 text-muted-foreground">22cm x 4cm</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Diâmetro da rosa</td>
                      <td className="py-3 text-muted-foreground">5cm</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Comprimento inserível</td>
                      <td className="py-3 text-muted-foreground">12cm</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Modos de sucção</td>
                      <td className="py-3 text-muted-foreground">10 intensidades</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Movimento vai e vem</td>
                      <td className="py-3 text-muted-foreground">3 velocidades</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Bateria</td>
                      <td className="py-3 text-muted-foreground">Li-ion recarregável via USB</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Tempo de carga</td>
                      <td className="py-3 text-muted-foreground">2 horas</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Autonomia</td>
                      <td className="py-3 text-muted-foreground">Até 60 minutos</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Resistência à água</td>
                      <td className="py-3 text-muted-foreground">IPX6 (à prova de respingos)</td>
                    </tr>
                    <tr className="hover:bg-secondary/50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-foreground">Itens inclusos</td>
                      <td className="py-3 text-muted-foreground">Produto, cabo USB magnético, manual</td>
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