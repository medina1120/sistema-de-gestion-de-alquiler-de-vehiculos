"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { clienteService, Cliente } from "@/services/cliente.service";

export default function ClienteDetallePage() {
  const params = useParams();
  const id = Number(params?.id);

  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    clienteService.findOne(id)
      .then(setCliente)
      .catch(() => setError("No se pudo cargar el cliente"))
      .finally(() => setLoading(false));
  }, [id]);

  const formatDate = (d: string) => new Date(d).toLocaleDateString();
  const formatMoney = (n: number) => n.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

  const colorEstadoReserva = (estado: string) => {
    switch (estado) {
      case "PENDIENTE": return "bg-yellow-100 text-yellow-800";
      case "CONFIRMADA": return "bg-blue-100 text-blue-800";
      case "ACTIVA": return "bg-green-100 text-green-800";
      case "FINALIZADA": return "bg-gray-200 text-gray-700";
      case "CANCELADA": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <p className="text-gray-500">Cargando...</p>
      </main>
    );
  }

  if (error || !cliente) {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <p className="text-red-600">{error ?? "Cliente no encontrado"}</p>
        <Link href="/clientes" className="text-blue-600 mt-4 inline-block">Volver a clientes</Link>
      </main>
    );
  }

  const reservas = cliente.reservas ?? [];
  const total = reservas.length;
  const activas = reservas.filter(r => r.estado === "ACTIVA" || r.estado === "PENDIENTE" || r.estado === "CONFIRMADA").length;
  const finalizadas = reservas.filter(r => r.estado === "FINALIZADA").length;
  const canceladas = reservas.filter(r => r.estado === "CANCELADA").length;

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Detalle del Cliente</h1>
        <Link href="/clientes" className="text-green-200 hover:text-white">Volver</Link>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="bg-white rounded-xl shadow p-6 mb-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold">{cliente.nombres} {cliente.apellidos}</h2>
          <div className="grid grid-cols-2 gap-2 mt-4 text-gray-600">
            <p>Documento: {cliente.documentoIdentidad}</p>
            <p>Licencia: {cliente.licenciaConduccion}</p>
            <p>Correo: {cliente.correo}</p>
            <p>Telefono: {cliente.telefono}</p>
            {cliente.direccion ? <p className="col-span-2">Direccion: {cliente.direccion}</p> : null}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-3xl font-bold text-gray-700">{total}</p>
            <p className="text-sm text-gray-500">Total reservas</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{activas}</p>
            <p className="text-sm text-gray-500">Activas / pendientes</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-3xl font-bold text-gray-600">{finalizadas}</p>
            <p className="text-sm text-gray-500">Finalizadas</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <p className="text-3xl font-bold text-red-600">{canceladas}</p>
            <p className="text-sm text-gray-500">Canceladas</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Historial de reservas</h3>

        {reservas.length === 0 ? (
          <p className="text-gray-500">Este cliente no tiene reservas registradas.</p>
        ) : (
          <div className="space-y-3">
            {reservas.map(r => (
              <div key={r.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-yellow-500">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold">Reserva #{r.id}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorEstadoReserva(r.estado)}`}>
                    {r.estado}
                  </span>
                </div>
                {r.vehiculo ? (
                  <p className="text-gray-600">
                    Vehiculo: {r.vehiculo.marca} {r.vehiculo.modelo} ({r.vehiculo.placa})
                  </p>
                ) : (
                  <p className="text-gray-600">Vehiculo #{r.vehiculoId}</p>
                )}
                <p className="text-gray-500 text-sm">
                  {formatDate(r.fechaInicio)} a {formatDate(r.fechaFin)}
                </p>
                {(r as any).contrato ? (
                  <div className="mt-2 pt-2 border-t border-gray-200 text-sm">
                    <p className="text-gray-700">
                      Contrato #{(r as any).contrato.id} — Valor: {formatMoney((r as any).contrato.valorTotal)}
                    </p>
                    {(r as any).contrato.devolucion ? (
                      <p className="text-gray-600">
                        Devolucion: {formatDate((r as any).contrato.devolucion.fechaDevolucion)} — Cargos: {formatMoney((r as any).contrato.devolucion.cargosAdicionales)}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
