"use client";

import React, { useState } from "react";
import TopBar from "@/app/_components/topbar";
import { ArrowLeftCircle } from "lucide-react";

export default function ScolarshipPage() {
	const [active, setActive] = useState<"convocatorias" | "obtenidas">("convocatorias");

	return (
		<div>
			<TopBar />

			<main className="page-main mx-auto max-w-7xl px-6 py-6">
				<div className="flex items-center gap-4 mb-6">
					<button
						className="flex items-center gap-2 text-3xl text-btn-dark"
						aria-label="Volver"
						onClick={() => history.back()}
					>
						<ArrowLeftCircle className="h-8 w-8" aria-hidden="true" />
					</button>
					<div>
						<h1 className="text-4xl font-light heading-body">Convocatorias <span className="text-xl text-secondary">de Becas</span></h1>
					</div>
				</div>

				<nav aria-label="Pestañas de becas" className="mb-6">
					<div className="flex border-b">
						<button
							className={`px-4 py-2 -mb-px ${active === 'convocatorias' ? 'border-b-2 border-red-500' : 'text-muted'}`}
							aria-selected={active === 'convocatorias'}
							role="tab"
							onClick={() => setActive('convocatorias')}
						>
							Convocatorias
						</button>
						<button
							className={`px-4 py-2 -mb-px ${active === 'obtenidas' ? 'border-b-2 border-red-500' : 'text-muted'}`}
							aria-selected={active === 'obtenidas'}
							role="tab"
							onClick={() => setActive('obtenidas')}
						>
							Becas Obtenidas
						</button>
					</div>
				</nav>

				{active === "convocatorias" && (
					<section aria-labelledby="convocatorias-heading">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[1, 2].map((i) => (
								<article
									key={i}
									className="bg-white/90 shadow-md p-6 rounded-md text-center"
									role="article"
									aria-label={`Convocatoria ${i}`}
								>
									<h2 className="text-lg font-semibold text-secondary mb-1">DESCUENTO POR CONVENIO 20%</h2>
									<p className="text-sm text-muted">Ene-Abr-26</p>

									<hr className="my-4 border-t border-border-default" />

									<p className="text-sm text-secondary">08 Diciembre 2025 - 13 Enero 2026</p>

									<div className="mt-4 text-sm text-secondary">
										<div className="flex justify-between">
											<span className="font-semibold">Horas de Servicio</span>
											<span>0 horas</span>
										</div>
										<div className="flex justify-between mt-1">
											<span className="font-semibold">Límite para Liberar</span>
											<span>08 Diciembre 2025</span>
										</div>
									</div>

									<p className="mt-4 text-muted">Sin Registro</p>

									<hr className="my-4 border-t border-border-default" />

									<div className="text-sm text-muted flex flex-col items-center gap-2">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
											<rect x="3" y="7" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
											<path d="M7 11h10" stroke="currentColor" strokeWidth="1" />
										</svg>
										<span>Convocatoria</span>
									</div>
								</article>
							))}
						</div>

						<div className="mt-8 border p-4 bg-surface-secondary">
							<p className="text-center text-sm text-secondary">
								Cualquier beca que solicites y sea aceptada deberá cumplir con servicio comunitario (las horas de servicio comunitario dependerá de la beca)
							</p>
							<p className="text-center text-sm text-accent mt-2">El formato de liberación de servicio debe ser llenado y entregado en la coordinación de becas.</p>
						</div>
					</section>
				)}

				{active === "obtenidas" && (
					<section aria-labelledby="obtenidas-heading">
						<div className="bg-white border p-4">
							<h3 className="bg-gray-700 text-white px-4 py-4 text-xl">Historial de Becas</h3>
							<div className="overflow-x-auto">
								<table className="w-full text-left border-collapse mt-2">
									<thead>
										<tr className="bg-white">
											<th className="px-4 py-3">Beca</th>
											<th className="px-4 py-3">Cantidad</th>
											<th className="px-4 py-3">Fecha de Solicitud</th>
											<th className="px-4 py-3">Fecha de Autorización</th>
											<th className="px-4 py-3">Fecha de Termino</th>
											<th className="px-4 py-3">Autorizó</th>
											<th className="px-4 py-3">Notas</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
										</tr>
									</tbody>
								</table>
							</div>

							<h3 className="bg-gray-700 text-white px-4 py-4 text-xl mt-6">Historial de Proyecta</h3>
							<div className="overflow-x-auto">
								<table className="w-full text-left border-collapse mt-2">
									<thead>
										<tr>
											<th className="px-4 py-3">Beca</th>
											<th className="px-4 py-3">Porcentaje</th>
											<th className="px-4 py-3">Cantidad</th>
											<th className="px-4 py-3">Periodo</th>
											<th className="px-4 py-3">Servicio Social</th>
											<th className="px-4 py-3">Estatus</th>
											<th className="px-4 py-3">Autorizó</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
											<td className="px-4 py-3">-</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
				)}
			</main>
		</div>
	);
}

