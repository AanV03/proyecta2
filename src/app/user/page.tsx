"use client"

import React from "react"
import Image from "next/image"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar } from "lucide-react"

export default function UserPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 py-2">
                <div className="flex-1">
                    <h1 className="text-3xl font-semibold heading-body mb-1">Bienvenido Aaron Alexis Vara Herrera</h1>
                    <p className="text-sm text-secondary">Resumen de avisos y notificaciones</p>
                </div>

                <div className="shrink-0">
                    <Button variant="secondary" size="sm">
                        <Calendar className="size-4" aria-hidden="true" /> Procedimientos
                    </Button>
                </div>
            </div>

            <section aria-labelledby="avisos" className="space-y-4">
                <h2 id="avisos" className="sr-only">
                    Avisos y notificaciones
                </h2>

                <Accordion type="single" collapsible className="divide-y divide-border-default rounded-md overflow-hidden bg-surface-secondary">
                    <AccordionItem value="pide">
                        <AccordionTrigger className="px-5">Programa Institucional de Desarrollo (PIDE) 2024 - 2028</AccordionTrigger>
                        <AccordionContent className="px-5">
                            <p className="text-sm text-text-secondary py-2">Información y enlaces del PIDE.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="imss">
                        <AccordionTrigger className="px-5">Seguro de Salud para Estudiantes IMSS</AccordionTrigger>
                        <AccordionContent className="px-5">
                            <p className="text-sm text-text-secondary py-2">Requisitos y trámites para el seguro.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="catalogo">
                        <AccordionTrigger className="px-5">Catálogo de Servicio Comunitario</AccordionTrigger>
                        <AccordionContent className="px-5">
                            <p className="text-sm text-text-secondary py-2">Actividades disponibles y registro.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="becas">
                        <AccordionTrigger className="px-5">Manual para Becas Internas</AccordionTrigger>
                        <AccordionContent className="px-5">
                            <p className="text-sm text-text-secondary py-2">Guía y formularios para becas internas.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <section aria-labelledby="procedimientos">
                <h2 id="procedimientos" className="text-lg font-semibold">Procedimientos para Inscripciones</h2>

                <Card className="mt-4 shadow-sm">
                    <CardHeader>
                        <CardTitle>Procedimientos para Inscripciones</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-text-secondary">- Regulares</p>
                                <p className="text-sm text-text-secondary">- Reincorporados</p>
                                <p className="text-sm text-text-secondary">- Extemporáneos</p>
                                <p className="text-sm text-text-secondary">- Exámenes Especiales</p>
                            </div>

                            <div className="w-full md:w-64">
                                <Image
                                    src="/img/inscripciones-placeholder.png"
                                    alt="Procedimientos para inscripciones"
                                    width={256}
                                    height={256}
                                    className="w-full h-auto rounded-md border"
                                />
                                <div className="mt-3 flex justify-end">
                                    <Button variant="default">
                                        Ingresa aquí <ChevronRight className="size-4" aria-hidden="true" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}
