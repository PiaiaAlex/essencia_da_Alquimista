import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageCircle, Leaf, Droplets, Wind, Instagram, Facebook, Mail, FlaskConical, Beaker, ChevronLeft, ChevronRight } from 'lucide-react';

const AlchemyLogo = ({ className, showLeaf = true }: { className?: string, showLeaf?: boolean }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <FlaskConical className="absolute bottom-[5%] right-[5%] w-[65%] h-[65%] text-leaf-dark" strokeWidth={1.5} />
    <Beaker className="absolute bottom-[5%] left-[10%] w-[50%] h-[50%] text-leaf" strokeWidth={1.5} />
    {showLeaf && <Leaf className="absolute top-[5%] left-[5%] w-[40%] h-[40%] text-leaf-light -rotate-45" strokeWidth={1.5} />}
  </div>
);

const products = [
  {
    id: 1,
    name: 'Jardim Âmbar',
    description: 'Home spray de Jasmim com Ládano. O jasmim é sedutor e relaxante, ideal para ansiedade e melhora do humor. O ládano traz uma nota amadeirada e resinosa, focado em fortalecimento interno e meditação.',
    price: 'R$ 25,00',
    image: '/jardim.jpg',
    color: 'bg-orange-100/50',
    isComingSoon: false,
  },
  {
    id: 2,
    name: 'Vanilla di Sicilia',
    description: 'Home spray de Baunilha e limão siciliano. O limão siciliano energiza e purifica, enquanto a baunilha traz suavidade e aconchego. Ideal para redução do estresse e relaxamento.',
    price: 'R$ 25,00',
    image: '/vanilla.jpg',
    color: 'bg-yellow-100/40',
    isComingSoon: false,
  },
  {
    id: 3,
    name: 'Passion Mint',
    description: 'Home spray de Maracujá com hortelã. Um "calmante refrescante", sendo o maracujá ideal para reduzir a ansiedade e auxiliar na insônia, e o mentol do hortelã em aliviar dores de cabeça e melhorar a clareza mental.',
    price: 'R$ 25,00',
    image: '/passion.jpg',
    color: 'bg-emerald-100/40',
    isComingSoon: false,
  },
  {
    id: 4,
    name: 'Lip Balm',
    description: 'Hidratação profunda e natural para os seus lábios. Fórmula exclusiva em desenvolvimento.',
    price: 'Em breve',
    image: '/lipbalm.jpg',
    color: 'bg-pink-100/40',
    isComingSoon: true,
  },
  {
    id: 5,
    name: 'Bruma de Aloe Vera',
    description: 'Refrescância e cuidado botânico para a sua pele. Aguarde nosso próximo lançamento.',
    price: 'Em breve',
    image: '/bruna.jpg',
    color: 'bg-green-100/40',
    isComingSoon: true,
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    '/aromatizantesambiente.jpg',
    '/produtos.jpg',
    '/contato.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no spray aromatizador ${productName}.`);
    window.open(`https://wa.me/5554997091787?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen font-serif selection:bg-leaf-light selection:text-white relative">
      {/* Fixed Global Background */}
      <div className="fixed inset-0 -z-50">
        <img src="/logo.jpg" alt="Background" className="w-full h-full object-cover opacity-15 mix-blend-multiply" />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <AlchemyLogo className="w-12 h-12" showLeaf={false} />
              <span className="font-serif text-3xl font-medium italic text-leaf-dark tracking-wider">Essência da Alquimista</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-leaf transition-colors italic tracking-wide text-lg">Início</a>
              <a href="#produtos" className="text-gray-600 hover:text-leaf transition-colors italic tracking-wide text-lg">Essências</a>
              <a href="#sobre" className="text-gray-600 hover:text-leaf transition-colors italic tracking-wide text-lg">Sobre</a>
              <a href="#contato" className="text-gray-600 hover:text-leaf transition-colors italic tracking-wide text-lg">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center w-full mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl font-medium italic tracking-wide text-gray-900 mb-6 leading-tight max-w-3xl mx-auto"
            >
              Respire a <span className="text-leaf">natureza</span> em cada ambiente.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 font-light italic tracking-wide leading-relaxed max-w-3xl mx-auto"
            >
              Essências em spray formuladas com óleos essenciais puros. 
              Transforme sua casa em um refúgio de bem-estar e frescor.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <a href="#produtos" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium italic tracking-wide rounded-full text-white bg-leaf hover:bg-leaf-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Ver Essências
              </a>
            </motion.div>

            {/* Carousel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-sm aspect-video"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={carouselImages[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <button 
                onClick={prevSlide} 
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide} 
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors shadow-sm ${idx === currentSlide ? 'bg-leaf' : 'bg-white/60 hover:bg-white'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24 relative overflow-hidden">
        {/* Decorative Leaves */}
        <Leaf className="absolute top-10 right-10 w-48 h-48 text-leaf opacity-[0.03] -rotate-12" />
        <Leaf className="absolute bottom-10 left-10 w-64 h-64 text-leaf opacity-[0.03] rotate-45" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium italic tracking-wide text-gray-900 mb-4">Nossas Essências</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl italic font-light tracking-wide">Escolha o aroma perfeito para o seu momento. Frascos de 60ml com válvula spray de alta qualidade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <button 
                  onClick={() => handleWhatsAppClick(product.name)}
                  disabled={product.isComingSoon}
                  title={product.isComingSoon ? 'Em breve' : 'Comprar via WhatsApp'}
                  className={`absolute bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 z-10 ${
                    product.isComingSoon 
                      ? 'bg-white/80 text-gray-400 cursor-not-allowed backdrop-blur-sm' 
                      : 'bg-[#25D366] hover:bg-[#20bd5a] text-white'
                  }`}
                >
                  <MessageCircle className="w-8 h-8" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        {/* Decorative Leaves */}
        <Leaf className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] text-leaf opacity-[0.02] -rotate-45" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl relative">
              <div className="absolute inset-0 bg-leaf-light/20 rounded-[2rem] transform -rotate-1 scale-105 -z-10"></div>
              <img 
                src="/sobre.jpg" 
                alt="Sobre a empresa" 
                className="rounded-[2rem] shadow-xl w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#1A2E1A] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/90 rounded-full p-1">
                  <AlchemyLogo className="w-10 h-10" />
                </div>
                <span className="font-serif text-3xl font-medium italic tracking-wider text-white">Essência da Alquimista</span>
              </div>
              <p className="text-white/70 max-w-sm text-lg italic tracking-wide font-light">
                Transformando ambientes através do poder dos aromas naturais. Respire fundo e sinta a diferença.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-2xl font-medium italic tracking-wide mb-6 text-white">Contato</h4>
              <ul className="space-y-4 text-white/70 text-lg italic tracking-wide font-light">
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-leaf-light not-italic" />
                  (54) 99709-1787
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-leaf-light not-italic" />
                  contato@aurabotanica.com.br
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-2xl font-medium italic tracking-wide mb-6 text-white">Links Rápidos</h4>
              <ul className="space-y-3 text-white/70 text-lg italic tracking-wide font-light">
                <li><a href="#home" className="hover:text-leaf-light transition-colors">Início</a></li>
                <li><a href="#produtos" className="hover:text-leaf-light transition-colors">Nossas Essências</a></li>
                <li><a href="#sobre" className="hover:text-leaf-light transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-leaf-light transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-base italic tracking-wide font-light">
            <p>&copy; {new Date().getFullYear()} Essência da Alquimista. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
