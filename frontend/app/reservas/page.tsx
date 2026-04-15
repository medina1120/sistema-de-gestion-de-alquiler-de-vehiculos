"use client";
import Link from "next/link";

export default function ReservasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-yellow-700 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">📅 Reservas</h1>
        <Link href="/" className="text-yellow-200 hover:text-white">← Inicio</Link>
      </header>
      <div className="max-w-6xl mx-auto px-8 py-8">
        <p className="text-gray-500">Módulo de reservas en construcción.</p>
      </div>
    </main>
  );
}
