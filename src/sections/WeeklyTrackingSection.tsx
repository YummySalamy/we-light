import React, { forwardRef, useState } from 'react'
import { FaCalendarWeek, FaCheckCircle, FaClock, FaExclamationTriangle, FaChevronRight } from 'react-icons/fa'

interface WeeklyTrackingSectionProps {
  isDarkTheme: boolean
}

interface WeekData {
  week: number
  title: string
  status: 'completed' | 'in-progress' | 'pending'
  description: string
  objectives: string[]
  deliverables: string[]
  notes?: string
  date: string
}

// Datos de ejemplo para las primeras 3 semanas
const weeklyData: WeekData[] = [
  {
    week: 1,
    title: "Planificación y Análisis de Requisitos",
    status: 'completed',
    description: "Definición del alcance del proyecto y análisis de requisitos técnicos para el sistema de control de iluminación.",
    objectives: [
      "Definir objetivos específicos del proyecto",
      "Analizar requisitos técnicos del rover",
      "Establecer cronograma de trabajo",
      "Asignar roles y responsabilidades"
    ],
    deliverables: [
      "Documento de requisitos técnicos",
      "Cronograma del proyecto",
      "Matriz de responsabilidades"
    ],
    notes: "Se establecieron las bases sólidas para el desarrollo del proyecto. Todos los miembros del equipo están alineados con los objetivos.",
    date: "Semana del 15-19 Enero 2024"
  },
  {
    week: 2,
    title: "Investigación y Diseño Conceptual",
    status: 'completed',
    description: "Investigación de tecnologías disponibles y desarrollo del diseño conceptual del sistema de control.",
    objectives: [
      "Investigar sensores de luz disponibles",
      "Diseñar arquitectura del sistema",
      "Evaluar opciones de microcontroladores",
      "Crear diagramas de flujo del sistema"
    ],
    deliverables: [
      "Reporte de investigación tecnológica",
      "Diagramas de arquitectura del sistema",
      "Especificaciones de componentes"
    ],
    notes: "Se identificaron los componentes clave y se definió la arquitectura general del sistema. El diseño conceptual está listo para la fase de prototipado.",
    date: "Semana del 22-26 Enero 2024"
  },
  {
    week: 3,
    title: "Desarrollo de Prototipo Inicial",
    status: 'in-progress',
    description: "Construcción del primer prototipo del sistema de control de iluminación con componentes básicos.",
    objectives: [
      "Adquirir componentes necesarios",
      "Ensamblar circuito básico",
      "Programar lógica de control inicial",
      "Realizar pruebas preliminares"
    ],
    deliverables: [
      "Prototipo funcional básico",
      "Código fuente inicial",
      "Reporte de pruebas preliminares"
    ],
    notes: "En desarrollo. Se han adquirido la mayoría de componentes y se está trabajando en el ensamblaje del circuito.",
    date: "Semana del 29 Enero - 2 Febrero 2024"
  }
]

// Generar semanas pendientes (4-16)
const generatePendingWeeks = (): WeekData[] => {
  const pendingWeeks: WeekData[] = []
  for (let i = 4; i <= 16; i++) {
    pendingWeeks.push({
      week: i,
      title: `Semana ${i} - Por Definir`,
      status: 'pending',
      description: "Actividades y objetivos por definir según el progreso del proyecto.",
      objectives: ["Por definir"],
      deliverables: ["Por definir"],
      date: `Semana ${i}`
    })
  }
  return pendingWeeks
}

const allWeeks = [...weeklyData, ...generatePendingWeeks()]

export const WeeklyTrackingSection = forwardRef<HTMLElement, WeeklyTrackingSectionProps>(
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
            className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            Seguimiento Semanal
          </h2>
          <p
            className={`text-center mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Progreso detallado del proyecto semana a semana, desde la planificación inicial 
            hasta la implementación final
          </p>

          {/* Progress Overview */}
          <div className="glassmorphism-strong rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 text-green-500`}
                >
                  {allWeeks.filter(w => w.status === 'completed').length}
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Completadas
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 text-yellow-500`}
                >
                  {allWeeks.filter(w => w.status === 'in-progress').length}
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  En Progreso
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 text-gray-400`}
                >
                  {allWeeks.filter(w => w.status === 'pending').length}
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Pendientes
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allWeeks.map((week, index) => (
              <div
                key={week.week}
                className={`card-hover glassmorphism-strong rounded-2xl border-2 ${getStatusColor(week.status)} animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  {/* Week Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-500 rounded-full">
                        <FaCalendarWeek className="text-white w-4 h-4" />
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-semibold ${
                            isDarkTheme ? "text-white" : "text-gray-800"
                          }`}
                        >
                          Semana {week.week}
                        </h3>
                        <p
                          className={`text-xs ${
                            isDarkTheme ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {week.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(week.status)}
                    </div>
                  </div>

                  {/* Week Title */}
                  <h4
                    className={`text-base font-medium mb-3 ${
                      isDarkTheme ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {week.title}
                  </h4>

                  {/* Week Description */}
                  <p
                    className={`text-sm mb-4 ${
                      isDarkTheme ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {week.description}
                  </p>

                  {/* Expand Button */}
                  {week.status !== 'pending' && (
                    <button
                      onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
                      className="flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors text-sm font-medium"
                    >
                      <FaChevronRight 
                        className={`w-3 h-3 transition-transform ${
                          expandedWeek === week.week ? 'rotate-90' : ''
                        }`} 
                      />
                      {expandedWeek === week.week ? 'Ocultar detalles' : 'Ver detalles'}
                    </button>
                  )}

                  {/* Expanded Content */}
                  {expandedWeek === week.week && week.status !== 'pending' && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      {/* Objectives */}
                      <div className="mb-4">
                        <h5
                          className={`text-sm font-semibold mb-2 ${
                            isDarkTheme ? "text-white" : "text-gray-800"
                          }`}
                        >
                          Objetivos:
                        </h5>
                        <ul className="space-y-1">
                          {week.objectives.map((objective, i) => (
                            <li
                              key={i}
                              className={`text-xs flex items-start gap-2 ${
                                isDarkTheme ? "text-gray-300" : "text-gray-600"
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
                          className={`text-sm font-semibold mb-2 ${
                            isDarkTheme ? "text-white" : "text-gray-800"
                          }`}
                        >
                          Entregables:
                        </h5>
                        <ul className="space-y-1">
                          {week.deliverables.map((deliverable, i) => (
                            <li
                              key={i}
                              className={`text-xs flex items-start gap-2 ${
                                isDarkTheme ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              <FaCheckCircle className="text-amber-500 w-3 h-3 mt-0.5 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Notes */}
                      {week.notes && (
                        <div>
                          <h5
                            className={`text-sm font-semibold mb-2 ${
                              isDarkTheme ? "text-white" : "text-gray-800"
                            }`}
                          >
                            Notas:
                          </h5>
                          <p
                            className={`text-xs italic ${
                              isDarkTheme ? "text-teal-300" : "text-teal-600"
                            }`}
                          >
                            {week.notes}
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

WeeklyTrackingSection.displayName = 'WeeklyTrackingSection'