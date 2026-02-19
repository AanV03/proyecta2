"use client"

import React, { useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function NotificationsPage() {
  const notifications = useMemo(
    () => [
      { id: 1, title: "Servicio de CONSTANCIA DE ESTUDIOS realizado.", time: "Hace 12 días", img: "/img/avatar-1.jpg" },
      { id: 2, title: "Antonio creó una sesión de tutoría el 25/03/2026 08:00 PM", time: "Hace 26 días", img: "/img/avatar-2.jpg" },
      { id: 3, title: "Antonio creó una sesión de tutoría el 18/03/2026 08:00 PM", time: "Hace 26 días", img: "/img/avatar-2.jpg" },
    ],
    []
  )

  return (
    <main className="page-main min-h-screen p-6 md:p-8 bg-(--surface-bg)">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <h1 className="heading-body text-4xl font-bold">Notificaciones</h1>
        </div>

        <Card>
          <CardContent>
            <div className="mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-3">Color</th>
                    <th className="p-3">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 bg-surface-secondary w-24" />
                    <td className="p-3">Notificación activa</td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-success w-24" />
                    <td className="p-3">Notificación leída</td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-(--state-error-bg) w-24" />
                    <td className="p-3">Notificación oculta del panel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-semibold mb-4">Historial de Notificaciones</h2>

            <div className="space-y-3">
              {notifications.map((n) => (
                <div key={n.id} className="p-4 bg-success/10 rounded flex gap-4 items-start">
                  <Avatar className="h-12 w-12">
                    {n.img ? <AvatarImage src={n.img} alt="avatar" /> : <AvatarFallback>NA</AvatarFallback>}
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{n.title}</p>
                    <div className="flex items-center gap-2 text-sm text-(--text-secondary) mt-2">
                      <Clock className="w-4 h-4" />
                      <span>{n.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
