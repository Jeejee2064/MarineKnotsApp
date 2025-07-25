'use client'
import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import chaiseAnimation from '../animations/Chaise.json';
import { useLanguage } from '../context/LanguageContext';

const BowlinePage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Bowline",
      steps: [
        "Make a loop, make sure the working end passes over the standing end.",
        "Wrap around the object and pass the working end through the loop from below.",
        "Wrap around the standing part (at the bottom in the diagram).",
        "Pass through the loop again, this time from above.",
        "Tighten by pulling both ends."
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
              "It is useful for almost everything, attaching dinghies, halyards, sheets..."
            ]
          },
          {
            title: "Characteristics",
            items: [
              "An ideal knot for ropes under heavy tension; it is easy to untie when given some slack."
            ]
          },
          {
            title: "Advice",
            items: [
              "This knot should not be tied under tension. There are different ways to tie a bowline, choose the one that feels most natural to you."
            ]
          }
        ]
      }
    },
    fr: {
      title: "Nœud de Chaise",
      steps: [
        "Faire une boucle, attention le courant doit se trouver sur le dormant.",
        "Faire le tour de l'attache puis passer le courant dans la boucle en entrant par en dessous.",
        "Faire le tour du dormant (en bas sur le schéma).",
        "Passer à nouveau dans la boucle, cette fois-ci en entrant par au-dessus.",
        "Serrer en tirant sur le courant et le dormant."
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
              "Il sert à tout ou presque, amarrage de l'annexe, drisses, écoutes..."
            ]
          },
          {
            title: "Caractéristiques",
            items: [
              "Noeud idéal pour les cordages subissant de fortes tensions, il est facile à dénouer dès lors qu'on lui donne du 'mou'."
            ]
          },
          {
            title: "Conseils",
            items: [
              "Ce noeud ne peut être réalisé sous tension. Il existe différentes manières de faire un noeud de chaise, choisissez celle qui vous paraît la plus naturelle."
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
        animationData={chaiseAnimation}
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

export default BowlinePage;