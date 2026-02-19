"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronDown, BookOpen, Users, CheckCircle, Cog, Calendar, BookMarked, Briefcase, FileText, TrendingUp, Building, Gift, Brain, CheckSquare, BarChart3, CreditCard } from "lucide-react"
import "@/styles/globals.css"

type Props = {
    isOpen: boolean
    onClose: () => void
}

const menuItems = [
    {
        id: "modulos",
        label: "Módulos Generales",
        icon: BookOpen,
        subItems: [
            { label: "Calidad", icon: CheckCircle },
            { label: "Documentación Operativa", icon: Cog },
            { label: "Bolsa de Trabajo Cazadores", icon: Briefcase },
            { label: "Bolsa de Trabajo RH", icon: Briefcase },
        ],
    },
    {
        id: "alumnos",
        label: "Alumnos",
        icon: Users,
        subItems: [
            { label: "Información", icon: FileText },
            { label: "Estado De Cuenta", icon: TrendingUp },
            { label: "Estadía", icon: Building },
            { label: "Becas", icon: Gift },
            { label: "Empleo Y Estadía", icon: Briefcase },
            { label: "Prácticas Profesionales", icon: Users },
            { label: "Psicología", icon: Brain },
            { label: "Actividades D, C Y C", icon: CheckSquare },
            { label: "Evaluaciones Psicométricas", icon: BarChart3 },
            { label: "Referencias Bancarias", icon: CreditCard },
            { label: "Constancia De No Adeudo", icon: CheckCircle },
            { label: "Sesiones De Tutoría", icon: BookOpen },
            { label: "Citas", icon: Calendar },
            { label: "Titulación", icon: BookMarked },
        ],
    },
]

export default function Sidebar({ isOpen, onClose }: Props) {
    const [expandedItems, setExpandedItems] = useState<string[]>([])

    const toggleExpand = (itemId: string) => {
        setExpandedItems((prev) =>
            prev.includes(itemId)
                ? prev.filter((id) => id !== itemId)
                : [...prev, itemId]
        )
    }

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                data-open={isOpen}
                className={`sidebar fixed left-0 top-0 h-screen w-64 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                role="navigation"
                aria-label="Menú de navegación"
            >
                {/* Header with close button */}
                <div className="sidebar-header border-b px-4 py-4 flex items-center justify-between sticky top-0">
                    <h2 className="text-lg font-semibold">Menús</h2>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        className="text-white hover:bg-slate-800"
                        aria-label="Cerrar menú"
                    >
                        <ChevronLeft className="size-5" aria-hidden="true" />
                    </Button>
                </div>

                {/* Navigation Items */}
                <nav className="p-4 space-y-2" aria-label="Elementos del menú">
                    {menuItems.map((item) => {
                        const ItemIcon = item.icon
                        const isExpanded = expandedItems.includes(item.id)
                        const hasSubItems = item.subItems.length > 0

                        return (
                            <div key={item.id}>
                                <button
                                    onClick={() => hasSubItems && toggleExpand(item.id)}
                                    className="sidebar-menu-item w-full flex items-center justify-between px-4 py-3 rounded-lg text-left"
                                    aria-expanded={hasSubItems ? isExpanded : undefined}
                                    aria-haspopup={hasSubItems ? "menu" : undefined}
                                >
                                    <div className="flex items-center gap-3 flex-1">
                                        <ItemIcon className="size-4 shrink-0" aria-hidden="true" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                    {hasSubItems && (
                                        <ChevronDown
                                            className={`size-4 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""
                                                }`}
                                            aria-hidden="true"
                                        />
                                    )}
                                </button>

                                {/* Sub Items */}
                                {hasSubItems && isExpanded && (
                                    <div
                                        className="sidebar-submenu-container mt-1 space-y-1"
                                        role="group"
                                        aria-labelledby={item.id}
                                    >
                                        {item.subItems.map((subItem, index) => {
                                            const SubIcon = subItem.icon
                                            return (
                                                <button
                                                    key={index}
                                                    className="sidebar-submenu-item w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all"
                                                    role="menuitem"
                                                >
                                                    <SubIcon className="size-3.5 shrink-0" aria-hidden="true" />
                                                    <span className="text-xs">{subItem.label}</span>
                                                </button>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
}
