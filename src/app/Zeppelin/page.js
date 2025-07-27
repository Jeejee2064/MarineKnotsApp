'use client'
import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import zeppelinAnimation from '../animations/Zeppelin.json';
import { useLanguage } from '../context/LanguageContext';

const ZeppelinBendPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Zeppelin Bend",
      steps: [
        "Cross each ropes twice, making sure that the yellow one is over the blue one.",
        "Make a loop with each rope, be carefule the yellow working end passes over itself and the blue one under itself.",
        "Pass the yellow end in the central aperture from below and the blue end from above.",
        "Finish passing both ends, they should now be on opposite sides.",
        "Tighten by pulling all four ends."
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
              "This knot is perfect for joining two ropes together."
            ]
          },
          {
            title: "Characteristics",
            items: [
              "This knot does not slip, and it has the great advantage of being easy to untie, even after heavy tension."
            ]
          },
          {
            title: "Advice",
            items: [
              "When making the first loop on each rope, overlap them. This makes it easier to tie this knot."
            ]
          }
        ]
      }
    },
    fr: {
      title: "Nœud de Zeppelin",
      steps: [
"Croisez chaque cordage deux fois, en veillant à ce que le jaune passe au-dessus du bleu.",
"Faites une boucle avec chaque cordage, en faisant attention à ce que le courant jaune passe au-dessus de son dormant et que le bleu passe en dessous.",
"Passez le courant jaune dans l'ouverture centrale par en dessous et le bleu par au-dessus.",
"Terminez de passer les deux courants, ils doivent maintenant se trouver sur les côtés opposés.",
"Serrez en tirant sur les quatre brins."
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
              "Ce noeud est parfait pour relier deux cordages."
            ]
          },
          {
            title: "Caractéristiques",
            items: [
              "Ce noeud ne glisse pas et il présente le grand avantage d'être facile à dénouer, même après une très forte tension."
            ]
          },
          {
            title: "Conseils",
            items: [
              "Lorsque vous réalisez la première boucle sur chacun des cordages, superposez-les. Il est alors plus facile de réaliser ce noeud."
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
        animationData={zeppelinAnimation}
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

export default ZeppelinBendPage;