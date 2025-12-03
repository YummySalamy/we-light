import { forwardRef } from 'react'
import { FaMoneyBillWave, FaShoppingCart, FaCalculator, FaChartPie } from 'react-icons/fa'

interface BudgetSectionProps {
  isDarkTheme: boolean
}

interface BudgetItem {
  elemento: string
  cantidad: number
  precio: number
  proveedor: string
  categoria: string
}

const budgetItems: BudgetItem[] = [
  {
    elemento: "Baquelita",
    cantidad: 1,
    precio: 5000,
    proveedor: "Local",
    categoria: "Materiales"
  },
  {
    elemento: "Borneras de dos",
    cantidad: 2,
    precio: 1200,
    proveedor: "Local",
    categoria: "Conectores"
  },
  {
    elemento: "Regleta de pines macho",
    cantidad: 1,
    precio: 3000,
    proveedor: "Local",
    categoria: "Conectores"
  },
  {
    elemento: "Regleta de pines hembra",
    cantidad: 1,
    precio: 3000,
    proveedor: "Local",
    categoria: "Conectores"
  },
  {
    elemento: "LM7805",
    cantidad: 1,
    precio: 2000,
    proveedor: "Local",
    categoria: "Semiconductores"
  },
  {
    elemento: "LM358",
    cantidad: 3,
    precio: 1000,
    proveedor: "Local",
    categoria: "Semiconductores"
  },
  {
    elemento: "Socket LM358",
    cantidad: 1,
    precio: 500,
    proveedor: "Local",
    categoria: "Conectores"
  },
  {
    elemento: "ESP32",
    cantidad: 1,
    precio: 24000,
    proveedor: "Local",
    categoria: "Microcontroladores"
  },
  {
    elemento: "Cables",
    cantidad: 1,
    precio: 0,
    proveedor: "Propio",
    categoria: "Cables"
  },
  {
    elemento: "Relay 12v (dañado)",
    cantidad: 1,
    precio: 25000,
    proveedor: "Extranjero",
    categoria: "Componentes"
  },
  {
    elemento: "Relay estado solido",
    cantidad: 1,
    precio: 35000,
    proveedor: "Local",
    categoria: "Componentes"
  },
  {
    elemento: "Cables calibre 20(10m)",
    cantidad: 1,
    precio: 20000,
    proveedor: "Local",
    categoria: "Cables"
  }
]

export const BudgetSection = forwardRef<HTMLElement, BudgetSectionProps>(
  ({ isDarkTheme }, ref) => {
    const totalCost = budgetItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

    const categoryTotals = budgetItems.reduce((acc, item) => {
      const total = item.precio * item.cantidad
      acc[item.categoria] = (acc[item.categoria] || 0) + total
      return acc
    }, {} as Record<string, number>)

    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(amount)
    }

    return (
      <section ref={ref} className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${isDarkTheme ? "text-white" : "text-gray-800"
              }`}
          >
            Presupuesto y Materiales
          </h2>
          <p
            className={`text-center mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto ${isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Detalle completo de componentes, costos y proveedores para el desarrollo
            del sistema de control de iluminación
          </p>

          {/* Budget Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-12">
            <div className="glassmorphism-strong rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl">
                <FaMoneyBillWave />
              </div>
              <h3
                className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkTheme ? "text-green-400" : "text-green-600"
                  }`}
              >
                {formatCurrency(totalCost)}
              </h3>
              <p className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                Costo Total del Proyecto
              </p>
            </div>

            <div className="glassmorphism-strong rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl">
                <FaShoppingCart />
              </div>
              <h3
                className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkTheme ? "text-teal-400" : "text-teal-600"
                  }`}
              >
                {budgetItems.length}
              </h3>
              <p className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                Componentes Diferentes
              </p>
            </div>

            <div className="glassmorphism-strong rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl">
                <FaCalculator />
              </div>
              <h3
                className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkTheme ? "text-purple-400" : "text-purple-600"
                  }`}
              >
                {budgetItems.reduce((sum, item) => sum + item.cantidad, 0)}
              </h3>
              <p className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                Unidades Totales
              </p>
            </div>
          </div>

          {/* Budget Table */}
          <div className="glassmorphism-strong rounded-2xl overflow-hidden mb-8 md:mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`${isDarkTheme ? "bg-gray-800/50" : "bg-gray-100/50"}`}>
                    <th className={`text-left p-4 font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                      Elemento
                    </th>
                    <th className={`text-center p-4 font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                      Cantidad
                    </th>
                    <th className={`text-right p-4 font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                      Precio Unit.
                    </th>
                    <th className={`text-right p-4 font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                      Total
                    </th>
                    <th className={`text-left p-4 font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                      Proveedor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {budgetItems.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t ${isDarkTheme ? "border-gray-700" : "border-gray-200"
                        } hover:${isDarkTheme ? "bg-gray-800/30" : "bg-gray-50/30"} transition-colors`}
                    >
                      <td className="p-4">
                        <div>
                          <div className={`font-medium ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                            {item.elemento}
                          </div>
                          <div className={`text-xs ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>
                            {item.categoria}
                          </div>
                        </div>
                      </td>
                      <td className={`p-4 text-center ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                        {item.cantidad}
                      </td>
                      <td className={`p-4 text-right font-mono ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                        {formatCurrency(item.precio)}
                      </td>
                      <td className={`p-4 text-right font-mono font-semibold ${isDarkTheme ? "text-teal-400" : "text-teal-600"}`}>
                        {formatCurrency(item.precio * item.cantidad)}
                      </td>
                      <td className={`p-4 text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>
                        {item.proveedor}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className={`border-t-2 ${isDarkTheme ? "border-teal-500" : "border-teal-600"} font-bold`}>
                    <td className={`p-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`} colSpan={3}>
                      TOTAL DEL PROYECTO
                    </td>
                    <td className={`p-4 text-right font-mono text-lg ${isDarkTheme ? "text-teal-400" : "text-teal-600"}`}>
                      {formatCurrency(totalCost)}
                    </td>
                    <td className="p-4"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="glassmorphism-strong rounded-2xl p-6 md:p-8">
            <h3
              className={`text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2 ${isDarkTheme ? "text-white" : "text-gray-800"
                }`}
            >
              <FaChartPie className="text-teal-500" />
              Desglose por Categoría
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(categoryTotals).map(([category, total]) => (
                <div
                  key={category}
                  className="glassmorphism rounded-lg p-4 flex justify-between items-center"
                >
                  <span className={`font-medium ${isDarkTheme ? "text-gray-300" : "text-gray-700"}`}>
                    {category}
                  </span>
                  <span className={`font-mono font-semibold ${isDarkTheme ? "text-teal-400" : "text-teal-600"}`}>
                    {formatCurrency(total)}
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

BudgetSection.displayName = 'BudgetSection'