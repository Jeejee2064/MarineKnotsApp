import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import alpineButterflyAnimation from '../animations/PapillonBoucle.json';

const AlpineButterflyPage = () => {
  // Step-by-step instructions
  const stepMessages = [
    "Make a loop, note the working end goes over the standing part.",
    "Twist the loop on itself to make an 8 (pay attention to the direction).",
    "Pass the upper part of the loop over the lower part, the working end, and the standing part.",
    "Pass the loop through the central opening from underneath.",
    "Tighten while holding the loop and pulling on both ends."
  ];

  // Modal content structure
  const modalContent = {
    sections: [
      {
        title: "Uses",
        items: [
          "Creating a secure loop in the middle of a rope.",
          "Isolating damaged sections of rope."
        ]
      },
      {
        title: "Characteristics",
        items: [
          "Non-binding under load - easily untied after use.",
          "Maintains approximately 70% of rope strength."
        ]
      },
      {
        title: "Advice",
        items: [
          "Always twist the rope twice in the same direction when making the '8' (step 2)."
        ]
      }
    ]
  };

  return (
    <div>
    <InteractiveKnotComponent
      animationData={alpineButterflyAnimation}
      title="Alpine Butterfly"
      stepMessages={stepMessages}
      modalContent={modalContent}
      primaryColor="#FFC107"
      backgroundColor="#283061"
      numberOfSteps={5}
    />
    </div>
  );
};

export default AlpineButterflyPage;