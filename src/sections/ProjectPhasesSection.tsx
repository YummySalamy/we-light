import { forwardRef, useState } from 'react'
import { FaCalendarWeek, FaCheckCircle, FaClock, FaExclamationTriangle, FaChevronRight } from 'react-icons/fa'

interface ProjectPhasesSectionProps {
  isDarkTheme: boolean
}

interface PhaseData {
  phase: number
  title: string
  status: 'completed' | 'in-progress' | 'pending'
  description: string
  objectives: string[]
  deliverables: string[]
  notes?: string
  date: string
}

// Datos reales de las fases del proyecto basados en tracking.txt
const projectPhases: PhaseData[] = [
  {
    phase: 1,
    title: "Diseño Inicial y Simulaciones",
    status: 'completed',
    description: "Diseño conceptual del amplificador operacional y simulaciones iniciales con LTSpice.",
    objectives: [
      "Realizar simulaciones iniciales con LTSpice",
      "Calcular valores de resistencias necesarios",
      "Seleccionar transistores apropiados (2N3904)",
      "Diseñar esquemático del espejo de corriente"
    ],
    deliverables: [
      "Esquemático del espejo de corriente",
      "Simulaciones validadas en LTSpice",
      "Cálculos de componentes documentados"
    ],
    notes: "Se establecieron las bases del diseño con simulaciones exitosas y selección de componentes apropiados.",
    date: "Fase Inicial"
  },
  {
    phase: 2,
    title: "Implementación del Espejo de Corriente",
    status: 'completed',
    description: "Montaje y pruebas del espejo de corriente en protoboard, verificando el funcionamiento de los transistores.",
    objectives: [
      "Realizar primer montaje en protoboard",
      "Verificar transistores en estado activo",
      "Medir corriente del colector en ambos transistores",
      "Validar voltajes de operación"
    ],
    deliverables: [
      "Prototipo funcional del espejo de corriente",
      "Mediciones validadas de corriente T1 y T2",
      "Mediciones validadas de voltaje T1 y T2"
    ],
    notes: "Ambos transistores mostraron estado activo correcto. Las mediciones de corriente y voltaje fueron satisfactorias.",
    date: "Semana 2"
  },
  {
    phase: 3,
    title: "Desarrollo del Par Diferencial",
    status: 'completed',
    description: "Diseño, simulación e implementación del par diferencial con resolución de problemas de estabilidad de señal.",
    objectives: [
      "Diseñar circuito del par diferencial",
      "Realizar simulaciones en LTSpice",
      "Implementar pruebas con señales AC",
      "Resolver problemas de estabilidad y distorsión de señal",
      "Ajustar parámetros (resistencias, frecuencia, voltaje)"
    ],
    deliverables: [
      "Esquemático del par diferencial",
      "Señales de entrada/salida validadas",
      "Inversión y desfase correctos verificados"
    ],
    notes: "Después de resolver problemas iniciales con el generador de señales y estabilidad, se logró una perfecta inversión y desfase de la señal.",
    date: "Semanas 3-4"
  },
  {
    phase: 4,
    title: "Etapa de Degeneración",
    status: 'completed',
    description: "Implementación y validación de la etapa de degeneración del amplificador operacional.",
    objectives: [
      "Modelar la etapa de degeneración",
      "Realizar simulaciones de la nueva etapa",
      "Validar señales de salida vs entrada"
    ],
    deliverables: [
      "Circuito de degeneración funcional",
      "Simulaciones validadas",
      "Mediciones de señales de salida"
    ],
    notes: "La etapa de degeneración se integró exitosamente, mostrando las características esperadas en las simulaciones.",
    date: "Semana 5"
  },
  {
    phase: 5,
    title: "Carga Activa y Cascodo",
    status: 'completed',
    description: "Integración de cascodo, common source y carga activa al circuito amplificador.",
    objectives: [
      "Modelar circuito con cascodo",
      "Integrar common source",
      "Implementar carga activa",
      "Realizar pruebas sin retroalimentación"
    ],
    deliverables: [
      "Circuito completo sin feedback",
      "Simulaciones del sistema integrado",
      "Validación de etapas combinadas"
    ],
    notes: "Se completó la integración de todas las etapas principales del amplificador, preparando el circuito para la retroalimentación.",
    date: "Semana 6"
  },
  {
    phase: 6,
    title: "Retroalimentación y Circuito Final",
    status: 'completed',
    description: "Implementación de retroalimentación y estabilización del circuito completo del OP-AMP.",
    objectives: [
      "Agregar feedback al circuito",
      "Realizar montaje completo en protoboard",
      "Identificar y resolver interferencias",
      "Estabilizar señales de entrada/salida",
      "Validar funcionamiento completo del OP-AMP"
    ],
    deliverables: [
      "Circuito OP-AMP completo y funcional",
      "Señales estables entrada/salida",
      "Montaje de prueba validado y documentado"
    ],
    notes: "Después de resolver problemas de interferencia mediante ajustes de parámetros, se logró estabilidad completa del circuito. El OP-AMP diseñado funciona correctamente.",
    date: "Semanas 7-8"
  },
  {
    phase: 7,
    title: "Transición a PCB y Diseño Profesional",
    status: 'completed',
    description: "Diseño de PCB, transición a baquelita e implementación de sistema de alimentación profesional.",
    objectives: [
      "Diseñar PCB inicial del circuito",
      "Tomar medidas y dimensiones del espacio disponible",
      "Realizar transición a baquelita",
      "Seleccionar microcontrolador (ESP32)",
      "Implementar regulador de voltaje (12V a 5V)",
      "Seleccionar OP-AMP comercial (LM358) como comparador"
    ],
    deliverables: [
      "PCB diseñada y fabricada",
      "Montaje profesional en baquelita",
      "Sistema de alimentación funcional",
      "Circuito comparador con LM358"
    ],
    notes: "Se cambió de PCB impresa a baquelita para mejor control y flexibilidad. Se integró regulador de voltaje para alimentar ESP32 y sensores desde la fuente de 12V del carrito.",
    date: "Septiembre 2024"
  },
  {
    phase: 8,
    title: "Integración Final y Pruebas en Carrito EPICS",
    status: 'in-progress',
    description: "Integración completa del sistema de control automatizado de luces en el carrito EPICS con pruebas finales.",
    objectives: [
      "Implementar relé de estado sólido como switch",
      "Conectar los 3 sensores al sistema",
      "Realizar cableado completo del sistema",
      "Montar circuito en espacio designado del carrito",
      "Ejecutar pruebas finales del sistema completo",
      "Validar funcionamiento automatizado de luces"
    ],
    deliverables: [
      "Sistema completo integrado en el carrito",
      "Cableado y conexiones finales documentadas",
      "Sistema automatizado de luces funcional",
      "Documentación técnica final del proyecto"
    ],
    notes: "Sistema montado y en fase de pruebas finales. El circuito integra OP-AMP, comparador LM358, relé de estado sólido, ESP32 y sensores.",
    date: "Octubre 2024 - En Progreso"
  }
]

