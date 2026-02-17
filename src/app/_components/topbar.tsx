"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
    Home,
    Users,
    UserCheck,
    Building2,
    Key,
    Mail,
    BookOpen,
    LogIn,
    ChevronDown,
} from "lucide-react";

export default function TopBar() {
    return (
        <header
            className="topbar w-full py-3 px-6 border-b"
        >
            <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
                {/* Left Navigation Section */}
                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <Link href="/" aria-label="UTCH Home" className="flex items-center">
                        <Image src="/img/utch-logo-blanco.png" alt="UTCH" width={32} height={32} className="logo-small" />
                    </Link>
                    {/* spacing */}
                    <div className="h-0.5 w-3" aria-hidden="true" />

                    <div className="flex items-center gap-2">
                        

                        {/* Registro Aspirantes Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="gap-2 text-btn-dark"
                                    aria-label="Registro de aspirantes - abrir menú"
                                >
                                    <UserCheck className="h-4 w-4" />
                                    <span className="hidden sm:inline text-sm">Registro Aspirantes</span>
                                    <ChevronDown className="h-3 w-3 opacity-70" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-48 dropdown-content-dark">
                                <DropdownMenuItem asChild>
                                    <a href="#ingenierias" className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        Ingenierías
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="#maestrias" className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        Maestrías
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2 text-btn-dark"
                            aria-label="Acceso para empresas"
                            title="Acceso para empresas"
                        >
                            <Building2 className="h-4 w-4" />
                            <span className="hidden sm:inline text-sm">Acceso Empresas</span>
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2 text-btn-dark"
                            aria-label="Recuperar contraseña"
                            title="Recuperar contraseña"
                        >
                            <Key className="h-4 w-4" />
                            <span className="hidden sm:inline text-sm">Recuperar Contraseña</span>
                        </Button>
                    </div>
                </div>

                {/* Right Navigation Section */}
                <div className="flex items-center gap-2">
                    {/* Icon buttons: Inicio, Mail, Libro */}
                    <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Inicio"
                        title="Inicio"
                        className="text-btn-dark"
                    >
                        <Home className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Correo"
                        title="Correo"
                        className="text-btn-dark"
                    >
                        <Mail className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Libro"
                        title="Libro"
                        className="text-btn-dark"
                    >
                        <BookOpen className="h-4 w-4" />
                    </Button>

                    {/* User Menu Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2 bg-btn-primary"
                                aria-label="Menú de usuario - abrir"
                            >
                                <LogIn className="h-4 w-4" />
                                <span className="hidden sm:inline text-sm">Ingresar</span>
                                <ChevronDown className="h-3 w-3 opacity-70" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 dropdown-content-dark">
                            <DropdownMenuItem asChild>
                                <a href="#login-student" className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    Ingresar como Estudiante
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <a href="#login-teacher" className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    Ingresar como Docente
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <a href="#login-admin" className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    Ingresar como Administrador
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
