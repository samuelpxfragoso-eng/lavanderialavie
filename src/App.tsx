/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Instagram,
  Facebook,
  MessageCircle,
  ShieldCheck,
  Zap,
  Navigation,
  Sparkles,
  Award,
  Droplets,
  Shirt,
  Plus,
  Minus,
  HelpCircle,
  ThumbsUp
} from 'lucide-react';

// --- Components ---

const FAQSection = () => {
  const faqs = [
    { q: "Qual o prazo de entrega padrão?", a: "Para itens do dia a dia como camisas e calças, nosso prazo é de 3 a 4 dias úteis, garantindo a secagem e passadoria perfeitas." },
    { q: "Vocês realizam a limpeza de tênis?", a: "Sim! Temos um processo de higienização especializada para calçados que remove odores e sujeiras profundas sem danificar o material." },
    { q: "Como funciona o serviço de 60 minutos?", a: "É o nosso modo prevent/express no autoatendimento assistido. Você lava e seca suas roupas em máquinas industriais ultra-rápidas com nosso suporte." },
    { q: "Lavanderia La Vie limpa tapetes e cortinas?", a: "Com certeza. Somos especialistas em itens volumosos e delicados, utilizando solventes que preservam as fibras de tapetes e cortinas." },
    { q: "Vocês possuem serviço de Coleta e Entrega?", a: "Sim, oferecemos delivery para a região da Lapa e arredores. Consulte as taxas e horários disponíveis diretamente pelo nosso WhatsApp." },
    { q: "Quais as formas de pagamento aceitas?", a: "Aceitamos Pix, cartões de débito e crédito de todas as bandeiras para sua total conveniência." },
    { q: "Preciso levar meu próprio sabão e amaciante?", a: "Não é necessário. Já utilizamos produtos biodegradáveis de linha profissional, com fragrâncias exclusivas e alta eficiência, inclusos no serviço." },
    { q: "Lavam roupas de festa, ternos e vestidos delicados?", a: "Sim, realizamos a lavagem técnica assistida, onde cada peça é tratada individualmente conforme as instruções da etiqueta e tipo de tecido." },
    { q: "Onde a lavanderia está localizada?", a: "Estamos em um novo e amplo espaço na Rua Clélia, 414 — Água Branca, São Paulo. Ficamos bem próximos ao Allianz Parque." },
    { q: "O que é o 'Autoatendimento Assistido'?", a: "É o melhor dos dois mundos: você utiliza nossas máquinas de alta performance, mas conta com uma especialista pronta para tirar manchas e auxiliar no processo." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-lavie-gold/10 text-lavie-gold px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <HelpCircle className="w-3 h-3" />
            Dúvidas Comuns
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-lavie-navy mb-6">Perguntas <span className="text-lavie-gold italic">Frequentes.</span></h2>
          <p className="text-lavie-navy/50 font-medium italic">Tudo o que você precisa saber sobre o cuidado premium <span translate="no">La Vie</span>.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`gold-block-ring overflow-hidden transition-all duration-500 ${activeIndex === i ? 'ring-lavie-gold/30 bg-lavie-offwhite' : ''}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className="font-serif text-xl font-bold text-lavie-navy group-hover:text-lavie-gold transition-colors pr-8">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full border border-lavie-gold/30 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ${activeIndex === i ? 'rotate-180 bg-lavie-gold text-white' : 'text-lavie-gold'}`}>
                  {activeIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-sm leading-relaxed text-lavie-navy/60 font-medium border-t border-lavie-gold/10 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-lavie-navy relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lavie-gold/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavie-pool/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="gold-block-ring !bg-transparent border-white/10 p-12 lg:p-24 text-center">
          <div className="flex justify-center mb-10">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  <Star className="w-8 h-8 text-lavie-gold fill-current" />
                </motion.div>
              ))}
            </div>
          </div>
          
          <h2 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Sua roupa nova, <br className="hidden md:block" />
            <span className="text-lavie-gold italic">todos os dias.</span>
          </h2>
          
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto mb-16 font-medium">
            Junte-se a centenas de clientes satisfeitos que descobriram o verdadeiro prazer de vestir roupas impecáveis. 
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://search.google.com/local/writereview?placeid=ChIJMV2LXpRXzpQRMa2L7fPOf_Y"
              target="_blank"
              className="bg-white text-lavie-navy px-12 py-6 rounded-full font-black uppercase text-[10px] tracking-widest shadow-2xl flex items-center gap-4 hover:bg-white/90 transition-all border-4 border-lavie-gold/20"
            >
              <ThumbsUp className="w-4 h-4 text-lavie-gold" />
              AVALIAR NO GOOGLE
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511912231700"
              target="_blank"
              className="animate-float bg-lavie-gold text-lavie-navy px-12 py-6 rounded-full font-black uppercase text-[10px] tracking-widest shadow-2xl flex items-center gap-4 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              SOLICITAR ASSISTÊNCIA
              <Sparkles className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-3">
             <div className="flex items-center gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="w-5 h-5"
                />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Excelência Comprovada no Google Maps</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Relocation Announcement Strip */}
      <div className="bg-lavie-gold text-lavie-navy py-1 px-6 overflow-hidden border-b border-white/20">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-[9px] font-black uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2">📢 Mudamos de endereço! Visite nosso novo espaço na Rua Clélia, 414</span>
          <span className="flex items-center gap-2">🅿️ Fácil acesso e Estacionamento no local</span>
          <span className="flex items-center gap-2">🏟️ Próximo ao Allianz Parque</span>
          <span className="flex items-center gap-2">📢 Mudamos de endereço! Visite nosso novo espaço na Rua Clélia, 414</span>
          <span className="flex items-center gap-2">🅿️ Fácil acesso e Estacionamento no local</span>
          <span className="flex items-center gap-2">🏟️ Próximo ao Allianz Parque</span>
        </div>
      </div>

      <nav className="bg-white/90 backdrop-blur-xl border-b border-lavie-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-lavie-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative logo-shine-container rounded-full overflow-hidden border-2 border-lavie-gold/30 w-16 h-16 flex items-center justify-center bg-white shadow-lg">
                  <img 
                    src="https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922044/WhatsApp_Image_2026-05-03_at_3.11.51_PM_1_ulj60w.jpg" 
                    alt="Lavanderia La Vie Logo" 
                    className="h-full w-full object-cover brightness-110"
                  />
                </div>
              </div>
              <div className="flex flex-col -space-y-1 hidden sm:flex">
                <span className="font-serif text-2xl font-bold text-lavie-navy tracking-tight" translate="no">
                  LA <span className="text-lavie-gold">VIE</span>
                </span>
                <span className="font-sans text-[8px] font-black uppercase tracking-[0.4em] text-lavie-pool">
                  LAVANDERIA
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-lavie-navy/70">
              <a href="#servicos" className="hover:text-lavie-gold transition-colors">Serviços</a>
              <a href="#sobre" className="hover:text-lavie-gold transition-colors">Diferenciais</a>
              <a href="#localizacao" className="hover:text-lavie-gold transition-colors">Localização</a>
              <a 
                 href="https://wa.me/5511912231700"
                 target="_blank"
                 className="bg-lavie-gold text-lavie-navy px-6 py-3 rounded-full hover:brightness-110 transition-all font-black shadow-lg shadow-lavie-gold/20"
              >
                WHATSAPP
              </a>
            </div>
  
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-lavie-gold p-2">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-lavie-navy border-b border-lavie-gold/20"
            >
              <div className="px-6 py-8 space-y-6">
                <a href="#servicos" className="block text-sm font-bold uppercase tracking-widest text-lavie-offwhite" onClick={() => setIsOpen(false)}>Serviços</a>
                <a href="#sobre" className="block text-sm font-bold uppercase tracking-widest text-lavie-offwhite" onClick={() => setIsOpen(false)}>Diferenciais</a>
                <a href="#localizacao" className="block text-sm font-bold uppercase tracking-widest text-lavie-offwhite" onClick={() => setIsOpen(false)}>Localização</a>
                <a 
                  href="https://wa.me/5511912231700"
                  className="w-full bg-lavie-gold text-lavie-navy py-4 rounded-none text-center block text-xs font-bold uppercase tracking-widest"
                >
                  FALAR NO WHATSAPP
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const GoogleReviews = () => {
  const reviews = [
    { name: "SabrinaCoca Sassá", text: "Roupas cuidadas com profissionalismo e carinho. Não só as roupas, seu tênis sai limpíssimo e seu cobertor cheirosinho!", stars: 5 },
    { name: "Yone Lupion", text: "O atendimento é Ótimo e o serviço muito bom. Estão de parabéns.", stars: 5 },
    { name: "Leonini jardins", text: "Super atendimento; super simpáticas e serviço impecável! Eu recomendo!!!", stars: 5 },
    { name: "Sylmara Rezende", text: "Atendimento impecável e serviço ótimo. Super indico essa lavanderia.", stars: 5 },
    { name: "Guwrra", text: "Eu só tenho a agradecer, roupas muito bem lavadas, passadas e com um cheirinho único, que permanece nas roupas por um bom tempo!", stars: 5 },
    { name: "Ronaldo Ferraz", text: "Atendimento nota 10. Loja sempre limpa e cheirosa. Aceita todos os cartões de crédito.", stars: 5 },
  ];

  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (dir: 'left' | 'right') => {
    if (containerRef.current) {
      const offset = dir === 'left' ? -360 : 360;
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden border-y border-lavie-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                className="w-8 h-8"
              />
              <h2 className="font-serif text-4xl font-bold text-lavie-navy">Experiências Reais</h2>
            </div>
            <p className="text-lavie-navy/50 text-sm font-bold uppercase tracking-widest">O que nossos clientes dizem sobre o cuidado <span translate="no">La Vie</span></p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex text-lavie-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-[10px] font-black text-lavie-navy uppercase tracking-widest">Média 5.0 baseada em 100+ avaliações</p>
          </div>
        </div>

        {/* Carousel Container block with controls */}
        <div className="relative mb-16 px-4 group/carousel">
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => handleScroll('left')} 
              className="w-12 h-12 rounded-full bg-white border border-lavie-gold/20 flex items-center justify-center text-lavie-navy hover:bg-lavie-gold hover:text-white hover:border-lavie-gold/45 transition-all shadow-xl cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => handleScroll('right')} 
              className="w-12 h-12 rounded-full bg-white border border-lavie-gold/20 flex items-center justify-center text-lavie-navy hover:bg-lavie-gold hover:text-white hover:border-lavie-gold/45 transition-all shadow-xl cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 cursor-grab active:cursor-grabbing select-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((rev, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gold-block-ring p-10 relative group flex-shrink-0 w-80 sm:w-96 snap-start"
              >
                <div className="flex text-lavie-gold mb-6">
                  {[...Array(rev.stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-lavie-navy/70 italic text-sm leading-relaxed mb-8 h-24 overflow-y-auto scrollbar-none">"{rev.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-lavie-navy text-lavie-gold flex items-center justify-center font-bold text-[10px] ring-2 ring-lavie-gold/30">
                    {rev.name[0]}
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-lavie-navy">{rev.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 items-center text-lavie-navy/20 text-[9px] font-black uppercase tracking-widest">
            <Zap className="w-3 h-3 fill-current" />
            Arraste para o lado
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-t border-lavie-gold/20 pt-16 gap-6 text-center">
          <p className="text-lavie-navy font-serif text-2xl font-bold italic">Sua satisfação é a nossa prioridade.</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://search.google.com/local/writereview?placeid=ChIJMV2LXpRXzpQRMa2L7fPOf_Y" // Link genérico para review, ideal trocar pelo Place ID real
            target="_blank"
            className="group flex flex-col items-center gap-4"
          >
            <div className="bg-lavie-navy text-lavie-gold px-12 py-5 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-4 shadow-xl">
              AVALIAR NO GOOGLE
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />)}
              </div>
            </div>
            <span className="text-[9px] font-black text-lavie-pool uppercase tracking-widest group-hover:text-lavie-gold transition-colors">Clique para nos avaliar em 5 estrelas</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const SixtyMinSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-b border-lavie-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-3 bg-lavie-pool/10 text-lavie-pool px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              <Clock className="w-3 h-3" />
              Express Service
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl font-bold text-lavie-navy mb-8 leading-none">
              Sua roupa <br/>
              pronta em <br/>
              <span className="text-lavie-gold italic">60 Minutos.</span>
            </h2>
            <p className="text-lavie-navy/60 text-lg leading-relaxed mb-10 font-medium max-w-md">
              Lave e seque suas roupas em tempo recorde. Tecnologia industrial rápida e precisa para que você não perca nem um minuto do seu dia. Roupas limpinhas e cheirosas em aproximadamente uma hora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#localizacao" 
                className="bg-lavie-navy text-lavie-gold px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-lavie-navy/90 text-center transition-all shadow-xl shadow-lavie-navy/20"
              >
                Ver Unidade
              </a>
              <a 
                href="https://lavanderialavieselfservice.com.br"
                target="_blank"
                className="bg-lavie-gold text-lavie-navy px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:brightness-110 text-center transition-all shadow-xl shadow-lavie-gold/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                VISITAR SITE SELF SERVICE
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="gold-block-ring overflow-hidden aspect-[9/16] h-[600px] relative bg-lavie-navy">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dd5y5e0q7/video/upload/v1779922080/WhatsApp_Video_2026-05-05_at_8.23.14_PM_1_zzodti.mp4" type="video/mp4" />
              </video>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-lavie-gold text-lavie-navy px-8 py-6 rounded-2xl shadow-2xl border border-white/20 ring-1 ring-lavie-gold animate-float">
              <p className="text-3xl font-serif font-bold leading-tight">60'</p>
              <p className="text-[8px] font-black uppercase tracking-widest leading-none">Minutos</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// SixtyMinSecondSection removed by user request

const InstagramFeed = () => {
  const images = [
    "https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922045/WhatsApp_Image_2026-05-20_at_4.18.50_PM_ywrtx0.jpg",
    "https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922045/WhatsApp_Image_2026-05-20_at_4.18.51_PM_b5j3va.jpg",
    "https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922046/WhatsApp_Image_2026-05-20_at_4.18.51_PM_1_unbm2n.jpg",
    "https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922046/WhatsApp_Image_2026-05-20_at_4.18.48_PM_t3xp77.jpg",
    "https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922046/WhatsApp_Image_2026-05-20_at_4.18.52_PM_1_y2fbgl.jpg",
    "https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922046/WhatsApp_Image_2026-05-20_at_4.20.22_PM_zhkzly.jpg",
    "https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922046/WhatsApp_Image_2026-05-20_at_4.18.52_PM_hkyjfp.jpg"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden border-b border-lavie-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] p-[2px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1">
              <Instagram className="w-6 h-6 text-[#dc2743]" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-3xl font-bold text-lavie-navy">Siga no Instagram</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lavie-pool">@lavanderialavie</p>
          </div>
        </div>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.instagram.com/lavanderialavie/"
          target="_blank"
          className="bg-lavie-navy text-lavie-gold px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl flex items-center gap-3 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          SEGUIR NO INSTAGRAM
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      <div className="relative">
        {/* Infinite Marquee */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border border-lavie-gold/20 shadow-lg relative group">
              <img 
                src={img} 
                alt={`Instagram Post ${i}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          ))}
          {/* Duplicate set for seamless flow */}
          {images.map((img, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border border-lavie-gold/20 shadow-lg relative group">
              <img 
                src={img} 
                alt={`Instagram Post Duplicate ${i}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2 text-lavie-navy/20 text-[9px] font-black uppercase tracking-widest">
          <Zap className="w-3 h-3 fill-current" />
          Arraste ou assista à nossa rotina
        </div>
      </div>
    </section>
  );
};

const ProcessAndItems = () => {
  const items = [
    { name: "Camisas & Camisetas", icon: <Shirt className="w-5 h-5" /> },
    { name: "Calças & Bermudas", icon: <Zap className="w-5 h-5" /> },
    { name: "Vestidos & Saias", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Tênis & Calçados", icon: <Droplets className="w-5 h-5" /> },
    { name: "Cobertores & Edredons", icon: <Waves className="w-5 h-5" /> },
    { name: "Tapetes & Passadeiras", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Cortinas & Persianas", icon: <Navigation className="w-5 h-5" /> },
    { name: "Mantas & Xales", icon: <Award className="w-5 h-5" /> },
    { name: "Bichos de Pelúcia", icon: <Star className="w-5 h-5" /> },
    { name: "Almofadas & Travesseiros", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Step by Step Process */}
          <div className="lg:col-span-5 mb-20 lg:mb-0">
            <h2 className="text-[10px] font-black text-lavie-gold uppercase tracking-[0.4em] mb-10 text-center lg:text-left">Nosso Processo</h2>
            <h3 className="font-serif text-5xl lg:text-6xl font-bold text-lavie-navy mb-12 leading-tight">Cuidado em <br/> <span className="text-lavie-gold italic">cada detalhe.</span></h3>
            
            <div className="space-y-6">
              {[
                { title: "Entrega no Balcão", desc: "Você traz suas peças e fazemos uma análise técnica inicial da fibra e do tipo de sujeira." },
                { title: "Tratamento de Manchas", desc: "Aplicamos produtos específicos para remover manchas sem agredir o tecido." },
                { title: "Lavagem & Secagem", desc: "Processo controlado com temperatura e tempo ideais para preservação da peça." },
                { title: "Pronto para Retirada", desc: "Suas roupas limpinhas e cheirosas prontas em aproximadamente 3 a 4 dias." },
              ].map((step, i) => (
                <div key={i} className="gold-block-ring p-8 !rounded-[2.5rem] flex gap-6 group hover:translate-x-2 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-lavie-navy text-lavie-gold flex items-center justify-center font-black flex-shrink-0 border border-lavie-gold/30 shadow-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-lavie-navy mb-2">{step.title}</h4>
                    <p className="text-xs text-lavie-navy/50 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Items List Grid */}
          <div className="lg:col-span-7">
            <div className="gold-block-ring p-12 !rounded-[4rem] bg-lavie-offwhite/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <Sparkles className="w-12 h-12 text-lavie-gold/20 animate-pulse" />
              </div>
              
              <h4 className="font-serif text-3xl font-bold text-lavie-navy mb-2">O que Lavamos</h4>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-lavie-pool mb-12">Desde itens do dia a dia até peças especiais.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white border border-lavie-gold/10 rounded-full shadow-sm hover:border-lavie-gold/40 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-lavie-soft-gold/30 text-lavie-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-lavie-navy">{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 border-t border-lavie-gold/20 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-lavie-navy/50">Prazo Padrão</p>
                  <p className="font-serif text-2xl font-bold text-lavie-navy">3 a 4 Dias Úteis</p>
                </div>
                <a 
                  href="https://wa.me/5511912231700"
                  className="bg-lavie-gold text-lavie-navy px-8 py-4 rounded-full font-black uppercase text-[9px] tracking-widest shadow-xl shadow-lavie-gold/10 animate-float"
                >
                  Consultar Peças Especiais
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const AirbnbSection = () => {
  return (
    <section className="py-32 bg-lavie-soft-gold/30 overflow-hidden relative border-b border-lavie-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1"
          >
            <div className="gold-block-ring overflow-hidden group">
              <img 
                src="https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922045/WhatsApp_Image_2026-05-03_at_4.06.48_PM_1_unzohi.jpg" 
                alt="Parceria Airbnb La Vie" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-3 bg-rose-500/10 text-rose-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              <Star className="w-3 h-3 fill-current" />
              Airbnb Partner
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl font-bold text-lavie-navy mb-8 leading-none">
              Soluções para <br/>
              <span className="text-lavie-gold italic">Anfitriões.</span>
            </h2>
            <p className="text-lavie-navy/70 text-lg leading-relaxed mb-10 font-medium">
              Cuidado premium para enxovais de Airbnb na Lapa e Água Branca. Toalhas macias e lençóis impecáveis que garantem nota máxima dos seus hóspedes. 
            </p>
            
            <div className="flex flex-col gap-6">
              <ul className="space-y-4 mb-4">
                {['Lavagem profunda de Enxovais', 'Higienização de Edredons e Mantas', 'Tratamento de Manchas Difíceis', 'Entrega rápida para o check-in'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-lavie-navy/60">
                    <CheckCircle2 className="w-4 h-4 text-lavie-pool" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <motion.a 
                  href="https://wa.me/5511912231700"
                  target="_blank"
                  className="animate-float relative inline-flex items-center justify-center bg-lavie-navy text-white px-12 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-[0_20px_50px_rgba(0,43,91,0.3)] group overflow-hidden"
                >
                  {/* Reflection & Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] animate-[shine_4s_infinite_linear]"></div>
                  
                  <span className="relative z-10 flex items-center gap-3">
                    CONSULTAR PREÇOS
                    <Sparkles className="w-4 h-4 text-lavie-gold" />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-white">
      {/* Elegant Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lavie-pool/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lavie-gold/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-3 border border-lavie-gold/30 px-5 py-2 mb-8 bg-white/50 backdrop-blur rounded-full">
              <span className="w-2 h-2 bg-lavie-gold rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lavie-gold">Laundromat Premium SP</span>
            </div>
            
            <h1 className="font-serif text-6xl lg:text-8xl font-bold leading-[1] mb-8 text-lavie-navy">
              A Arte de <br/>
              Cuidar das <br/>
              <span className="text-lavie-gold italic">suas roupas.</span>
            </h1>

            <p className="text-lavie-navy/60 max-w-md text-lg leading-relaxed mb-10 font-medium">
              Experiência de autoatendimento assistido. Tecnologia de ponta com o cuidado artesanal que seus tecidos merecem.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a 
                href="https://wa.me/5511912231700"
                className="bg-lavie-gold text-lavie-navy px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl shadow-lavie-gold/20"
              >
                Solicitar Coleta / Assistência
              </a>
              <div className="flex items-center gap-4 border-l border-lavie-gold/20 pl-6">
                <div>
                  <p className="font-serif text-2xl font-bold text-lavie-navy leading-none">Assistido</p>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-lavie-pool mt-1">Conveniência Total</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-lg w-full">
              {/* Dynamic golden glow backdrop */}
              <div className="absolute -inset-8 bg-lavie-gold/30 blur-[60px] rounded-full animate-pulse opacity-70 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 20px 50px rgba(212,175,55,0.15), 0 0 40px rgba(212,175,55,0.2)",
                    "0 25px 60px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.4)",
                    "0 20px 50px rgba(212,175,55,0.15), 0 0 40px rgba(212,175,55,0.2)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative logo-shine-container rounded-[2rem] ring-8 ring-lavie-gold/15 overflow-hidden border border-lavie-gold/35 aspect-video bg-lavie-navy"
              >
                <img 
                  src="https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922045/WhatsApp_Image_2026-05-20_at_4.18.50_PM_ywrtx0.jpg" 
                  alt="A Arte de Cuidar das Suas Roupas" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-105"
                />
              </motion.div>

              {/* Float-in Badges */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 border border-lavie-gold/30 shadow-2xl space-y-2 max-w-[180px] rounded-[2rem] ring-4 ring-lavie-gold/10"
              >
                <div className="flex text-lavie-gold gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-[9px] font-black uppercase tracking-widest text-lavie-pool">Avaliação Premium</p>
                <p className="text-xs font-medium text-lavie-navy/80">Referência em São Paulo pela qualidade técnica.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const categories = [
    {
      title: "Roupas Dia a Dia",
      desc: "Lavagem e secagem tecnológica para suas peças cotidianas.",
      icon: <Shirt className="w-6 h-6" />,
      color: "lavie-pool"
    },
    {
      title: "Tênis e Bolsas",
      desc: "Limpeza profunda que preserva os materiais originais.",
      icon: <Droplets className="w-6 h-6" />,
      color: "lavie-gold"
    },
    {
      title: "Artigos de Couro",
      desc: "Hidratação e conservação para jaquetas e acessórios.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "lavie-gold"
    },
    {
      title: "Tingimento",
      desc: "Devolva a cor original ou transforme suas peças favoritas.",
      icon: <Zap className="w-6 h-6" />,
      color: "lavie-pool"
    },
    {
      title: "Lavagem de Tapetes",
      desc: "Higienização completa para todos os tamanhos e tramas.",
      icon: <Waves className="w-6 h-6" />,
      color: "lavie-gold"
    },
    {
      title: "Autoatendimento",
      desc: "Lave você mesmo com máquinas de última geração.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "lavie-pool"
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-white border-y border-lavie-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Intro & Branding Video */}
          <div className="lg:col-span-4 mb-16 lg:mb-0">
            <h2 className="text-[10px] font-black text-lavie-pool uppercase tracking-[0.4em] mb-6">Expertise <span translate="no">La Vie</span></h2>
            <h3 className="font-serif text-5xl lg:text-6xl font-bold text-lavie-navy leading-tight mb-8">Serviços que vão <br/> além do comum.</h3>
            
            <p className="text-lavie-navy/50 text-base mb-10 leading-relaxed italic border-l-2 border-lavie-gold pl-4 max-w-sm">
              "Combine a rapidez do autoatendimento com a perfeição da lavagem assistida."
            </p>

            <div className="gold-block-ring overflow-hidden aspect-video lg:aspect-[4/5] xl:aspect-[3/4] relative bg-lavie-navy shadow-xl">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
                id="services_video"
              >
                <source src="https://res.cloudinary.com/dd5y5e0q7/video/upload/v1779922437/WhatsApp_Video_2026-05-20_at_4.18.50_PM_x0lh9i.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-lavie-navy/40 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Column 2: Categories lists */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-8">
              {categories.map((cat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="gold-block-ring p-8 group !rounded-[2.5rem]"
                >
                  <div className={`w-12 h-12 flex items-center justify-center mb-6 border border-lavie-gold/20 text-lavie-gold group-hover:bg-lavie-gold group-hover:text-white transition-all rounded-full overflow-hidden shadow-inner`}>
                    {cat.icon}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-lavie-navy mb-3 group-hover:text-lavie-gold transition-colors">{cat.title}</h4>
                  <p className="text-lavie-navy/60 text-xs leading-relaxed">
                    {cat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative mb-20 lg:mb-0">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-lavie-gold/20"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800" 
                alt="Processo La Vie" 
                className="w-full aspect-[4/5] object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-lavie-gold/20 ring-8 ring-lavie-gold/5"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-10 text-lavie-navy border-2 border-lavie-gold/30 max-w-xs shadow-2xl rounded-[3rem] ring-8 ring-lavie-gold/10">
                <p className="font-serif text-5xl font-bold mb-4 text-lavie-gold">Assistido</p>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] leading-relaxed text-lavie-navy">
                  VOCÊ ESCOLHE: LAVE VOCÊ MESMO OU DEIXE COM NOSSOS ESPECIALISTAS.
                </p>
              </div>
            </div>
          </div>

          <div className="text-lavie-navy">
            <h2 className="text-[10px] font-black text-lavie-pool uppercase tracking-[0.4em] mb-8 text-center lg:text-left">O Conceito</h2>
            <h3 className="font-serif text-5xl lg:text-7xl font-bold leading-none mb-10 text-center lg:text-left">Lavanderia <br/> <span className="text-lavie-gold">Evoluída.</span></h3>
            
            <div className="space-y-8 mb-12">
              <p className="text-lg leading-relaxed text-lavie-navy/70 text-center lg:text-left">
                A <strong translate="no">La Vie</strong> nasceu em São Paulo para redefinir o conceito de <i>Laundromat</i>. Unimos a praticidade das máquinas industriais com a curadoria que peças de luxo exigem.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-lavie-navy/10 pt-10">
                <div className="space-y-2">
                  <Award className="w-6 h-6 text-lavie-gold" />
                  <h5 className="font-bold text-sm uppercase tracking-widest">Selo de Qualidade</h5>
                  <p className="text-xs text-lavie-navy/60">Produtos biodegradáveis e processos certificados.</p>
                </div>
                <div className="space-y-2">
                  <ShieldCheck className="w-6 h-6 text-lavie-gold" />
                  <h5 className="font-bold text-sm uppercase tracking-widest">Cuidado Técnico</h5>
                  <p className="text-xs text-lavie-navy/60">Análise de fibra antes de cada ciclo assistido.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a 
                href="#localizacao"
                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] group"
              >
                Conheça nossa unidade em SP
                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-lavie-gold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationContact = () => {
  return (
    <section id="localizacao" className="bg-white py-32 border-t border-lavie-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 mb-20 lg:mb-0">
            <h2 className="text-[10px] font-black text-lavie-gold uppercase tracking-[0.4em] mb-10">Visite-nos</h2>
            <div className="space-y-4 pt-10">
              <div className="gold-block-ring p-8 !rounded-[2rem]">
                <h4 className="font-serif text-3xl font-bold text-lavie-navy mb-4">Novo Endereço</h4>
                <div className="flex items-start gap-4 text-lavie-navy/60">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-lavie-pool" />
                  <address className="not-italic text-sm leading-relaxed">
                    Rua Clélia, 414 — Água Branca <br/> 
                    São Paulo, SP - Brasil <br/>
                    <span className="text-lavie-gold font-bold">🏟️ Próximo ao Allianz Parque</span>
                  </address>
                </div>
              </div>

              <div className="gold-block-ring p-6 !rounded-[2rem] flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-lavie-pool" />
                <span className="text-xs font-bold uppercase tracking-widest text-lavie-navy">Fácil acesso e Estacionamento no local</span>
              </div>
            </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-lavie-pool mb-4">Atendimento</h4>
                <div className="space-y-3 px-8">
                  <div className="flex justify-between border-b border-lavie-gold/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-lavie-navy/50">Seg — Sex</span>
                    <span className="text-[10px] uppercase font-bold text-lavie-gold">08:30 — 17:30</span>
                  </div>
                  <div className="flex justify-between border-b border-lavie-gold/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-lavie-navy/50">Sáb — Dom</span>
                    <span className="text-[10px] uppercase font-bold text-lavie-navy/20 italic">Fechado</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col gap-4">
                <a 
                  href="https://wa.me/5511912231700"
                  className="flex items-center gap-4 bg-lavie-navy border-2 border-lavie-gold/40 p-8 rounded-[2.5rem] hover:bg-lavie-navy/95 transition-all group shadow-2xl relative overflow-hidden ring-4 ring-lavie-gold/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <MessageCircle className="w-10 h-10 text-lavie-gold" />
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-lavie-pool">WhatsApp Direto</p>
                    <p className="text-xl font-serif font-bold text-white">(11) 91223-1700</p>
                  </div>
                </a>

                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+Clélia+414+São+Paulo"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-white border border-lavie-gold/30 p-6 rounded-full hover:bg-lavie-offwhite transition-all text-[10px] font-black uppercase tracking-widest text-lavie-navy shadow-lg"
                >
                  <Navigation className="w-4 h-4 text-lavie-gold" />
                  Traçar Rota / Como Chegar
                </a>
              </div>
            </div>

            <div className="lg:col-span-8">
            <div className="relative group w-full h-[600px] bg-lavie-offwhite border border-lavie-gold/20 overflow-hidden rounded-[3rem] ring-8 ring-lavie-gold/5 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0772740201!2d-46.6833!3d-23.5269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57945d8b9d31%3A0x67890!2sRua%20Cl%C3%A9lia%2C%20414%20-%20Lapa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005042-000!5e0!3m2!1spt-BR!2sbr!4v1714480000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              ></iframe>
              <div className="absolute top-10 right-10 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-md p-8 border border-lavie-gold/30 rounded-3xl shadow-xl ring-4 ring-lavie-gold/5">
                  <Navigation className="w-8 h-8 text-lavie-gold mb-4" />
                  <p className="font-serif text-2xl font-bold text-lavie-navy leading-none">Localização <br/> <span className="text-lavie-gold">Estratégica</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-lavie-offwhite pt-32 pb-12 overflow-hidden relative border-t border-lavie-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-4 gap-20 mb-32 text-lavie-navy">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="logo-shine-container rounded-full overflow-hidden border-2 border-lavie-gold/30 w-24 h-24 flex items-center justify-center bg-white shadow-2xl ring-8 ring-lavie-gold/10">
                <img 
                  src="https://res.cloudinary.com/dd5y5e0q7/image/upload/v1779922044/WhatsApp_Image_2026-05-03_at_3.11.51_PM_1_ulj60w.jpg" 
                  alt="Lavanderia La Vie Logo Footer" 
                  className="h-full w-full object-cover brightness-110"
                />
              </div>
            </div>
            <p className="text-lavie-navy/50 max-w-sm mb-12 text-sm leading-relaxed italic">
              "Transformando a rotina de limpeza em um ritual de cuidado. A primeira lavanderia boutique de autoatendimento assistido na Lapa - SP."
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-lavie-gold/30 flex items-center justify-center text-lavie-navy hover:bg-lavie-gold hover:text-white transition-all shadow-lg bg-white ring-4 ring-lavie-gold/5">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-lavie-gold mb-10">Menu</h5>
            <div className="space-y-6">
              {['Serviços', 'O Conceito', 'Diferenciais', 'Localização'].map((item) => (
                <a key={item} href="#" className="block text-xs font-bold uppercase tracking-widest text-lavie-navy/60 hover:text-lavie-gold transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div>
             <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-lavie-gold mb-10">Contato</h5>
             <div className="space-y-6 text-lavie-navy/60">
               <p className="text-xs font-bold uppercase tracking-widest">contato@lavanderialavie.com.br</p>
               <p className="text-xs font-bold uppercase tracking-widest">(11) 91223-1700</p>
               <p className="text-xs font-bold uppercase tracking-widest">Rua Clélia, 414 - SP</p>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-lavie-gold/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-bold uppercase tracking-widest text-lavie-navy/40">
             © 2026 Lavanderia <span translate="no">La Vie</span>. Todos os direitos reservados.
           </p>
           <p className="text-[8px] font-black uppercase tracking-[0.4em] text-lavie-navy/40 flex items-center gap-2">
             Design to Premium <Award className="w-3 h-3 text-lavie-gold" /> Excellence
           </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-lavie-offwhite selection:bg-lavie-gold selection:text-lavie-navy">
      <Navbar />
      <Hero />
      <GoogleReviews />
      <SixtyMinSection />
      <AirbnbSection />
      <InstagramFeed />
      <ProcessAndItems />
      <Services />
      <AboutSection />
      <LocationContact />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
