'use client'
import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import figureEightAnimation from '../animations/Huit.json';
import { useLanguage } from '../context/LanguageContext';

const FigureEightPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Figure Eight Knot",
      steps: [
        "Make a loop, crossing the working end over the standing part.",
        "Wrap the working end around the standing part.",
        "Pass the working end back through the loop from the front.",
        "Tighten the knot by pulling both ends firmly.",
        "Ensure the knot is secure and neatly dressed."
      ],
      buttons: {
        useFeatures: "Use & Features",
        close: "Close"
      },
      modal: {
        sections: [
          {
            title: "Uses",
            items: [
              "Commonly used as a stopper knot to prevent ropes from slipping through equipment."
            ]
          },
          {
            title: "Characteristics",
            items: [
              "Easy to tie and untie, even after being loaded.",
              "Does not slip or jam easily."
            ]
          },
          {
            title: "Advice",
            items: [
              "Dress the knot neatly to maintain strength and safety."
            ]
          }
        ]
      }
    },
    fr: {
      title: "Nœud de Huit",
      steps: [
        "Faire une boucle, le dormant passe par-dessus le courant.",
        "Passer le dormant par-dessous le courant.",
        "Passer le courant dans la boucle en entrant par-dessus.",
        "Sortir le courant par-dessous la boucle.",
        "Serrer en tirant sur le courant et le dormant."
      ],
      buttons: {
        useFeatures: "Utilisation & Caractéristiques",
        close: "Fermer"
      },
      modal: {
        sections: [
          {
            title: "Utilisations",
            items: [
              "Il s'agit d'un noeud d'arrêt, il permet de grossir l'extrémité d'un cordage pour qu'il ne puisse s'enfuir de son bloqueur, poulie, pontet..."
            ]
          },
          {
            title: "Caractéristiques",
            items: [
              "Son gros avantage est de se dénouer très facilement, voire trop facilement.",
              "Certains lui préfèrent le capucin qui, une fois serré, ne glisse pas."
            ]
          },
          {
            title: "Conseils",
            items: [
              "Idéal pour terminer une écoute, une drisse ou une bosse de ris."
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
        animationData={figureEightAnimation}
        title={t.title}
        stepMessages={t.steps}
        modalContent={t.modal}
        buttonTexts={t.buttons} // Pass the button texts as a prop
        primaryColor="#FFC107"
        backgroundColor="#283061"
      />
    </div>
  );
};

export default FigureEightPage;