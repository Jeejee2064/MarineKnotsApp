'use client'
import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import cleatHitchAnimation from '../animations/Taquet.json';
import { useLanguage } from '../context/LanguageContext';

const CleatHitchPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Cleat Hitch",
      steps: [
        "Wrap the working end around the cleat.",
        "Cross the working end over the cleat and pass it under the cleat.",
        "Cross the working end over the cleat and itself, then pass it under the other side of the cleat.",
        "Cross again, this time passing under the standing part from step 3.",
        "Tighten by pulling the working end."
      ],
      buttonTexts: {
        useFeatures: "Use & Features",
        close: "Close"
      },
      modal: {
        sections: [
          {
            title: "Uses",
            items: [
              "Used to moor securely on a cleat."
            ]
          },
          {
            title: "Characteristics",
            items: [
              "A secure, solid knot that is easy to undo even under heavy tension."
            ]
          },
          {
            title: "Advice",
            items: [
              "Make the final loop before threading it onto the cleat."
            ]
          }
        ]
      }
    },
    fr: {
      title: "Nœud de Taquet",
      steps: [
        "Faire le tour du taquet avec le dormant.",
        "Le courant croise sur le taquet puis passe sous le taquet.",
        "Le courant croise à nouveau sur le taquet et lui-même puis passe sous le taquet de l'autre côté.",
        "Croiser à nouveau mais cette fois-ci en passant sous le dormant de l'étape 3.",
        "Serrer en tirant sur le courant."
      ],
      buttonTexts: {
        useFeatures: "Utilisation & Caractéristiques",
        close: "Fermer"
      },
      modal: {
        sections: [
          {
            title: "Utilisations",
            items: [
              "S'amarrer sur un taquet."
            ]
          },
          {
            title: "Caractéristiques",
            items: [
              "Noeud sûr, solide et facile à défaire même si soumis à de fortes tensions."
            ]
          },
          {
            title: "Conseils",
            items: [
              "Réaliser la boucle finale avant de l'enfiler sur le taquet."
            ]
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div>
      <InteractiveKnotComponent
        animationData={cleatHitchAnimation}
        title={t.title}
        stepMessages={t.steps}
        modalContent={t.modal}
        buttonTexts={t.buttonTexts}
        primaryColor="#FFC107"
        backgroundColor="#283061"
      />
    </div>
  );
};

export default CleatHitchPage;