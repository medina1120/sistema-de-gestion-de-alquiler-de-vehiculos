"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { reservaService, Reserva, CreateReservaDto } from "@/services/reserva.service";
import { clienteService, Cliente } from "@/services/cliente.service";
import { vehiculoService, Vehiculo } from "@/services/vehiculo.service";
import { ApiError } from "@/lib/api";

export default function ReservasPage() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<CreateReservaDto>({
    clienteId: 0,
    vehiculoId: 0,
    fechaInicio: "",
    fechaFin: "",
  });

  const cargar = async () => {
    try {
      const [r, c, v] = await Promise.all([
        reservaService.findAll(),
        clienteService.findAll(),
        vehiculoService.findAll(),
      ]);
      setReservas(r);
      setClientes(c);
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
      await reservaService.create({
        clienteId: Number(form.clienteId),
        vehiculoId: Number(form.vehiculoId),
        fechaInicio: form.fechaInicio,
        fechaFin: form.fechaFin,
      });
      setShowForm(false);
      setForm({ clienteId: 0, vehiculoId: 0, fechaInicio: "", fechaFin: "" });
      cargar();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.messages.join(" / "));
      } else {
        setError("Error al crear la reserva");
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("¿Eliminar reserva?")) {
      await reservaService.remove(id);
      cargar();
    }
  };

  const colorEstado = (estado: string) => {
    switch (estado) {
      case "PENDIENTE": return "bg-yellow-100 text-yellow-800";
      case "CONFIRMADA": return "bg-blue-100 text-blue-800";
      case "ACTIVA": return "bg-green-100 text-green-800";
      case "FINALIZADA": return "bg-gray-200 text-gray-700";
      case "CANCELADA": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString();

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-yellow-700 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">📅 Reservas</h1>
        <Link href="/" className="text-yellow-200 hover:text-white">← Inicio</Link>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Reservas registradas ({reservas.length})
          </h2>
          <button
            onClick={() => { setShowForm(!showForm); setError(null); }}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
          >
            + Nueva Reserva
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-2 gap-4">
            <select
              required
              value={form.clienteId || ""}
              onChange={e => setForm({ ...form, clienteId: Number(e.target.value) })}
              className="border rounded px-3 py-2"
            >
              <option value="" disabled>Seleccione un cliente</option>
              {clientes.map(c => (
                <option key={c.id} value={c.id}>
                  {c.nombres} {c.apellidos} — {c.documentoIdentidad}
                </option>
              ))}
            </select>

            <select
              required
              value={form.vehiculoId || ""}
              onChange={e => setForm({ ...form, vehiculoId: Number(e.target.value) })}
              className="border rounded px-3 py-2"
            >
              <option value="" disabled>Seleccione un vehículo</option>
              {vehiculos.map(v => (
                <option key={v.id} value={v.id}>
                  {v.marca} {v.modelo} ({v.placa}) — {v.estado}
                </option>
              ))}
            </select>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Fecha inicio</label>
              <input
                required
                type="date"
                value={form.fechaInicio}
                onChange={e => setForm({ ...form, fechaInicio: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Fecha fin</label>
              <input
                required
                type="date"
                value={form.fechaFin}
                onChange={e => setForm({ ...form, fechaFin: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            {error && (
              <div className="col-span-2 bg-red-100 border border-red-300 text-red-800 rounded px-3 py-2 text-sm">
                {error}
              </div>
            )}

            <div className="col-span-2 flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Crear reserva</button>
              <button type="button" onClick={() => { setShowForm(false); setError(null); }} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Cancelar</button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : reservas.length === 0 ? (
          <p className="text-gray-500">No hay reservas registradas.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reservas.map(r => (
              <div key={r.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-yellow-500">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">Reserva #{r.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorEstado(r.estado)}`}>
                    {r.estado}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">
                  👤 {r.cliente ? `${r.cliente.nombres} ${r.cliente.apellidos}` : `Cliente #${r.clienteId}`}
                </p>
                <p className="text-gray-600">
                  🚗 {r.vehiculo ? `${r.vehiculo.marca} ${r.vehiculo.modelo} (${r.vehiculo.placa})` : `Vehículo #${r.vehiculoId}`}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  📅 {formatDate(r.fechaInicio)} → {formatDate(r.fechaFin)}
                </p>
                <div className="mt-3">
                  <button onClick={() => handleDelete(r.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
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
