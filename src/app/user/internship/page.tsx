'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  FileText,
  Save,
  RotateCcw,
} from 'lucide-react';

export default function InternshipPage() {
  const [formData, setFormData] = useState({
    // Quien firma la carta compromiso
    title1: '',
    firstName1: '',
    lastName1: '',
    lastName2_1: '',
    fullName1: '',
    position1: '',
    email1: '',

    // Asesor empresarial
    title2: '',
    firstName2: '',
    lastName1_2: '',
    lastName2_2: '',
    fullName2: '',
    position2: '',
    email2: '',

    // Información del proyecto
    developmentArea: '',
    internshipHours: '',
    projectInfo: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      title1: '',
      firstName1: '',
      lastName1: '',
      lastName2_1: '',
      fullName1: '',
      position1: '',
      email1: '',
      title2: '',
      firstName2: '',
      lastName1_2: '',
      lastName2_2: '',
      fullName2: '',
      position2: '',
      email2: '',
      developmentArea: '',
      internshipHours: '',
      projectInfo: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica para guardar los datos
  };

  const TitleSelector = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        aria-label="Seleccionar título"
        className="w-full"
        style={{
          borderColor: 'var(--border-default)',
          backgroundColor: 'var(--surface-bg)',
          color: 'var(--text-body)',
        }}
      >
        <SelectValue placeholder="Seleccionar título" />
      </SelectTrigger>
      <SelectContent
        style={{
          backgroundColor: 'var(--surface-card)',
          color: 'var(--text-body)',
        }}
      >
        <SelectItem value="ingeniero">Ingeniero</SelectItem>
        <SelectItem value="licenciado">Licenciado</SelectItem>
        <SelectItem value="tecnico">Técnico</SelectItem>
        <SelectItem value="bachiller">Bachiller</SelectItem>
        <SelectItem value="otro">Otro</SelectItem>
      </SelectContent>
    </Select>
  );

  return (
    <main className="min-h-screen bg-(--surface-bg)">
      {/* Header */}
      <div
        className="w-full px-6 py-6 flex items-center gap-4 bg-(--btn-dark-bg) border-b-2 border-(--border-default)"
      >
        <FileText
          size={32}
          className="text-(--text-inverse)"
          aria-hidden="true"
        />
        <h1
          className="text-(--text-inverse) text-3xl font-semibold"
        >
          Convenio de Estadías
        </h1>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto p-6">
        <form onSubmit={handleSubmit}>
          {/* Sección 1: Información de quien firma la carta compromiso */}
          <Card
            className="mb-8"
            style={{
              borderColor: 'var(--border-default)',
              backgroundColor: 'var(--surface-card)',
            }}
          >
            <CardHeader
              style={{
                borderBottom: `1px solid var(--border-default)`,
                backgroundColor: 'var(--surface-secondary)',
              }}
            >
              <CardTitle
                style={{
                  color: 'var(--text-body)',
                  fontSize: '1.125rem',
                }}
              >
                Información de quien firma la carta compromiso
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {/* Row 1: Título, Nombres, Apellidos */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label
                    htmlFor="title1"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Título
                  </Label>
                  <TitleSelector
                    value={formData.title1}
                    onChange={(val) => handleSelectChange('title1', val)}
                  />
                </div>

                <div className="md:col-span-3">
                  <Label
                    htmlFor="firstName1"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Nombre(s)
                  </Label>
                  <Input
                    id="firstName1"
                    name="firstName1"
                    value={formData.firstName1}
                    onChange={handleInputChange}
                    placeholder="Nombre(s)"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label
                    htmlFor="lastName1"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Primer Apellido
                  </Label>
                  <Input
                    id="lastName1"
                    name="lastName1"
                    value={formData.lastName1}
                    onChange={handleInputChange}
                    placeholder="Primer apellido"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="lastName2_1"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Segundo Apellido
                  </Label>
                  <Input
                    id="lastName2_1"
                    name="lastName2_1"
                    value={formData.lastName2_1}
                    onChange={handleInputChange}
                    placeholder="Segundo apellido"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Nombre completo, Puesto, Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label
                    htmlFor="fullName1"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Nombre de quien firma la carta compromiso
                  </Label>
                  <Input
                    id="fullName1"
                    name="fullName1"
                    value={formData.fullName1}
                    onChange={handleInputChange}
                    placeholder="ING."
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="position1"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Puesto en la Empresa
                  </Label>
                  <Input
                    id="position1"
                    name="position1"
                    value={formData.position1}
                    onChange={handleInputChange}
                    placeholder="Jefe de Departamento"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email1"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email1"
                    name="email1"
                    type="email"
                    value={formData.email1}
                    onChange={handleInputChange}
                    placeholder="usuario@sitio.com"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sección 2: Información del Asesor Empresarial */}
          <Card
            className="mb-8"
            style={{
              borderColor: 'var(--border-default)',
              backgroundColor: 'var(--surface-card)',
            }}
          >
            <CardHeader
              style={{
                borderBottom: `1px solid var(--border-default)`,
                backgroundColor: 'var(--surface-secondary)',
              }}
            >
              <CardTitle
                style={{
                  color: 'var(--text-body)',
                  fontSize: '1.125rem',
                }}
              >
                Información del Asesor Empresarial
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {/* Row 1: Título, Nombres, Apellidos */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label
                    htmlFor="title2"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Título
                  </Label>
                  <TitleSelector
                    value={formData.title2}
                    onChange={(val) => handleSelectChange('title2', val)}
                  />
                </div>

                <div className="md:col-span-3">
                  <Label
                    htmlFor="firstName2"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Nombre(s)
                  </Label>
                  <Input
                    id="firstName2"
                    name="firstName2"
                    value={formData.firstName2}
                    onChange={handleInputChange}
                    placeholder="Nombre(s)"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label
                    htmlFor="lastName1_2"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Primer Apellido
                  </Label>
                  <Input
                    id="lastName1_2"
                    name="lastName1_2"
                    value={formData.lastName1_2}
                    onChange={handleInputChange}
                    placeholder="Primer apellido"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="lastName2_2"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Segundo Apellido
                  </Label>
                  <Input
                    id="lastName2_2"
                    name="lastName2_2"
                    value={formData.lastName2_2}
                    onChange={handleInputChange}
                    placeholder="Segundo apellido"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Nombre completo, Puesto, Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label
                    htmlFor="fullName2"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Nombre del Asesor Empresarial
                  </Label>
                  <Input
                    id="fullName2"
                    name="fullName2"
                    value={formData.fullName2}
                    onChange={handleInputChange}
                    placeholder="ING."
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="position2"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Puesto del Asesor Empresarial
                  </Label>
                  <Input
                    id="position2"
                    name="position2"
                    value={formData.position2}
                    onChange={handleInputChange}
                    placeholder="Supervisor de Área"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email2"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Correo Electrónico del Asesor Empresarial
                  </Label>
                  <Input
                    id="email2"
                    name="email2"
                    type="email"
                    value={formData.email2}
                    onChange={handleInputChange}
                    placeholder="usuario@sitio.com"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sección 3: Información del Proyecto */}
          <Card
            className="mb-8"
            style={{
              borderColor: 'var(--border-default)',
              backgroundColor: 'var(--surface-card)',
            }}
          >
            <CardHeader
              style={{
                borderBottom: `1px solid var(--border-default)`,
                backgroundColor: 'var(--surface-secondary)',
              }}
            >
              <CardTitle
                style={{
                  color: 'var(--text-body)',
                  fontSize: '1.125rem',
                }}
              >
                Información del Proyecto
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label
                    htmlFor="developmentArea"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Área de Desarrollo de Estadía
                  </Label>
                  <Input
                    id="developmentArea"
                    name="developmentArea"
                    value={formData.developmentArea}
                    onChange={handleInputChange}
                    placeholder="Departamento de Ventas"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="internshipHours"
                    style={{ color: 'var(--text-body)', fontWeight: '600' }}
                  >
                    Horario de Estadía
                  </Label>
                  <Input
                    id="internshipHours"
                    name="internshipHours"
                    value={formData.internshipHours}
                    onChange={handleInputChange}
                    placeholder="9:00 AM - 5:00 PM"
                    style={{
                      borderColor: 'var(--border-default)',
                      color: 'var(--text-body)',
                    }}
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="projectInfo"
                  style={{ color: 'var(--text-body)', fontWeight: '600' }}
                >
                  Descripción del Proyecto
                </Label>
                <Textarea
                  id="projectInfo"
                  name="projectInfo"
                  value={formData.projectInfo}
                  onChange={handleInputChange}
                  placeholder="Describe el proyecto de estadía..."
                  rows={5}
                  style={{
                    borderColor: 'var(--border-default)',
                    color: 'var(--text-body)',
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Botones de Acción */}
          <div className="flex gap-4 justify-end mb-8">
            <Button
              type="button"
              onClick={handleReset}
              variant="outline"
              className="gap-2"
              style={{
                color: 'var(--text-secondary)',
                borderColor: 'var(--border-default)',
              }}
            >
              <RotateCcw size={18} aria-hidden="true" />
              Limpiar
            </Button>

            <Button
              type="submit"
              className="gap-2 btn-save-green"
            >
              <Save size={18} aria-hidden="true" />
              Guardar Información
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
