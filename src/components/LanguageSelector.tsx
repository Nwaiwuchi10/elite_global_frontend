// // components/LanguageSelector.tsx
// import React, { useEffect } from "react";

// const LanguageSelector: React.FC = () => {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if ((window as any).google?.translate?.TranslateElement) {
//         clearInterval(interval);
//         new (window as any).google.translate.TranslateElement(
//           { pageLanguage: "en" },
//           "google_translate_element"
//         );
//       }
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       id="google_translate_element"
//       className="-mt-[30px]"
//       style={{
//         position: "fixed", // stays in place even when scrolling
//         bottom: 170, // distance from bottom
//         right: 10, // distance from left
//         zIndex: 1000, // always on top
//       }}
//     />
//   );
// };

// export default LanguageSelector;
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LanguageSelector: React.FC = () => {
  useEffect(() => {
    // Define the init function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,de,es,it,zh-CN,ja,hi,ar", // Add more languages here
        },
        "google_translate_element"
      );
    };

    // Load the Google Translate script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="fixed bottom-2 right-2 z-[1000]"
    ></div>
  );
};

export default LanguageSelector;
