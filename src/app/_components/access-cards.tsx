import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Smartphone, ChevronRight } from "lucide-react";

export default function AccessCards() {
  const cards = [
    {
      title: "Inscripciones",
      desc: "Accede al módulo de inscripciones y consulta requisitos.",
      href: "/inscripciones",
      color: "bg-green-50",
      icon: <BookOpen className="h-6 w-6 text-green-700" />,
    },
    {
      title: "Bolsa de Trabajo",
      desc: "Publicaciones para prácticas y vacantes de empresas.",
      href: "/bolsa",
      color: "bg-sky-50",
      icon: <Briefcase className="h-6 w-6 text-sky-600" />,
    },
    {
      title: "Aplicación PWA",
      desc: "Descarga la PWA para acceder más rápido desde tu dispositivo.",
      href: "/pwa",
      color: "bg-amber-50",
      icon: <Smartphone className="h-6 w-6 text-amber-600" />,
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <Link key={c.title} href={c.href} className="group">
          <Card className={`flex h-full flex-col justify-between gap-4 rounded-xl p-6 shadow-sm hover:shadow-md transition-transform duration-150 hover:-translate-y-1 ${c.color}`}>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="mt-1">{c.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Button variant="link" className="px-0 text-green-700">Entrar</Button>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
