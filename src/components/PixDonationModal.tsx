import { useEffect, useState } from "react";
import { Clipboard, X } from "lucide-react";

type PixDonationModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  qrImageSrc: string;
  qrImageAlt?: string;
  cnpj: string;
  cnpjLabel?: string;
  thankYouText?: string;
  hintText?: string;
  ariaLabel?: string;
  closeButtonText?: string;
};

export function PixDonationModal({
  open,
  onClose,
  title = "Escaneie o código QR",
  qrImageSrc,
  qrImageAlt = "QR Code para doação via PIX",
  cnpj,
  cnpjLabel = "Ou, entre com a chave (CNPJ) manualmente:",
  thankYouText = "Sua contribuição, de qualquer valor, é fundamental para nosso trabalho. Muito obrigado!",
  hintText,
  ariaLabel = "Modal de doação via PIX",
  closeButtonText = "Fechar",
}: PixDonationModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const copyCnpj = async () => {
    try {
      await navigator.clipboard.writeText(cnpj);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = cnpj;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-2xl">
        <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4 p-5 sm:p-6 pb-2">
          <div />
          <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#22c55e] to-[#f97316] bg-clip-text text-transparent leading-tight text-center">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="justify-self-end shrink-0 p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-center">

          <div className="mb-6">
            <img
              src={qrImageSrc}
              alt={qrImageAlt}
              className="w-full max-w-xs mx-auto rounded-xl border border-gray-200 shadow-md"
            />
            {hintText ? (
              <p className="text-xs text-gray-500 mt-2">{hintText}</p>
            ) : null}
          </div>

          <div className="mb-6 text-left">
            <div className="text-sm font-semibold text-gray-900 mb-2">
              {cnpjLabel}
            </div>
            <div className="relative">
              <div className="font-mono text-gray-800 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-12 overflow-x-auto">
                {cnpj}
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <button
                  type="button"
                  onClick={copyCnpj}
                  className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-700"
                  aria-label="Copiar CNPJ"
                  title="Copiar"
                >
                  <Clipboard className="w-5 h-5" />

                  {copied ? (
                    <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-semibold text-white shadow-lg">
                      Copiado!
                      <span className="absolute left-full top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-gray-900" />
                    </span>
                  ) : null}
                </button>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-6">{thankYouText}</p>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-bold transition-colors"
          >
            {closeButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
