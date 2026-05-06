"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { clienteService, Cliente, CreateClienteDto } from "@/services/cliente.service";

const FORM_INICIAL: CreateClienteDto = {
  nombres: "",
  apellidos: "",
  documentoIdentidad: "",
  licenciaConduccion: "",
  correo: "",
  telefono: "",
  direccion: "",
};

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<CreateClienteDto>(FORM_INICIAL);

  const cargar = async () => {
    try {
      const data = await clienteService.findAll();
      setClientes(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await clienteService.create(form);
    setShowForm(false);
    setForm(FORM_INICIAL);
    cargar();
  };

  const handleDelete = async (id: number) => {
    if (confirm("Eliminar cliente?")) {
      await clienteService.remove(id);
      cargar();
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <Link href="/" className="text-green-200 hover:text-white">Inicio</Link>
      </header>
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Clientes registrados ({clientes.length})</h2>
          <button onClick={() => setShowForm(!showForm)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            + Nuevo Cliente
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-2 gap-4">
            <input required placeholder="Nombres" value={form.nombres} onChange={e => setForm({ ...form, nombres: e.target.value })} className="border rounded-lg p-2" />
            <input required placeholder="Apellidos" value={form.apellidos} onChange={e => setForm({ ...form, apellidos: e.target.value })} className="border rounded-lg p-2" />
            <input required placeholder="Documento de identidad" value={form.documentoIdentidad} onChange={e => setForm({ ...form, documentoIdentidad: e.target.value })} className="border rounded-lg p-2" />
            <input required placeholder="Licencia de conduccion" value={form.licenciaConduccion} onChange={e => setForm({ ...form, licenciaConduccion: e.target.value })} className="border rounded-lg p-2" />
            <input required type="email" placeholder="Correo" value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} className="border rounded-lg p-2" />
            <input required placeholder="Telefono" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} className="border rounded-lg p-2" />
            <input placeholder="Direccion (opcional)" value={form.direccion ?? ""} onChange={e => setForm({ ...form, direccion: e.target.value })} className="border rounded-lg p-2 col-span-2" />
            <div className="col-span-2 flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Guardar</button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-400 text-white px-6 py-2 rounded-lg">Cancelar</button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : clientes.length === 0 ? (
          <p className="text-gray-500">No hay clientes registrados.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientes.map(c => (
              <div key={c.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-green-500">
                <h3 className="font-bold text-lg">{c.nombres} {c.apellidos}</h3>
                <p className="text-gray-500">Correo: {c.correo}</p>
                <p className="text-gray-500">Telefono: {c.telefono}</p>
                <p className="text-gray-500">Doc: {c.documentoIdentidad}</p>
                <p className="text-gray-500">Lic: {c.licenciaConduccion}</p>
                {c.direccion ? <p className="text-gray-500">Dir: {c.direccion}</p> : null}
                <div className="mt-3 flex gap-2">
                  <Link href={`/clientes/${c.id}`} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">Ver historial</Link>
                  <button onClick={() => handleDelete(c.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
