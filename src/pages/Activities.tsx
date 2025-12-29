import { useLanguage } from '../i18n/LanguageContext';

// Définition directe des URLs de vos photos (Mise à jour Artesanato)
const ARTESANATO_IMAGE = "https://files.catbox.moe/28tdqe.png"; // Nouvelle image PNG
const CAPOEIRA_IMAGE = "https://files.catbox.moe/6gk2zx.png";
const BOXE_IMAGE = "https://files.catbox.moe/9pzfqb.jpg";
const APOIO_IMAGE = "https://files.catbox.moe/vzzms6.png";
const CRECHE_IMAGE = "https://files.catbox.moe/dg0smc.png";
const FUTEBOL_IMAGE = "https://files.catbox.moe/rh2zab.jpg";
const ARTE_IMAGE = "https://files.catbox.moe/8yus4d.jpg";
const FORMACAO_IMAGE = "https://files.catbox.moe/k2djyt.png";

export function Activities() {
  const { t } = useLanguage();

  const voluntaryActivities = [
    {
      title: 'Artesanato',
      description: 'Mosaicos e criações de objetos',
      image: ARTESANATO_IMAGE
    },
    {
      title: 'Capoeira',
      description: 'Aulas de capoeira e compartilhamento',
      image: CAPOEIRA_IMAGE
    },
    {
      title: 'Boxe',
      description: 'Iniciação ao boxe',
      image: BOXE_IMAGE
    },
    {
      title: 'Apoio Local',
      description: 'Apoio a iniciativas locais',
      image: APOIO_IMAGE
    }
  ];

  const permanentActivities = [
    {
      title: 'CCEI',
      description: 'Creche com 150 crianças e refeições',
      image: CRECHE_IMAGE
    },
    {
      title: 'Futebol',
      description: 'Atividades esportivas para crianças',
      image: FUTEBOL_IMAGE
    },
    {
      title: 'Arte/Dança',
      description: 'Oficinas de arte e dança',
      image: ARTE_IMAGE
    },
    {
      title: 'Formação de Jovens',
      description: 'Mecânica automotiva e informação',
      image: FORMACAO_IMAGE
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre avec dégradé Vert-Orange parfait */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#22c55e] to-[#f97316] bg-clip-text text-transparent pb-2">
            Atividades em ACEF, em Rio Sena
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Conheça nossas atividades em um bairro popular de Salvador, abertas a todos e com o objetivo de apoiar a comunidade.
          </p>
        </div>

        {/* Section Atividades Voluntárias */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 border-l-8 border-[#22c55e] pl-4 uppercase tracking-wider">
            Atividades Voluntárias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {voluntaryActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Atividades Permanentes */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-gray-900 border-l-8 border-[#f97316] pl-4 uppercase tracking-wider">
            Atividades Permanentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {permanentActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}