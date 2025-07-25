'use client'
import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import slipHitchAnimation from '../animations/DemiCleGanse.json';
import { useLanguage } from '../context/LanguageContext';

const SlipHitchPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Slip Hitch",
      steps: [
        "Pass the rope behind the anchor point.",
        "Pass the working end behind the standing part.",
        "Bring the working end over the standing part and through the loop formed.",
        "Pull the working end out of the loop again.",
        "Tighten by pulling both the working end and the loop."
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
              "Create a temporary anchoring point."
            ]
          },
          {
            title: "Characteristics",
            items: [
              "Fairly secure knot, releases instantly with a sharp pull on the working end."
            ]
          },
          {
            title: "Advice",
            items: [
              "Useful for a boom vang or any temporary mooring requiring quick release."
            ]
          }
        ]
      }
    },
    fr: {
      title: "Demi-Clé Gansée",
      steps: [
        "Passer le cordage par derrière le point d'ancrage.",
        "Passer le courant derrière le dormant.",
        "Passer courant par dessus le dormant et à l'intérieur de la boucle formée.",
        "Repasser le courant en dehors de la boucle.",
        "Serrer en tirant sur le courant et la boucle."
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
              "Créer un point d'ancrage temporaire."
            ]
          },
          {
            title: "Caractéristiques",
            items: [
              "Noeud assez sûr, se largue d'un coup sec sur le courant."
            ]
          },
          {
            title: "Conseils",
            items: [
              "Pour une retenue de bôme ou tout autre amarrage temporaire et rapidement larguable."
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
        animationData={slipHitchAnimation}
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

export default SlipHitchPage;