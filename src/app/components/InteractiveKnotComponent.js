'use client'
import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import { useSpring } from '@react-spring/web';
import { Range, getTrackBackground } from 'react-range';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const InteractiveKnotComponent = ({
  animationData,
  title,
  stepMessages,
  modalContent,
  buttonTexts,
  primaryColor = "#FFC107",
  backgroundColor = "#283061"
}) => {
  const lottieRef = useRef(null);
  const modalLottieRef = useRef(null);
  const [text, setText] = useState(stepMessages[0]);
  const [sliderValue, setSliderValue] = useState([0]);
  const [activeButton, setActiveButton] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasIntroPlayed, setHasIntroPlayed] = useState(false);

  const totalFrames = animationData.op;
  const startFrame = Math.round(0.2 * totalFrames); // 20%
  const stepPercentages = [0.2, 0.4, 0.6, 0.8, 1.0];
  const stepValues = stepPercentages.map(p => Math.round(p * totalFrames));

  const findNearestStep = (value) => {
    const nearestStep = stepValues.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    return stepValues.indexOf(nearestStep);
  };

  const [frameSpring, api] = useSpring(() => ({
    frame: 0,
    config: { duration: 2000 }, // Slower initial transition
  }));

  const smoothFrameTransition = (targetFrame, onComplete) => {
    api.start({
      frame: targetFrame,
      onChange: ({ value }) => {
        if (lottieRef.current) {
          const animationDuration = lottieRef.current.getDuration(true);
          lottieRef.current.goToAndStop((value.frame / totalFrames) * animationDuration, true);
        }
        setSliderValue([value.frame]);
      },
      onRest: () => {
        if (onComplete) onComplete();
      },
    });
  };

  const handleSliderChange = (values) => {
    const newValue = values[0];
    setSliderValue([newValue]);
    if (lottieRef.current) {
      const animationDuration = lottieRef.current.getDuration(true);
      lottieRef.current.goToAndStop((newValue / totalFrames) * animationDuration, true);
    }
  };

  const handleSliderFinalChange = (values) => {
    const newValue = values[0];
    const nearestStepIndex = findNearestStep(newValue);
    setText(stepMessages[nearestStepIndex]);
    setActiveButton(nearestStepIndex);
  };

  const handleButtonClick = (_, buttonIndex) => {
    const targetFrame = stepValues[buttonIndex];
    smoothFrameTransition(targetFrame);
    setText(stepMessages[buttonIndex]);
    setActiveButton(buttonIndex);
  };

  useEffect(() => {
    // Play intro animation (0 → 20%) slowly
    smoothFrameTransition(startFrame, () => {
      setHasIntroPlayed(true);
      setText(stepMessages[0]);
      setActiveButton(0);
    });
  }, []);

  useEffect(() => {
    if (isModalOpen && modalLottieRef.current) {
      const timer = setTimeout(() => {
        modalLottieRef.current.goToAndPlay(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const buttonPositionsPercent = stepValues.map((val) => ((val - startFrame) / (totalFrames - startFrame)) * 100);

  return (
    <div
      className="min-h-screen w-screen p-4 text-white flex flex-col"
      style={{ backgroundColor }}
    >
      {/* Header */}
      <header className="bg-[#283061] sticky top-0 z-50 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="Marine Knots Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-xl text-white ml-3 font-bold" style={{ fontFamily: 'Pacifico, cursive' }}> </h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/knotSelection"
              className="flex items-center bg-[#ffc107] text-[#283061] px-3 py-2 sm:px-4 rounded-full hover:bg-[#ffd54f] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:mr-2" />

            </Link>
          </div>
        </div>
      </header>


      <h1 className="text-center text-white font-bold mb-4" style={{ fontSize: '2rem' }}>
        {title}
      </h1>

      <div className="flex flex-col md:flex-row flex-grow items-center max-h-[calc(100vh-6rem)]">
        {/* Left - Lottie Animation */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <div
            className="bg-white rounded-full border-8 flex justify-center items-center"
            style={{
              borderColor: primaryColor,
              width: '90%',
              maxWidth: '450px',
              aspectRatio: '1 / 1',
              maxHeight: '90vh',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                clipPath: 'inset(0 0 15% 0)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                autoplay={false}
                loop={false}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Right - Controls */}
        <AnimatePresence>
          {hasIntroPlayed && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/3 flex flex-col justify-center mx-auto"
              style={{ padding: '1rem', maxWidth: '600px', marginLeft: '2rem', marginRight: '2rem' }}
            >
              {/* Slider */}
              <div className="w-full mb-2">
                <Range
                  values={sliderValue}
                  step={1}
                  min={startFrame}
                  max={totalFrames}
                  onChange={handleSliderChange}
                  onFinalChange={handleSliderFinalChange}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '10px',
                        background: getTrackBackground({
                          values: sliderValue,
                          colors: [primaryColor, '#D1D5DB'],
                          min: startFrame,
                          max: totalFrames,
                        }),
                        borderRadius: '4px',
                        position: 'relative',
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '40px',
                        width: '40px',
                        backgroundColor: '#FFFFFF',
                        border: `4px solid ${primaryColor}`,
                        borderRadius: '50%',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                  )}
                />
              </div>

              {/* Buttons below slider */}
              <div className="relative mt-6 h-10" aria-label="Step buttons">
                {buttonPositionsPercent.map((pos, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleButtonClick(null, idx)}
                    className="absolute -top-1 px-3 py-1 rounded-full border-2 border-white bg-transparent text-white"
                    style={{
                      left: `${pos}%`,
                      transform: `translateX(-50%) scale(${activeButton === idx ? 1.2 : 1})`,
                      color: activeButton === idx ? primaryColor : 'white',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                    aria-current={activeButton === idx ? 'step' : undefined}
                    aria-label={`Step ${idx + 1}`}
                  >
                    {idx + 1}
                  </motion.button>
                ))}
              </div>

              {/* Step message */}
              <div className="bg-gray-200 rounded-lg p-4 mt-6 text-[#283061] min-h-[5rem] flex items-center justify-center text-center">
                <p className="text-md">{text}</p>
              </div>

              {/* Use & Features */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 px-6 py-2 rounded-lg font-medium mx-auto"
                style={{ backgroundColor: primaryColor, color: backgroundColor, maxWidth: '300px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonTexts.useFeatures}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 h-screen flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="p-8 rounded-lg overflow-y-auto"
              style={{ backgroundColor }}
            >
              <div className="mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
                <div className="flex flex-col items-center justify-center space-y-2 md:w-1/2">
                  <span className="text-xl font-bold mb-2 text-center text-white">
                    {title}
                  </span>
                  <div className="flex items-center justify-center bg-white rounded-full p-4" style={{ border: `8px solid ${primaryColor}` }}>
                    <Lottie
                      lottieRef={modalLottieRef}
                      animationData={animationData}
                      autoplay={false}
                      loop={false}
                      className="h-[20vh] w-[20vh] md:h-[50vh] md:w-[50vh]"
                      style={{ clipPath: 'inset(0 0 20% 0)' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-4 md:w-1/2">
                  {modalContent.sections.map((section, index) => (
                    <div key={index} className="rounded-lg">
                      <h3 className="text-l font-semibold mb-1" style={{ color: primaryColor }}>
                        {section.title}
                      </h3>
                      <ul className="list-inside text-white text-sm">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <motion.button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-2 w-full px-6 py-3 rounded-lg font-medium"
                    style={{ backgroundColor: primaryColor, color: backgroundColor }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {buttonTexts.close}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveKnotComponent;
