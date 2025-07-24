import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import chaiseAnimation from '../animations/Chaise.json';
import Knots from '../components/Knots';

const BowlinePage = () => {
  // Step-by-step instructions
  const stepMessages = [
    "Make a loop, make sure the working end passes over the standing end.",
    "Wrap around the object and pass the working end through the loop from below.",
    "Wrap around the standing part (at the bottom in the diagram).",
    "Pass through the loop again, this time from above.",
    "Tighten by pulling both ends."
  ];

  // Modal content structure
  const modalContent = {
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
  };

  return (
    <div>
      <InteractiveKnotComponent
        animationData={chaiseAnimation}
        title="Bowline"
        stepMessages={stepMessages}
        modalContent={modalContent}
        primaryColor="#FFC107"
        backgroundColor="#283061"
        numberOfSteps={5}
      />
    </div>
  );
};

export default BowlinePage;
