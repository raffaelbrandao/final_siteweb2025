import { useLanguage } from '../i18n/LanguageContext';
import { ABOUT_IMAGE, TEAM_IMAGE, OFFICE_IMAGE, VOLUNTEERS_IMAGE, FAMILIES_IMAGE } from '../constants';

export function About() {
  const { t } = useLanguage();

  const communityCards = [
    { 
      title: 'Equipe', 
      image: TEAM_IMAGE, 
      desc: 'Pessoas dedicadas à ACEF, trabalhando diariamente no apoio às crianças.' 
    },
    { 
      title: 'Escritório', 
      image: OFFICE_IMAGE, 
      desc: 'Equipe administrativa que organiza e gerencia os projetos.' 
    },
    { 
      title: 'Associados', 
      image: VOLUNTEERS_IMAGE, 
      desc: 'Parceiros e apoiadores que contribuem para nossa missão.' 
    },
    { 
      title: 'Famílias', 
      image: FAMILIES_IMAGE, 
      desc: 'Crianças, jovens e famílias do bairro popular de Salvador, Brasil.' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre avec dégradé Vert-Orange */}
        <h1 className="text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#22c55e] to-[#f97316] bg-clip-text text-transparent">
          Sobre a ACEF
        </h1>
        <p className="text-center text-gray-500 text-lg mb-16">
          Associação CRIANÇA e FAMÍLIA – Salvador, Bahia, Brasil
        </p>

        {/* Section Notre Histoire */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Nossa História</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A ACEF nasceu com o objetivo de apoiar famílias e crianças em situação de vulnerabilidade no bairro popular de Salvador, Bahia. 
                Criamos atividades culturais, esportivas, educacionais e de saúde para melhorar a qualidade de vida das crianças e suas famílias.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={ABOUT_IMAGE}
                alt="História da ACEF"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section Notre Communauté */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#22c55e] to-[#f97316] bg-clip-text text-transparent">
            Nossa Comunidade
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Atuando em Salvador, em um bairro popular, com dedicação às crianças e famílias.
          </p>
        </div>

        {/* Grille des 4 cartes de la communauté */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communityCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}