import React from 'react'
import { FaHeart, FaLightbulb, FaRocket, FaCog, FaUsers } from 'react-icons/fa'

interface FooterProps {
  isDarkTheme: boolean
  scrollToSection: (section: string) => void
}

export const Footer: React.FC<FooterProps> = ({ isDarkTheme, scrollToSection }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Equipo", id: "team" },
    { label: "Proyecto", id: "project" },
    { label: "Seguimiento", id: "tracking" },
    { label: "Presupuesto", id: "budget" },
    { label: "Contacto", id: "contact" },
  ]

  const projectInfo = [
    "Sistema de Control Inteligente",
    "Detección Automática de Luz",
    "Integración con Rover",
    "Optimización Energética",
  ]

  return (
    <footer className="py-8 md:py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-amber-400 rounded-full flex items-center justify-center">
                <FaLightbulb className="text-white w-5 h-5" />
              </div>
              <h3 className={`text-lg md:text-xl font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                WeLight
              </h3>
            </div>
            <p className={`mb-4 text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              Desarrollando tecnología innovadora para el control inteligente de sistemas de 
              iluminación en rovers. Un proyecto de 4 ingenieros comprometidos con la excelencia.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <FaUsers className="text-teal-500" />
              <span className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
                4 Integrantes • 16 Semanas • 1 Objetivo
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-base md:text-lg font-semibold mb-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`transition-colors hover:text-teal-500 text-sm md:text-base ${
                      isDarkTheme ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Features */}
          <div>
            <h4
              className={`text-base md:text-lg font-semibold mb-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              Características del Proyecto
            </h4>
            <ul className={`space-y-2 text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              {projectInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaRocket className="text-teal-500 w-3 h-3 flex-shrink-0" />
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`pt-6 md:pt-8 border-t border-white/10 text-center text-sm md:text-base ${
            isDarkTheme ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="flex items-center justify-center gap-2">
              Hecho con <FaHeart className="text-red-500" /> por el equipo WeLight
            </p>
            <p>© {currentYear} WeLight. Todos los derechos reservados.</p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <FaCog className="text-teal-500" />
              Sistema en Desarrollo
            </span>
            <span className="flex items-center gap-1">
              <FaLightbulb className="text-amber-500" />
              Innovación Continua
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}