'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Star, Anchor, Navigation, BookOpen, Target, Users, Award } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

const MarineKnotsWebsite = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const router = useRouter();
  const { language } = useLanguage();

  // Import translations
  const translations = require(`./locales/${language}/common.json`);

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = translations.features.items.map((item, index) => ({
    icon: index === 0 ? <BookOpen className="w-8 h-8" /> :
      index === 1 ? <Target className="w-8 h-8" /> :
        index === 2 ? <Navigation className="w-8 h-8" /> :
          <Anchor className="w-8 h-8" />,
    title: item.title,
    description: item.description
  }));

  const reviews = [
    {
      name: "Sylvie Mattelon",
      rating: 5,
      text: language === 'en' ?
        "Finally, a simple and accurate app 👍 Whether it is a refresher or a deep dive, some knots no longer hold any secrets for me — and it really makes life easier on our sailboat ⛵️ I highly recommend it ✨️ 🙏" :
        "Enfin une application simple et précise 👍 Qu'il s'agisse d'un rafraîchissement ou d'une plongée approfondie, certains nœuds n'ont plus de secrets pour moi — et cela facilite vraiment la vie sur notre voilier ⛵️ Je la recommande vivement ✨️ 🙏"
    },
    {
      name: "Johan Minio",
      rating: 5,
      text: language === 'en' ?
        "An essential app no matter the sailor is level. Smooth, fast, and very easy to understand." :
        "Une application essentielle quel que soit le niveau du marin. Fluide, rapide et très facile à comprendre."
    },
    {
      name: "Juliette Dolley",
      rating: 5,
      text: language === 'en' ?
        "Great app for tying all marine knots and finding the right knot for the situation!" :
        "Super application pour réaliser tous les nœuds marins et trouver le bon nœud pour chaque situation !"
    },
    {
      name: "Les Ecumeurs",
      rating: 5,
      text: language === 'en' ?
        "It is clear, clean, and efficient. The animations are perfect and let you visualize each knot step by step. A search system is also included, helping you find the best knot for your needs! In short, a great little app that's staying on my phone!" :
        "C'est clair, propre et efficace. Les animations sont parfaites et permettent de visualiser chaque nœud étape par étape. Un système de recherche est également inclus, vous aidant à trouver le meilleur nœud pour vos besoins ! Bref, une super petite application qui reste sur mon téléphone !"
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#283061] border-b-4 border-[#fff] sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center">
                <Image src="/icon.png" alt="Marine Knots Icon" width={48} height={48} />
              </div>
              <h1 className="text-2xl text-white" style={{ fontFamily: 'Pacifico, cursive' }}>
                {translations.header.title}
              </h1>
            </motion.div>
            <LanguageSwitcher />
            <motion.nav
              className="hidden md:flex items-center ml-12 space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => smoothScrollTo('features')}
                className="text-white hover:text-[#ffc107] transition-colors cursor-pointer"
              >
                {translations.header.features}
              </button>
              <button
                onClick={() => smoothScrollTo('screenshots')}
                className="text-white hover:text-[#ffc107] transition-colors cursor-pointer"
              >
                {translations.header.screenshots}
              </button>
              <button
                onClick={() => smoothScrollTo('reviews')}
                className="text-white hover:text-[#ffc107] transition-colors cursor-pointer"
              >
                {translations.header.reviews}
              </button>
              <button
                onClick={() => smoothScrollTo('download')}
                className="text-white hover:text-[#ffc107] transition-colors cursor-pointer"
              >
                {translations.header.download}
              </button>
              <button
                onClick={() => router.push('/knotSelection')}
                className="bg-[#ffc107] hover:scale-105
 text-black font-semibold py-3 px-6 rounded-full shadow hover:brightness-105 transition duration-200"
              >
                {translations.header.testNow}
              </button>

            </motion.nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-[#283061] py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center justify-center mx-auto mb-6"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <Image src="/icon.png" alt="Marine Knots Icon" width={200} height={200} />
              </motion.div>
              <motion.h2
                className="text-5xl md:text-6xl text-white mb-6 leading-tight"
                style={{ fontFamily: 'Pacifico, cursive' }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                {translations.hero.title1}
                <span className="text-[#ffc107] block">{translations.hero.title2}</span>
              </motion.h2>
              <motion.p
                className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                {translations.hero.description}
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.a
                href="https://apps.apple.com/us/app/marine-knots/id6451214846"
                className="hover:opacity-90 transition-opacity"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/appstore.png"
                  alt={translations.hero.ios}
                  width={160}
                  height={54}
                  className="h-[54px] w-auto"
                />
              </motion.a>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.Noeuds.NoeudsMarins&hl=en_US"
                className="hover:opacity-90 transition-opacity"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/googleplay.png"
                  alt={translations.hero.android}
                  width={160}
                  height={54}
                  className="h-[54px] w-auto"
                />
              </motion.a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <button
                onClick={() => router.push('/knotSelection')}
                className="bg-[#ffc107] hover:scale-105
 text-black font-semibold py-3 px-6 mt-8 rounded-full shadow hover:brightness-105 transition duration-200"
              >
                {translations.header.testNow}
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      <img src='/separator2.svg' className='w-screen mt-[-3%]' />
      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-4xl font-bold text-[#283061] mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {translations.features.title}
            </motion.h3>
            <motion.p
              className="text-xl text-[#283061] max-w-3xl mx-auto"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {translations.features.description}
            </motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border-2 border-[#283061]"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-[#ffc107] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#283061] mb-4">{feature.title}</h4>
                <p className="text-[#283061]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <img src='/separator3.svg' className='w-screen mt-[-3%]' />

      {/* New Features Highlight */}
      <section className="py-20 px-6 bg-[#283061]">
        <div className="container mx-auto">
          <motion.div
            className="bg-white rounded-3xl p-12 border-4 border-[#ffc107]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-[#283061] mb-6">{translations.newFeatures.title}</h3>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {translations.newFeatures.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 ? <Target className="w-8 h-8 text-[#283061]" /> :
                      index === 1 ? <Navigation className="w-8 h-8 text-[#283061]" /> :
                        <Award className="w-8 h-8 text-[#283061]" />}
                  </div>
                  <h4 className="text-xl font-semibold text-[#283061] mb-4">{item.title}</h4>
                  <p className="text-[#283061]">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <img src='/separator2.svg' className='w-screen mt-[-3%]' />

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-4xl font-bold text-[#283061] mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {translations.screenshots.title}
            </motion.h3>
            <motion.p
              className="text-xl text-[#283061]"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {translations.screenshots.description}
            </motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {['mk1.jpg', 'mk2.jpg', 'mk3.jpg', 'mk4.jpg'].map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src={`/${image}`}
                  alt={`${translations.screenshots.title} ${index + 1}`}
                  width={720}
                  height={1464}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <img src='/separator3.svg' className='w-screen mt-[-3%]' />

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-[#283061]">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-4xl font-bold text-white mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {translations.reviews.title}
            </motion.h3>
            <motion.p
              className="text-xl text-white"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {translations.reviews.description}
            </motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border-2 border-[#ffc107]"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-[#ffc107] mr-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[#283061] text-sm">{review.rating}/5</span>
                </div>
                <p className="text-[#283061] mb-4 italic">{review.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#ffc107] rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-[#283061]" />
                  </div>
                  <span className="text-[#283061] font-semibold">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <img src='/separator2.svg' className='w-screen mt-[-3%]' />

      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-[#fff]">
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-4xl font-bold text-[#283061] mb-6"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            {translations.download.title}
          </motion.h3>
          <motion.p
            className="text-xl text-[#283061] mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            {translations.download.description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
          >
            <motion.a
              href="https://apps.apple.com/us/app/marine-knots/id6451214846"
              className="flex justify-center"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/appstore.png"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-[50px] w-auto sm:h-[60px]"
              />
            </motion.a>
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.Noeuds.NoeudsMarins&hl=en_US"
              className="flex justify-center"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/googleplay.png"
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="h-[50px] w-auto sm:h-[60px]"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Legal Section */}
      <section className="py-12 px-6 bg-white">
        <motion.div
          className="container mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="space-y-4">
            <motion.div
              className="bg-white rounded-xl border-2 border-[#283061] overflow-hidden"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => setShowTerms(!showTerms)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-[#283061] hover:bg-[#ffc107] transition-colors"
              >
                <span className="font-semibold">{translations.legal.terms}</span>
                <motion.div
                  animate={{ rotate: showTerms ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: showTerms ? "auto" : 0, opacity: showTerms ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                {showTerms && (
                  <div className="px-6 pb-6 text-[#283061] border-t border-[#283061]">
                    <div className="space-y-4">
                      {translations.legal.termsContent.map((paragraph, index) => (
                        <p key={index} className={index === 0 ? "" : index === translations.legal.termsContent.length - 1 ? "text-sm mt-4" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl border-2 border-[#283061] overflow-hidden"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => setShowPrivacy(!showPrivacy)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-[#283061] hover:bg-[#ffc107] transition-colors"
              >
                <span className="font-semibold">{translations.legal.privacy}</span>
                <motion.div
                  animate={{ rotate: showPrivacy ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: showPrivacy ? "auto" : 0, opacity: showPrivacy ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                {showPrivacy && (
                  <div className="px-6 pb-6 text-[#283061] border-t border-[#283061]">
                    <div className="space-y-4">
                      {translations.legal.privacyContent.map((paragraph, index) => (
                        <p key={index} className={index === 0 ? "" : index === translations.legal.privacyContent.length - 1 ? "text-sm mt-4" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-[#283061] border-t-4 border-[#ffc107] py-8 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center justify-center">
              <Image src="/icon.png" alt="Marine Knots Icon" width={32} height={32} />
            </div>
            <span className="text-white font-semibold" style={{ fontFamily: 'Pacifico, cursive' }}>
              {translations.header.title}
            </span>
          </div>
          <p className="text-white text-sm">
            {translations.footer.copyright}
          </p>
        </div>
      </motion.footer>

      {/* Google Fonts Link */}
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
    </div>
  );
};

export default MarineKnotsWebsite;