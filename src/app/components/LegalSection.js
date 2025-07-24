'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const LegalSection = ({ translations }) => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="space-y-4">
      {/* Terms and Conditions */}
      <motion.div
        className="bg-white rounded-xl border-2 border-[#283061] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
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

      {/* Privacy Policy */}
      <motion.div
        className="bg-white rounded-xl border-2 border-[#283061] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
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
  );
};

export default LegalSection