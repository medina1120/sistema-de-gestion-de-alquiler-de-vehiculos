"use client";
import Link from "next/link";

export default function MantenimientosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-orange-700 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🔧 Mantenimientos</h1>
        <Link href="/" className="text-orange-200 hover:text-white">← Inicio</Link>
      </header>
      <div className="max-w-6xl mx-auto px-8 py-8">
        <p className="text-gray-500">Módulo de mantenimientos en construcción.</p>
      </div>
    </main>
  );
}