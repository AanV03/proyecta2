"use client"

import React, { useState } from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    ChevronRight,
    Home,
    Folder,
    FileText,
    BarChart3,
    Users,
    Briefcase,
    Target,
    Building2,
    CheckCircle2,
    Search,
} from "lucide-react"

interface DiagramNode {
    id: string
    label: string
    color: string
    icon: React.ReactNode
    children?: DiagramNode[]
    documents?: string[]
}

const gestureSystemData: DiagramNode = {
    id: "root",
    label: "Sistema de Gestión",
    color: "diagram-root",
    icon: <BarChart3 className="w-6 h-6" />,
    children: [
        {
            id: "repositorio-documentos",
            label: "Repositorio de Documentos",
            color: "diagram-teal-light",
            icon: <Folder className="w-5 h-5" />,
            children: [
                {
                    id: "plantillas-documentos",
                    label: "Plantillas de Documentos",
                    color: "diagram-teal-dark",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Plantilla de Acta", "Plantilla de Reporte", "Plantilla de Evaluación"],
                },
                {
                    id: "minuta-reunion",
                    label: "Minuta de Reunión",
                    color: "diagram-teal-dark",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Minuta Enero 2024", "Minuta Febrero 2024"],
                },
                {
                    id: "informacion",
                    label: "Información General",
                    color: "diagram-teal-dark",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Guía de Uso", "Políticas de Calidad"],
                },
            ],
        },
        {
            id: "lista-maestra",
            label: "Lista Maestra de Documentos",
            color: "diagram-purple",
            icon: <FileText className="w-5 h-5" />,
            children: [
                {
                    id: "formatos",
                    label: "Formatos",
                    color: "diagram-blue",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Formato ISO 21001", "Formato de Evaluación", "Formato de Satisfacción"],
                },
                {
                    id: "procedimientos",
                    label: "Procedimientos",
                    color: "diagram-green",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Procedimiento de Admisión", "Procedimiento de Evaluación", "Procedimiento de Auditoría"],
                },
                {
                    id: "instrucciones-trabajo",
                    label: "Instrucciones de Trabajo",
                    color: "diagram-orange",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["IT-001 Proceso de Ingreso", "IT-002 Evaluación Académica"],
                },
                {
                    id: "manuales",
                    label: "Manuales",
                    color: "diagram-purple",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Manual de Calidad", "Manual de Procedimientos"],
                },
                {
                    id: "lineamientos",
                    label: "Lineamientos",
                    color: "diagram-pink",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Lineamiento Académico", "Lineamiento Administrativo"],
                },
                {
                    id: "reglamentos",
                    label: "Reglamentos",
                    color: "diagram-cyan",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Reglamento Estudiantil", "Reglamento Disciplinario"],
                },
                {
                    id: "documentos-referencia",
                    label: "Documentos de Referencia",
                    color: "diagram-indigo",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Norma ISO 21001", "Legislación Educativa"],
                },
                {
                    id: "mapas-proceso",
                    label: "Mapas de Proceso",
                    color: "diagram-lime",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Mapa de Procesos General", "Mapa de Gestión Académica"],
                },
                {
                    id: "documentos-externos",
                    label: "Documentos Externos",
                    color: "diagram-slate",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Resoluciones del MEN", "Acreditaciones Externas"],
                },
            ],
        },
        {
            id: "documentos-trazabilidad",
            label: "Documentos para Trazabilidad",
            color: "diagram-green",
            icon: <FileText className="w-5 h-5" />,
            children: [
                {
                    id: "seguimiento-riesgos",
                    label: "Seguimiento Cuatrimestral de Riesgos",
                    color: "diagram-yellow",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Reporte Q1 2024", "Reporte Q2 2024"],
                },
                {
                    id: "programa-mejora",
                    label: "Programa Anual de Mejora",
                    color: "diagram-orange",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["PAM 2024", "Evaluación PAM 2023"],
                },
                {
                    id: "mecasut",
                    label: "MECASUT",
                    color: "diagram-red",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["MECASUT 2024", "Análisis MECASUT"],
                },
                {
                    id: "matriz-indicadores",
                    label: "Matriz de Indicadores",
                    color: "diagram-pink",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Matriz General", "Seguimiento Mensual"],
                },
            ],
        },
        {
            id: "entradas",
            label: "Entradas",
            color: "diagram-gray",
            icon: <Briefcase className="w-5 h-5" />,
            children: [
                {
                    id: "necesidades-requisitos",
                    label: "Necesidades y requisitos de las partes interesadas",
                    color: "diagram-gray",
                    icon: <Users className="w-4 h-4" />,
                    documents: ["Requisitos de Stakeholders", "Análisis de Necesidades"],
                },
            ],
        },
        {
            id: "estrategico",
            label: "Estratégico",
            color: "diagram-gray",
            icon: <Target className="w-5 h-5" />,
            children: [
                {
                    id: "planeacion-estrategica",
                    label: "Planeación Estratégica",
                    color: "diagram-green",
                    icon: <CheckCircle2 className="w-4 h-4" />,
                    documents: ["Plan Estratégico 2024-2026", "Objetivos SMART"],
                },
                {
                    id: "marco-juridico",
                    label: "Marco Jurídico",
                    color: "diagram-blue-dark",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Constitución", "Reglamentos"],
                },
                {
                    id: "comunicacion",
                    label: "Comunicación",
                    color: "diagram-indigo",
                    icon: <Users className="w-4 h-4" />,
                    documents: ["Plan de Comunicación", "Protocolos"],
                },
            ],
        },
        {
            id: "provision",
            label: "Provisión de Productos y Servicios Educativos",
            color: "diagram-gray",
            icon: <Building2 className="w-5 h-5" />,
            children: [
                {
                    id: "seleccion-ingreso",
                    label: "Selección e Ingreso de los Estudiantes",
                    color: "diagram-blue-dark",
                    icon: <Users className="w-4 h-4" />,
                    documents: ["Requisitos de Admisión"],
                },
                {
                    id: "elaboracion-estructura",
                    label: "Elaboración de Estructura",
                    color: "diagram-blue-dark",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Estructura Curricular"],
                },
                {
                    id: "planeacion-evaluacion",
                    label: "Planeación y Evaluación de los Aprendizajes",
                    color: "diagram-blue-dark",
                    icon: <BarChart3 className="w-4 h-4" />,
                    documents: ["Rúbricas de Evaluación", "Criterios"],
                },
                {
                    id: "tutorias-asesorias",
                    label: "Tutorías y Asesorías Académicas",
                    color: "diagram-blue-dark",
                    icon: <Users className="w-4 h-4" />,
                    documents: ["Programa de Tutoría"],
                },
                {
                    id: "visitas-conferencias",
                    label: "Visitas y Conferencias",
                    color: "diagram-blue-dark",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Calendario de Actividades"],
                },
                {
                    id: "practicas-estadias",
                    label: "Prácticas y Estadías",
                    color: "diagram-blue-dark",
                    icon: <Briefcase className="w-4 h-4" />,
                    documents: ["Convenios Prácticas"],
                },
                {
                    id: "titulacion",
                    label: "Titulación",
                    color: "diagram-blue-dark",
                    icon: <Briefcase className="w-4 h-4" />,
                    documents: ["Requisitos de Titulación"],
                },
                {
                    id: "seguimiento-egresados",
                    label: "Seguimiento a Egresados",
                    color: "diagram-blue-dark",
                    icon: <Users className="w-4 h-4" />,
                    documents: ["Encuestas de Egresados"],
                },
                {
                    id: "educacion-continua",
                    label: "Educación Continua",
                    color: "diagram-blue-dark",
                    icon: <Users className="w-4 h-4" />,
                    documents: ["Programas de Capacitación"],
                },
            ],
        },
        {
            id: "apoyo-recursos",
            label: "Apoyo y provisión de recursos",
            color: "diagram-gray",
            icon: <Briefcase className="w-5 h-5" />,
            children: [
                {
                    id: "recursos-financieros",
                    label: "Recursos Financieros",
                    color: "diagram-blue-dark",
                    icon: <BarChart3 className="w-4 h-4" />,
                    documents: ["Presupuesto Anual"],
                },
                {
                    id: "recursos-humanos",
                    label: "Recursos Humanos",
                    color: "diagram-blue-dark",
                    icon: <Users className="w-4 h-4" />,
                    documents: ["Manual de Funciones"],
                },
                {
                    id: "acceso-estudiantes",
                    label: "Acceso al Estudiante",
                    color: "diagram-blue-dark",
                    icon: <Folder className="w-4 h-4" />,
                    documents: ["Portal Estudiante"],
                },
                {
                    id: "infraestructura",
                    label: "Infraestructura",
                    color: "diagram-blue-dark",
                    icon: <Building2 className="w-4 h-4" />,
                    documents: ["Planos", "Especificaciones"],
                },
            ],
        },
        {
            id: "mejora-permanente",
            label: "Mejora permanente",
            color: "diagram-gray",
            icon: <CheckCircle2 className="w-5 h-5" />,
            children: [
                {
                    id: "medicion-satisfaccion",
                    label: "Medición de la Satisfacción",
                    color: "diagram-red",
                    icon: <BarChart3 className="w-4 h-4" />,
                    documents: ["Encuestas de Satisfacción"],
                },
                {
                    id: "quejas-sugerencias",
                    label: "Quejas y Sugerencias",
                    color: "diagram-red",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Registro de Quejas"],
                },
                {
                    id: "evaluacion-proveedores",
                    label: "Evaluación de Proveedores",
                    color: "diagram-red",
                    icon: <CheckCircle2 className="w-4 h-4" />,
                    documents: ["Matriz de Evaluación"],
                },
                {
                    id: "control-salida-no-conforme",
                    label: "Control de Salida No Conforme",
                    color: "diagram-red",
                    icon: <Target className="w-4 h-4" />,
                    documents: ["Procedimiento de Control"],
                },
                {
                    id: "auditoria-interna",
                    label: "Auditoría Interna",
                    color: "diagram-red",
                    icon: <CheckCircle2 className="w-4 h-4" />,
                    documents: ["Reportes de Auditoría"],
                },
                {
                    id: "revision-rectora",
                    label: "Revisión de Rectora al SG",
                    color: "diagram-red",
                    icon: <Users className="w-4 h-4" />,
                    documents: ["Actas de Revisión"],
                },
                {
                    id: "acciones-correctivas",
                    label: "Acciones Correctivas y Mejoras",
                    color: "diagram-blue",
                    icon: <Target className="w-4 h-4" />,
                    documents: ["Plan de Mejora"],
                },
                {
                    id: "control-documentacion",
                    label: "Control de la Documentación",
                    color: "diagram-purple",
                    icon: <FileText className="w-4 h-4" />,
                    documents: ["Manual de Procedimientos"],
                },
                {
                    id: "administracion-riesgos",
                    label: "Administración de Riesgos",
                    color: "diagram-green",
                    icon: <Target className="w-4 h-4" />,
                    documents: ["Matriz de Riesgos"],
                },
            ],
        },
        {
            id: "salidas",
            label: "Salidas",
            color: "diagram-gray",
            icon: <Briefcase className="w-5 h-5" />,
            children: [
                {
                    id: "satisfaccion-partes",
                    label: "Satisfacción de las partes interesadas",
                    color: "diagram-gray",
                    icon: <CheckCircle2 className="w-4 h-4" />,
                    documents: ["Resultados de Satisfacción", "Métricas de Calidad"],
                },
            ],
        },
    ],
}

