"use client";

import React, { useState } from "react";
import TopBar from "@/app/_components/topbar";

export default function DatesPage() {
  const [active, setActive] = useState<"disponibles" | "pendientes" | "historial">("disponibles");

  return (
    <div>
      <main className="page-main mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-light heading-body">Panel <span className="text-xl text-secondary">de Citas</span></h1>
        </div>

        <nav role="tablist" aria-label="Panel de Citas Tabs" className="mb-4">
          <div className="flex gap-2">
            <button
              role="tab"
              aria-selected={active === 'disponibles'}
              onClick={() => setActive('disponibles')}
              className={`-mb-px rounded-t-md transition-colors ${
                active === 'disponibles'
                  ? 'bg-white border-b-2 border-red-500 px-4 py-2'
                  : 'bg-surface-secondary text-secondary border border-border-default px-4 py-2'
              }`}
            >
              <span className="font-medium">Disponibles</span>
            </button>

            <button
              role="tab"
              aria-selected={active === 'pendientes'}
              onClick={() => setActive('pendientes')}
              className={`-mb-px rounded-t-md transition-colors ${
                active === 'pendientes'
                  ? 'bg-white border-b-2 border-red-500 px-4 py-2'
                  : 'bg-surface-secondary text-secondary border border-border-default px-4 py-2'
              }`}
            >
              <span className="font-medium">Citas Pendientes</span>
            </button>

            <button
              role="tab"
              aria-selected={active === 'historial'}
              onClick={() => setActive('historial')}
              className={`-mb-px rounded-t-md transition-colors ${
                active === 'historial'
                  ? 'bg-white border-b-2 border-red-500 px-4 py-2'
                  : 'bg-surface-secondary text-secondary border border-border-default px-4 py-2'
              }`}
            >
              <span className="font-medium">Historial Citas</span>
            </button>
          </div>
        </nav>

        <section className="border bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <label className="text-sm">Mostrar</label>
              <select aria-label="Mostrar registros" className="border px-2 py-1 bg-white">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-sm">registros</span>
            </div>

            <div>
              <label className="mr-2">Buscar:</label>
              <input aria-label="Buscar citas" className="border px-2 py-1" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-secondary">
                  <th className="px-4 py-3">Proceso</th>
                  <th className="px-4 py-3">Nota</th>
                  <th className="px-4 py-3">Fecha</th>
                  <th className="px-4 py-3">Tiempo Atención</th>
                  <th className="px-4 py-3">Fecha Inicio</th>
                  <th className="px-4 py-3">Fecha Fin</th>
                  <th className="px-4 py-3">Requisitos</th>
                  <th className="px-4 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={8} className="px-4 py-6 text-center bg-white/80 text-secondary">Ningún dato disponible en esta tabla</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>Mostrando registros del 0 al 0 de un total de 0 registros</div>
            <div className="flex items-center gap-2">
              <button disabled className="px-3 py-2 border bg-surface-secondary text-secondary" aria-disabled>
                Anterior
              </button>
              <button disabled className="px-3 py-2 border bg-surface-secondary text-secondary" aria-disabled>
                Siguiente
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
