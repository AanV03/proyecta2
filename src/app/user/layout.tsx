"use client"

import React, { useState } from "react"
import TopBar from "./_components/topbar"
import Sidebar from "./_components/sidebar"

type Props = {
    children: React.ReactNode
}

export default function UserLayout({ children }: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen page-main">
            <TopBar onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="max-w-full mx-auto px-6 py-10">{children}</main>
        </div>
    )
}
