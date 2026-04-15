import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 px-8 shadow-lg">
        <h1 className="text-3xl font-bold">🚗 Sistema de Gestión de Alquiler de Vehículos</h1>
        <p className="text-blue-200 mt-1">Panel de administración</p>
      </header>

      {/* Dashboard */}
      <div className="max-w-6xl mx-auto px-8 py-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">Módulos del Sistema</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Link href="/vehiculos" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-l-4 border-blue-500">
            <div className="text-4xl mb-3">🚙</div>
            <h3 className="text-xl font-bold text-gray-800">Vehículos</h3>
            <p className="text-gray-500 mt-1">Gestionar flota vehicular</p>
          </Link>

          <Link href="/clientes" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-l-4 border-green-500">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="text-xl font-bold text-gray-800">Clientes</h3>
            <p className="text-gray-500 mt-1">Registrar y consultar clientes</p>
          </Link>

          <Link href="/reservas" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-l-4 border-yellow-500">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="text-xl font-bold text-gray-800">Reservas</h3>
            <p className="text-gray-500 mt-1">Crear y gestionar reservas</p>
          </Link>

          <Link href="/contratos" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-l-4 border-purple-500">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-xl font-bold text-gray-800">Contratos</h3>
            <p className="text-gray-500 mt-1">Generar contratos de alquiler</p>
          </Link>

          <Link href="/devoluciones" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-l-4 border-red-500">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="text-xl font-bold text-gray-800">Devoluciones</h3>
            <p className="text-gray-500 mt-1">Registrar devoluciones</p>
          </Link>

          <Link href="/mantenimientos" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all border-l-4 border-orange-500">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-xl font-bold text-gray-800">Mantenimientos</h3>
            <p className="text-gray-500 mt-1">Historial de mantenimiento</p>
          </Link>

        </div>
      </div>
    </main>
  );
}