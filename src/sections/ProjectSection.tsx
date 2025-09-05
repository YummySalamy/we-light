import { forwardRef } from 'react'
import { FaLightbulb, FaCog, FaEye, FaMoon, FaSun, FaRocket, FaChartLine } from 'react-icons/fa'

interface ProjectSectionProps {
  isDarkTheme: boolean
}

export const ProjectSection = forwardRef<HTMLElement, ProjectSectionProps>(
  ({ isDarkTheme }, ref) => {
    const features = [
      {
        icon: <FaEye />,
        title: "Detección Automática",
        description: "Sensores de luz ambiente para detectar condiciones de iluminación en tiempo real"
      },
      {
        icon: <FaLightbulb />,
        title: "Control Inteligente",
        description: "Sistema que enciende/apaga luces automáticamente según las condiciones ambientales"
      },
      {
        icon: <FaCog />,
        title: "Integración Rover",
        description: "Diseñado específicamente para integrarse con los sistemas del rover"
      },
      {
        icon: <FaChartLine />,
        title: "Optimización Energética",
        description: "Gestión eficiente del consumo energético para maximizar la autonomía"
      }
    ]

    const specifications = [
      { label: "Voltaje de Operación", value: "12V DC" },
      { label: "Consumo Máximo", value: "< 2A" },
      { label: "Rango de Detección", value: "0-1000 lux" },
      { label: "Tiempo de Respuesta", value: "< 100ms" },
      { label: "Temperatura Operación", value: "-20°C a 60°C" },
      { label: "Protección", value: "IP65" }
    ]

    return (
      <section ref={ref} className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            Sobre el Proyecto
          </h2>

          {/* Project Description */}
          <div className="glassmorphism-strong rounded-3xl p-6 md:p-8 mb-8 md:mb-12 animate-slide-in-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className={`text-2xl md:text-3xl font-semibold mb-4 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  Sistema de Control Inteligente de Iluminación
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed mb-6 ${
                    isDarkTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Nuestro objetivo es diseñar e implementar un sistema inteligente para controlar las líneas 
                  de alimentación de las luces frontales y traseras del rover. El sistema será capaz de 
                  detectar automáticamente las condiciones de luz ambiente y activar o desactivar la 
                  iluminación según sea necesario.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <FaMoon className="text-blue-500" />
                    <span className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      Poca luz → Encendido
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaSun className="text-yellow-500" />
                    <span className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      Exceso luz → Apagado
                    </span>
                  </div>
                </div>
                <p
                  className={`text-sm italic ${
                    isDarkTheme ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  * Sistema completamente configurable y adaptable a diferentes condiciones operativas
                </p>
              </div>
              <div className="relative">
                <div className="glassmorphism rounded-2xl p-6 text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-amber-400 rounded-full animate-pulse-glow" />
                    <div className="relative w-full h-full rounded-full border-4 border-white/50 flex items-center justify-center text-white text-4xl md:text-5xl">
                      <FaRocket />
                    </div>
                  </div>
                  <h4
                    className={`text-lg font-semibold ${
                      isDarkTheme ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Rover WeLigh
                  </h4>
                  <p
                    className={`text-sm ${
                      isDarkTheme ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Sistema Integrado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-hover glassmorphism-strong rounded-2xl p-6 text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl">
                  {feature.icon}
                </div>
                <h4
                  className={`text-lg font-semibold mb-3 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  {feature.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="glassmorphism-strong rounded-2xl p-6 md:p-8 animate-slide-in-up">
            <h3
              className={`text-xl md:text-2xl font-semibold mb-6 text-center ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              Especificaciones Técnicas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-center p-3 glassmorphism rounded-lg"
                >
                  <span
                    className={`text-sm font-medium ${
                      isDarkTheme ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {spec.label}:
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      isDarkTheme ? "text-teal-300" : "text-teal-600"
                    }`}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
)

ProjectSection.displayName = 'ProjectSection'