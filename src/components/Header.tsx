import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { t } = useLanguage();

  const navItems = [
    { key: 'home', label: 'Início' },
    { key: 'about', label: 'Sobre' },
    { key: 'activities', label: 'Atividades' },
    { key: 'donations', label: 'Doações' },
    { key: 'contact', label: 'Contatos' }
  ];

  return (
    <>
      {/* BANDEAU BLEU UNIQUE */}
      <div className="bg-[#2563eb] text-white py-3 text-center text-sm font-bold shadow-md w-full">
        Urgência: Falta de doações! Faça uma doação
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* LOGO AVEC IMAGE ET TEXTE EN DÉGRADÉ */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-14 h-14 rounded-full border-2 border-[#22c55e] flex items-center justify-center bg-white overflow-hidden shadow-sm">
                <img 
                  src="https://files.catbox.moe/juxma8.jpg" 
                  alt="ACEF Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              
              {/* ACEF EN GRAS ET DÉGRADÉ VERT-ORANGE */}
              <div className="text-3xl font-black tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-[#22c55e] to-[#f97316] bg-clip-text text-transparent">
                  ACEF
                </span>
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`text-base font-semibold transition-colors ${
                    currentPage === item.key
                      ? 'text-[#22c55e] border-b-2 border-[#22c55e]'
                      : 'text-gray-700 hover:text-[#22c55e]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* LANGUES ET BOUTON DOAR AGORA */}
            <div className="flex items-center gap-5">
              <LanguageSelector />
              
              <button
                onClick={() => onNavigate('donations')}
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-2.5 rounded-full font-bold text-sm uppercase transition-transform active:scale-95 shadow-lg"
              >
                Doar Agora
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}