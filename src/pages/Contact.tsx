import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressDetail,
      color: 'text-green-500'
    },
    {
      icon: Phone,
      label: t.contact.whatsapp,
      value: '+55 71 98485-1586',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@acef.org.br',
      color: 'text-orange-500'
    }
  ];

  const links = [
    {
      icon: ExternalLink,
      label: t.contact.workaway,
      url: 'https://www.workaway.info',
      color: 'text-purple-500'
    },
    {
      icon: Instagram,
      label: '@acefoficial',
      url: 'https://www.instagram.com/acefoficial',
      color: 'text-pink-500'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      url: 'https://www.youtube.com',
      color: 'text-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">
          {t.contact.title}
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t.contact.sendMessage}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
              >
                {t.contact.send}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`${info.color} mt-1`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{info.label}</div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">{t.contact.volunteerLinks}</h3>
              <div className="space-y-3">
                {links.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Icon className={`w-5 h-5 ${link.color}`} />
                      <span className="font-medium text-gray-900 group-hover:text-green-500">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t.contact.french}</h3>
              <p className="text-gray-700">{t.contact.frenchDetail}</p>
              <p className="text-gray-600 mt-2">isabelle.blanchot@crifaf.fr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
