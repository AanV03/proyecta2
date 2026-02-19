"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { ChevronLeft, PlusSquare, Calendar } from "lucide-react"

export default function ExtracurricularPage() {
    const activityTypes = ["Actividades Cívicas", "Actividades Culturales", "Actividades deportivas", "Ninguna"]
    const activities = ["Declamación", "Oratoria", "Música", "Danza Folklórica", "Teatro"]

    return (
        <main className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-6">
                <Button
                    variant="ghost"
                    size="sm"
                    aria-label="Volver"
                    className="rounded-full"
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <h1 className="text-3xl font-semibold">Actividades <span className="text-muted-foreground text-lg">deportivas, culturales y cívicas</span></h1>
            </div>

            <section className="space-y-6">
                <Card>
                    <CardHeader className="-mt-6 py-4 rounded-t-xl" style={{ backgroundColor: "var(--color-primitive-gray-dark)", color: "var(--text-inverse)" }}>
                        <CardTitle style={{ color: "var(--text-inverse)" }} className="text-base">Registro de actividades</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Selecciona alguna actividad en la que te gustaría participar.</p>
                        <div className="flex flex-col lg:flex-row items-end gap-4 pb-6">
                            <div className="w-full lg:w-[40%]">
                                <Label htmlFor="tipo">Tipo</Label>
                                <Select>
                                    <SelectTrigger id="tipo" className="mt-2">
                                        <SelectValue placeholder="Selecciona tipo..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {activityTypes.map((t) => (
                                            <SelectItem key={t} value={t}>{t}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full lg:w-[40%]">
                                <Label htmlFor="actividad">Actividad</Label>
                                <Select>
                                    <SelectTrigger id="actividad" className="mt-2">
                                        <SelectValue placeholder="Selecciona actividad..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {activities.map((a) => (
                                            <SelectItem key={a} value={a}>{a}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button variant="default" className="inline-flex items-center gap-2 whitespace-nowrap w-full lg:w-[20%]">
                                <PlusSquare className="h-4 w-4" /> Agregar actividad
                            </Button>
                        </div>

                        <div className="py-3 -mx-6 px-6 mb-6 bg-(--color-primitive-green-primary)">
                            <Label className="text-sm font-semibold text-(--btn-primary-text)">Actividades en las que estás inscrito en el periodo actual</Label>
                        </div>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Actividad</TableHead>
                                    <TableHead>Fecha</TableHead>
                                    <TableHead>Periodo</TableHead>
                                    <TableHead>Eliminar</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Declamación</TableCell>
                                    <TableCell>02/09/2024</TableCell>
                                    <TableCell>2024-1</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="-mt-6 py-4 rounded-t-xl" style={{ backgroundColor: "var(--color-primitive-gray-dark)", color: "var(--text-inverse)" }}>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <CardTitle style={{ color: "var(--text-inverse)" }} className="text-base">Eventos y asistencia liberados</CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Número Evento</TableHead>
                                    <TableHead>Descripción</TableHead>
                                    <TableHead>Fecha Liberación</TableHead>
                                    <TableHead>Liberado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[1, 2, 3, 4].map((n) => (
                                    <TableRow key={n}>
                                        <TableCell style={{ color: 'var(--text-secondary)' }}>{n}</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell style={{ color: 'var(--text-secondary)' }}>Sin liberar</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}
