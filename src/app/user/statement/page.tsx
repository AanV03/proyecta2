"use client"

import React from "react"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const metrics = [
	{
		id: 1,
		title: "Saldo Actual",
		value: "$0,00",
		colorVar: "--color-primitive-green-primary",
		textVar: "--color-primitive-gray-light",
	},
	{
		id: 2,
		title: "Total Cargos",
		value: "$3.957,00",
		colorVar: "--chart-4",
		textVar: "--color-primitive-gray-darkest",
	},
	{
		id: 3,
		title: "Total Abonos",
		value: "$3.957,00",
		colorVar: "--chart-2",
		textVar: "--color-primitive-gray-light",
	},
]

const statementRows = [
	{
		date: "2026-01-01",
		concept: "CUOTA DE INSCRIPCIÓN INGENIERÍA BIS - ENERO-ABRIL 2026",
		type: "Cargo",
		cargos: "$3,957.00",
		abonos: "-",
		saldo: "-",
	},
	{
		date: "2025-12-18",
		concept: "SEGURO DE ACCIDENTES INGENIERÍA - ENERO-ABRIL 2026",
		type: "Abono",
		cargos: "-",
		abonos: "$270.00",
		saldo: "-",
	},
]

const payments = new Array(12).fill(0).map((_, i) => ({
	id: 400000 + i,
	date: "17/08/2023",
	concept: i % 2 === 0 ? "SEGURO DE ACCIDENTES TSU" : "CUOTA DE INSCRIPCIÓN TSU INTENSIVO",
	qty: 1,
	status: "PAGADO",
	amount: i % 2 === 0 ? "$260,00" : "$2.550,00",
}))

export default function StatementPage() {
	return (
		<main className="container mx-auto px-4 py-8 max-w-6xl">
			<header className="mb-6">
				<h1 className="text-3xl font-semibold">Mi <span className="text-muted-foreground">Estado Financiero</span></h1>
			</header>

			<section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
				{metrics.map((m) => (
					<Card
						key={m.id}
						className="flex items-center justify-between"
						style={{
							backgroundColor: `var(${m.colorVar})`,
							color: `var(${m.textVar})`,
						}}
					>
						<CardContent className="flex flex-col gap-1">
							<div className="text-sm" style={{ color: 'inherit', opacity: 0.9 }}>
								{m.title}
							</div>
							<div className="text-2xl font-bold" style={{ color: 'inherit' }}>{m.value}</div>
						</CardContent>
					</Card>
				))}
			</section>

			<section>
				<Tabs defaultValue="estado">
					<TabsList>
						<TabsTrigger value="estado">Estado de Cuenta ING</TabsTrigger>
						<TabsTrigger value="pagos">Todos los Pagos</TabsTrigger>
					</TabsList>

					<TabsContent value="estado">
						<Card>
							<CardHeader>
								<CardTitle>Estado de Cuenta de Ingeniería</CardTitle>
								<CardDescription>Listado simplificado, responsivo y accesible.</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="overflow-x-auto">
									<table className="w-full text-sm" role="table" aria-label="Estado de cuenta">
										<thead>
											<tr className="text-left text-xs text-muted-foreground">
												<th className="px-3 py-2">Fecha</th>
												<th className="px-3 py-2">Concepto</th>
												<th className="px-3 py-2">Tipo</th>
												<th className="px-3 py-2">Cargos</th>
												<th className="px-3 py-2">Abonos</th>
												<th className="px-3 py-2">Saldo</th>
											</tr>
										</thead>
										<tbody>
											{statementRows.map((r, idx) => (
												<tr key={idx} className={idx % 2 === 0 ? "bg-surface-secondary" : ""}>
													<td className="px-3 py-2 align-top">{r.date}</td>
													<td className="px-3 py-2 align-top">{r.concept}</td>
													<td className="px-3 py-2 align-top">
														<span className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs">
															{r.type}
														</span>
													</td>
													<td className="px-3 py-2 align-top">{r.cargos}</td>
													<td className="px-3 py-2 align-top">{r.abonos}</td>
													<td className="px-3 py-2 align-top">{r.saldo}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</CardContent>
							<CardContent className="mt-6">
								<Card>
									<CardHeader>
										<CardTitle>Leyenda de Colores</CardTitle>
										<CardDescription>Significado de los colores usados en el estado de cuenta.</CardDescription>
									</CardHeader>
									<CardContent>
										<ul role="list" className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
											<li className="flex items-center gap-3">
												<span className="inline-block h-6 w-6 rounded-md border" style={{ backgroundColor: "var(--btn-primary-bg)" }} aria-hidden />
												<span>Cargos de colegiaturas</span>
											</li>
											<li className="flex items-center gap-3">
												<span className="inline-block h-6 w-6 rounded-md border" style={{ backgroundColor: "var(--chart-2)" }} aria-hidden />
												<span>Abonos regulares</span>
											</li>
											<li className="flex items-center gap-3">
												<span className="inline-block h-6 w-6 rounded-md border" style={{ backgroundColor: "var(--chart-5)" }} aria-hidden />
												<span>Beca aprobada y liberada</span>
											</li>
											<li className="flex items-center gap-3">
												<span className="inline-block h-6 w-6 rounded-md border" style={{ backgroundColor: "var(--chart-4)" }} aria-hidden />
												<span>Beca pendiente de liberación</span>
											</li>
											<li className="flex items-center gap-3">
												<span className="inline-block h-6 w-6 rounded-md border" style={{ backgroundColor: "var(--destructive)" }} aria-hidden />
												<span>Beca no liberada o cancelada</span>
											</li>
											<li className="flex items-center gap-3">
												<span className="inline-block h-6 w-6 rounded-md border" style={{ backgroundColor: "var(--sidebar-primary)" }} aria-hidden />
												<span>Abono no asignado a un cuatrimestre</span>
											</li>
										</ul>
									</CardContent>
								</Card>
							</CardContent>
							<CardFooter>
								<div className="ml-auto text-sm text-muted-foreground">Total Cargos: $3.957,00 — Total Abonos: $3.957,00 — Saldo: $0,00</div>
							</CardFooter>
						</Card>
					</TabsContent>

					<TabsContent value="pagos">
						<Card>
							<CardHeader>
								<CardTitle>Pagos</CardTitle>
								<CardDescription>Todos los pagos realizados (lista simplificada).</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="overflow-x-auto">
									<table className="w-full text-sm" role="table" aria-label="Todos los pagos">
										<thead>
											<tr className="text-left text-xs text-muted-foreground">
												<th className="px-3 py-2">No. Pago</th>
												<th className="px-3 py-2">Fecha</th>
												<th className="px-3 py-2">Concepto</th>
												<th className="px-3 py-2">Cantidad</th>
												<th className="px-3 py-2">Estatus</th>
												<th className="px-3 py-2">Importe</th>
											</tr>
										</thead>
										<tbody>
											{payments.map((p, i) => (
												<tr key={p.id} className={i % 2 === 0 ? "bg-surface-secondary" : ""}>
													<td className="px-3 py-2">{p.id}</td>
													<td className="px-3 py-2">{p.date}</td>
													<td className="px-3 py-2">{p.concept}</td>
													<td className="px-3 py-2">{p.qty}</td>
													<td className="px-3 py-2">
														<span className="inline-block rounded-full bg-sky-100 text-sky-700 px-2 py-0.5 text-xs">{p.status}</span>
													</td>
													<td className="px-3 py-2">{p.amount}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</section>
		</main>
	)
}

