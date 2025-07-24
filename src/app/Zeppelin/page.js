import InteractiveKnotComponent from '../components/InteractiveKnotComponent';
import zeppelinAnimation from '../animations/Zeppelin.json';

const ZeppelinBendPage = () => {
  const stepMessages = [
    "Make a loop with each of the ropes, making sure the red working end passes over and the blue working end passes under.",
    "Pass the blue working end over the red rope and the red working end under the blue rope.",
    "The red working end passes under itself, and the blue working end goes over.",
    "The red working end goes over the blue rope, and the blue working end goes under the red rope.",
    "Tighten by pulling all four ends."
  ];

  const modalContent = {
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
  };

  return (
    <div>
      <InteractiveKnotComponent
        animationData={zeppelinAnimation}
        title="Zeppelin Bend"
        stepMessages={stepMessages}
        modalContent={modalContent}
        primaryColor="#FFC107"
        backgroundColor="#283061"
        numberOfSteps={5}
      />
    </div>
  );
};

export default ZeppelinBendPage;