type BreadcrumbPath = string[]

// Las clases de color ahora vienen directamente del objeto de datos
const getColorClass = (colorClass: string): string => {
    return colorClass ?? "diagram-gray"
}

export default function QualityPage() {
    const [selectedPath, setSelectedPath] = useState<BreadcrumbPath>(["root"])
    const [searchQuery, setSearchQuery] = useState("")

    const getCurrentNode = (): DiagramNode => {
        let current = gestureSystemData
        for (let i = 1; i < selectedPath.length; i++) {
            const child = current.children?.find((c) => c.id === selectedPath[i])
            if (child) {
                current = child
            }
        }
        return current
    }

    const currentNode = getCurrentNode()
    const isRoot = selectedPath.length === 1
    const children = currentNode.children ?? []

    const handleNodeClick = (nodeId: string) => {
        setSelectedPath([...selectedPath, nodeId])
    }

    const handleBreadcrumbClick = (index: number) => {
        setSelectedPath(selectedPath.slice(0, index + 1))
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Title */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-gray-900">Calidad</h1>
                </div>
            </div>

            <div className="p-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Search Card */}
                    <Card className="search-gradient border-0 shadow-lg">
                        <div className="p-6">
                            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                                <span>Búsqueda</span>
                            </h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 w-5 h-5 text-blue-100" />
                                <Input
                                    placeholder="Presiona enter para buscar"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-white text-gray-900 border-0 placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Breadcrumb Navigation */}
                    <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        onClick={() => handleBreadcrumbClick(0)}
                                        className="cursor-pointer flex items-center gap-1 text-gray-700 hover:text-blue-600"
                                    >
                                        <Home className="w-4 h-4" />
                                        Sistema de Gestión
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {selectedPath.slice(1).map((pathId, index) => {
                                    let node = gestureSystemData
                                    for (let i = 0; i <= index; i++) {
                                        node = node.children?.find((c) => c.id === selectedPath[i + 1]) ?? node
                                    }
                                    return (
                                        <React.Fragment key={pathId}>
                                            <BreadcrumbSeparator className="text-gray-400" />
                                            <BreadcrumbItem>
                                                {index === selectedPath.length - 2 ? (
                                                    <BreadcrumbPage className="text-gray-700 font-medium">
                                                        {node.label}
                                                    </BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink
                                                        onClick={() => handleBreadcrumbClick(index + 1)}
                                                        className="cursor-pointer text-gray-700 hover:text-blue-600"
                                                    >
                                                        {node.label}
                                                    </BreadcrumbLink>
                                                )}
                                            </BreadcrumbItem>
                                        </React.Fragment>
                                    )
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">{currentNode.label}</h1>
                        <p className="text-gray-600">Componentes del Sistema de Gestión de Calidad</p>
                    </div>

                    {/* Diagram or Content */}
                    {isRoot ? (
                        // Main System Diagram
                        <div className="space-y-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className={`${getColorClass(currentNode.color)} p-6`}>
                                    <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
                                        {currentNode.icon}
                                        {currentNode.label}
                                    </h2>
                                </div>

                                {/* Grid of main sections */}
                                <div className="p-8">
                                    {/* Top row - 3 cards */}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                        <button
                                            onClick={() => setSelectedPath(["root", "repositorio-documentos"])}
                                            className="flex-1 px-6 py-3 diagram-teal-light hover:opacity-90 font-semibold rounded transition-all duration-200 hover:shadow-lg"
                                            aria-label="Navegar a Repositorio de Documentos"
                                        >
                                            Repositorio de Documentos
                                        </button>
                                        <button
                                            onClick={() => setSelectedPath(["root", "lista-maestra"])}
                                            className="flex-1 px-6 py-3 diagram-purple hover:opacity-90 font-semibold rounded transition-all duration-200 hover:shadow-lg"
                                            aria-label="Navegar a Lista Maestra de Documentos"
                                        >
                                            Lista Maestra de Documentos
                                        </button>
                                        <button
                                            onClick={() => setSelectedPath(["root", "documentos-trazabilidad"])}
                                            className="flex-1 px-6 py-3 diagram-green hover:opacity-90 font-semibold rounded transition-all duration-200 hover:shadow-lg"
                                            aria-label="Navegar a Documentos para Trazabilidad"
                                        >
                                            Documentos para Trazabilidad
                                        </button>
                                    </div>

                                    {/* Main grid - 4 columns, 2 rows */}
                                    <div className="grid grid-cols-4 gap-6">
                                        {/* Column 1: Entradas - spanning 2 rows */}
                                        {children.find((c) => c.id === "entradas") && (
                                            <div className="col-start-1 row-start-1 row-span-2">
                                                <Card
                                                    key="entradas"
                                                    className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-blue-400 h-full"
                                                    onClick={() => handleNodeClick("entradas")}
                                                >
                                                    <div className="flex flex-col items-start justify-between h-full">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <div className={`${getColorClass(children.find((c) => c.id === "entradas")?.color ?? "")} p-2 rounded`}>
                                                                    {children.find((c) => c.id === "entradas")?.icon}
                                                                </div>
                                                                <h3 className="font-semibold text-gray-900">Entradas</h3>
                                                            </div>
                                                            <p className="text-sm text-gray-600">
                                                                {children.find((c) => c.id === "entradas")?.children?.length ?? 0} componentes
                                                            </p>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
                                                    </div>
                                                </Card>
                                            </div>
                                        )}

                                        {/* Columns 2-3, Row 1: Estratégico */}
                                        {children.find((c) => c.id === "estrategico") && (
                                            <div className="col-start-2 row-start-1">
                                                <Card
                                                    key="estrategico"
                                                    className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-blue-400"
                                                    onClick={() => handleNodeClick("estrategico")}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <div className={`${getColorClass(children.find((c) => c.id === "estrategico")?.color ?? "")} p-2 rounded`}>
                                                                    {children.find((c) => c.id === "estrategico")?.icon}
                                                                </div>
                                                                <h3 className="font-semibold text-gray-900">Estratégico</h3>
                                                            </div>
                                                            <p className="text-sm text-gray-600">
                                                                {children.find((c) => c.id === "estrategico")?.children?.length ?? 0} componentes
                                                            </p>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
                                                    </div>
                                                </Card>
                                            </div>
                                        )}

                                        {/* Columns 2-3, Row 1: Provisión */}
                                        {children.find((c) => c.id === "provision") && (
                                            <div className="col-start-3 row-start-1">
                                                <Card
                                                    key="provision"
                                                    className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-blue-400"
                                                    onClick={() => handleNodeClick("provision")}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <div className={`${getColorClass(children.find((c) => c.id === "provision")?.color ?? "")} p-2 rounded`}>
                                                                    {children.find((c) => c.id === "provision")?.icon}
                                                                </div>
                                                                <h3 className="font-semibold text-gray-900 text-sm">Provisión de Productos y Servicios</h3>
                                                            </div>
                                                            <p className="text-sm text-gray-600">
                                                                {children.find((c) => c.id === "provision")?.children?.length ?? 0} componentes
                                                            </p>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                                                    </div>
                                                </Card>
                                            </div>
                                        )}

                                        {/* Columns 2-3, Row 2: Apoyo y Recursos */}
                                        {children.find((c) => c.id === "apoyo-recursos") && (
                                            <div className="col-start-2 row-start-2">
                                                <Card
                                                    key="apoyo-recursos"
                                                    className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-blue-400"
                                                    onClick={() => handleNodeClick("apoyo-recursos")}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <div className={`${getColorClass(children.find((c) => c.id === "apoyo-recursos")?.color ?? "")} p-2 rounded`}>
                                                                    {children.find((c) => c.id === "apoyo-recursos")?.icon}
                                                                </div>
                                                                <h3 className="font-semibold text-gray-900 text-sm">Apoyo y Recursos</h3>
                                                            </div>
                                                            <p className="text-sm text-gray-600">
                                                                {children.find((c) => c.id === "apoyo-recursos")?.children?.length ?? 0} componentes
                                                            </p>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                                                    </div>
                                                </Card>
                                            </div>
                                        )}

                                        {/* Columns 2-3, Row 2: Mejora Permanente */}
                                        {children.find((c) => c.id === "mejora-permanente") && (
                                            <div className="col-start-3 row-start-2">
                                                <Card
                                                    key="mejora-permanente"
                                                    className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-blue-400"
                                                    onClick={() => handleNodeClick("mejora-permanente")}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <div className={`${getColorClass(children.find((c) => c.id === "mejora-permanente")?.color ?? "")} p-2 rounded`}>
                                                                    {children.find((c) => c.id === "mejora-permanente")?.icon}
                                                                </div>
                                                                <h3 className="font-semibold text-gray-900 text-sm">Mejora Permanente</h3>
                                                            </div>
                                                            <p className="text-sm text-gray-600">
                                                                {children.find((c) => c.id === "mejora-permanente")?.children?.length ?? 0} componentes
                                                            </p>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                                                    </div>
                                                </Card>
                                            </div>
                                        )}

                                        {/* Column 4: Salidas - spanning 2 rows */}
                                        {children.find((c) => c.id === "salidas") && (
                                            <div className="col-start-4 row-start-1 row-span-2">
                                                <Card
                                                    key="salidas"
                                                    className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-blue-400 h-full"
                                                    onClick={() => handleNodeClick("salidas")}
                                                >
                                                    <div className="flex flex-col items-start justify-between h-full">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <div className={`${getColorClass(children.find((c) => c.id === "salidas")?.color ?? "")} p-2 rounded`}>
                                                                    {children.find((c) => c.id === "salidas")?.icon}
                                                                </div>
                                                                <h3 className="font-semibold text-gray-900">Salidas</h3>
                                                            </div>
                                                            <p className="text-sm text-gray-600">
                                                                {children.find((c) => c.id === "salidas")?.children?.length ?? 0} componentes
                                                            </p>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
                                                    </div>
                                                </Card>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Sub-section view
                        <div className="space-y-6">
                            {/* Back button and section header */}
                            <div className="flex items-center gap-4 mb-6">
                                <Button
                                    onClick={() => handleBreadcrumbClick(selectedPath.length - 2)}
                                    variant="outline"
                                >
                                    ← Volver
                                </Button>
                            </div>

                            {/* Sub-items Grid */}
                            {children.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {children.map((child) => (
                                        <Card
                                            key={child.id}
                                            className="p-5 cursor-pointer hover:shadow-lg transition-all hover:border-blue-400 border-2"
                                            onClick={() => handleNodeClick(child.id)}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={`${getColorClass(child.color)} p-2 rounded shrink-0`}>
                                                    {child.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-gray-900 text-sm">{child.label}</h4>
                                                    {child.children && child.children.length > 0 && (
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            {child.children.length} sub-elementos
                                                        </p>
                                                    )}
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            ) : null}

                            {/* Documents section */}
                            {currentNode.documents && currentNode.documents.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <FileText className="w-5 h-5" />
                                        Documentos Relacionados
                                    </h3>
                                    <div className="space-y-2">
                                        {currentNode.documents.map((doc, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                            >
                                                <Folder className="w-5 h-5 text-blue-500 shrink-0" />
                                                <span className="text-gray-700">{doc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
