"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, Search } from "lucide-react";

export default function PracticePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleReturn = () => {
    router.push("/user");
  };

  const handleSearch = () => {
    console.log("Buscar:", searchTerm);
  };

  // Mock data for practicas history
  const practicasData = [
    {
      id: 1,
      empresa: "Empresa XYZ S.A.",
      periodo: "2024-1",
      inicio: "01/01/2024",
      termino: "30/04/2024",
      estatus: "Completado",
      documentos: "Ver",
      cartaCompromiso: "Descargar",
    },
    {
      id: 2,
      empresa: "Tech Solutions Inc.",
      periodo: "2024-2",
      inicio: "01/05/2024",
      termino: "31/08/2024",
      estatus: "En Curso",
      documentos: "Ver",
      cartaCompromiso: "Descargar",
    },
    {
      id: 3,
      empresa: "Consultoría Global",
      periodo: "2023-2",
      inicio: "01/09/2023",
      termino: "31/12/2023",
      estatus: "Completado",
      documentos: "Ver",
      cartaCompromiso: "Descargar",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--surface-bg)" }}>
      {/* Header */}
      <div
        className="border-b px-6 py-4"
        style={{
          backgroundColor: "var(--btn-dark-bg)",
          borderColor: "var(--border-default)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReturn}
              className="gap-2 text-white hover:bg-opacity-90"
              style={{
                color: "var(--btn-dark-text)",
              }}
              aria-label="Regresar"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Regresar</span>
            </Button>
            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--text-inverse)" }}
            >
              Registro de Prácticas
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div
            className="rounded-lg border p-6"
            style={{
              backgroundColor: "var(--surface-card)",
              borderColor: "var(--border-default)",
            }}
          >
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-body)" }}
            >
              Búsqueda de Empresa
            </h2>

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label
                  htmlFor="search"
                  style={{ color: "var(--text-body)" }}
                >
                  RFC, Nombre Comercial ó Razón Social
                </Label>
                <div className="flex gap-3">
                  <Input
                    id="search"
                    placeholder="Ingresa datos de la empresa..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSearch}
                    className="gap-2 text-white"
                    style={{
                      backgroundColor: "#60A917",
                    }}
                  >
                    <Search className="h-4 w-4" />
                    <span className="hidden sm:inline">Buscar</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div>
          <div
            className="rounded-lg border overflow-hidden"
            style={{
              backgroundColor: "var(--surface-card)",
              borderColor: "var(--border-default)",
            }}
          >
            <div
              className="px-6 py-4 border-b"
              style={{
                backgroundColor: "var(--btn-dark-bg)",
                borderColor: "var(--border-default)",
              }}
            >
              <h2
                className="text-lg font-semibold"
                style={{ color: "var(--text-inverse)" }}
              >
                Historial de Prácticas
              </h2>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow
                    style={{
                      backgroundColor: "var(--surface-secondary)",
                      borderColor: "var(--border-default)",
                    }}
                  >
                    <TableHead style={{ color: "var(--text-body)" }}>
                      Empresa
                    </TableHead>
                    <TableHead style={{ color: "var(--text-body)" }}>
                      Período
                    </TableHead>
                    <TableHead style={{ color: "var(--text-body)" }}>
                      Inicio
                    </TableHead>
                    <TableHead style={{ color: "var(--text-body)" }}>
                      Término
                    </TableHead>
                    <TableHead style={{ color: "var(--text-body)" }}>
                      Estatus
                    </TableHead>
                    <TableHead style={{ color: "var(--text-body)" }}>
                      Documentos
                    </TableHead>
                    <TableHead style={{ color: "var(--text-body)" }}>
                      Carta Compromiso
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {practicasData.map((practica, index) => (
                    <TableRow
                      key={practica.id}
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? "var(--surface-bg)"
                            : "var(--surface-secondary)",
                        borderColor: "var(--border-default)",
                      }}
                    >
                      <TableCell
                        style={{ color: "var(--text-body)" }}
                        className="font-medium"
                      >
                        {practica.empresa}
                      </TableCell>
                      <TableCell style={{ color: "var(--text-body)" }}>
                        {practica.periodo}
                      </TableCell>
                      <TableCell style={{ color: "var(--text-body)" }}>
                        {practica.inicio}
                      </TableCell>
                      <TableCell style={{ color: "var(--text-body)" }}>
                        {practica.termino}
                      </TableCell>
                      <TableCell>
                        <span
                          className="px-3 py-1 rounded text-sm font-medium text-white"
                          style={{
                            backgroundColor:
                              practica.estatus === "Completado"
                                ? "#60A917"
                                : "#FACC15",
                          }}
                        >
                          {practica.estatus}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          style={{ color: "var(--color-primitive-green-primary)" }}
                        >
                          {practica.documentos}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          style={{ color: "var(--color-primitive-green-primary)" }}
                        >
                          {practica.cartaCompromiso}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
