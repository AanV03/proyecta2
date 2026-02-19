'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, Phone, MapPin, CalendarDays, AlertCircle, Clock } from 'lucide-react';

export default function AccountPage() {
  const studentData = {
    name: 'Aaron Alexis',
    lastName: 'Vara Herrera',
    age: 22,
    group: 'IDGBIS71N',
    photo:
      'https://img.freepik.com/foto-gratis/retrato-joven-expresivo-traje-formal_273609-6942.jpg?semt=ais_hybrid&w=740&q=80',
  };

  const academicInfo = {
    matricula: '6523150027',
    situation: 'Regular Inscripción',
    unity: 'BIS',
    program: 'Desarrollo y Gestión de Software',
    degree: '7',
    tutor: 'M.E.S. ANTONIO CARRILLO VENEGAS',
    tutorEmail: 'acorrillo@uth.edu.mx',
    studyPlan:
      'Desarrollo y Gestión de Software COMPETENCIAS (nov 2021) (Origen 2025)',
    schedule: 'NOCTURNO',
  };

  const contactInfo = {
    phone: 'Celular +14591560923 Celular: 6142284322',
    address: 'Melchor Ocampo 123, Col. Centro, Chihuahua, Chih.',
  };

  const schoolSchedule = [
    {
      day: 'Lunes',
      subject: 'Arquitecturas de Software',
      time: '18:00 - 19:40',
      classroom: 'Aula 204',
    },
    {
      day: 'Martes',
      subject: 'Seguridad Informática',
      time: '19:45 - 21:25',
      classroom: 'Lab 2',
    },
    {
      day: 'Miércoles',
      subject: 'Metodologías para el Desarrollo de Proyectos',
      time: '18:00 - 19:40',
      classroom: 'Aula 110',
    },
    {
      day: 'Jueves',
      subject: 'Experiencia de Usuario',
      time: '19:45 - 21:25',
      classroom: 'Lab 1',
    },
    {
      day: 'Viernes',
      subject: 'Inglés VI',
      time: '18:00 - 19:40',
      classroom: 'Aula 305',
    },
  ];

  const gradesData = [
    {
      subject: 'MATEMÁTICAS PARA INGENIERÍA I',
      professor: 'DR. IVÁN JALIL ANTÓN CARREÑO MÁRQUEZ',
      u1: 'X',
      u2: 'X',
      u3: 'X',
      u4: 'X',
      avg: '--',
    },
    {
      subject: 'METODOLOGÍAS PARA EL DESARROLLO DE PROYECTOS',
      professor: 'ING. MARTÍN DANIEL MELLÉNDEZ DOMÍNGUEZ',
      u1: 'X',
      u2: 'X',
      u3: 'X',
      u4: '--',
      avg: '--',
    },
    {
      subject: 'ARQUITECTURAS DE SOFTWARE',
      professor: 'ING. ROBERTO AGUIRRE RODRÍGUEZ',
      u1: 'X',
      u2: 'X',
      u3: 'X',
      u4: '--',
      avg: '--',
    },
    {
      subject: 'EXPERIENCIA DE USUARIO',
      professor: 'ING. MIGUEL ÁNGEL GUTIÉRREZ BACA',
      u1: 'X',
      u2: 'X',
      u3: 'X',
      u4: '--',
      avg: '--',
    },
    {
      subject: 'SEGURIDAD INFORMÁTICA',
      professor: 'ING. MIGUEL ÁNGEL GUTIÉRREZ BACA',
      u1: 'X',
      u2: 'X',
      u3: '--',
      u4: '--',
      avg: '--',
    },
    {
      subject: 'INGLÉS VI',
      professor: 'M.E.S. ANTONIO CARRILLO VENEGAS',
      u1: 'X',
      u2: 'X',
      u3: '--',
      u4: '--',
      avg: '--',
    },
    {
      subject: 'ADMINISTRACIÓN DEL TIEMPO',
      professor: 'ING. MIGUEL ÁNGEL GUTIÉRREZ BACA',
      u1: 'X',
      u2: 'X',
      u3: '--',
      u4: '--',
      avg: '--',
    },
  ];

  const attendanceRecords = [
    {
      period: 'ENERO-ABRIL 2026',
      group: 'IDG5B571N',
      grade: 'Séptimo',
      avg: '6',
      grades: gradesData,
    },
    {
      period: 'SEPTIEMBRE-DICIEMBRE 2025',
      group: 'TIDB1S61M',
      grade: '6',
      avg: '--',
      grades: [],
    },
    {
      period: 'MAYO-AGOSTO 2025',
      group: 'TIDBI55S1M',
      grade: '5',
      avg: '--',
      grades: [],
    },
    {
      period: 'ENERO-ABRIL 2025',
      group: 'TIDBI54I1M',
      grade: '4',
      avg: '--',
      grades: [],
    },
    {
      period: 'SEPTIEMBRE-DICIEMBRE 2024',
      group: 'TIDBI531M',
      grade: '3',
      avg: '--',
      grades: [],
    },
    {
      period: 'MAYO-AGOSTO 2024',
      group: 'TIDBI521M',
      grade: '2',
      avg: '--',
      grades: [],
    },
    {
      period: 'ENERO-ABRIL 2024',
      group: 'TIDBI511M',
      grade: '1',
      avg: '--',
      grades: [],
    },
  ];

  return (
    <main
      className="page-main min-h-screen p-6 md:p-8 bg-(--surface-bg)"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-start justify-between">
          <h1
            className="heading-body text-3xl md:text-4xl font-bold text-(--text-body)"
          >
            Mi Expediente
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <Card className="md:col-span-3 h-full">
            <CardHeader>
              <CardTitle
                className="flex items-center gap-2 text-(--text-body)"
              >
                <User className="w-5 h-5" />
                Básico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 h-full flex flex-col justify-start">
              <div className="flex justify-center">
                <Avatar
                  className="h-24 w-24 border-2 border-(--border-default)"
                >
                  <AvatarImage
                    src={studentData.photo}
                    alt={`${studentData.name} ${studentData.lastName}`}
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {studentData.name[0]}
                    {studentData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="space-y-2">
                <div>
                  <p
                    className="text-sm font-semibold text-(--text-secondary)"
                  >
                    Nombre
                  </p>
                  <p
                    className="font-medium text-(--text-body)"
                  >
                    {studentData.name}
                  </p>
                </div>

                <div>
                  <p
                    className="text-sm font-semibold text-(--text-secondary)"
                  >
                    Apellido Paterno
                  </p>
                  <p
                    className="font-medium text-(--text-body)"
                  >
                    {studentData.lastName}
                  </p>
                </div>

                <div>
                  <p
                    className="text-sm font-semibold text-(--text-secondary)"
                  >
                    Edad
                  </p>
                  <p
                    className="font-medium text-(--text-body)"
                  >
                    {studentData.age}
                  </p>
                </div>

                <div>
                  <p
                    className="text-sm font-semibold text-(--text-secondary)"
                  >
                    Grupo
                  </p>
                  <Badge
                    className="bg-(--btn-primary-bg) text-(--btn-primary-text)"
                  >
                    {studentData.group}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-6 h-full">
            <div className="overflow-hidden rounded-md">
              <div className="bg-(--color-primitive-gray-dark) px-4 py-3 rounded-t-md">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-(--text-inverse)">Información Escolar</h3>
                </div>
              </div>
              <CardContent className="relative p-0 min-h-0">
                <div className="grid grid-cols-4 auto-rows-min">
                  <div className="col-span-0 md:col-span-10 min-h-0">
                    <div className="border-t border-b">
                      <div className="grid grid-cols-3">
                        <div className="p-3 border-r flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Matrícula</p>
                          <p className="font-medium text-sm text-(--text-body)">{academicInfo.matricula}</p>
                        </div>
                        <div className="p-3 border-r flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Situación</p>
                          <p className="font-medium text-sm text-(--text-body)">{academicInfo.situation}</p>
                        </div>
                        <div className="p-3 flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Periodo</p>
                          <p className="font-medium text-sm text-(--text-body)">ENERO-ABRIL 2026</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3">
                        <div className="p-3 border-r flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Unidad</p>
                          <p className="font-medium text-sm text-(--text-body)">{academicInfo.unity}</p>
                        </div>
                        <div className="p-3 border-r col-span-2 flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Carrera</p>
                          <p className="font-medium text-sm text-(--text-body)">{academicInfo.program}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3">
                        <div className="p-3 border-r flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Grado</p>
                          <p className="font-medium text-sm text-(--text-body)">{academicInfo.degree}</p>
                        </div>
                        <div className="p-3 border-r flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Grupo</p>
                          <p className="font-medium text-sm text-(--text-body)">{studentData.group}</p>
                        </div>
                        <div className="p-3 flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Tutor</p>
                          <p className="font-medium text-sm text-(--text-body)">{academicInfo.tutor}</p>
                          <a href={`mailto:${academicInfo.tutorEmail}`} className="text-sm underline text-(--btn-primary-bg)">{academicInfo.tutorEmail}</a>
                        </div>
                      </div>

                      <div className="grid grid-cols-3">
                        <div className="p-3 col-span-2 flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Plan de Estudios</p>
                          <p className="font-medium text-sm text-(--text-body)">{academicInfo.studyPlan}</p>
                        </div>
                        <div className="p-3 flex flex-col justify-center bg-(--surface-secondary)">
                          <p className="text-xs font-semibold text-(--text-secondary)">Turno</p>
                          <p className="font-medium text-sm text-(--text-body)">{academicInfo.schedule}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          <div className="md:col-span-3 grid grid-rows-2 gap-4 h-full">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle
                  className="flex items-center gap-2 text-base text-(--text-body)"
                >
                  <CalendarDays className="w-4 h-4" />
                  Horario Escolar
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 h-full flex flex-col">
                <p className="text-sm mb-3 text-(--text-secondary)">
                  Al hacer click se muestra un modal con el horario.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-(--btn-primary-bg) text-(--btn-primary-text)"
                    >
                      Ver horario
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Horario Escolar</DialogTitle>
                    </DialogHeader>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-(--text-body)">Día</TableHead>
                          <TableHead className="text-(--text-body)">
                            Materia
                          </TableHead>
                          <TableHead className="text-(--text-body)">
                            Horario
                          </TableHead>
                          <TableHead className="text-(--text-body)">Aula</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {schoolSchedule.map((row, idx) => (
                          <TableRow
                            key={idx}
                            className={idx % 2 === 0 ? 'bg-(--surface-secondary)' : ''}
                          >
                            <TableCell className="text-(--text-body)">
                              {row.day}
                            </TableCell>
                            <TableCell className="text-(--text-body)">
                              {row.subject}
                            </TableCell>
                            <TableCell className="text-(--text-secondary)">
                              {row.time}
                            </TableCell>
                            <TableCell className="text-(--text-secondary)">
                              {row.classroom}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle
                  className="flex items-center gap-2 text-base text-(--text-body)"
                >
                  <AlertCircle className="w-4 h-4" />
                  Otros Datos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 h-full flex flex-col justify-center">
                <div>
                  <p
                    className="text-xs font-semibold flex items-center gap-2 mb-1 text-(--text-secondary)"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Teléfono
                  </p>
                  <p className="font-medium text-xs text-(--text-body)">
                    {contactInfo.phone}
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs font-semibold flex items-center gap-2 mb-1 text-(--text-secondary)"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Domicilio
                  </p>
                  <p className="font-medium text-xs text-(--text-body)">
                    {contactInfo.address}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-(--text-body)">Acciones</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="asistencias" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="asistencias">Asistencias</TabsTrigger>
                <TabsTrigger value="calificaciones">Calificaciones</TabsTrigger>
                <TabsTrigger value="informe">Calificación de Informe</TabsTrigger>
                <TabsTrigger value="boletas">Boletas</TabsTrigger>
              </TabsList>

              <TabsContent value="asistencias" className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-6 rounded bg-[oklch(0.703_0.228_119.1)]"
                      />
                      <span
                        className="text-sm font-medium text-(--text-body)"
                      >
                        Ordinario
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-6 rounded bg-[oklch(0.84_0.2_73.5)]"
                      />
                      <span
                        className="text-sm font-medium text-(--text-body)"
                      >
                        Recuperación
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-6 rounded bg-[oklch(0.577_0.245_27.325)]"
                      />
                      <span
                        className="text-sm font-medium text-(--text-body)"
                      >
                        Evaluación Extraordinaria
                      </span>
                    </div>
                  </div>

                  <Accordion type="single" collapsible defaultValue="period-0">
                    {attendanceRecords.map((period, idx) => (
                      <AccordionItem key={idx} value={`period-${idx}`}>
                        <AccordionTrigger>
                          <span className="text-(--text-body)">
                            Período: {period.period} | Grupo: {period.group} | Grado:{' '}
                            {period.grade} | Promedio: {period.avg}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          {period.grades.length > 0 ? (
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-(--text-body)">
                                    Materia
                                  </TableHead>
                                  <TableHead className="text-(--text-body)">
                                    Profesor
                                  </TableHead>
                                  <TableHead
                                    className="text-center text-(--text-body)"
                                  >
                                    U1
                                  </TableHead>
                                  <TableHead
                                    className="text-center text-(--text-body)"
                                  >
                                    U2
                                  </TableHead>
                                  <TableHead
                                    className="text-center text-(--text-body)"
                                  >
                                    U3
                                  </TableHead>
                                  <TableHead
                                    className="text-center text-(--text-body)"
                                  >
                                    U4
                                  </TableHead>
                                  <TableHead
                                    className="text-center text-(--text-body)"
                                  >
                                    Promedio
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {period.grades.map((row, rowIdx) => (
                                  <TableRow
                                    key={rowIdx}
                                    className={rowIdx % 2 === 0 ? 'bg-(--surface-secondary)' : ''}
                                  >
                                    <TableCell
                                      className="font-medium text-(--text-body)"
                                    >
                                      {row.subject}
                                    </TableCell>
                                    <TableCell
                                      className="text-sm text-(--text-secondary)"
                                    >
                                      {row.professor}
                                    </TableCell>
                                    <TableCell
                                      className="text-center text-(--text-body)"
                                    >
                                      {row.u1}
                                    </TableCell>
                                    <TableCell
                                      className="text-center text-(--text-body)"
                                    >
                                      {row.u2}
                                    </TableCell>
                                    <TableCell
                                      className="text-center text-(--text-body)"
                                    >
                                      {row.u3}
                                    </TableCell>
                                    <TableCell
                                      className="text-center text-(--text-body)"
                                    >
                                      {row.u4}
                                    </TableCell>
                                    <TableCell
                                      className="text-center text-(--text-secondary)"
                                    >
                                      {row.avg}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          ) : (
                            <div
                              className="p-3 rounded border text-sm border-(--border-default) bg-(--surface-secondary) text-(--text-secondary)"
                            >
                              Sin detalle de materias para este período.
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="calificaciones" className="space-y-4">
                <div
                  className="p-6 rounded-lg border text-center border-(--border-default) bg-(--surface-secondary) text-(--text-secondary)"
                >
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Calificaciones próximamente disponibles</p>
                </div>
              </TabsContent>

              <TabsContent value="informe" className="space-y-4">
                <div
                  className="p-6 rounded-lg border text-center border-(--border-default) bg-(--surface-secondary) text-(--text-secondary)"
                >
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Informe de calificaciones próximamente disponible</p>
                </div>
              </TabsContent>

              <TabsContent value="boletas" className="space-y-4">
                <div
                  className="p-6 rounded-lg border text-center border-(--border-default) bg-(--surface-secondary) text-(--text-secondary)"
                >
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Boletas próximamente disponibles</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}