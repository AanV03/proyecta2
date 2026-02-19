"use client";

import React from "react";
import { ArrowLeftCircle } from "lucide-react";

export default function PsychologyPage() {
  return (
    <div>
      <main className="page-main mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            aria-label="Volver"
            onClick={() => history.back()}
            className="flex items-center gap-2 text-3xl text-btn-dark"
          >
            <ArrowLeftCircle className="h-8 w-8" aria-hidden="true" />
          </button>

          <div>
            <h1 className="text-4xl font-light heading-body">Psicología</h1>
          </div>
        </div>

        <section aria-labelledby="citas-heading">
          <details className="border">
            <summary
              id="citas-heading"
              role="button"
              aria-controls="citas-content"
              className="px-4 py-4 flex items-center justify-between cursor-pointer"
              style={{
                backgroundColor: "var(--chart-2)",
                color: "var(--color-primitive-gray-light)",
              }}
            >
              <span className="text-xl font-semibold">Citas Personales Programadas</span>
              <span aria-hidden>▾</span>
            </summary>

            <div id="citas-content" className="p-4 bg-surface-card">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-secondary">
                      <th className="px-4 py-3">Color</th>
                      <th className="px-4 py-3">Fecha</th>
                      <th className="px-4 py-3">Hora</th>
                      <th className="px-4 py-3">Activa</th>
                      <th className="px-4 py-3">Nota cancelación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-4">
                        <div className="w-8 h-6 rounded-sm" style={{ backgroundColor: "var(--state-success-bg)" }} aria-hidden />
                      </td>
                      <td className="px-4 py-4">2023/11/06</td>
                      <td className="px-4 py-4">10:30 am</td>
                      <td className="px-4 py-4">Activa</td>
                      <td className="px-4 py-4">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div
                  className="py-4 text-center font-semibold rounded"
                  style={{ backgroundColor: "var(--chart-1)", color: "var(--color-primitive-gray-dark)" }}
                  role="status"
                >
                  La Cita es hoy
                </div>

                <div
                  className="py-4 text-center font-semibold rounded"
                  style={{ backgroundColor: "var(--state-success-bg)", color: "var(--color-primitive-gray-dark)" }}
                >
                  La Cita aún no sucede
                </div>

                <div
                  className="py-4 text-center font-semibold rounded"
                  style={{ backgroundColor: "var(--state-error-bg)", color: "var(--state-error-text)" }}
                >
                  La Cita ya pasó
                </div>

                <div
                  className="py-4 text-center font-semibold rounded"
                  style={{ backgroundColor: "var(--surface-secondary)", color: "var(--text-body)" }}
                >
                  Cita Cancelada
                </div>
              </div>
            </div>
          </details>
        </section>
      </main>
    </div>
  );
}
