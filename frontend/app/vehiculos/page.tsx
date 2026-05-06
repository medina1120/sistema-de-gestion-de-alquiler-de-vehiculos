"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { vehiculoService, Vehiculo, CreateVehiculoDto, EstadoVehiculo } from "@/services/vehiculo.service";

const FORM_INICIAL: CreateVehiculoDto = {
  marca: "",
  modelo: "",
  anio: 2024,
  placa: "",
  tipo: "SEDAN",
  estado: "DISPONIBLE",
  precioPorDia: 0,
  kilometraje: 0,
};

export default function VehiculosPage() {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [filtroDisponibles, setFiltroDisponibles] = useState(false);
  const [form, setForm] = useState<CreateVehiculoDto>(FORM_INICIAL);

  const cargar = async () => {
    setLoading(true);
    try {
      const data = filtroDisponibles
        ? await vehiculoService.findDisponibles()
        : await vehiculoService.findAll();
      setVehiculos(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargar(); }, [filtroDisponibles]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await vehiculoService.create(form);
    setShowForm(false);
    setForm(FORM_INICIAL);
    cargar();
  };

  const handleDelete = async (id: number) => {
    if (confirm("Eliminar vehiculo?")) {
      await vehiculoService.remove(id);
      cargar();
    }
  };

  const handleCambiarEstado = async (id: number, nuevoEstado: EstadoVehiculo) => {
    await vehiculoService.cambiarEstado(id, nuevoEstado);
    cargar();
  };

  const colorEstado = (estado: string) => {
    if (estado === "DISPONIBLE") return "bg-green-100 text-green-700";
    if (estado === "ALQUILADO") return "bg-red-100 text-red-700";
    if (estado === "MANTENIMIENTO") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-200 text-gray-700";
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vehiculos</h1>
        <Link href="/" className="text-blue-200 hover:text-white">Inicio</Link>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3 items-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Flota vehicular ({vehiculos.length})
            </h2>
            <label className="flex items-center gap-2 text-sm text-gray-600 ml-4 cursor-pointer">
              <input
                type="checkbox"
                checked={filtroDisponibles}
                onChange={e => setFiltroDisponibles(e.target.checked)}
              />
              Solo disponibles
            </label>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Nuevo Vehiculo
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-2 gap-4">
            <input required placeholder="Marca" value={form.marca} onChange={e => setForm({ ...form, marca: e.target.value })} className="border rounded p-2" />
            <input required placeholder="Modelo" value={form.modelo} onChange={e => setForm({ ...form, modelo: e.target.value })} className="border rounded p-2" />
            <input required type="number" placeholder="Anio" value={form.anio} onChange={e => setForm({ ...form, anio: Number(e.target.value) })} className="border rounded p-2" />
            <input required placeholder="Placa" value={form.placa} onChange={e => setForm({ ...form, placa: e.target.value })} className="border rounded p-2" />
            <select value={form.tipo} onChange={e => setForm({ ...form, tipo: e.target.value as CreateVehiculoDto["tipo"] })} className="border rounded p-2">
              <option value="SEDAN">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="CAMIONETA">Camioneta</option>
              <option value="DEPORTIVO">Deportivo</option>
              <option value="FURGONETA">Furgoneta</option>
            </select>
            <select value={form.estado} onChange={e => setForm({ ...form, estado: e.target.value as EstadoVehiculo })} className="border rounded p-2">
              <option value="DISPONIBLE">Disponible</option>
              <option value="ALQUILADO">Alquilado</option>
              <option value="MANTENIMIENTO">Mantenimiento</option>
              <option value="FUERA_DE_SERVICIO">Fuera de servicio</option>
            </select>
            <input required type="number" placeholder="Precio por dia" value={form.precioPorDia} onChange={e => setForm({ ...form, precioPorDia: Number(e.target.value) })} className="border rounded p-2" />
            <input required type="number" placeholder="Kilometraje" value={form.kilometraje} onChange={e => setForm({ ...form, kilometraje: Number(e.target.value) })} className="border rounded p-2" />
            <div className="col-span-2 flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Guardar</button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Cancelar</button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : vehiculos.length === 0 ? (
          <p className="text-gray-500">
            {filtroDisponibles ? "No hay vehiculos disponibles." : "No hay vehiculos registrados."}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehiculos.map(v => (
              <div key={v.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-500">
                <h3 className="font-bold text-lg">{v.marca} {v.modelo} ({v.anio})</h3>
                <p className="text-gray-500">Placa: {v.placa}</p>
                <p className="text-gray-500">Tipo: {v.tipo}</p>
                <p className="text-gray-500">Precio/dia: ${v.precioPorDia.toLocaleString()}</p>
                <p className="text-gray-500">Km: {v.kilometraje.toLocaleString()}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${colorEstado(v.estado)}`}>
                  {v.estado}
                </span>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <select
                    value={v.estado}
                    onChange={e => handleCambiarEstado(v.id, e.target.value as EstadoVehiculo)}
                    className="border rounded text-xs px-2 py-1"
                  >
                    <option value="DISPONIBLE">Disponible</option>
                    <option value="ALQUILADO">Alquilado</option>
                    <option value="MANTENIMIENTO">Mantenimiento</option>
                    <option value="FUERA_DE_SERVICIO">Fuera servicio</option>
                  </select>
                  <button onClick={() => handleDelete(v.id)} className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
