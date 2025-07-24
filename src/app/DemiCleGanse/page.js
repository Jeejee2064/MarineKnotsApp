import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import slipHitchAnimation from '../animations/DemiCleGanse.json';

const SlipHitchPage = () => {
  const stepMessages = [
    "Pass the rope behind the anchor point.",
    "Pass the working end behind the standing part.",
    "Bring the working end over the standing part and through the loop formed.",
    "Pull the working end out of the loop again.",
    "Tighten by pulling both the working end and the loop."
  ];

  const modalContent = {
    sections: [
      {
        title: "Uses",
        items: [
          "Create a temporary anchoring point."
        ]
      },
      {
        title: "Characteristics",
        items: [
          "Fairly secure knot, releases instantly with a sharp pull on the working end."
        ]
      },
      {
        title: "Advice",
        items: [
          "Useful for a boom vang or any temporary mooring requiring quick release."
        ]
      }
    ]
  };

  return (
    <div>
      <InteractiveKnotComponent
        animationData={slipHitchAnimation}
        title="Slip Hitch"
        stepMessages={stepMessages}
        modalContent={modalContent}
        primaryColor="#FFC107"
        backgroundColor="#283061"
        numberOfSteps={5}
      />
    </div>
  );
};

export default SlipHitchPage;
