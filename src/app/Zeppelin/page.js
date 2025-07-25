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
        "Make a loop with each of the ropes, making sure the red working end passes over and the blue working end passes under.",
        "Pass the blue working end over the red rope and the red working end under the blue rope.",
        "The red working end passes under itself, and the blue working end goes over.",
        "The red working end goes over the blue rope, and the blue working end goes under the red rope.",
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
        "Faire une boucle avec chacun des cordages, attention le courant rouge passe au-dessus, le courant bleu en dessous.",
        "Passer le courant bleu par-dessus le cordage rouge, le courant rouge par-dessous le cordage bleu.",
        "Le courant rouge passe en dessous de lui-même, le bleu au-dessus.",
        "Le courant rouge passe au-dessus du cordage bleu, le bleu passe en dessous du rouge.",
        "Serrer en tirant sur les quatre brins."
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