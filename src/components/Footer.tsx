import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-xl font-bold">LUXE</span>
              <span className="font-heading text-xl font-light opacity-80">store</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Sua loja premium para produtos de bem-estar e autocuidado. 
              Qualidade, discrição e satisfação garantida.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#quem-somos" className="opacity-70 hover:opacity-100 transition-opacity">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#privacidade" className="opacity-70 hover:opacity-100 transition-opacity">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#termos" className="opacity-70 hover:opacity-100 transition-opacity">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#trocas" className="opacity-70 hover:opacity-100 transition-opacity">
                  Trocas e Devoluções
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Ajuda</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  Central de ajuda
                </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  Como comprar
                </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  Formas de pagamento
                </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                  Rastrear pedido
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-70" />
                <a href="mailto:contato@luxestore.com" className="opacity-70 hover:opacity-100 transition-opacity">
                  contato@luxestore.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 opacity-70" />
                <a href="https://wa.me/5531993753060?text=Quero%20comprar%20o%20%22Sugador%20de%20Clit%C3%B3ris%20Em%20Formato%20de%20Rosa%20e%20Vibrador%20Vai%20e%20Vem%22" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                  (31) 99375-3060
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 opacity-70 mt-0.5" />
                <span className="opacity-70">
                  Belo Horizonte, MG - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center space-y-2">
          <p className="text-sm opacity-70">
            CNPJ 10.500.685/0001-99
          </p>
          <p className="text-sm opacity-50">
            © 2024 LUXE Store. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
