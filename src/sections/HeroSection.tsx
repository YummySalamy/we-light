import React, { forwardRef } from 'react'
import { FaChevronDown, FaRocket, FaLightbulb, FaCog } from 'react-icons/fa'

interface HeroSectionProps {
  isDarkTheme: boolean
  scrollToSection: (section: string) => void
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ isDarkTheme, scrollToSection }, ref) => {
    return (
      <section
        ref={ref}
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
          <div className="glassmorphism-strong rounded-3xl p-6 md:p-12 mb-8">
            {/* Logo */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-6 md:mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-amber-400 to-teal-600 rounded-full animate-pulse-glow" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/We-Light-Logo-eREtAQwZOyRVgT6JSjEpO42SLZb5ne.png"
                alt="WeLight Logo"
                className="relative w-full h-full rounded-full border-4 border-white/50 shadow-2xl object-cover bg-teal-600 p-4"
              />
            </div>

            {/* Company Name and Tagline */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 transition-colors ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              WeLight
            </h1>
            <p
              className={`text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 transition-colors ${
                isDarkTheme ? "text-teal-300" : "text-teal-600"
              }`}
            >
              Sistema Inteligente de Control de Iluminación para Rover
            </p>
            <p
              className={`text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Desarrollando tecnología innovadora para el control automático de sistemas de iluminación 
              basado en condiciones ambientales de luz
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div
                  className={`text-2xl md:text-3xl font-bold ${
                    isDarkTheme ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  16
                </div>
                <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Semanas
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl md:text-3xl font-bold ${
                    isDarkTheme ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  4
                </div>
                <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Integrantes
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl md:text-3xl font-bold ${
                    isDarkTheme ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  1
                </div>
                <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Rover
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
              <button
                onClick={() => scrollToSection("project")}
                className="button-hover flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold text-sm md:text-base"
              >
                <FaRocket className="w-4 h-4" />
                Ver Proyecto
              </button>
              <button
                onClick={() => scrollToSection("tracking")}
                className={`button-hover flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 glassmorphism rounded-full font-semibold text-sm md:text-base ${
                  isDarkTheme ? "text-white" : "text-gray-800"
                }`}
              >
                <FaCog className="w-4 h-4" />
                Seguimiento
              </button>
            </div>

            {/* Features Icons */}
            <div className="flex justify-center gap-6 md:gap-8">
              <div className="text-center">
                <div className="p-3 md:p-4 glassmorphism rounded-full mb-2">
                  <FaLightbulb className={`w-5 h-5 md:w-6 md:h-6 ${isDarkTheme ? "text-amber-400" : "text-amber-500"}`} />
                </div>
                <span className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Control Inteligente
                </span>
              </div>
              <div className="text-center">
                <div className="p-3 md:p-4 glassmorphism rounded-full mb-2">
                  <FaCog className={`w-5 h-5 md:w-6 md:h-6 ${isDarkTheme ? "text-teal-400" : "text-teal-500"}`} />
                </div>
                <span className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Automatización
                </span>
              </div>
              <div className="text-center">
                <div className="p-3 md:p-4 glassmorphism rounded-full mb-2">
                  <FaRocket className={`w-5 h-5 md:w-6 md:h-6 ${isDarkTheme ? "text-purple-400" : "text-purple-500"}`} />
                </div>
                <span className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Innovación
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button onClick={() => scrollToSection("team")} className="animate-bounce">
            <FaChevronDown className={`w-6 h-6 md:w-8 md:h-8 ${isDarkTheme ? "text-white" : "text-gray-800"}`} />
          </button>
        </div>
      </section>
    )
  }
)

HeroSection.displayName = 'HeroSection'