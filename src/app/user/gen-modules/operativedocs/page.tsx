"use client"

import React, { useState, useMemo } from "react"
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
    Search,
    Download,
} from "lucide-react"

interface DocumentItem {
    id: string
    name: string
    type: "folder" | "document"
    lastModified?: string
    size?: string
    children?: DocumentItem[]
}

const operativeDocsData: DocumentItem = {
    id: "root",
    name: "Documentos Operativos",
    type: "folder",
    children: [
        {
            id: "rectoría",
            name: "Rectoría",
            type: "folder",
            children: [
                {
                    id: "doc-rectoría-1",
                    name: "Resoluciones Rectorales",
                    type: "document",
                    lastModified: "2024-02-10",
                    size: "2.5 MB",
                },
            ],
        },
        {
            id: "extensión-universitaria",
            name: "Extensión Universitaria",
            type: "folder",
            children: [
                {
                    id: "doc-ext-1",
                    name: "Programas de Extensión",
                    type: "document",
                    lastModified: "2024-02-09",
                    size: "1.8 MB",
                },
            ],
        },
        {
            id: "planeación",
            name: "Planeación",
            type: "folder",
            children: [
                {
                    id: "doc-plan-1",
                    name: "Plan Estratégico",
                    type: "document",
                    lastModified: "2024-02-08",
                    size: "3.2 MB",
                },
            ],
        },
        {
            id: "administración-finanzas",
            name: "Administración y Finanzas",
            type: "folder",
            children: [
                {
                    id: "doc-admin-1",
                    name: "Presupuesto Anual",
                    type: "document",
                    lastModified: "2024-02-12",
                    size: "2.1 MB",
                },
            ],
        },
        {
            id: "vinculación",
            name: "Vinculación",
            type: "folder",
            children: [
                {
                    id: "doc-vinc-1",
                    name: "Convenios",
                    type: "document",
                    lastModified: "2024-02-11",
                    size: "1.5 MB",
                },
            ],
        },
        {
            id: "servicios-escolares",
            name: "Servicios Escolares",
            type: "folder",
            children: [
                {
                    id: "doc-serv-1",
                    name: "Trámites Escolares",
                    type: "document",
                    lastModified: "2024-02-07",
                    size: "2.3 MB",
                },
            ],
        },
        {
            id: "abogado-general",
            name: "Abogado General",
            type: "folder",
            children: [
                {
                    id: "doc-abog-1",
                    name: "Asesorías Legales",
                    type: "document",
                    lastModified: "2024-02-10",
                    size: "1.9 MB",
                },
            ],
        },
        {
            id: "secretaría-académica",
            name: "Secretaría Académica",
            type: "folder",
            children: [
                {
                    id: "doc-secac-1",
                    name: "Registros Académicos",
                    type: "document",
                    lastModified: "2024-02-09",
                    size: "2.8 MB",
                },
            ],
        },
        {
            id: "archivo",
            name: "Archivo",
            type: "folder",
            children: [
                {
                    id: "doc-arch-1",
                    name: "Documentos Históricos",
                    type: "document",
                    lastModified: "2024-02-06",
                    size: "5.2 MB",
                },
            ],
        },
    ],
}

type BreadcrumbPath = string[]

