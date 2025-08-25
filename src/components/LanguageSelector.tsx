// components/LanguageSelector.tsx
import React, { useEffect } from "react";

const LanguageSelector: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if ((window as any).google?.translate?.TranslateElement) {
        clearInterval(interval);
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div id="google_translate_element" className="my-2" />;
};

export default LanguageSelector;
