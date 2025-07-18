'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Anchor, Navigation, BookOpen, Target, Users, Award } from 'lucide-react';
import Image from 'next/image';

const MarineKnotsWebsite = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "45+ Marine Knots",
      description: "Learn essential maritime knots with step-by-step animated instructions"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Interactive Quizzes",
      description: "Test your knowledge with engaging quiz modes and instant feedback"
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Maritime Scenarios",
      description: "Practice with 45+ real-world situations to choose the right knot"
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: "100% Offline",
      description: "No internet required - perfect for use on the water"
    }
  ];

  const reviews = [
    {
      name: "Sylvie Mattelon",
      rating: 5,
      text: "Finally, a simple and accurate app 👍 Whether it is a refresher or a deep dive, some knots no longer hold any secrets for me — and it really makes life easier on our sailboat ⛵️ I highly recommend it ✨️ 🙏"
    },
    {
      name: "Johan Minio",
      rating: 5,
      text: "An essential app no matter the sailor is level. Smooth, fast, and very easy to understand."
    },
    {
      name: "Juliette Dolley",
      rating: 5,
      text: "Great app for tying all marine knots and finding the right knot for the situation!"
    },
    {
      name: "Les Ecumeurs",
      rating: 5,
      text: "It is clear, clean, and efficient. The animations are perfect and let you visualize each knot step by step. A search system is also included, helping you find the best knot for your needs! In short, a great little app that’s staying on my phone!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#283061] border-b-4 border-[#ffc107] sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center">
                <Image src="/icon.png" alt="Marine Knots Icon" width={48} height={48} />
              </div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Pacifico, cursive' }}>
                Marine Knots
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-[#ffc107] transition-colors">Features</a>
              <a href="#screenshots" className="text-white hover:text-[#ffc107] transition-colors">Screenshots</a>
              <a href="#reviews" className="text-white hover:text-[#ffc107] transition-colors">Reviews</a>
              <a href="#download" className="text-white hover:text-[#ffc107] transition-colors">Download</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#283061] py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mx-auto mb-6">
                <Image src="/icon.png" alt="Marine Knots Icon" width={96} height={96} />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
                Master the Art of 
                <span className="text-[#ffc107] block">Maritime Knots</span>
              </h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
                Welcome to the world of maritime knots! Don't let the first challenge stop you when it comes to tying knots. 
                With our dedicated 100% offline app for boaters, master over 45 marine knots step-by-step.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/us/app/marine-knots/id6451214846" className="bg-[#ffc107] text-[#283061] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                Download for iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.Noeuds.NoeudsMarins&hl=en_US" className="bg-white text-[#283061] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg border-2 border-white">
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#283061] mb-6">Why Choose Marine Knots?</h3>
            <p className="text-xl text-[#283061] max-w-3xl mx-auto">
              Specially designed to help you learn marine knots in an easy and interactive way, 
              with animated instructions and practical scenarios.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border-2 border-[#283061]">
                <div className="text-[#ffc107] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#283061] mb-4">{feature.title}</h4>
                <p className="text-[#283061]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Features Highlight */}
      <section className="py-20 px-6 bg-[#283061]">
        <div className="container mx-auto">
          <div className="bg-white rounded-3xl p-12 border-4 border-[#ffc107]">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#283061] mb-6">New Features</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#283061]" />
                </div>
                <h4 className="text-xl font-semibold text-[#283061] mb-4">Quiz Modes</h4>
                <p className="text-[#283061]">Test your knowledge with interactive quizzes and get instant feedback</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-[#283061]" />
                </div>
                <h4 className="text-xl font-semibold text-[#283061] mb-4">Maritime Scenarios</h4>
                <p className="text-[#283061]">Over 45 real-world situations where you choose the right knot</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#283061]" />
                </div>
                <h4 className="text-xl font-semibold text-[#283061] mb-4">Knot Selection</h4>
                <p className="text-[#283061]">Get guidance on choosing the most appropriate knot for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#283061] mb-6">App Screenshots</h3>
            <p className="text-xl text-[#283061]">Take a look at our intuitive and user-friendly interface</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {['mk1.jpg', 'mk2.jpg', 'mk3.jpg', 'mk4.jpg'].map((image, index) => (
              <div key={index} >
                <Image 
                  src={`/${image}`} 
                  alt={`Marine Knots App Screenshot ${index + 1}`}
                  width={720}
                  height={1464}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-[#283061]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">What Our Users Say</h3>
            <p className="text-xl text-white">Join thousands of satisfied boaters and sailors</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border-2 border-[#ffc107]">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-[#ffc107]">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-[#283061] mb-6">Ready to Master Maritime Knots?</h3>
          <p className="text-xl text-[#283061] mb-8 max-w-2xl mx-auto">
            Download our app now and dive into the world of maritime knots with ease and pleasure!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/us/app/marine-knots/id6451214846" className="bg-[#283061] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
              Download for iOS
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.Noeuds.NoeudsMarins&hl=en_US" className="bg-white text-[#283061] px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg border-2 border-[#283061]">
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            <div className="bg-white rounded-xl border-2 border-[#283061] overflow-hidden">
              <button
                onClick={() => setShowTerms(!showTerms)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-[#283061] hover:bg-[#ffc107] transition-colors"
              >
                <span className="font-semibold">Terms and Conditions</span>
                {showTerms ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {showTerms && (
                <div className="px-6 pb-6 text-[#283061] border-t border-[#283061]">
                  <div className="space-y-4">
                    <p>By downloading and using the Marine Knots app, you agree to the following terms:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• This app is provided for educational and recreational purposes only</li>
                      <li>• The developer is not responsible for any accidents, injuries, or damages that may occur from using the information provided in this app</li>
                      <li>• Users should always exercise proper safety measures when working with ropes and knots</li>
                      <li>• The app content is provided "as is" without warranty of any kind</li>
                      <li>• Users are responsible for verifying the appropriateness of any knot for their specific situation</li>
                      <li>• The developer reserves the right to update or modify the app content at any time</li>
                    </ul>
                    <p className="text-sm mt-4">
                      Always consult with maritime professionals and follow proper safety protocols when on the water.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl border-2 border-[#283061] overflow-hidden">
              <button
                onClick={() => setShowPrivacy(!showPrivacy)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-[#283061] hover:bg-[#ffc107] transition-colors"
              >
                <span className="font-semibold">Privacy Policy</span>
                {showPrivacy ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {showPrivacy && (
                <div className="px-6 pb-6 text-[#283061] border-t border-[#283061]">
                  <div className="space-y-4">
                    <p>We respect your privacy and are committed to protecting your personal information.</p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Data Collection</h4>
                        <p>We do not collect any personal data or information from users of the Marine Knots app. The app functions completely offline and does not require or collect any personal information, usage data, or analytics.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Information Storage</h4>
                        <p>All app data is stored locally on your device. We do not have access to your device or any information stored within the app.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Third-Party Services</h4>
                        <p>Our app does not integrate with any third-party services that collect user data.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Changes to Privacy Policy</h4>
                        <p>Any changes to this privacy policy will be reflected in app updates and on this website.</p>
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      If you have any questions about our privacy practices, please contact us through the app store.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#283061] border-t-4 border-[#ffc107] py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center justify-center">
              <Image src="/icon.png" alt="Marine Knots Icon" width={32} height={32} />
            </div>
            <span className="text-white font-semibold" style={{ fontFamily: 'Pacifico, cursive' }}>Marine Knots</span>
          </div>
          <p className="text-white text-sm">
            © 2025 Marine Knots - JdwApps. All rights reserved. Master the art of maritime knots.
          </p>
        </div>
      </footer>

      {/* Google Fonts Link */}
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
    </div>
  );
};

export default MarineKnotsWebsite;