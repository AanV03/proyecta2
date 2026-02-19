'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    AlertTriangle,
    FileText,
    CheckCircle2,
    Clock,
    Download,
    Eye,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Calendar,
} from 'lucide-react';

// Datos de ejemplo del historial de titulación
const degreeHistory = {
    folio: 'PO-0325-TSU',
    group: 'TIDBIS61M',
    period: 'Sept-Dic 25',
    career: 'TSU TECNOLOGÍAS DE LA INFORMACIÓN ÁREA: DESARROLLO DE SOFTWARE MULTIPLATAFORMA',
    status: 'EN PROCESO DE CAPTURA',
    statusDescription: 'Tu título se encuentra en trámite. "Una vez realizado el trámite de título o través del sistema integral de información, el tiempo estimado para concluir es de 06 meses".',
    title: 'Titulación en Proceso',
};

// Pasos del proceso de titulación
const degreeProcessSteps = [
    {
        step: 1,
        title: 'Presentación de Documentos',
        description: 'Entrega de documentación completa y revisión inicial',
        status: 'completed',
        date: '15 de Enero 2026',
        icon: FileText,
    },
    {
        step: 2,
        title: 'Revisión Académica',
        description: 'Validación de requisitos académicos y expediente',
        status: 'completed',
        date: '20 de Enero 2026',
        icon: BookOpen,
    },
    {
        step: 3,
        title: 'Trámite de Titulación',
        description: 'Procesamiento en la Dirección General de Profesiones',
        status: 'in-progress',
        date: 'En progreso',
        icon: Clock,
    },
    {
        step: 4,
        title: 'Emisión del Título',
        description: 'Generación e impresión del documento oficial',
        status: 'pending',
        date: 'Próximamente',
        icon: GraduationCap,
    },
    {
        step: 5,
        title: 'Entrega',
        description: 'Recepción del título en tu institución',
        status: 'pending',
        date: 'Próximamente',
        icon: CheckCircle2,
    },
];

const getStatusStyle = (status: string) => {
    switch (status) {
        case 'completed':
            return {
                backgroundColor: 'var(--state-success-bg)',
                color: 'var(--state-success-text)',
                borderColor: 'var(--state-success-border)',
            };
        case 'in-progress':
            return {
                backgroundColor: 'oklch(0.95 0.08 240)',
                color: 'oklch(0.42 0.15 240)',
                borderColor: 'oklch(0.6 0.18 240)',
            };
        case 'pending':
            return {
                backgroundColor: 'var(--surface-secondary)',
                color: 'var(--text-secondary)',
                borderColor: 'var(--border-default)',
            };
        default:
            return {
                backgroundColor: 'var(--surface-secondary)',
                color: 'var(--text-secondary)',
                borderColor: 'var(--border-default)',
            };
    }
};

const getStatusLabel = (status: string) => {
    switch (status) {
        case 'completed':
            return 'Completado';
        case 'in-progress':
            return 'En Progreso';
        case 'pending':
            return 'Pendiente';
        default:
            return 'Desconocido';
    }
};

