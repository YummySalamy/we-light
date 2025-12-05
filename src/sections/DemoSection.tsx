import { forwardRef } from 'react'
import { FaPlay, FaYoutube } from 'react-icons/fa'

interface DemoSectionProps {
    isDarkTheme: boolean
}

export const DemoSection = forwardRef<HTMLElement, DemoSectionProps>(
    ({ isDarkTheme }, ref) => {
        return (
            <section ref={ref} className="py-16 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaPlay className={`w-6 h-6 md:w-8 md:h-8 ${isDarkTheme ? 'text-teal-400' : 'text-teal-600'}`} />
                            <h2
                                className={`text-3xl md:text-4xl font-bold ${isDarkTheme ? "text-white" : "text-gray-800"
                                    }`}
                            >
                                Proyecto en Acción
                            </h2>
                            <FaYoutube className={`w-6 h-6 md:w-8 md:h-8 ${isDarkTheme ? 'text-red-400' : 'text-red-600'}`} />
                        </div>
                        <p
                            className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkTheme ? "text-gray-300" : "text-gray-600"
                                }`}
                        >
                            Mira el sistema de control automatizado de luces funcionando en el carrito EPICS
                        </p>
                    </div>

                    {/* Video Container - Centered with max width */}
                    <div className="glassmorphism-strong rounded-2xl p-4 md:p-8 animate-slide-in-up">
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-2xl">
                                {/* YouTube Shorts Embed - Vertical format */}
                                <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                                        src="https://www.youtube.com/embed/l4roGOVqSQQ"
                                        title="Demostración del Sistema de Control de Luces - Carrito EPICS"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        style={{
                                            border: 'none',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Video Description */}
                        <div className="mt-6 text-center">
                            <h3
                                className={`text-lg md:text-xl font-semibold mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"
                                    }`}
                            >
                                Sistema Automatizado de Iluminación
                            </h3>
                            <p
                                className={`text-sm md:text-base max-w-3xl mx-auto ${isDarkTheme ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                El video muestra el funcionamiento completo del sistema: sensores detectando condiciones,
                                microcontrolador procesando datos, y luces respondiendo automáticamente.
                            </p>
                        </div>

                        {/* Technical Highlights */}
                        <div className="grid md:grid-cols-3 gap-4 mt-6">
                            <div className={`p-4 rounded-xl ${isDarkTheme ? 'bg-white/5' : 'bg-black/5'} transition-all hover:scale-105`}>
                                <div className={`text-sm font-semibold mb-1 ${isDarkTheme ? 'text-teal-400' : 'text-teal-600'}`}>
                                    Control Automático
                                </div>
                                <div className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Latencia de respuesta configurable por código (actualmente 5 segundos)
                                </div>
                            </div>
                            <div className={`p-4 rounded-xl ${isDarkTheme ? 'bg-white/5' : 'bg-black/5'} transition-all hover:scale-105`}>
                                <div className={`text-sm font-semibold mb-1 ${isDarkTheme ? 'text-amber-400' : 'text-amber-600'}`}>
                                    Integración Completa
                                </div>
                                <div className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                                    OP-AMP, ESP32, sensores y relés trabajando en conjunto
                                </div>
                            </div>
                            <div className={`p-4 rounded-xl ${isDarkTheme ? 'bg-white/5' : 'bg-black/5'} transition-all hover:scale-105`}>
                                <div className={`text-sm font-semibold mb-1 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>
                                    Montaje Profesional
                                </div>
                                <div className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Circuito en baquelita integrado en el carrito EPICS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
)

DemoSection.displayName = 'DemoSection'
