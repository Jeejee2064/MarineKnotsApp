'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { BookOpen, Target, CircleQuestionMark, Anchor } from 'lucide-react';

const KnotSelectionPage = () => {
  const { language } = useLanguage();

  // Load translations based on current language
  const translations = require(`../locales/${language}/knotSelection.json`);

  // Knot data with translations
  const knots = [
    {
      name: translations.knots.demiCleGanse.name,
      description: translations.knots.demiCleGanse.description,
      route: '/DemiCleGanse',
      image: '/DemiCleGanse.png'
    },
    {
      name: translations.knots.chaise.name,
      description: translations.knots.chaise.description,
      route: '/Chaise',
      image: '/Chaise.png'
    },
    {
      name: translations.knots.cabestan.name,
      description: translations.knots.cabestan.description,
      route: '/Cabestan',
      image: '/Cabestan.png'
    },
    {
      name: translations.knots.zeppelin.name,
      description: translations.knots.zeppelin.description,
      route: '/Zeppelin',
      image: '/Zeppelin.png'
    },
    {
      name: translations.knots.papillonBoucle.name,
      description: translations.knots.papillonBoucle.description,
      route: '/PapillonBoucle',
      image: '/PapillonBoucle.png'
    },
    {
      name: translations.knots.tmdc.name,
      description: translations.knots.tmdc.description,
      route: '/TMDC',
      image: '/TMDC.png'
    },
    {
      name: translations.knots.taquet.name,
      description: translations.knots.taquet.description,
      route: '/Taquet',
      image: '/Taquet.png'
    },
    {
      name: translations.knots.huit.name,
      description: translations.knots.huit.description,
      route: '/Huit',
      image: '/Huit.png'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <div className="min-h-screen ">
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
            <h1 className="text-xl text-white ml-3 font-bold" style={{ fontFamily: 'Pacifico, cursive' }}>{translations.header.title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/"
              className="flex items-center bg-[#ffc107] text-[#283061] px-3 py-2 sm:px-4 rounded-full hover:bg-[#ffd54f] transition-colors"
            >
              <Home className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline text-sm font-medium">
                {translations.header.backHome}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {knots.map((knot, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="flex flex-col items-center"
            >
              <Link href={knot.route} className="w-full group">
                <div className="relative aspect-square w-full rounded-full border-4 border-[#ffc107] overflow-hidden mb-3 p-1">
                  <Image
                    src={knot.image}
                    alt={knot.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center px-2">
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-[#ffc107] transition-colors">
                    {knot.name}
                  </h3>
                  <p className="text-white text-sm line-clamp-2">
                    {knot.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <img src='/separator2.svg' className='w-screen mt-[3%] bg-white' />

      {/* Features & Download Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-4xl font-bold text-[#283061] mb-6"
              variants={fadeInUp}
            >
              {translations.features.title}
            </motion.h3>
            <motion.p
              className="text-xl text-[#283061] max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              {translations.features.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {translations.features.items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border-2 border-[#ffc107]"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="text-[#ffc107] mb-4 flex justify-center">
                  {index === 0 ? <BookOpen className="w-8 h-8" /> :
                    index === 1 ? <Target className="w-8 h-8" /> :
                      index === 2 ? <CircleQuestionMark className="w-8 h-8" /> :
                        <Anchor className="w-8 h-8" />}
                </div>
                <h4 className="text-xl font-semibold text-[#283061] mb-4">{item.title}</h4>
                <p className="text-[#283061]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-3xl font-bold text-[#283061] mb-6"
              variants={fadeInUp}
            >
              {translations.download.title}
            </motion.h3>
            <motion.p
              className="text-xl text-[#283061] mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/appstore.png"
                  alt={translations.download.ios}
                  width={180}
                  height={60}
                  className="h-[50px] w-auto sm:h-[60px]"
                />
              </motion.a>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.Noeuds.NoeudsMarins&hl=en_US"
                className="flex justify-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/googleplay.png"
                  alt={translations.download.android}
                  width={180}
                  height={60}
                  className="h-[50px] w-auto sm:h-[60px]"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
            <img src='/separator3.svg' className='w-screen  bg-white' />

      {/* Footer */}
      <footer className="bg-[#283061] text-white text-center py-6 ">
        <div className="container mx-auto">
          <p className="text-sm">
            {translations.footer.copyright}
          </p>
        </div>
      </footer>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />

    </div>
  );
};

export default KnotSelectionPage;