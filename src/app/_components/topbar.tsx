"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    
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
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [matricula, setMatricula] = useState("");
    const [password, setPassword] = useState("");

    const handleCancel = () => {
        setIsDialogOpen(false);
        setMatricula("");
        setPassword("");
        router.push("/");
    };

    const handleLogin = () => {
        setIsDialogOpen(false);
        setMatricula("");
        setPassword("");
        router.push("/user");
    };
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

                    <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 bg-btn-primary"
                        aria-label="Ingresar"
                        title="Ingresar"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        <LogIn className="h-4 w-4" />
                        <span className="hidden sm:inline text-sm">Ingresar</span>
                    </Button>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-[245px]">
                    <DialogHeader>
                        <DialogTitle>Iniciar Sesión</DialogTitle>
                        <DialogDescription>
                            Ingresa tu matrícula y contraseña para acceder
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="matricula">Matrícula</Label>
                            <Input
                                id="matricula"
                                placeholder="Ingresa tu matrícula"
                                value={matricula}
                                onChange={(e) => setMatricula(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full">
                        <Button
                            variant="outline"
                            onClick={handleCancel}
                            className="w-1/2 bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700"
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={handleLogin}
                            className="w-1/2 bg-green-600 hover:bg-green-700 text-white"
                        >
                            Iniciar Sesión
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </header>
    );
}
