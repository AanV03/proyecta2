'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  User,
  BookOpen,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';

export default function AccountPage() {
  const studentData = {
    name: 'Ana María',
    lastName: 'Aguilar',
    age: 19,
    group: 'GRUPO XII',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  };

  const academicInfo = {
    matricula: '652315002',
    situation: 'Regular Inscripción',
    unity: 'BIS',
    program: 'Desarrollo y Gestión de Software',
    degree: '7',
    tutor: 'M.E.S. ANTONIO CARRILLO VENEGAS',
    tutorEmail: 'acorrillo@uth.edu.mx',
    studyPlan: 'Desarrollo y Gestión de Software COMPETENCIAS (nov 2021) (Origen 2025)',
    schedule: 'NOCTURNO',
  };

  const contactInfo = {
    phone: 'Celular +14591560923 Celular: 6142284322',
    address: 'CTO. MARÍSALA # 10527 COLONIA FRACC. ROMANCE 11 CP. 31313',
  };

  const attendanceData = [
    {
      period: 'ENERO-ABRIL 2026',
      group: 'IDG5B571N',
      grade: 'Séptimo Promedio: 6',
    },
  ];

  const gradesData = [
    {
      subject: 'MATEMÁTICAS PARA INGENIERÍA I',
      professor: 'DR. IVÁN JALL ANTÓN CARREÑO MÁRQUEZ',
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
    { period: 'SEPTIEMBRE-DICIEMBRE 2025', group: 'TIDB1S61M', grade: 6 },
    { period: 'MAYO-AGOSTO 2025', group: 'TIDBI55S1M', grade: 5 },
    { period: 'ENERO-ABRIL 2025', group: 'TIDBI54I1M', grade: 4 },
    { period: 'SEPTIEMBRE-DICIEMBRE 2024', group: 'TIDBI531M', grade: 3 },
    { period: 'MAYO-AGOSTO 2024', group: 'TIDBI521M', grade: 2 },
    { period: 'ENERO-ABRIL 2024', group: 'TIDBI511M', grade: 1 },
    {
      period: 'SEPTIEMBRE-DICIEMBRE 2023',
      group: 'TIDBI50IM',
      grade: 0,
    },
  ];

  return (
    <main
      className="page-main min-h-screen p-6 md:p-8"
      style={{ backgroundColor: 'var(--surface-bg)' }}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-8">
          <h1
            className="heading-body text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--text-body)' }}
          >
            Mi Expediente
          </h1>
        </div>

        {/* Grid: Basic Info, Academic Info, Other Data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Básico Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle
                className="flex items-center gap-2"
                style={{ color: 'var(--text-body)' }}
              >
                <User className="w-5 h-5" />
                Básico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Student Photo */}
              <div className="flex justify-center">
                <img
                  src={studentData.photo}
                  alt={`${studentData.name} ${studentData.lastName}`}
                  className="w-24 h-24 rounded-full object-cover border-2"
                  style={{ borderColor: 'var(--border-default)' }}
                />
              </div>

              {/* Student Info */}
              <div className="space-y-2">
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Nombre
                  </p>
                  <p
                    className="font-medium"
                    style={{ color: 'var(--text-body)' }}
                  >
                    {studentData.name}
                  </p>
                </div>

                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Apellido Paterno
                  </p>
                  <p
                    className="font-medium"
                    style={{ color: 'var(--text-body)' }}
                  >
                    {studentData.lastName}
                  </p>
                </div>

                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Edad
                  </p>
                  <p
                    className="font-medium"
                    style={{ color: 'var(--text-body)' }}
                  >
                    {studentData.age}
                  </p>
                </div>

                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Grupo
                  </p>
                  <Badge
                    style={{
                      backgroundColor: 'var(--btn-primary-bg)',
                      color: 'var(--btn-primary-text)',
                    }}
                  >
                    {studentData.group}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información Escolar Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle
                className="flex items-center gap-2"
                style={{ color: 'var(--text-body)' }}
              >
                <BookOpen className="w-5 h-5" />
                Información Escolar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Matrícula
                </p>
                <p
                  className="font-medium"
                  style={{ color: 'var(--text-body)' }}
                >
                  {academicInfo.matricula}
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Situación
                </p>
                <p
                  className="font-medium"
                  style={{ color: 'var(--text-body)' }}
                >
                  {academicInfo.situation}
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Unidad
                </p>
                <p
                  className="font-medium"
                  style={{ color: 'var(--text-body)' }}
                >
                  {academicInfo.unity}
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Carrera
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'var(--text-body)' }}
                >
                  {academicInfo.program}
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Grado
                </p>
                <p
                  className="font-medium"
                  style={{ color: 'var(--text-body)' }}
                >
                  {academicInfo.degree}
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Tutor
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'var(--text-body)' }}
                >
                  {academicInfo.tutor}
                </p>
                <a
                  href={`mailto:${academicInfo.tutorEmail}`}
                  className="text-sm underline"
                  style={{ color: 'var(--btn-primary-bg)' }}
                >
                  {academicInfo.tutorEmail}
                </a>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Plan de Estudios
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'var(--text-body)' }}
                >
                  {academicInfo.studyPlan}
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Turno
                </p>
                <p
                  className="font-medium"
                  style={{ color: 'var(--text-body)' }}
                >
                  {academicInfo.schedule}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Otros Datos Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle
                className="flex items-center gap-2"
                style={{ color: 'var(--text-body)' }}
              >
                <AlertCircle className="w-5 h-5" />
                Otros Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p
                  className="text-sm font-semibold flex items-center gap-2 mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Phone className="w-4 h-4" />
                  Teléfono
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'var(--text-body)' }}
                >
                  {contactInfo.phone}
                </p>
              </div>

              <div>
                <p
                  className="text-sm font-semibold flex items-center gap-2 mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <MapPin className="w-4 h-4" />
                  Domicilio
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'var(--text-body)' }}
                >
                  {contactInfo.address}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acciones Section with Tabs */}
        <Card>
          <CardHeader>
            <CardTitle
              style={{ color: 'var(--text-body)' }}
            >
              Acciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="asistencias" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="asistencias">Asistencias</TabsTrigger>
                <TabsTrigger value="calificaciones">Calificaciones</TabsTrigger>
                <TabsTrigger value="informe">
                  Calificación de Informe
                </TabsTrigger>
                <TabsTrigger value="boletas">Boletas</TabsTrigger>
              </TabsList>

              {/* Asistencias Tab */}
              <TabsContent value="asistencias" className="space-y-4">
                <div className="space-y-4">
                  {/* Color legend */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-6 rounded"
                        style={{
                          backgroundColor: 'oklch(0.703 0.228 119.1)',
                        }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-body)' }}
                      >
                        Ordinario
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-6 rounded"
                        style={{
                          backgroundColor: 'oklch(0.84 0.2 73.5)',
                        }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-body)' }}
                      >
                        Recuperación
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-6 rounded"
                        style={{
                          backgroundColor: 'oklch(0.577 0.245 27.325)',
                        }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-body)' }}
                      >
                        Evaluación Extraordinaria
                      </span>
                    </div>
                  </div>

                  {/* Current Period Attendance */}
                  <div className="rounded-lg border p-4">
                    <div
                      className="font-semibold p-3 rounded mb-3"
                      style={{
                        backgroundColor: 'var(--btn-primary-bg)',
                        color: 'var(--btn-primary-text)',
                      }}
                    >
                      Período: ENERO- ABRIL 2026 Grupo: IDG5B571N Grado: Séptimo
                      Promedio: 6
                    </div>

                    {/* Attendance Table */}
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead style={{ color: 'var(--text-body)' }}>
                            Materia
                          </TableHead>
                          <TableHead style={{ color: 'var(--text-body)' }}>
                            Profesor
                          </TableHead>
                          <TableHead
                            className="text-center"
                            style={{ color: 'var(--text-body)' }}
                          >
                            U1
                          </TableHead>
                          <TableHead
                            className="text-center"
                            style={{ color: 'var(--text-body)' }}
                          >
                            U2
                          </TableHead>
                          <TableHead
                            className="text-center"
                            style={{ color: 'var(--text-body)' }}
                          >
                            U3
                          </TableHead>
                          <TableHead
                            className="text-center"
                            style={{ color: 'var(--text-body)' }}
                          >
                            U4
                          </TableHead>
                          <TableHead
                            className="text-center"
                            style={{ color: 'var(--text-body)' }}
                          >
                            Promedio
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {gradesData.map((row, idx) => (
                          <TableRow
                            key={idx}
                            style={
                              idx % 2 === 0
                                ? {
                                    backgroundColor:
                                      'var(--surface-secondary)',
                                  }
                                : {}
                            }
                          >
                            <TableCell
                              className="font-medium"
                              style={{ color: 'var(--text-body)' }}
                            >
                              {row.subject}
                            </TableCell>
                            <TableCell
                              className="text-sm"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              {row.professor}
                            </TableCell>
                            <TableCell
                              className="text-center"
                              style={{ color: 'var(--text-body)' }}
                            >
                              {row.u1}
                            </TableCell>
                            <TableCell
                              className="text-center"
                              style={{ color: 'var(--text-body)' }}
                            >
                              {row.u2}
                            </TableCell>
                            <TableCell
                              className="text-center"
                              style={{ color: 'var(--text-body)' }}
                            >
                              {row.u3}
                            </TableCell>
                            <TableCell
                              className="text-center"
                              style={{ color: 'var(--text-body)' }}
                            >
                              {row.u4}
                            </TableCell>
                            <TableCell
                              className="text-center"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              {row.avg}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Historical Records */}
                  <div className="space-y-2">
                    {attendanceRecords.map((record, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded border text-sm"
                        style={{
                          borderColor: 'var(--border-default)',
                          backgroundColor:
                            idx % 2 === 0
                              ? 'var(--surface-secondary)'
                              : 'var(--surface-bg)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Período: {record.period} Grupo: {record.group} Grado:{' '}
                        {record.grade}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Calificaciones Tab */}
              <TabsContent value="calificaciones" className="space-y-4">
                <div
                  className="p-6 rounded-lg border text-center"
                  style={{
                    borderColor: 'var(--border-default)',
                    backgroundColor: 'var(--surface-secondary)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Calificaciones próximamente disponibles</p>
                </div>
              </TabsContent>

              {/* Informe Tab */}
              <TabsContent value="informe" className="space-y-4">
                <div
                  className="p-6 rounded-lg border text-center"
                  style={{
                    borderColor: 'var(--border-default)',
                    backgroundColor: 'var(--surface-secondary)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Informe de calificaciones próximamente disponible</p>
                </div>
              </TabsContent>

              {/* Boletas Tab */}
              <TabsContent value="boletas" className="space-y-4">
                <div
                  className="p-6 rounded-lg border text-center"
                  style={{
                    borderColor: 'var(--border-default)',
                    backgroundColor: 'var(--surface-secondary)',
                    color: 'var(--text-secondary)',
                  }}
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