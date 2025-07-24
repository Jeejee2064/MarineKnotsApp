import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import cabestanAnimation from '../animations/Cabestan.json';

const CloveHitchPage = () => {
  // Step-by-step instructions
  const stepMessages = [
    "Pass the rope over the object.",
    "The working end goes around the object and over the standing end.",
    "Make a second turn in the same direction as the first.",
    "Form a loop by passing the working end under itself.",
    "Tighten by pulling the working end and the standing end."
  ];

  // Modal content structure
  const modalContent = {
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
  };

  return (
    <div>
      <InteractiveKnotComponent
        animationData={cabestanAnimation}
        title="Clove Hitch"
        stepMessages={stepMessages}
        modalContent={modalContent}
        primaryColor="#FFC107"
        backgroundColor="#283061"
        numberOfSteps={5}
      />
    </div>
  );
};

export default CloveHitchPage;
