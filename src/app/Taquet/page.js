import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import cleatHitchAnimation from '../animations/Taquet.json';

const CleatHitchPage = () => {
  const stepMessages = [
    "Wrap the working end around the cleat.",
    "Cross the working end over the cleat and pass it under the cleat.",
    "Cross the working end over the cleat and itself, then pass it under the other side of the cleat.",
    "Cross again, this time passing under the standing part from step 3.",
    "Tighten by pulling the working end."
  ];

  const modalContent = {
    sections: [
      {
        title: "Uses",
        items: [
          "Used to moor securely on a cleat."
        ]
      },
      {
        title: "Characteristics",
        items: [
          "A secure, solid knot that is easy to undo even under heavy tension."
        ]
      },
      {
        title: "Advice",
        items: [
          "Make the final loop before threading it onto the cleat."
        ]
      }
    ]
  };

  return (
    <div>
      <InteractiveKnotComponent
        animationData={cleatHitchAnimation}
        title="Cleat Hitch"
        stepMessages={stepMessages}
        modalContent={modalContent}
        primaryColor="#FFC107"
        backgroundColor="#283061"
        numberOfSteps={5}
      />
    </div>
  );
};

export default CleatHitchPage;
