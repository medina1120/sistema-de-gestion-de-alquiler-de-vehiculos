"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { mantenimientoService, Mantenimiento, CreateMantenimientoDto, TipoMantenimiento } from "@/services/mantenimiento.service";
import { vehiculoService, Vehiculo } from "@/services/vehiculo.service";
import { ApiError } from "@/lib/api";

const FORM_INICIAL: CreateMantenimientoDto = {
  vehiculoId: 0,
  tipo: "PREVENTIVO",
  descripcion: "",
  costo: 0,
  fecha: "",
};

export default function MantenimientosPage() {
  const [mantenimientos, setMantenimientos] = useState<Mantenimiento[]>([]);
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<CreateMantenimientoDto>(FORM_INICIAL);

  const cargar = async () => {
    setLoading(true);
    try {
      const [m, v] = await Promise.all([
        mantenimientoService.findAll(),
        vehiculoService.findAll(),
      ]);
      setMantenimientos(m);
      setVehiculos(v);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await mantenimientoService.create({
        vehiculoId: Number(form.vehiculoId),
        tipo: form.tipo,
        descripcion: form.descripcion,
        costo: Number(form.costo),
        fecha: form.fecha,
      });
      setShowForm(false);
      setForm(FORM_INICIAL);
      cargar();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.messages.join(" / "));
      } else {
        setError("Error al registrar el mantenimiento");
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Eliminar mantenimiento?")) {
      await mantenimientoService.remove(id);
      cargar();
    }
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString();
  const formatMoney = (n: number) =>
    n.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

  const colorTipo = (tipo: string) => {
    if (tipo === "PREVENTIVO") return "bg-green-100 text-green-800";
    if (tipo === "CORRECTIVO") return "bg-red-100 text-red-700";
    return "bg-blue-100 text-blue-800";
  };

  // Estadísticas rápidas
  const totalMantenimientos = mantenimientos.length;
  const costoTotal = mantenimientos.reduce((sum, m) => sum + m.costo, 0);
  const preventivos = mantenimientos.filter(m => m.tipo === "PREVENTIVO").length;
  const correctivos = mantenimientos.filter(m => m.tipo === "CORRECTIVO").length;

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-orange-700 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mantenimientos</h1>
        <Link href="/" className="text-orange-200 hover:text-white">Inicio</Link>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Mantenimientos registrados ({totalMantenimientos})
          </h2>
          <button
            onClick={() => { setShowForm(!showForm); setError(null); }}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
          >
            + Nuevo Mantenimiento
          </button>
        </div>

        {totalMantenimientos > 0 && (
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-2xl font-bold text-gray-700">{totalMantenimientos}</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-2xl font-bold text-green-700">{preventivos}</p>
              <p className="text-sm text-gray-500">Preventivos</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-2xl font-bold text-red-700">{correctivos}</p>
              <p className="text-sm text-gray-500">Correctivos</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-xl font-bold text-orange-700">{formatMoney(costoTotal)}</p>
              <p className="text-sm text-gray-500">Costo total</p>
            </div>
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Vehiculo</label>
              <select
                required
                value={form.vehiculoId || ""}
                onChange={e => setForm({ ...form, vehiculoId: Number(e.target.value) })}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="" disabled>Seleccione un vehiculo</option>
                {vehiculos.map(v => (
                  <option key={v.id} value={v.id}>
                    {v.marca} {v.modelo} ({v.placa}) - {v.estado}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Tipo de mantenimiento</label>
              <select
                required
                value={form.tipo}
                onChange={e => setForm({ ...form, tipo: e.target.value as TipoMantenimiento })}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="PREVENTIVO">Preventivo</option>
                <option value="CORRECTIVO">Correctivo</option>
                <option value="REVISION">Revision</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Fecha</label>
              <input
                required
                type="date"
                value={form.fecha}
                onChange={e => setForm({ ...form, fecha: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Descripcion</label>
              <textarea
                required
                rows={3}
                placeholder="Detalle del mantenimiento realizado..."
                value={form.descripcion}
                onChange={e => setForm({ ...form, descripcion: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Costo (COP)</label>
              <input
                required
                type="number"
                min={0}
                value={form.costo}
                onChange={e => setForm({ ...form, costo: Number(e.target.value) })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            {error && (
              <div className="col-span-2 bg-red-100 border border-red-300 text-red-800 rounded px-3 py-2 text-sm">
                {error}
              </div>
            )}

            <div className="col-span-2 flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Registrar</button>
              <button type="button" onClick={() => { setShowForm(false); setError(null); }} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Cancelar</button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : mantenimientos.length === 0 ? (
          <p className="text-gray-500">No hay mantenimientos registrados.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mantenimientos.map(m => (
              <div key={m.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-orange-500">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Mantenimiento #{m.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorTipo(m.tipo)}`}>
                    {m.tipo}
                  </span>
                </div>
                {m.vehiculo ? (
                  <p className="text-gray-600">
                    Vehiculo: {m.vehiculo.marca} {m.vehiculo.modelo} ({m.vehiculo.placa})
                  </p>
                ) : (
                  <p className="text-gray-600">Vehiculo #{m.vehiculoId}</p>
                )}
                <p className="text-gray-500 text-sm">Fecha: {formatDate(m.fecha)}</p>
                <p className="text-gray-700 text-sm mt-2">{m.descripcion}</p>
                <p className="text-lg font-bold text-orange-700 mt-3">{formatMoney(m.costo)}</p>
                <div className="mt-3">
                  <button onClick={() => handleDelete(m.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
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
