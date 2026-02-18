"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Menu, Calendar, Users, Bell, ChevronDown, Globe } from "lucide-react"

type Props = {
    onMenuClick: () => void
}

export default function TopBar({ onMenuClick }: Props) {
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
                            <DropdownMenuLabel>Navegación</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Inicio</DropdownMenuItem>
                            <DropdownMenuItem>Cuenta</DropdownMenuItem>
                            <DropdownMenuItem>Registro Vehicular</DropdownMenuItem>
                            <DropdownMenuItem>Encuestas</DropdownMenuItem>
                            <DropdownMenuItem>Calendario</DropdownMenuItem>
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
                            <DropdownMenuLabel>Calendario</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Próximos eventos</DropdownMenuItem>
                            <DropdownMenuItem>Eventos académicos</DropdownMenuItem>
                            <DropdownMenuItem>Ver calendario completo</DropdownMenuItem>
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
                                <Users className="size-4" aria-hidden="true" />
                                <span className="text-xs">Directorio</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <DropdownMenuLabel>Directorio</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Búsqueda de contactos</DropdownMenuItem>
                            <DropdownMenuItem>Departamentos</DropdownMenuItem>
                            <DropdownMenuItem>Directorio completo</DropdownMenuItem>
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
                            <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Nueva mensaje de profesor</DropdownMenuItem>
                            <DropdownMenuItem>Calificación publicada</DropdownMenuItem>
                            <DropdownMenuItem>Evento próximo</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-center justify-center">Ver todas</DropdownMenuItem>
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
                            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Cuenta de usuario</DropdownMenuItem>
                            <DropdownMenuItem>Registro Vehicular</DropdownMenuItem>
                            <DropdownMenuSeparator />
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
        </header>
    )
}
