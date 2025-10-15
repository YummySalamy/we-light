import React, { forwardRef } from 'react'
import { FaPalette, FaBullhorn, FaCogs, FaArchive } from 'react-icons/fa'
import DesignLeaderPic from '../assets/members/design_leader.jpeg'
import COMOfficerPic from '../assets/members/com_officer.jpeg'
import RFManagerPic from '../assets/members/r_and_f.jpeg'

interface TeamSectionProps {
  isDarkTheme: boolean
}

interface TeamMember {
  name: string
  role: string
  description: string
  icon: React.ReactNode
  image?: string
  color: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Juan Noriega",
    role: "Design Leader",
    description: "Líder de diseño encargado de la conceptualización visual y experiencia de usuario del sistema de control de iluminación.",
    icon: <FaPalette />,
    image: DesignLeaderPic,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Sebastian Escobar",
    role: "COM Officer",
    description: "Oficial de comunicaciones responsable de la coordinación del equipo y la documentación del proyecto.",
    icon: <FaBullhorn />,
    image: COMOfficerPic,
    color: "from-blue-500 to-teal-500"
  },
  {
    name: "Daniel Henríquez",
    role: "R&F Manager",
    description: "Gerente de investigación y desarrollo, encargado de la implementación técnica y pruebas del sistema.",
    icon: <FaCogs />,
    image: RFManagerPic,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Juan Pino",
    role: "Archivist",
    description: "Archivista del proyecto, responsable de la organización y mantenimiento de toda la documentación técnica.",
    icon: <FaArchive />,
    color: "from-orange-500 to-red-500"
  }
]

export const TeamSection = forwardRef<HTMLElement, TeamSectionProps>(
  ({ isDarkTheme }, ref) => {
    return (
      <section ref={ref} className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            Nuestro Equipo
          </h2>
          <p
            className={`text-center mb-12 md:mb-16 text-base md:text-lg max-w-2xl mx-auto ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Un equipo multidisciplinario comprometido con la innovación y la excelencia en el desarrollo 
            de sistemas inteligentes para rovers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="card-hover glassmorphism-strong rounded-2xl p-6 text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar with Icon */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full`} />
                  <div className="relative w-full h-full rounded-full border-4 border-white/50 shadow-lg flex items-center justify-center text-white text-2xl md:text-3xl">
                    {/* {member.icon} */}
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      member.icon
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <h3
                  className={`text-lg md:text-xl font-semibold mb-2 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-teal-500 font-medium mb-3 text-sm md:text-base">
                  {member.role}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-12 md:mt-16 glassmorphism-strong rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 ${
                    isDarkTheme ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  4
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Especialistas
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 ${
                    isDarkTheme ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  100%
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Compromiso
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 ${
                    isDarkTheme ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  16
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Semanas Proyecto
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-2 ${
                    isDarkTheme ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  24/7
                </div>
                <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Dedicación
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

TeamSection.displayName = 'TeamSection'
