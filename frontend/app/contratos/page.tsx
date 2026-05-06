"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { contratoService, Contrato, CreateContratoDto } from "@/services/contrato.service";
import { reservaService, Reserva } from "@/services/reserva.service";
import { ApiError } from "@/lib/api";

export default function ContratosPage() {
  const [contratos, setContratos] = useState<Contrato[]>([]);
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<CreateContratoDto>({
    reservaId: 0,
    fechaEntrega: "",
    condiciones: "",
  });

  const cargar = async () => {
    try {
      const [c, r] = await Promise.all([
        contratoService.findAll(),
        reservaService.findAll(),
      ]);
      setContratos(c);
      setReservas(r);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  // Solo reservas que pueden ser contratadas (PENDIENTE o CONFIRMADA)
  const reservasContratables = reservas.filter(
    r => r.estado === "PENDIENTE" || r.estado === "CONFIRMADA"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await contratoService.create({
        reservaId: Number(form.reservaId),
        fechaEntrega: form.fechaEntrega,
        condiciones: form.condiciones || undefined,
      });
      setShowForm(false);
      setForm({ reservaId: 0, fechaEntrega: "", condiciones: "" });
      cargar();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.messages.join(" / "));
      } else {
        setError("Error al generar el contrato");
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("¿Eliminar contrato?")) {
      await contratoService.remove(id);
      cargar();
    }
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString();
  const formatMoney = (n: number) =>
    n.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

  const colorEstado = (estado: string) => {
    switch (estado) {
      case "VIGENTE": return "bg-green-100 text-green-800";
      case "FINALIZADO": return "bg-gray-200 text-gray-700";
      case "CANCELADO": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-purple-800 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">📄 Contratos</h1>
        <Link href="/" className="text-purple-200 hover:text-white">← Inicio</Link>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Contratos generados ({contratos.length})
          </h2>
          <button
            onClick={() => { setShowForm(!showForm); setError(null); }}
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
          >
            + Generar Contrato
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Reserva (sólo PENDIENTE / CONFIRMADA)</label>
              <select
                required
                value={form.reservaId || ""}
                onChange={e => setForm({ ...form, reservaId: Number(e.target.value) })}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="" disabled>Seleccione una reserva</option>
                {reservasContratables.map(r => (
                  <option key={r.id} value={r.id}>
                    Reserva #{r.id} — {r.cliente ? `${r.cliente.nombres} ${r.cliente.apellidos}` : `Cli#${r.clienteId}`} — {r.vehiculo ? `${r.vehiculo.marca} ${r.vehiculo.modelo}` : `Veh#${r.vehiculoId}`} — {formatDate(r.fechaInicio)} a {formatDate(r.fechaFin)}
                  </option>
                ))}
              </select>
              {reservasContratables.length === 0 && (
                <p className="text-sm text-yellow-700 mt-1">No hay reservas contratables.</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Fecha de entrega</label>
              <input
                required
                type="date"
                value={form.fechaEntrega}
                onChange={e => setForm({ ...form, fechaEntrega: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Condiciones (opcional)</label>
              <input
                type="text"
                value={form.condiciones || ""}
                onChange={e => setForm({ ...form, condiciones: e.target.value })}
                className="border rounded px-3 py-2 w-full"
                placeholder="Ej: entrega tanque lleno"
              />
            </div>

            <div className="col-span-2 bg-blue-50 border border-blue-200 text-blue-800 rounded px-3 py-2 text-sm">
              💡 El valor total se calcula automáticamente (días × precio por día).
            </div>

            {error && (
              <div className="col-span-2 bg-red-100 border border-red-300 text-red-800 rounded px-3 py-2 text-sm">
                {error}
              </div>
            )}

            <div className="col-span-2 flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Generar contrato</button>
              <button type="button" onClick={() => { setShowForm(false); setError(null); }} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Cancelar</button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : contratos.length === 0 ? (
          <p className="text-gray-500">No hay contratos generados.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contratos.map(c => (
              <div key={c.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-purple-500">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">Contrato #{c.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorEstado(c.estado)}`}>
                    {c.estado}
                  </span>
                </div>
                {c.reserva && (
                  <>
                    <p className="text-gray-600 mt-2">
                      👤 {c.reserva.cliente?.nombres} {c.reserva.cliente?.apellidos}
                    </p>
                    <p className="text-gray-600">
                      🚗 {c.reserva.vehiculo?.marca} {c.reserva.vehiculo?.modelo} ({c.reserva.vehiculo?.placa})
                    </p>
                    <p className="text-gray-500 text-sm">
                      📅 {formatDate(c.reserva.fechaInicio)} → {formatDate(c.reserva.fechaFin)}
                    </p>
                  </>
                )}
                <p className="text-gray-700 text-sm mt-2">📦 Entrega: {formatDate(c.fechaEntrega)}</p>
                {c.condiciones && <p className="text-gray-500 text-sm">📝 {c.condiciones}</p>}
                <p className="text-2xl font-bold text-purple-700 mt-3">{formatMoney(c.valorTotal)}</p>
                <div className="mt-3">
                  <button onClick={() => handleDelete(c.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
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
