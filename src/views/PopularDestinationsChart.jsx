import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';

const destinosData = [
  { nombre: 'París', visitantes: 15.83, continente: 'Europa', color: '#FF6B6B' },
  { nombre: 'Londres', visitantes: 15.64, continente: 'Europa', color: '#4ECDC4' },
  { nombre: 'Dubai', visitantes: 15.27, continente: 'Asia', color: '#45B7D1' },
  { nombre: 'Turquía', visitantes: 14.9, continente: 'Europa/Asia', color: '#96CEB4' },
  { nombre: 'Singapur', visitantes: 14.67, continente: 'Asia', color: '#FFEAA7' },
  { nombre: 'Nueva York', visitantes: 13.6, continente: 'América', color: '#DDA0DD' },
  { nombre: 'Kuala Lumpur', visitantes: 13.79, continente: 'Asia', color: '#98D8C8' },
  { nombre: 'Tokio', visitantes: 12.93, continente: 'Asia', color: '#F7DC6F' },
  { nombre: 'Estambul', visitantes: 12.56, continente: 'Europa/Asia', color: '#BB8FCE' },
  { nombre: 'Barcelona', visitantes: 12.15, continente: 'Europa', color: '#85C1E9' }
];

const continentesData = [
  { nombre: 'Europa', valor: 5, color: '#FF6B6B' },
  { nombre: 'Asia', valor: 4, color: '#4ECDC4' },
  { nombre: 'América', valor: 1, color: '#45B7D1' }
];

export default function DestinosPopulares() {
  const [vistaActual, setVistaActual] = useState('barras');

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{`${label}`}</p>
          <p className="text-blue-600">
            {`Visitantes: ${payload[0].value} millones`}
          </p>
          <p className="text-gray-600 text-sm">
            {`Continente: ${payload[0].payload.continente}`}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{`${payload[0].name}`}</p>
          <p className="text-blue-600">
            {`${payload[0].value} destinos`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🌍 Destinos Más Populares del Mundo
          </h1>
          <p className="text-gray-600 text-lg">
            Datos basados en millones de visitantes anuales
          </p>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setVistaActual('barras')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                vistaActual === 'barras'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📊 Gráfico de Barras
            </button>
            <button
              onClick={() => setVistaActual('torta')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                vistaActual === 'torta'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🥧 Distribución por Continente
            </button>
          </div>
        </div>

        {/* Gráfico de Barras */}
        {vistaActual === 'barras' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Top 10 Destinos Turísticos Mundiales
            </h2>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                data={destinosData}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="nombre" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                  stroke="#666"
                />
                <YAxis 
                  label={{ value: 'Visitantes (Millones)', angle: -90, position: 'insideLeft' }}
                  stroke="#666"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="visitantes" 
                  name="Visitantes Anuales (Millones)"
                  radius={[4, 4, 0, 0]}
                >
                  {destinosData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Gráfico de Torta */}
        {vistaActual === 'torta' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Distribución de Destinos por Continente
            </h2>
            <div className="flex justify-center">
              <ResponsiveContainer width={400} height={400}>
                <PieChart>
                  <Pie
                    data={continentesData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="valor"
                    nameKey="nombre"
                    label={({ nombre, valor, percent }) => 
                      `${nombre}: ${valor} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {continentesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Estadísticas adicionales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {destinosData.length}
            </div>
            <div className="text-gray-600">Destinos Analizados</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {destinosData.reduce((sum, dest) => sum + dest.visitantes, 0).toFixed(1)}M
            </div>
            <div className="text-gray-600">Total de Visitantes</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {destinosData[0].nombre}
            </div>
            <div className="text-gray-600">Destino #1</div>
          </div>
        </div>

        {/* Footer con información */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>💡 Datos aproximados basados en estadísticas turísticas globales</p>
        </div>
      </div>
    </div>
  );
}