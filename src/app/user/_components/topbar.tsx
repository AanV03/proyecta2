"use client"

import React, { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { LogOut, User, Menu, Calendar, Phone, Bell, ChevronDown, Globe } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"

type Props = {
    onMenuClick: () => void
}

export default function TopBar({ onMenuClick }: Props) {
    const router = useRouter()
    const [dirQuery, setDirQuery] = useState("")
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [calendarType, setCalendarType] = useState<"upcoming" | "academic" | "full" | null>(null)

    // TODO: replace these with real data from API
    const upcomingEvents = useMemo(
        () => [
            { id: 1, title: "Feria de Ciencias", date: "2026-03-01" },
            { id: 2, title: "Charla: Carreras", date: "2026-03-05" },
        ],
        []
    )

    const academicEvents = useMemo(
        () => [
            { id: 1, title: "Inicio de semestre", date: "2026-02-20" },
            { id: 2, title: "Exámenes parciales", date: "2026-04-10" },
        ],
        []
    )
    const directoryItems = useMemo(
        () => ["Departamentos", "Directorio completo"],
        []
    )
    const filteredDirectory = directoryItems.filter((item) =>
        item.toLowerCase().includes(dirQuery.toLowerCase())
    )
    return (
        <header className="topbar-dark border-b">
            <div className="max-w-full mx-auto px-6 py-3 flex items-center justify-between gap-4">
                {/* Logo left with menu toggle */}
                <div className="shrink-0 flex items-center gap-2">
                    <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={onMenuClick}
                        className="rounded"
                    >
                        <Menu className="size-4" aria-hidden="true" />
                    </Button>
                    <Image
                        src="/img/Proyecta_logo.png"
                        alt="Proyecta"
                        width={40}
                        height={40}
                        className="h-10 w-auto rounded"
                    />
                </div>

                {/* Navigation dropdowns - center */}
                <div className="flex items-center gap-2 flex-1 justify-center">
                    {/* Navigation */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="topbar-nav-btn rounded"
                                aria-label="Menú de navegación"
                            >
                                <Globe className="size-4" aria-hidden="true" />
                                <span className="text-xs">Navegación</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>UTCH</DropdownMenuItem>
                            <DropdownMenuItem>Correo y Apps</DropdownMenuItem>
                            <DropdownMenuItem>UTCH Virtual</DropdownMenuItem>
                            <DropdownMenuItem>Proyecta Lite</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Calendar */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="topbar-nav-btn rounded"
                                aria-label="Menú de calendario"
                            >
                                <Calendar className="size-4" aria-hidden="true" />
                                <span className="text-xs">Calendario</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <DropdownMenuItem
                                onClick={() => {
                                    setCalendarType("upcoming")
                                    setIsCalendarOpen(true)
                                }}
                            >
                                Próximos eventos
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    setCalendarType("academic")
                                    setIsCalendarOpen(true)
                                }}
                            >
                                Eventos académicos
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    setCalendarType("full")
                                    setIsCalendarOpen(true)
                                }}
                            >
                                Ver calendario completo
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Directory */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="topbar-nav-btn rounded"
                                aria-label="Menú de directorio"
                            >
                                <Phone className="size-4" aria-hidden="true" />
                                <span className="text-xs">Directorio</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <div className="px-3 py-2 w-64">
                                <Input
                                    placeholder="Buscar..."
                                    value={dirQuery}
                                    onChange={(e) => setDirQuery(e.target.value)}
                                    className="mb-2"
                                />
                            </div>
                            {filteredDirectory.length > 0 ? (
                                filteredDirectory.map((item) => (
                                    <DropdownMenuItem
                                        key={item}
                                        onClick={() => {
                                            if (item === "Directorio completo") {
                                                router.push('/user/directory')
                                            }
                                        }}
                                    >
                                        {item}
                                    </DropdownMenuItem>
                                ))
                            ) : (
                                <DropdownMenuItem className="opacity-60">No hay resultados</DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Notifications */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="topbar-nav-btn rounded relative"
                                aria-label="Menú de notificaciones"
                            >
                                <Bell className="size-4" aria-hidden="true" />
                                <span 
                                    className="topbar-notification-dot absolute top-1 right-1 size-2 rounded-full" 
                                    aria-hidden="true" 
                                />
                                <span className="text-xs">Notificaciones</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <DropdownMenuItem>Nueva mensaje de profesor</DropdownMenuItem>
                            <DropdownMenuItem>Calificación publicada</DropdownMenuItem>
                            <DropdownMenuItem>Evento próximo</DropdownMenuItem>
                            <DropdownMenuItem
                                className="text-center justify-center"
                                onClick={() => router.push('/user/notifications')}
                            >
                                Ver todas
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* User menu right */}
                <div className="shrink-0">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="topbar-nav-btn rounded flex items-center gap-2"
                            >
                                <div className="topbar-avatar h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                                    <User 
                                        className="size-4" 
                                        aria-hidden="true" 
                                    />
                                </div>
                                <div className="text-left hidden md:block">
                                    <p className="text-xs font-semibold leading-tight">Aaron Vara</p>
                                    <p className="text-xs opacity-75">Estudiante</p>
                                </div>
                                <ChevronDown className="size-4 ml-1" aria-hidden="true" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Cuenta de usuario</DropdownMenuItem>
                            <DropdownMenuItem>Registro Vehicular</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive" asChild>
                                <button className="w-full flex items-center gap-2">
                                    <LogOut className="size-4" aria-hidden="true" />
                                    <span>Cerrar sesión</span>
                                </button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <Dialog
                open={isCalendarOpen}
                onOpenChange={(open) => {
                    setIsCalendarOpen(open)
                    if (!open) setCalendarType(null)
                }}
            >
                <DialogContent showCloseButton>
                    <DialogHeader>
                        <DialogTitle>
                            {calendarType === "academic" ? "Eventos académicos" : "Próximos eventos"}
                        </DialogTitle>
                        <DialogDescription>
                            {calendarType === "academic"
                                ? "Eventos académicos disponibles"
                                : "Eventos próximos disponibles"}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-2 max-h-60 overflow-auto">
                        {calendarType === "academic" ? (
                            academicEvents.length > 0 ? (
                                academicEvents.map((ev) => (
                                    <div key={ev.id} className="py-2 border-b last:border-b-0">
                                        <p className="font-medium">{ev.title}</p>
                                        <p className="text-xs opacity-70">{ev.date}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="opacity-60">No hay eventos académicos</p>
                            )
                        ) : calendarType === "upcoming" ? (
                            upcomingEvents.length > 0 ? (
                                upcomingEvents.map((ev) => (
                                    <div key={ev.id} className="py-2 border-b last:border-b-0">
                                        <p className="font-medium">{ev.title}</p>
                                        <p className="text-xs opacity-70">{ev.date}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="opacity-60">No hay eventos próximos</p>
                            )
                        ) : calendarType === "full" ? (
                            <div className="w-full h-96">
                                <div className="mb-2 text-sm">
                                    <a
                                        href="https://www.utch.edu.mx/wp-content/uploads/2025/12/CALENDARIO-ENE-ABR-2026.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-primary underline"
                                    >
                                        Abrir calendario en nueva pestaña
                                    </a>
                                </div>
                                <iframe
                                    src="https://www.utch.edu.mx/wp-content/uploads/2025/12/CALENDARIO-ENE-ABR-2026.pdf"
                                    title="Calendario completo ENE-ABR 2026"
                                    className="w-full h-full border"
                                />
                            </div>
                        ) : (
                            <p className="opacity-60">Seleccione una sección del calendario</p>
                        )}
                    </div>

                    <DialogFooter className="mt-4">
                        <Button variant="outline" onClick={() => setIsCalendarOpen(false)}>
                            Cerrar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </header>
    )
}