// Todas las fases del proyecto
const allPhases = projectPhases

export const ProjectPhasesSection = forwardRef<HTMLElement, ProjectPhasesSectionProps>(
  ({ isDarkTheme }, ref) => {
    const [expandedWeek, setExpandedWeek] = useState<number | null>(null)

    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'completed':
          return <FaCheckCircle className="text-green-500" />
        case 'in-progress':
          return <FaClock className="text-yellow-500" />
        case 'pending':
          return <FaExclamationTriangle className="text-gray-400" />
        default:
          return <FaClock className="text-gray-400" />
      }
    }

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'completed':
          return 'border-green-500 bg-green-500/10'
        case 'in-progress':
          return 'border-yellow-500 bg-yellow-500/10'
        case 'pending':
          return 'border-gray-400 bg-gray-400/10'
        default:
          return 'border-gray-400 bg-gray-400/10'
      }
    }

    return (
      <section ref={ref} className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${isDarkTheme ? "text-white" : "text-gray-800"
              }`}
          >
            Etapas del Proyecto
          </h2>
          <p
            className={`text-center mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto ${isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Progreso detallado por etapas de desarrollo, desde el diseño inicial del OP-AMP
            hasta la integración final en el carrito EPICS
          </p>

          {/* Progress Overview */}
          <div className="glassmorphism-strong rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 text-green-500`}
                >
                  {allPhases.filter(p => p.status === 'completed').length}
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Completadas
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 text-yellow-500`}
                >
                  {allPhases.filter(p => p.status === 'in-progress').length}
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  En Progreso
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 text-gray-400`}
                >
                  {allPhases.filter(p => p.status === 'pending').length}
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Pendientes
                </div>
              </div>
            </div>
          </div>

          {/* Phase Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`card-hover glassmorphism-strong rounded-2xl border-2 ${getStatusColor(phase.status)} animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-500 rounded-full">
                        <FaCalendarWeek className="text-white w-4 h-4" />
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"
                            }`}
                        >
                          Fase {phase.phase}
                        </h3>
                        <p
                          className={`text-xs ${isDarkTheme ? "text-gray-400" : "text-gray-500"
                            }`}
                        >
                          {phase.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(phase.status)}
                    </div>
                  </div>

                  {/* Phase Title */}
                  <h4
                    className={`text-base font-medium mb-3 ${isDarkTheme ? "text-white" : "text-gray-800"
                      }`}
                  >
                    {phase.title}
                  </h4>

                  {/* Phase Description */}
                  <p
                    className={`text-sm mb-4 ${isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    {phase.description}
                  </p>

                  {/* Expand Button */}
                  {phase.status !== 'pending' && (
                    <button
                      onClick={() => setExpandedWeek(expandedWeek === phase.phase ? null : phase.phase)}
                      className="flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors text-sm font-medium"
                    >
                      <FaChevronRight
                        className={`w-3 h-3 transition-transform ${expandedWeek === phase.phase ? 'rotate-90' : ''
                          }`}
                      />
                      {expandedWeek === phase.phase ? 'Ocultar detalles' : 'Ver detalles'}
                    </button>
                  )}

                  {/* Expanded Content */}
                  {expandedWeek === phase.phase && phase.status !== 'pending' && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      {/* Objectives */}
                      <div className="mb-4">
                        <h5
                          className={`text-sm font-semibold mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"
                            }`}
                        >
                          Objetivos:
                        </h5>
                        <ul className="space-y-1">
                          {phase.objectives.map((objective, i) => (
                            <li
                              key={i}
                              className={`text-xs flex items-start gap-2 ${isDarkTheme ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                              <FaCheckCircle className="text-teal-500 w-3 h-3 mt-0.5 flex-shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="mb-4">
                        <h5
                          className={`text-sm font-semibold mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"
                            }`}
                        >
                          Entregables:
                        </h5>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, i) => (
                            <li
                              key={i}
                              className={`text-xs flex items-start gap-2 ${isDarkTheme ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                              <FaCheckCircle className="text-amber-500 w-3 h-3 mt-0.5 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Notes */}
                      {phase.notes && (
                        <div>
                          <h5
                            className={`text-sm font-semibold mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"
                              }`}
                          >
                            Notas:
                          </h5>
                          <p
                            className={`text-xs italic ${isDarkTheme ? "text-teal-300" : "text-teal-600"
                              }`}
                          >
                            {phase.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

ProjectPhasesSection.displayName = 'ProjectPhasesSection'