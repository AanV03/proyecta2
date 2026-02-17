import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
          <Megaphone className="h-4 w-4" />
          Avisos
        </div>
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Bienvenido a Proyecta UTCH
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-600">
          Portal institucional diseñado para canalizar servicios y trámites
          académicos y administrativos. Accede a inscripciones, bolsa de trabajo
          y más, todo desde una interfaz clara y responsive.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#login">Iniciar sesión</a>
          </Button>
          <a href="#contact" className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-slate-700 hover:underline">
            Contacto
          </a>
        </div>
      </div>

      <Card className="rounded-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Avisos institucionales</h3>
              <p className="mt-1 text-sm text-slate-600">Sin novedades recientes</p>
            </div>
            <div className="h-10 w-10 rounded bg-green-100" />
          </div>
        </CardHeader>
        <CardContent>
          <ul className="mt-2 space-y-3">
            <li className="flex items-center justify-between rounded-md border border-slate-100 p-3">
              <div className="text-sm text-slate-700">Inscripciones abiertas</div>
              <Badge variant="outline" className="text-green-700">Nuevo</Badge>
            </li>
            <li className="flex items-center justify-between rounded-md border border-slate-100 p-3">
              <div className="text-sm text-slate-700">Bolsa de trabajo: actualización</div>
              <div className="text-xs text-slate-500">Hace 2 días</div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