export default function DegreePage() {
    const [pdfOpen, setPdfOpen] = useState(false);

    return (
        <main className="page-main min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <section aria-labelledby="page-title" className="space-y-4">
                    <h1
                        id="page-title"
                        className="heading-body text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3 text-body"
                    >
                        <GraduationCap className="w-8 h-8" style={{ color: 'var(--btn-primary-bg)' }} />
                        Titulación
                    </h1>
                    <Separator />
                </section>

                {/* Important Notice Alert */}
                <Alert
                    className="border-l-4 border-b-0 border-r-0 border-t-0"
                    style={{
                        backgroundColor: 'oklch(0.95 0.12 95 / 0.1)',
                        borderLeftColor: 'oklch(0.75 0.18 95)',
                    }}
                    role="alert"
                    aria-live="polite"
                    aria-label="Aviso importante"
                >
                    <Lightbulb
                        className="h-5 w-5"
                        style={{ color: 'oklch(0.75 0.18 95)' }}
                        aria-hidden="true"
                    />
                    <AlertTitle className="font-semibold text-body">
                        Información Importante sobre tu Título
                    </AlertTitle>
                    <AlertDescription className="text-secondary">
                        Recuerda que tu título será <span className="font-semibold">electrónico</span> y podrás descargarlo aquí una
                        vez que esté registrado ante la Dirección General de Profesiones.{' '}
                        <Button
                            variant="link"
                            className="h-auto p-0 ml-1 text-btn-primary"
                            aria-label="Click para abrir vista previa del documento"
                        >
                            Click para abrir previa
                        </Button>
                    </AlertDescription>
                </Alert>

                {/* Main Content with Tabs */}
                <Tabs defaultValue="history" className="w-full space-y-4">
                    <TabsList
                        className="grid w-full grid-cols-2"
                        style={{
                            backgroundColor: 'var(--surface-secondary)',
                        }}
                    >
                        <TabsTrigger
                            value="history"
                            className="text-secondary"
                        >
                            <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
                            Historial de Titulación
                        </TabsTrigger>
                        <TabsTrigger
                            value="process"
                            className="text-secondary"
                        >
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            Proceso de Titulación
                        </TabsTrigger>
                    </TabsList>

                    {/* TAB 1: Historial */}
                    <TabsContent value="history" className="space-y-4">
                        <div className="space-y-4">
                            {/* Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Card className="border-default">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-secondary">
                                            Folio
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-2xl font-bold text-body">
                                            {degreeHistory.folio}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-default">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-secondary">
                                            Grupo
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-2xl font-bold text-body">
                                            {degreeHistory.group}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-default">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-secondary">
                                            Período
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-2xl font-bold text-body">
                                            {degreeHistory.period}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Main Info Card */}
                            <Card
                                className="border-l-4"
                                style={{
                                    borderColor: 'var(--btn-primary-bg)',
                                    borderLeftWidth: '4px',
                                }}
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <CardTitle className="text-body">
                                                {degreeHistory.career}
                                            </CardTitle>
                                            <CardDescription className="mt-2 text-secondary">
                                                {degreeHistory.title}
                                            </CardDescription>
                                        </div>
                                        <Badge className="border" style={getStatusStyle(degreeHistory.status)}>
                                            <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                                            {getStatusLabel(degreeHistory.status)}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Alert
                                        className="bg-surface-secondary border-default"
                                    >
                                        <AlertTriangle
                                            className="h-4 w-4 text-secondary"
                                            aria-hidden="true"
                                        />
                                        <AlertDescription className="text-secondary">
                                            {degreeHistory.statusDescription}
                                        </AlertDescription>
                                    </Alert>

                                    <div className="flex gap-2 flex-wrap pt-2">
                                        <Button
                                            variant="outline"
                                            className="gap-2"
                                            style={{
                                                color: 'var(--btn-primary-bg)',
                                                borderColor: 'var(--btn-primary-bg)',
                                            }}
                                        >
                                            <Download className="w-4 h-4" aria-hidden="true" />
                                            Descargar Documentos
                                        </Button>
                                        <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
                                            <DialogTrigger asChild>
                                                <Button
                                                    className="gap-2"
                                                    style={{
                                                        backgroundColor: 'var(--btn-primary-bg)',
                                                        color: 'var(--btn-primary-text)',
                                                    }}
                                                >
                                                    <Eye className="w-4 h-4" aria-hidden="true" />
                                                    Ver Documento
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-4xl h-[90vh] sm:h-auto flex flex-col" style={{ borderColor: 'var(--border-default)' }}>
                                                <DialogHeader>
                                                    <DialogTitle style={{ color: 'var(--text-body)' }}>
                                                        Documento de Titulación
                                                    </DialogTitle>
                                                    <DialogDescription className="text-(--text-secondary)">
                                                        Vista previa del proceso de titulación para TSU en Desarrollo de Software
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div
                                                    className="w-full flex-1 sm:h-64 md:h-80 lg:h-screen lg:max-h-150 rounded-lg flex items-center justify-center overflow-auto bg-(--surface-secondary)"
                                                    role="img"
                                                    aria-label="Vista previa del PDF del proceso de titulación"
                                                >
                                                    <div className="text-center p-4">
                                                        <FileText className="w-16 h-16 mx-auto mb-4 text-muted" aria-hidden="true" />
                                                        <p className="text-secondary">
                                                            Aquí se cargaría el PDF embebido del proceso de titulación
                                                        </p>
                                                        <p className="text-sm mt-2 text-muted">
                                                            El PDF se muestra en este modal para mejor experiencia de usuario
                                                        </p>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* TAB 2: Proceso de Titulación */}
                    <TabsContent value="process" className="space-y-6">
                        <div className="space-y-6">
                            {/* Stepper Timeline */}
                            <div className="relative" role="list" aria-label="Pasos del proceso de titulación">
                                {degreeProcessSteps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    const isCompleted = step.status === 'completed';
                                    const isInProgress = step.status === 'in-progress';

                                    return (
                                        <div
                                            key={step.step}
                                            role="listitem"
                                            className="flex gap-4 relative"
                                        >
                                            {/* Timeline Connector */}
                                            {index < degreeProcessSteps.length - 1 && (
                                                <div
                                                    className={`absolute left-5 top-12 w-1 h-12 ${
                                                        isCompleted ? 'bg-(--state-success-border)' : 'bg-(--border-default)'
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                            )}

                                            {/* Step Circle */}
                                            <div
                                                className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 ${
                                                    isCompleted
                                                        ? 'bg-(--state-success-border)'
                                                        : isInProgress
                                                            ? 'bg-[oklch(0.6_0.18_240)] border-2 border-[oklch(0.6_0.18_240)]'
                                                            : 'bg-(--surface-secondary)'
                                                }`}
                                                aria-current={isInProgress ? 'step' : undefined}
                                            >
                                                <IconComponent
                                                    className={`w-5 h-5 ${isInProgress ? 'animate-pulse' : ''}`}
                                                    style={{
                                                        color: isCompleted || isInProgress ? 'var(--btn-dark-text)' : 'var(--text-secondary)',
                                                    }}
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            {/* Step Content */}
                                            <Card
                                                className={`flex-1 transition-all duration-300 ${isInProgress ? 'ring-2 ring-offset-2' : ''}`}
                                                style={{
                                                    borderColor: isInProgress ? 'oklch(0.6 0.18 240)' : 'var(--border-default)',
                                                    '--tw-ring-color': 'oklch(0.6 0.18 240)',
                                                } as React.CSSProperties}
                                            >
                                                <CardHeader className="pb-2">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <CardTitle className="text-base text-body">
                                                                Paso {step.step}: {step.title}
                                                            </CardTitle>
                                                            <CardDescription className="mt-1 text-secondary">
                                                                {step.description}
                                                            </CardDescription>
                                                        </div>
                                                        <Badge
                                                            className="border"
                                                            style={getStatusStyle(step.status)}
                                                            aria-label={`Estado: ${getStatusLabel(step.status)}`}
                                                        >
                                                            {getStatusLabel(step.status)}
                                                        </Badge>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="flex items-center gap-2 text-sm">
                                                    <Calendar className="w-4 h-4 text-secondary" aria-hidden="true" />
                                                    <time className="text-secondary">{step.date}</time>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Process Summary */}
                            <Card
                                className="bg-surface-secondary border-default"
                                style={{
                                    backgroundColor: 'var(--surface-secondary)',
                                    borderColor: 'var(--border-default)',
                                }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-lg text-body">
                                        Estimado de Tiempo
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-btn-primary" aria-hidden="true" />
                                        <span className="text-body">
                                            <strong>Duración aproximada del proceso:</strong>
                                        </span>
                                    </div>
                                    <p className="text-secondary">
                                        El tiempo estimado para concluir todo el proceso de titulación es de <strong>6 meses</strong> a
                                        partir de la presentación de tu documentación.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
