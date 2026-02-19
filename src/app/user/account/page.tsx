"use client"

import React, { useState } from "react"
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { User, Lock, Mail, MapPin, Heart } from "lucide-react"

export default function EditAccountPage() {
  const [personal, setPersonal] = useState({
    nombre: "Aaron Alexis",
    apellidoP: "Vara",
    apellidoM: "Herrera",
    fechaNacimiento: "2003-02-14",
  })

  const [security, setSecurity] = useState({ current: "", password: "", confirm: "" })

  const [contact, setContact] = useState({ correo: "lalahago14@gmail.com", celular: "6142284522", casa: "6145915609" })

  const [address, setAddress] = useState({ calle: "Cto. Marsala", exterior: "10527", colonia: "FRACC. ROMANCE 11", cp: "31313" })

  const [medical, setMedical] = useState({ institucion: "IMSS", numero: "52887217314", tipoSangre: "INDEFINIDO" })

  return (
    <main className="page-main min-h-screen p-6 md:p-8 bg-(--surface-bg)">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-start justify-between">
          <h1 className="heading-body text-3xl md:text-4xl font-bold text-(--text-body)">Editar Datos</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-12">
            <Accordion type="multiple" defaultValue={["personal"]}>
              <AccordionItem value="personal">
                <AccordionTrigger>
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /> Datos personales</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm">Nombre</label>
                      <Input value={personal.nombre} onChange={(e) => setPersonal({ ...personal, nombre: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Apellido Paterno</label>
                      <Input value={personal.apellidoP} onChange={(e) => setPersonal({ ...personal, apellidoP: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Apellido Materno</label>
                      <Input value={personal.apellidoM} onChange={(e) => setPersonal({ ...personal, apellidoM: e.target.value })} />
                    </div>
                    <div className="md:col-span-1">
                      <label className="text-sm">Fecha de nacimiento</label>
                      <Input type="date" value={personal.fechaNacimiento} onChange={(e) => setPersonal({ ...personal, fechaNacimiento: e.target.value })} />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button>Guardar Datos Personales</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security">
                <AccordionTrigger>
                  <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> Seguridad y Contraseñas</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm">Contraseña actual</label>
                      <Input type="password" value={security.current} onChange={(e) => setSecurity({ ...security, current: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Nueva contraseña</label>
                      <Input type="password" value={security.password} onChange={(e) => setSecurity({ ...security, password: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Confirmar</label>
                      <Input type="password" value={security.confirm} onChange={(e) => setSecurity({ ...security, confirm: e.target.value })} />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button>Guardar contraseña</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact">
                <AccordionTrigger>
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> Correo y Teléfono</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm">Correo</label>
                      <Input value={contact.correo} onChange={(e) => setContact({ ...contact, correo: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Celular</label>
                      <Input value={contact.celular} onChange={(e) => setContact({ ...contact, celular: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Teléfono casa</label>
                      <Input value={contact.casa} onChange={(e) => setContact({ ...contact, casa: e.target.value })} />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button>Guardar contacto</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="address">
                <AccordionTrigger>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Domicilio</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm">Calle</label>
                      <Input value={address.calle} onChange={(e) => setAddress({ ...address, calle: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Número exterior</label>
                      <Input value={address.exterior} onChange={(e) => setAddress({ ...address, exterior: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Colonia</label>
                      <Input value={address.colonia} onChange={(e) => setAddress({ ...address, colonia: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Código Postal</label>
                      <Input value={address.cp} onChange={(e) => setAddress({ ...address, cp: e.target.value })} />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button>Guardar domicilio</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="medical">
                <AccordionTrigger>
                  <div className="flex items-center gap-2"><Heart className="w-4 h-4" /> Servicio Médico</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm">Institución médica</label>
                      <Input value={medical.institucion} onChange={(e) => setMedical({ ...medical, institucion: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Número</label>
                      <Input value={medical.numero} onChange={(e) => setMedical({ ...medical, numero: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm">Tipo sanguíneo</label>
                      <Input value={medical.tipoSangre} onChange={(e) => setMedical({ ...medical, tipoSangre: e.target.value })} />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button>Guardar servicio médico</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  )
}
