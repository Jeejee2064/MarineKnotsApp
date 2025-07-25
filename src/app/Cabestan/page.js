'use client'
import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import cabestanAnimation from '../animations/Cabestan.json';
import { useLanguage } from '../context/LanguageContext';

const CloveHitchPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Clove Hitch",
      steps: [
        "Pass the rope over the object.",
        "The working end goes around the object and over the standing end.",
        "Make a second turn in the same direction as the first.",
        "Form a loop by passing the working end under itself.",
        "Tighten by pulling the working end and the standing end."
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
              "Used to quickly attach a rope to a fixed bar, railing, or stay... The perfect fender knot."
            ]
          },
          {
            title: "Characteristics",
            items: [
              "The cabestan doesn't like to be slack; it tends to slip when the tension is too low."
            ]
          },
          {
            title: "Advice",
            items: [
              "In practice, make one turn to the right and then one to the left, finish by passing the working end through the last loop formed."
            ]
          }
        ]
      }
    },
    fr: {
      title: "Cabestan",
      steps: [
        "Passer le cordage par dessus votre attache.",
        "Le courant fait le tour de l'attache et passe par dessus le dormant.",
        "Faire un deuxième tour mort, dans le même sens que le premier.",
        "Former une clé en passant le courant sous lui-même.",
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
              "Sert à attacher rapidement un cordage à une barre fixe, une filière, un hauban... Le noeud de pare-battage par excellence."
            ]
          },
          {
            title: "Caractéristiques",
            items: [
              "Le cabestan n'aime pas trop être détendu, il a tendance à glisser lorsque la tension est trop faible."
            ]
          },
          {
            title: "Conseils",
            items: [
              "Dans la pratique on fait un tour mort à droite puis un à gauche, on termine en passant le courant dans la dernière boucle formée."
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
        animationData={cabestanAnimation}
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

export default CloveHitchPage;