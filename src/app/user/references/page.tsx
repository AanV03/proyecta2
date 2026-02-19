"use client";

import React from "react";

const references = [
  { id: 1, name: "REVALIDACION EXTERNA", cost: "366.00", convenio: "01508105" },
  { id: 5, name: "CERTIFICADO PARCIAL DE ESTUDIOS", cost: "243.00", convenio: "01508105" },
  { id: 6, name: "CERTIFICACIÓN DE TITULO", cost: "610.00", convenio: "01508105" },
  { id: 7, name: "REIMPRESIÓN ESTADO DE CUENTA", cost: "48.00", convenio: "01508105", note: "ESTADO DE CUENTA QUE GENERA PROYECTA CON DETALLE DE PERIODOS CURSADOS Y PAGOS EFECTUADOS." },
  { id: 8, name: "EXAMEN A TITULO DE SUFICIENCIA", cost: "243.00", convenio: "01508105" },
  { id: 11, name: "TOEFL ALUMNOS UTCH", cost: "1275.00", convenio: "01508105", note: "EXAMEN TOEFL PARA ALUMNOS Y PERSONAL UTCH" },
  { id: 12, name: "PARLE CURSO INGLÉS ALUMNOS UTCH", cost: "625.00", convenio: "01508105", note: "CURSO DE INGLÉS CENTRO DE IDIOMAS" },
  { id: 13, name: "CONSTANCIA DE ESTUDIOS", cost: "48.00", convenio: "01508105", note: "Constancia que contiene Nombre, Matrícula, Nivel de estudios, grupo,periodo y horario." },
  { id: 14, name: "REEXPEDICIÓN DE CREDENCIAL", cost: "122.00", convenio: "01508105" },
  { id: 15, name: "CONSTANCIA DE CALIFICACIONES", cost: "48.00", convenio: "01508105", note: "Constancia con calificaciones y promedio general." },
  { id: 16, name: "RELACION DE ESTUDIOS (KARDEX)", cost: "73.00", convenio: "01508105" },
  { id: 17, name: "OXFORD (OPT)", cost: "218.00", convenio: "01508105" },
  { id: 18, name: "ITEP PLUS", cost: "1658.00", convenio: "01508105" },
  { id: 19, name: "EXAMEN iTEP CORE", cost: "802.00", convenio: "01508105" },
  { id: 20, name: "EXAMEN DE COLOCACION DE INGLÉS", cost: "345.00", convenio: "01508105" },
  { id: 21, name: "FICHA DE INGRESO UNIDAD ACADÉMICA CUAUHTÉMOC", cost: "366.00", convenio: "01508105" },
  { id: 22, name: "GASTO ADMINISTRATIVO", cost: "312.00", convenio: "01508105" },
  { id: 23, name: "REIMPRESION DE COMPROBANTE", cost: "48.00", convenio: "01508105", note: "Aplica únicamente para pagos efectuados en caja UTCH" },
  { id: 24, name: "CONSTANCIA DE TRAMITE DE TITULACIÓN", cost: "48.00", convenio: "01508105", note: 'Constancia con leyenda "Trámite de registro del Título Profesional"' },
  { id: 25, name: "REESTABLECER CONTRASEÑA PROYECTA", cost: "55.00", convenio: "01508105" },
  { id: 26, name: "DUPLICADO DE CERTIFICADO", cost: "243.00", convenio: "01508105" },
  { id: 27, name: "FICHA DE INGRESO", cost: "610.00", convenio: "01508105" },
  { id: 28, name: "TITULACIÓN TSU", cost: "3072.00", convenio: "01508105" },
  { id: 29, name: "TITULACION INGENIERIA", cost: "4352.00", convenio: "01508105" },
];

export default function ReferencesPage() {
  return (
    <div>

      <main className="page-main mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-light heading-body">Referencias <span className="text-xl text-secondary">Bancarias</span></h1>
        </div>

        <section aria-labelledby="info-heading" className="mb-6">
          <h2 id="info-heading" className="text-2xl font-semibold" style={{ color: 'var(--chart-1)' }}>Info</h2>
          <ul className="mt-2 list-none">
            <li style={{ color: 'var(--state-error-text)' }}>La boleta la puedes descargar sin costo desde tu cuenta proyecta, menú <span style={{ color: 'var(--color-primitive-green-medium)' }}>alumnos/información/boletas</span>.</li>
            <li style={{ color: 'var(--state-error-text)' }}>Estas referencias tiene de fecha limite el día de hoy</li>
            <li style={{ color: 'var(--state-error-text)' }}>Los pagos se asignaran automaticamente a su cuenta</li>
            <li style={{ color: 'var(--state-error-text)' }}>Las referencias son personales</li>
          </ul>
        </section>

        <section aria-labelledby="table-heading">
          <div className="overflow-x-auto border">
            <table className="w-full text-left border-collapse">
              <caption id="table-heading" className="sr-only">Listado de referencias bancarias</caption>
              <thead>
                <tr className="bg-surface-secondary">
                  <th className="px-6 py-4">#</th>
                  <th className="px-6 py-4">Nombre</th>
                  <th className="px-6 py-4">Costo</th>
                  <th className="px-6 py-4">Convenio</th>
                  <th className="px-6 py-4">Referencia</th>
                </tr>
              </thead>
              <tbody>
                {references.map((r, idx) => (
                  <tr key={r.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-secondary'}>
                    <td className="px-6 py-4 align-top">{r.id}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{r.name}</div>
                      {r.note && <div className="text-sm mt-2" style={{ color: 'var(--state-error-text)' }}>{r.note}</div>}
                    </td>
                    <td className="px-6 py-4">{r.cost}</td>
                    <td className="px-6 py-4">{r.convenio}</td>
                    <td className="px-6 py-4">
                      <button
                        aria-label={`Generar referencia ${r.id}`}
                        className="inline-flex items-center gap-2 rounded shadow"
                        style={{
                          backgroundColor: 'var(--chart-2)',
                          color: 'var(--color-primitive-gray-light)',
                          padding: '10px 14px',
                        }}
                      >
                        <span style={{ display: 'inline-block', width: 22, height: 22, background: 'rgba(255,255,255,0.12)', borderRadius: 3 }} aria-hidden />
                        <span>Generar</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
