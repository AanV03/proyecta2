"use client"

import React, { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function DirectoryPage() {
  const [query, setQuery] = useState("")

  const data = useMemo(
    () => [
      { ext: "1187", area: "ESCOLARES: Becas y servicio comunitario", person: "Balvina González Gardea" },
      { ext: "1123", area: "ESCOLARES: Becas y Servicio Comunitario", person: "Candelaria Arianeth Carrillo Holguin" },
      { ext: "1199", area: "ESCOLARES: Gestión Escolar y Becas", person: "Liliana Piñón Villarreal" },
    ],
    []
  )

  const filtered = data.filter(
    (r) =>
      r.ext.includes(query) ||
      r.area.toLowerCase().includes(query.toLowerCase()) ||
      r.person.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="page-main min-h-screen p-6 md:p-8 bg-(--surface-bg)">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <h1 className="heading-body text-4xl font-bold">Directorio UTCH</h1>
        </div>

        <Card>
          <CardContent>
            <div className="mb-4">
              <div className="flex gap-2 items-center">
                <Input
                  placeholder="Puedes buscar por extensión, nombre o departamento"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1"
                />
                <Button variant="ghost">
                  <Search />
                </Button>
              </div>
            </div>

            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Extensión</TableHead>
                    <TableHead>Área</TableHead>
                    <TableHead>Personas asociadas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((row) => (
                    <TableRow key={row.ext} className="hover:bg-surface-secondary">
                      <TableCell>{row.ext}</TableCell>
                      <TableCell>{row.area}</TableCell>
                      <TableCell>{row.person}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
