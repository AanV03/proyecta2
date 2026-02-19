'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, AlertCircle, CreditCard, BookOpen, GraduationCap, ReceiptText, Mail } from 'lucide-react';

export default function DebtPage() {
    // Estado de deudas (datos de ejemplo)
    const debtStatus = [
        { id: 'finanzas', status: 'sin-adeudo', icon: CreditCard, label: 'Finanzas', description: 'Estado de cuentas y pagos' },
        { id: 'biblioteca', status: 'sin-adeudo', icon: BookOpen, label: 'Biblioteca', description: 'Materiales y servicios' },
        { id: 'carrera', status: 'sin-adeudo', icon: GraduationCap, label: 'Carrera', description: 'Trámites académicos' },
        { id: 'prestamos', status: 'sin-adeudo', icon: ReceiptText, label: 'Préstamos', description: 'Créditos y financiamientos' },
    ];

    // Datos de ejemplo para la tabla
    const tableData = [
        {
            carrera: 'DESARROLLO DE NEGOCIOS',
            temas: 'negocios@ufch.edu.mx',
            modulos: 'desarrollo@ufch.edu.mx',
            correo: 'correo@ufch.edu.mx',
        },
        {
            carrera: 'MERCADOLOGÍA',
            temas: 'mercadologia@ufch.edu.mx',
            modulos: 'marketing@ufch.edu.mx',
            correo: 'correspondencia@ufch.edu.mx',
        },
        {
            carrera: 'TECNOLOGIA DE LA INF Y COM',
            temas: 'tic@ufch.edu.mx',
            modulos: 'tecnologia@ufch.edu.mx',
            correo: 'it-support@ufch.edu.mx',
        },
        {
            carrera: 'MANTENIMIENTO',
            temas: 'mantenimiento@ufch.edu.mx',
            modulos: 'mant@ufch.edu.mx',
            correo: 'mantenimiento@ufch.edu.mx',
        },
        {
            carrera: 'PROCESOS INDUSTRIALES',
            temas: 'procesos@ufch.edu.mx',
            modulos: 'industrial@ufch.edu.mx',
            correo: 'produccion@ufch.edu.mx',
        },
        {
            carrera: 'ENERGIAS RENOVABLES',
            temas: 'energias@ufch.edu.mx',
            modulos: 'renovables@ufch.edu.mx',
            correo: 'energías@ufch.edu.mx',
        },
        {
            carrera: 'POSGRADOS',
            temas: '—',
            modulos: '—',
            correo: 'posgrados@ufch.edu.mx',
        },
        {
            carrera: 'Unidad Académica RH',
            temas: '—',
            modulos: '—',
            correo: 'rh@ufch.edu.mx',
        },
        {
            carrera: 'Unidad Académica Coordinación',
            temas: 'coordinacion@ufch.edu.mx',
            modulos: 'coordinacion@ufch.edu.mx',
            correo: 'coordinacion@ufch.edu.mx',
        },
        {
            carrera: 'Unidad Académica Dirección',
            temas: 'direccion@ufch.edu.mx',
            modulos: 'direccion@ufch.edu.mx',
            correo: 'coordinacion@ufch.edu.mx, provincias@ufch.edu.mx',
        },
    ];

    const getStatusBadge = (status: string) => {
        if (status === 'sin-adeudo') {
            return (
                <Badge
                    className="border"
                    role="status"
                    aria-label="Estado: Sin adeudo"
                    style={{
                        backgroundColor: 'var(--state-success-bg)',
                        color: 'var(--state-success-text)',
                        borderColor: 'var(--state-success-border)',
                    }}
                >
                    <CheckCircle2 className="w-4 h-4 mr-2" aria-hidden="true" />
                    Sin Adeudo
                </Badge>
            );
        }
        return (
            <Badge
                variant="destructive"
                role="status"
                aria-label="Estado: Adeudo pendiente"
            >
                <AlertCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                Adeudo Pendiente
            </Badge>
        );
    };

    return (
        <main className="page-main min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <section aria-labelledby="page-title" className="space-y-4">
                    <h1
                        id="page-title"
                        className="heading-body text-3xl md:text-4xl font-bold tracking-tight text-(--text-body)"
                    >
                        Estado General de Deudas
                    </h1>
                    <Separator />
                </section>

                {/* General Status Alert */}
                <section aria-label="Estado general" className="space-y-4">
                    <Alert
                        className="border-l-4 border-b-0 border-r-0 border-t-0 bg-[oklch(0.703_0.228_119.1/0.1)] border-(--btn-primary-bg)"
                        role="status"
                        aria-live="polite"
                    >
                        <CheckCircle2
                            className="h-5 w-5 text-(--btn-primary-bg)"
                            aria-hidden="true"
                        />
                        <AlertTitle
                            className="font-semibold text-lg text-(--text-body)"
                        >
                            Sin Adeudo
                        </AlertTitle>
                        <AlertDescription
                            className="text-base text-(--text-secondary)"
                        >
                            Tu estado académico se encuentra al corriente. No tienes deudas pendientes en ningún departamento.
                        </AlertDescription>
                    </Alert>
                </section>

                {/* Status Cards Grid */}
                <section aria-labelledby="status-cards-heading" className="space-y-6">
                    <h2
                        id="status-cards-heading"
                        className="heading-body text-2xl font-semibold text-(--text-body)"
                    >
                        Detalles por Departamento
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
                        {debtStatus.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div role="listitem" key={item.id}>
                                    <Card
                                        className="transition-all duration-200 hover:shadow-md focus-within:shadow-lg border-(--border-default)"
                                    >
                                    <CardHeader className="pb-2">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex-1">
                                                <CardTitle
                                                    className="text-base font-semibold text-(--text-body)"
                                                >
                                                    {item.label}
                                                </CardTitle>
                                                <CardDescription
                                                    className="text-xs mt-1 text-(--text-secondary)"
                                                >
                                                    {item.description}
                                                </CardDescription>
                                            </div>
                                            <IconComponent
                                                className="w-6 h-6 shrink-0 text-(--btn-primary-bg)"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-2">
                                        <div className="flex items-center justify-center py-2">
                                            {getStatusBadge(item.status)}
                                        </div>
                                    </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Divider */}
                <Separator />

                {/* Career Directory Table */}
                <section aria-labelledby="career-directory-heading" className="space-y-4">
                    <h2
                        id="career-directory-heading"
                        className="heading-body text-2xl font-semibold text-(--text-body)"
                    >
                        Directorio de Contacto - Secretarías de Carrera
                    </h2>

                    <Card className="border-(--border-default)">
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-(--surface-secondary)">
                                            <TableHead
                                                className="font-semibold text-sm text-(--text-body)"
                                            >
                                                Carrera / Dependencia
                                            </TableHead>
                                            <TableHead
                                                className="font-semibold text-sm text-(--text-body)"
                                            >
                                                Email Administrativo
                                            </TableHead>
                                            <TableHead
                                                className="font-semibold text-sm text-(--text-body)"
                                            >
                                                Email Académico
                                            </TableHead>
                                            <TableHead
                                                className="font-semibold text-sm text-(--text-body)"
                                            >
                                                Email General
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {tableData.map((row, index) => (
                                            <TableRow
                                                key={index}
                                                className={`transition-colors ${
                                                    index % 2 === 0 ? '' : 'bg-(--surface-secondary)'
                                                }`}
                                            >
                                                <TableCell
                                                    className="font-medium text-sm py-3 text-(--text-body)"
                                                >
                                                    {row.carrera}
                                                </TableCell>
                                                <TableCell
                                                    className="text-sm py-3 text-(--text-secondary)"
                                                >
                                                    <a
                                                        href={`mailto:${row.temas}`}
                                                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-1 text-(--btn-primary-bg) focus:ring-(--color-primitive-green-dark)"
                                                        aria-label={`Enviar email a ${row.temas}`}
                                                    >
                                                        <Mail className="inline w-4 h-4 mr-1" aria-hidden="true" />
                                                        {row.temas}
                                                    </a>
                                                </TableCell>
                                                <TableCell
                                                    className="text-sm py-3 text-(--text-secondary)"
                                                >
                                                    <a
                                                        href={`mailto:${row.modulos}`}
                                                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-1 text-(--btn-primary-bg) focus:ring-(--color-primitive-green-dark)"
                                                        aria-label={`Enviar email a ${row.modulos}`}
                                                    >
                                                        <Mail className="inline w-4 h-4 mr-1" aria-hidden="true" />
                                                        {row.modulos}
                                                    </a>
                                                </TableCell>
                                                <TableCell
                                                    className="text-sm py-3 text-(--text-secondary)"
                                                >
                                                    <a
                                                        href={`mailto:${row.correo}`}
                                                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-1 text-(--btn-primary-bg) focus:ring-(--color-primitive-green-dark)"
                                                        aria-label={`Enviar email a ${row.correo}`}
                                                    >
                                                        <Mail className="inline w-4 h-4 mr-1" aria-hidden="true" />
                                                        {row.correo}
                                                    </a>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Table Info */}
                    <div
                        className="text-xs p-3 rounded-md bg-(--surface-secondary) text-(--text-secondary)"
                        role="note"
                    >
                        <p>
                            La información de contacto permite comunicarse directamente con las secretarías de cada carrera para
                            consultas académicas y administrativas.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
