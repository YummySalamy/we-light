import React, { forwardRef, useState, useCallback } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheck, FaTimes } from 'react-icons/fa'

interface ContactSectionProps {
  isDarkTheme: boolean
}

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ isDarkTheme }, ref) => {
    const [contactForm, setContactForm] = useState<ContactForm>({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    const [formErrors, setFormErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const validateForm = useCallback((form: ContactForm): FormErrors => {
      const errors: FormErrors = {}
      if (!form.name.trim()) errors.name = "El nombre es requerido"
      if (!form.email.trim()) {
        errors.email = "El email es requerido"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = "Por favor ingresa un email válido"
      }
      if (!form.subject.trim()) errors.subject = "El asunto es requerido"
      if (!form.message.trim()) errors.message = "El mensaje es requerido"
      else if (form.message.length < 10) errors.message = "El mensaje debe tener al menos 10 caracteres"
      return errors
    }, [])

    const handleContactSubmit = useCallback(
      async (e: React.FormEvent) => {
        e.preventDefault()
        const errors = validateForm(contactForm)
        setFormErrors(errors)
        if (Object.keys(errors).length > 0) return

        setIsSubmitting(true)
        setSubmitStatus("idle")
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 2000))
          console.log("Contact form submitted:", contactForm)
          setSubmitStatus("success")
          setContactForm({ name: "", email: "", subject: "", message: "" })
        } catch (error) {
          setSubmitStatus("error")
        } finally {
          setIsSubmitting(false)
        }
      },
      [contactForm, validateForm]
    )

    const contactInfo = [
      {
        icon: <FaEnvelope />,
        title: "Email",
        value: "welight.team@gmail.com",
        link: "mailto:welight.team@gmail.com"
      },
      {
        icon: <FaPhone />,
        title: "Teléfono",
        value: "+57 300 123 4567",
        link: "tel:+573001234567"
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Ubicación",
        value: "Barranquilla, Colombia",
        link: null
      }
    ]

    return (
      <section ref={ref} className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            Contacto
          </h2>
          <p
            className={`text-center mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            ¿Tienes preguntas sobre nuestro proyecto? ¿Interesado en colaborar? 
            No dudes en contactarnos
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="glassmorphism-strong rounded-2xl p-6 md:p-8 animate-slide-in-left">
              <h3
                className={`text-xl md:text-2xl font-semibold mb-6 ${
                  isDarkTheme ? "text-white" : "text-gray-800"
                }`}
              >
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-teal-500 rounded-full">
                      <div className="text-white w-4 h-4 md:w-5 md:h-5">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <p className={`font-medium text-sm md:text-base ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-teal-500 hover:text-teal-600 transition-colors text-sm md:text-base break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className={`text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Info */}
              <div className="mt-8 p-4 glassmorphism rounded-lg">
                <h4
                  className={`text-base md:text-lg font-semibold mb-3 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  Sobre WeLigh
                </h4>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Somos un equipo de 4 ingenieros especializados en el desarrollo de sistemas 
                  inteligentes para rovers. Nuestro proyecto actual se enfoca en crear un 
                  sistema de control automático de iluminación basado en condiciones ambientales.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glassmorphism-strong rounded-2xl p-6 md:p-8 animate-slide-in-right">
              <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base ${
                      formErrors.name
                        ? "border-red-500"
                        : isDarkTheme
                          ? "border-gray-600 text-white placeholder-gray-400"
                          : "border-gray-300 text-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                      <FaTimes className="w-3 h-3" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base ${
                      formErrors.email
                        ? "border-red-500"
                        : isDarkTheme
                          ? "border-gray-600 text-white placeholder-gray-400"
                          : "border-gray-300 text-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="tu.email@ejemplo.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                      <FaTimes className="w-3 h-3" />
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                  >
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base ${
                      formErrors.subject
                        ? "border-red-500"
                        : isDarkTheme
                          ? "border-gray-600 text-white placeholder-gray-400"
                          : "border-gray-300 text-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="Consulta sobre el proyecto, colaboración, etc."
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                      <FaTimes className="w-3 h-3" />
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                    className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none text-sm md:text-base ${
                      formErrors.message
                        ? "border-red-500"
                        : isDarkTheme
                          ? "border-gray-600 text-white placeholder-gray-400"
                          : "border-gray-300 text-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="Cuéntanos sobre tu consulta, ideas de colaboración o cualquier pregunta sobre nuestro proyecto..."
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                      <FaTimes className="w-3 h-3" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-hover w-full flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>

                {/* Form Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 md:p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <FaCheck className="text-green-500 w-4 h-4 md:w-5 md:h-5" />
                    <p className="text-green-500 font-medium text-sm md:text-base">
                      ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                    </p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 md:p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <FaTimes className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
                    <p className="text-red-500 font-medium text-sm md:text-base">
                      Algo salió mal. Por favor intenta de nuevo o contáctanos directamente.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

ContactSection.displayName = 'ContactSection'