'use client'
import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import roundTurnTwoHalfHitchesAnimation from '../animations/TMDC.json';
import { useLanguage } from '../context/LanguageContext';

const RoundTurnTwoHalfHitchesPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Round Turn Two Half Hitches",
      steps: [
        "Pass the working end over the object.",
        "Make a turn around the object.",
        "Make the first half-hitch by passing the working end over the standing part.",
        "Make the second half-hitch the same way you made the first one.",
        "Tighten the knot by pulling the standing part and the working end."
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
              "Moor a rope under tension."
            ]
          },
          {
            title: "Characteristics",
            items: [
              "This knot is secure, strong, and remains easy to undo."
            ]
          },
          {
            title: "Advice",
            items: [
              "Make the first half-hitch in one direction and the second in the same direction."
            ]
          }
        ]
      }
    },
    fr: {
      title: "Tour Mort et Deux Demi-Clés",
      steps: [
        "Passer le courant par dessus l'attache.",
        "Faire un tour mort autour de l'attache.",
        "Réaliser une première demi-clé en commençant par passer le courant par dessus le dormant.",
        "Réaliser une seconde demi-clé dans le même sens.",
        "Finaliser le noeud en tirant sur le dormant."
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
              "Amarrer un cordage sous tension."
            ]
          },
          {
            title: "Caractéristiques",
            items: [
              "Ce noeud est sûr, solide et reste facile à défaire."
            ]
          },
          {
            title: "Conseils",
            items: [
              "Réaliser la première demi-clé dans un sens et la deuxième dans le même sens."
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
        animationData={roundTurnTwoHalfHitchesAnimation}
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

export default RoundTurnTwoHalfHitchesPage;