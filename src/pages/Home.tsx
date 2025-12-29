import React from 'react';
import { ArrowRight, Users, Activity, Heart, HandHeart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const HERO_IMAGE = "https://files.catbox.moe/sxoouy.jpg";
const LOGO_IMAGE = "https://files.catbox.moe/juxma8.jpg";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Users,
      title: 'Quem Somos',
      description: 'Conheça nossa história e missão de apoiar crianças e famílias em Salvador, Bahia.',
      color: 'text-[#22c55e]',
      bgColor: 'bg-green-50',
      page: 'about'
    },
    {
      icon: Activity,
      title: 'Nossas Atividades',
      description: 'Descubra nossas activités éducatives, sportives et culturelles pour le développement des enfants.',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-blue-50',
      page: 'activities'
    },
    {
      icon: Heart,
      title: 'Doações',
      description: 'Contribua para nossos projets e ajude a transformar vidas através da educação e cuidado.',
      color: 'text-[#f97316]',
      bgColor: 'bg-orange-50',
      page: 'donations'
    },
    {
      icon: HandHeart,
      title: 'Torne-se Voluntário',
      description: 'Junte-se à nossa equipe e faça a diferença na vida das crianças e famílias da comunidade.',
      color: 'text-[#a855f7]',
      bgColor: 'bg-purple-50',
      page: 'contact'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION HERO */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Réduction du padding top (pt-16) et bottom pour remonter le contenu */}
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center pt-16 pb-20">
          
          {/* LOGO - Taille légèrement réduite pour gagner de l'espace */}
          <div className="mb-4">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#22c55e] flex items-center justify-center bg-white shadow-2xl overflow-hidden p-1.5">
              <img 
                src={LOGO_IMAGE} 
                alt="ACEF Central Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* TITRE - Taille réduite (text-2xl à 5xl) et espacement serré */}
          <div className="text-2xl md:text-5xl font-black mb-2 leading-tight tracking-tighter uppercase drop-shadow-2xl">
            <div className="inline-block md:block mr-2 md:mr-0"><span className="text-[#22c55e]">ASSOCIAÇÃO</span></div>
            <div className="inline-block md:block mr-2 md:mr-0"><span className="text-[#f97316]">CRIANÇA</span></div>
            <div className="inline-block md:block mr-2 md:mr-0"><span className="text-[#22c55e]">E</span></div>
            <div className="inline-block md:block"><span className="text-[#f97316]">FAMÍLIA</span></div>
          </div>

          {/* SOUS-TITRE - Taille réduite (text-base à lg) et sans italique */}
          <p className="text-base md:text-lg font-bold mt-2 mb-6 drop-shadow-lg uppercase tracking-widest">
            Para eles e com eles
          </p>

          {/* BOUTONS - Bien visibles car le texte au-dessus est plus compact */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={() => onNavigate('about')}
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-base uppercase transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 border-2 border-transparent hover:border-white/20"
            >
              Saiba Mais
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('donations')}
              className="bg-[#f97316] hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-base uppercase transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 border-2 border-transparent hover:border-white/20"
            >
              <Heart className="w-4 h-4 fill-current" />
              Doar
            </button>
          </div>
        </div>
      </div>

      {/* SECTION CARTES D'ACCÈS RAPIDE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col h-full border border-gray-100">
                <div className={`${card.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mb-4 text-xs leading-relaxed flex-grow">{card.description}</p>
                <button 
                  onClick={() => onNavigate(card.page)} 
                  className={`flex items-center gap-2 ${card.color} hover:gap-3 transition-all font-bold text-[10px] uppercase tracking-widest`}
                >
                  Saiba Mais <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