export default function OperativeDocsPage() {
    const [selectedPath, setSelectedPath] = useState<BreadcrumbPath>(["root"])
    const [searchQuery, setSearchQuery] = useState("")

    const getCurrentNode = (): DocumentItem => {
        let current = operativeDocsData
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

    // Filter items based on search query
    const filteredItems = useMemo(() => {
        let items = currentNode.children ?? []
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            items = items.filter((item) =>
                item.name.toLowerCase().includes(query)
            )
        }
        return items
    }, [currentNode, searchQuery])

    const handleItemClick = (itemId: string) => {
        setSelectedPath([...selectedPath, itemId])
    }

    const handleBreadcrumbClick = (index: number) => {
        setSelectedPath(selectedPath.slice(0, index + 1))
    }

    const getBreadcrumbLabel = (id: string): string => {
        let current = operativeDocsData
        for (let i = 1; i < selectedPath.indexOf(id) + 1; i++) {
            const child = current.children?.find((c) => c.id === selectedPath[i])
            if (child) {
                current = child
            }
        }
        return current.name
    }

    return (
        <div className="operative-docs-main">
            {/* Header Title */}
            <div className="operative-docs-header px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center gap-3">
                    <FileText className="operative-docs-header-icon w-8 h-8" />
                    <h1 className="operative-docs-header-title text-3xl font-bold">
                        Documentos Operativos
                    </h1>
                </div>
            </div>

            <div className="p-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Search Card */}
                    <Card className="operative-docs-search-card border-0 shadow-lg">
                        <div className="p-6">
                            <h2 className="operative-docs-search-label text-lg font-semibold mb-4 flex items-center gap-2">
                                <span>Búsqueda de Documentos</span>
                            </h2>
                            <div className="relative">
                                <Search className="operative-docs-search-icon absolute left-3 top-3 w-5 h-5" />
                                <Input
                                    placeholder="Presiona enter para buscar..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="operative-docs-input pl-10 border-0"
                                    aria-label="Buscar documentos"
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Directorios Table Section */}
                    <div className="operative-docs-table-container rounded-lg overflow-hidden shadow-lg border">
                        {/* Table Header */}
                        <div className="operative-docs-table-header text-white px-6 py-4">
                            <h2 className="text-lg font-bold flex items-center gap-2">
                                Directorios encontrados
                            </h2>
                        </div>

                        {/* Breadcrumb inside content area */}
                        <div className="operative-docs-breadcrumb-section px-6 py-4 border-b">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            onClick={() => handleBreadcrumbClick(0)}
                                            className="operative-docs-breadcrumb-link cursor-pointer flex items-center gap-1 hover:opacity-75 transition-opacity"
                                        >
                                            <Home className="w-4 h-4" />
                                            Documentos Operativos
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {selectedPath.slice(1).map((pathId, _index) => {
                                        const label = getBreadcrumbLabel(pathId)
                                        const isLast = _index === selectedPath.length - 2
                                        return (
                                            <React.Fragment key={pathId}>
                                                <BreadcrumbSeparator className="operative-docs-breadcrumb-separator" />
                                                <BreadcrumbItem>
                                                    {isLast ? (
                                                        <BreadcrumbPage className="operative-docs-breadcrumb-page font-medium">
                                                            {label}
                                                        </BreadcrumbPage>
                                                    ) : (
                                                        <BreadcrumbLink
                                                            onClick={() => handleBreadcrumbClick(_index + 1)}
                                                            className="operative-docs-breadcrumb-link cursor-pointer hover:opacity-75 transition-opacity"
                                                        >
                                                            {label}
                                                        </BreadcrumbLink>
                                                    )}
                                                </BreadcrumbItem>
                                            </React.Fragment>
                                        )
                                    })}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                        {/* Table Column Headers */}
                        <div className="operative-docs-column-header px-6 py-3 border-b grid grid-cols-12 gap-4">
                            <div className="col-span-4 text-sm font-semibold">
                                Nombre
                            </div>
                            <div className="col-span-5 text-sm font-semibold">
                                Descripcion
                            </div>
                            <div className="col-span-3 text-sm font-semibold">
                                Ruta
                            </div>
                        </div>

                        {/* Table Content - Items Rows */}
                        {filteredItems.length > 0 ? (
                            <div className="operative-docs-divide-y divide-y">
                                {filteredItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="operative-docs-table-row px-6 py-4 grid grid-cols-12 gap-4 items-center"
                                        onClick={() => handleItemClick(item.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                handleItemClick(item.id)
                                            }
                                        }}
                                        aria-label={`${item.type === "folder" ? "Carpeta" : "Documento"}: ${item.name}`}
                                    >
                                        {/* Nombre Column */}
                                        <div className="col-span-4 flex items-center gap-3">
                                            <div className="shrink-0">
                                                {item.type === "folder" ? (
                                                    <Folder className="operative-docs-icon-folder w-6 h-6" />
                                                ) : (
                                                    <FileText className="operative-docs-icon-document w-6 h-6" />
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="operative-docs-item-name font-semibold truncate">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Descripción Column */}
                                        <div className="col-span-5">
                                            <p className="operative-docs-item-description text-sm">
                                                {item.type === "folder" && item.children && (
                                                    <span>
                                                        Carpeta con {item.children.length} elemento{item.children.length !== 1 ? "s" : ""}
                                                    </span>
                                                )}
                                                {item.type === "document" && (
                                                    <span>
                                                        {item.size ? `Documento - ${item.size}` : "Documento"}
                                                    </span>
                                                )}
                                            </p>
                                            {item.lastModified && (
                                                <p className="operative-docs-item-meta text-xs mt-1">
                                                    Modificado: {item.lastModified}
                                                </p>
                                            )}
                                        </div>

                                        {/* Ruta Column */}
                                        <div className="col-span-3 flex items-center justify-between">
                                            {!isRoot && selectedPath.length > 1 && (
                                                <p className="operative-docs-item-route text-sm">
                                                    Pincio /{currentNode.name.toLowerCase().replace(/\s+/g, "-")}
                                                </p>
                                            )}
                                            <div className="shrink-0">
                                                {item.type === "document" && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                        }}
                                                        aria-label={`Descargar ${item.name}`}
                                                    >
                                                        <Download className="w-4 h-4" />
                                                    </Button>
                                                )}
                                                {item.type === "folder" && (
                                                    <ChevronRight className="operative-docs-item-chevron w-5 h-5" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="operative-docs-empty-state px-6 py-12 text-center">
                                <FileText className="operative-docs-empty-icon w-12 h-12 mx-auto mb-4" />
                                <h3 className="operative-docs-empty-title text-lg font-semibold mb-2">
                                    {searchQuery ? "No se encontraron documentos" : "Sin documentos"}
                                </h3>
                                <p className="operative-docs-empty-text mb-4">
                                    {searchQuery
                                        ? `No hay documentos que coincidan con "${searchQuery}"`
                                        : "Esta carpeta está vacía"}
                                </p>
                                {searchQuery && (
                                    <Button
                                        variant="outline"
                                        onClick={() => setSearchQuery("")}
                                    >
                                        Limpiar búsqueda
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
