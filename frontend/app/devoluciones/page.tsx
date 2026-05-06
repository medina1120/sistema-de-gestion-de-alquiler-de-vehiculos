"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { devolucionService, Devolucion, CreateDevolucionDto } from "@/services/devolucion.service";
import { contratoService, Contrato } from "@/services/contrato.service";
import { ApiError } from "@/lib/api";

export default function DevolucionesPage() {
  const [devoluciones, setDevoluciones] = useState<Devolucion[]>([]);
  const [contratos, setContratos] = useState<Contrato[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<CreateDevolucionDto>({
    contratoId: 0,
    fechaDevolucion: "",
    estadoVehiculo: "BUENO",
    kilometrajeRetorno: 0,
    observaciones: "",
  });

  const cargar = async () => {
    try {
      const [d, c] = await Promise.all([
        devolucionService.findAll(),
        contratoService.findAll(),
      ]);
      setDevoluciones(d);
      setContratos(c);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  // Sólo contratos VIGENTE pueden recibir devolución
  const contratosVigentes = contratos.filter(c => c.estado === "VIGENTE");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await devolucionService.create({
        contratoId: Number(form.contratoId),
        fechaDevolucion: form.fechaDevolucion,
        estadoVehiculo: form.estadoVehiculo,
        kilometrajeRetorno: Number(form.kilometrajeRetorno),
        observaciones: form.observaciones || undefined,
      });
      setShowForm(false);
      setForm({
        contratoId: 0,
        fechaDevolucion: "",
        estadoVehiculo: "BUENO",
        kilometrajeRetorno: 0,
        observaciones: "",
      });
      cargar();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.messages.join(" / "));
      } else {
        setError("Error al registrar la devolución");
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("¿Eliminar devolución?")) {
      await devolucionService.remove(id);
      cargar();
    }
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString();
  const formatMoney = (n: number) =>
    n.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

  const colorEstadoVeh = (e: string) => {
    const s = e.toUpperCase();
    if (s === "BUENO") return "bg-green-100 text-green-800";
    if (s === "REGULAR") return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-red-800 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🔄 Devoluciones</h1>
        <Link href="/" className="text-red-200 hover:text-white">← Inicio</Link>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Devoluciones registradas ({devoluciones.length})
          </h2>
          <button
            onClick={() => { setShowForm(!showForm); setError(null); }}
            className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800"
          >
            + Registrar Devolución
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Contrato (sólo VIGENTE)</label>
              <select
                required
                value={form.contratoId || ""}
                onChange={e => setForm({ ...form, contratoId: Number(e.target.value) })}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="" disabled>Seleccione un contrato</option>
                {contratosVigentes.map(c => (
                  <option key={c.id} value={c.id}>
                    Contrato #{c.id} — {c.reserva?.cliente ? `${c.reserva.cliente.nombres} ${c.reserva.cliente.apellidos}` : ""} — {c.reserva?.vehiculo ? `${c.reserva.vehiculo.marca} ${c.reserva.vehiculo.modelo} (${c.reserva.vehiculo.placa})` : ""}
                  </option>
                ))}
              </select>
              {contratosVigentes.length === 0 && (
                <p className="text-sm text-yellow-700 mt-1">No hay contratos vigentes.</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Fecha de devolución</label>
              <input
                required
                type="date"
                value={form.fechaDevolucion}
                onChange={e => setForm({ ...form, fechaDevolucion: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Estado del vehículo</label>
              <select
                required
                value={form.estadoVehiculo}
                onChange={e => setForm({ ...form, estadoVehiculo: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="BUENO">BUENO</option>
                <option value="REGULAR">REGULAR</option>
                <option value="DAÑADO">DAÑADO</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Kilometraje de retorno</label>
              <input
                required
                type="number"
                min={0}
                value={form.kilometrajeRetorno || ""}
                onChange={e => setForm({ ...form, kilometrajeRetorno: Number(e.target.value) })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Observaciones (opcional)</label>
              <input
                type="text"
                value={form.observaciones || ""}
                onChange={e => setForm({ ...form, observaciones: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div className="col-span-2 bg-blue-50 border border-blue-200 text-blue-800 rounded px-3 py-2 text-sm">
              💡 Los cargos adicionales se calculan automáticamente (retraso + estado del vehículo).
            </div>

            {error && (
              <div className="col-span-2 bg-red-100 border border-red-300 text-red-800 rounded px-3 py-2 text-sm">
                {error}
              </div>
            )}

            <div className="col-span-2 flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Registrar devolución</button>
              <button type="button" onClick={() => { setShowForm(false); setError(null); }} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Cancelar</button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : devoluciones.length === 0 ? (
          <p className="text-gray-500">No hay devoluciones registradas.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {devoluciones.map(d => (
              <div key={d.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-red-500">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">Devolución #{d.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorEstadoVeh(d.estadoVehiculo)}`}>
                    {d.estadoVehiculo}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">📄 Contrato #{d.contratoId}</p>
                {d.contrato?.reserva?.vehiculo && (
                  <p className="text-gray-600">
                    🚗 {d.contrato.reserva.vehiculo.marca} {d.contrato.reserva.vehiculo.modelo} ({d.contrato.reserva.vehiculo.placa})
                  </p>
                )}
                <p className="text-gray-500 text-sm mt-1">📅 {formatDate(d.fechaDevolucion)}</p>
                <p className="text-gray-600 text-sm mt-1">🛣️ Km retorno: {d.kilometrajeRetorno.toLocaleString()}</p>
                {d.observaciones && <p className="text-gray-500 text-sm">📝 {d.observaciones}</p>}
                <p className={`text-lg font-bold mt-3 ${d.cargosAdicionales > 0 ? "text-red-700" : "text-green-700"}`}>
                  Cargos: {formatMoney(d.cargosAdicionales)}
                </p>
                <div className="mt-3">
                  <button onClick={() => handleDelete(d.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
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
