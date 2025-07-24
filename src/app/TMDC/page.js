import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import roundTurnTwoHalfHitchesAnimation from '../animations/TMDC.json';

const RoundTurnTwoHalfHitchesPage = () => {
  const stepMessages = [
    "Pass the working end over the object.",
    "Make a turn around the object.",
    "Make the first half-hitch by passing the working end over the standing part.",
    "Make the second half-hitch by passing the working end under the standing part.",
    "Tighten the knot by pulling the standing part and the working end."
  ];

  const modalContent = {
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
          "Make the first half-hitch in one direction and the second in the opposite direction, so the tightened half-hitches resemble a cow hitch."
        ]
      }
    ]
  };

  return (
    <div>
      <InteractiveKnotComponent
        animationData={roundTurnTwoHalfHitchesAnimation}
        title="Round Turn Two Half Hitches"
        stepMessages={stepMessages}
        modalContent={modalContent}
        primaryColor="#FFC107"
        backgroundColor="#283061"
        numberOfSteps={5}
      />
    </div>
  );
};

export default RoundTurnTwoHalfHitchesPage;
