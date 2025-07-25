'use client'
import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import alpineButterflyAnimation from '../animations/PapillonBoucle.json';
import { useLanguage } from '../context/LanguageContext';

const AlpineButterflyPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Alpine Butterfly",
      steps: [
        "Make a loop, note the working end goes over the standing part.",
        "Twist the loop on itself to make an 8 (pay attention to the direction).",
        "Pass the upper part of the loop over the lower part, the working end, and the standing part.",
        "Pass the loop through the central opening from underneath.",
        "Tighten while holding the loop and pulling on both ends."
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
              "Creating a secure loop in the middle of a rope.",
              "Isolating damaged sections of rope."
            ]
          },
          {
            title: "Characteristics",
            items: [
              "Non-binding under load - easily untied after use.",
              "Maintains approximately 70% of rope strength."
            ]
          },
          {
            title: "Advice",
            items: [
              "Always twist the rope twice in the same direction when making the '8' (step 2)."
            ]
          }
        ]
      }
    },
    fr: {
      title: "Papillon Alpin",
      steps: [
        "Réaliser une boucle, attention le courant passe par dessus le dormant.",
        "Tourner la boucle sur elle-même afin d'obtenir un '8' (attention au sens).",
        "Passer la partie supérieure de la boucle par dessus la partie inférieure, le courant et le dormant.",
        "Passer la boucle au travers de l'ouverture centrale en entrant par dessous.",
        "Serrer en maintenant la boucle et en tirant sur les deux brins."
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
              "Réaliser une boucle au milieu d'un cordage.",
              "Isoler une section endommagée de cordage."
            ]
          },
          {
            title: "Caractéristiques",
            items: [
              "Ce noeud ne glisse pas et il présente le grand avantage d'être facile à dénouer, même après une très forte tension.",
              "Conserve environ 70% de la résistance du cordage."
            ]
          },
          {
            title: "Conseils",
            items: [
              "Attention à bien tourner le cordage deux fois dans le même sens pour obtenir le '8'."
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
        animationData={alpineButterflyAnimation}
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

export default AlpineButterflyPage;