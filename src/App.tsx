import React, { useState, useEffect, useRef, useCallback } from "react"
import {
  FaSun,
  FaMoon,
  FaBars,
  FaLightbulb,
  FaUsers,
  FaCalendarWeek,
  FaMoneyBillWave,
  FaRocket,
  FaFileAlt,
} from "react-icons/fa"
import { HeroSection } from "./sections/HeroSection"
import { TeamSection } from "./sections/TeamSection"
import { ProjectSection } from "./sections/ProjectSection"
import { WeeklyTrackingSection } from "./sections/WeeklyTrackingSection"
import { BudgetSection } from "./sections/BudgetSection"
import { ContactSection } from "./sections/ContactSection"
import { Footer } from "./sections/Footer"
import "./App.css"

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // ==================== EFFECTS ====================
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkTheme(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
    if (isDarkTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkTheme])

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs.current)
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = sectionRefs.current[section]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest(".mobile-menu")) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // ==================== HANDLERS ====================
  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }, [])

  const navigationItems = [
    { id: "hero", label: "Inicio", icon: FaRocket },
    { id: "team", label: "Equipo", icon: FaUsers },
    { id: "project", label: "Proyecto", icon: FaLightbulb },
    { id: "tracking", label: "Seguimiento", icon: FaCalendarWeek },
    { id: "budget", label: "Presupuesto", icon: FaMoneyBillWave },
    { id: "contact", label: "Contacto", icon: FaFileAlt },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkTheme ? "dark" : ""}`}>
      {/* Background */}
      <div className="fixed inset-0 -z-10 transition-all duration-500">
        <div
          className={`absolute inset-0 ${
            isDarkTheme
              ? "bg-gradient-to-br from-gray-900 via-teal-900 to-gray-800"
              : "bg-gradient-to-br from-teal-50 via-amber-50 to-white"
          }`}
        />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-teal-500 rounded-full filter blur-3xl opacity-40 animate-float" />
          <div
            className="absolute bottom-20 right-10 w-64 h-64 md:w-80 md:h-80 bg-amber-400 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glassmorphism-strong rounded-full px-4 py-3 hidden md:block">
        <div className="flex items-center gap-4 lg:gap-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all ${
                activeSection === item.id
                  ? isDarkTheme
                    ? "bg-teal-500 text-white"
                    : "bg-teal-600 text-white"
                  : isDarkTheme
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-800 hover:bg-black/10"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 glassmorphism-strong rounded-full transition-all hover:scale-110 active:scale-95"
          aria-label="Toggle menu"
        >
          <FaBars className={`w-5 h-5 ${isDarkTheme ? "text-white" : "text-gray-800"}`} />
        </button>
        
        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-16 left-0 glassmorphism-strong rounded-2xl p-4 min-w-[200px] animate-slide-down">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? isDarkTheme
                        ? "bg-teal-500 text-white"
                        : "bg-teal-600 text-white"
                      : isDarkTheme
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-gray-800 hover:bg-black/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 glassmorphism-strong rounded-full transition-all hover:scale-110 active:scale-95 animate-pulse-glow"
        aria-label="Toggle theme"
      >
        {isDarkTheme ? (
          <FaSun className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
        ) : (
          <FaMoon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        )}
      </button>

      {/* Main Container */}
      <div className="relative min-h-screen">
        <HeroSection 
          ref={(el) => { sectionRefs.current["hero"] = el }} 
          isDarkTheme={isDarkTheme}
          scrollToSection={scrollToSection}
        />
        
        <TeamSection 
          ref={(el) => { sectionRefs.current["team"] = el }} 
          isDarkTheme={isDarkTheme}
        />
        
        <ProjectSection 
          ref={(el) => { sectionRefs.current["project"] = el }} 
          isDarkTheme={isDarkTheme}
        />
        
        <WeeklyTrackingSection 
          ref={(el) => { sectionRefs.current["tracking"] = el }} 
          isDarkTheme={isDarkTheme}
        />
        
        <BudgetSection 
          ref={(el) => { sectionRefs.current["budget"] = el }} 
          isDarkTheme={isDarkTheme}
        />
        
        <ContactSection 
          ref={(el) => { sectionRefs.current["contact"] = el }} 
          isDarkTheme={isDarkTheme}
        />
        
        <Footer isDarkTheme={isDarkTheme} scrollToSection={scrollToSection} />
      </div>
    </div>
  )
}

export default App