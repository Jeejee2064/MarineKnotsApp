import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import figureEightAnimation from '../animations/Huit.json';

const FigureEightPage = () => {
  // Step-by-step instructions
  const stepMessages = [
    "Make a loop, crossing the working end over the standing part.",
    "Wrap the working end around the standing part.",
    "Pass the working end back through the loop from the front.",
    "Tighten the knot by pulling both ends firmly.",
    "Ensure the knot is secure and neatly dressed."
  ];

  // Modal content structure
  const modalContent = {
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
  };

  return (
    <div>
      <InteractiveKnotComponent
        animationData={figureEightAnimation}
        title="Figure Eight"
        stepMessages={stepMessages}
        modalContent={modalContent}
        primaryColor="#FFC107"
        backgroundColor="#283061"
        numberOfSteps={5}
      />
    </div>
  );
};

export default FigureEightPage;
