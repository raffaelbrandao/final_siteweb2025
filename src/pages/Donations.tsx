import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ExternalLink, Heart } from 'lucide-react';
import { PixDonationModal } from '../components/PixDonationModal';

export function Donations() {
  const { t } = useLanguage();
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const QR_CODE_IMG = "https://files.catbox.moe/1b9dbl.png";
  const PIX_CNPJ = '02.920.944/0001-02';

  // Liste précise des partenaires internationaux [cite : 8]
  const partners = [
    "CRIFAF, Criança e Família • Rennes 35000",
    "Libre en Tête • Astaffort 47220",
    "Enfants Esperance do Brasil • 57460 Kerbach",
    "Socialproject • St Gallen / Suíça",
    "Kleutercentrabrazilie • Amersfoort / Países Baixos"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre avec dégradé Vert-Orange [cite : 10] */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#22c55e] to-[#f97316] bg-clip-text text-transparent">
          {t.donations.title}
        </h1>

        {/* Graphique de progression circulaire [cite : 10] */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <svg className="w-64 h-64" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="20"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#22c55e"
                strokeWidth="20"
                strokeDasharray="502.4"
                strokeDashoffset="125.6"
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-16 h-16 text-[#22c55e] mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#22c55e]">75%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections de Dons [cite : 8, 10] */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Dons en Euros - Lien HelloAsso */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.donations.international}</h2>
            <p className="text-gray-600 mb-8 text-sm">
              Para quem mora fora do Brasil, é possível doar em euros através da plataforma segura HelloAsso.
            </p>
            <a 
              href="https://www.helloasso.com/associations/crianca-e-familia-france-crifaf/formulaires/1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#2563eb] hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <ExternalLink className="w-6 h-6" />
              Doar em Euros
            </a>
          </div>

          {/* Dons au Brésil - Sans lien direct */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.donations.brazil}</h2>
            <p className="text-gray-600 mb-8 text-sm">
              Para quem mora no Brasil, é possível contribuir em reais via PIX ou plataformas locais.
            </p>
            <button
              type="button"
              onClick={() => setIsPixModalOpen(true)}
              className="w-full bg-[#22c55e] hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Heart className="w-6 h-6" />
              Doar em Reais
            </button>
          </div>
        </div>

        <PixDonationModal
          open={isPixModalOpen}
          onClose={() => setIsPixModalOpen(false)}
          title="Faça sua doação via PIX"
          qrImageSrc={QR_CODE_IMG}
          cnpj={PIX_CNPJ}
          hintText="Para doar, basta apontar a câmera do aplicativo do seu banco para este código."
        />

        {/* Section Partenaires [cite : 8] */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#22c55e] to-[#f97316] bg-clip-text text-transparent">
            {t.donations.partners}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Partenaire Brésilien [cite : 8] */}
            <div className="border-l-8 border-[#22c55e] pl-8 py-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Parceiro brasileiro da associação</h3>
              <ul className="text-lg text-[#22c55e] font-semibold">
                <li>• A Prefeitura de Salvador</li>
              </ul>
            </div>

            {/* Partenaires Internationaux [cite : 8] */}
            <div className="border-l-8 border-[#f97316] pl-8 py-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Parceiros fora do Brasil</h3>
              <ul className="space-y-4">
                {partners.map((partner, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <div className="w-3 h-3 rounded-full bg-[#f97316] mt-2 shrink-0" />
                    <span className="text-lg leading-tight">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}