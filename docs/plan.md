# Análisis de Interfaces de Inicio: Plataforma Proyecta UTCH

## 1. Página de Inicio Pública (Pre-Login)
La puerta de entrada a la plataforma está diseñada como un portal institucional informativo y de redirección masiva.

### 1.1 Stack Tecnológico y Arquitectura
* **Framework CSS:** Bootstrap (para el sistema de rejillas y responsividad básica).
* **Servidor:** Microsoft-IIS/10.0 (entorno ASP.NET).
* **Estrategia de Navegación:** Basada en rutas dinámicas que segmentan al usuario por perfil (Estudiantes, Egresados, Empresas).

### 1.2 Elementos Visuales y UX
* **Layout:** Estructura clásica de 12 columnas con un contenedor centralizado.
* **Componentes Clave:** * **Hero Section:** Banner informativo con avisos institucionales.
    * **Cards de Acceso:** Módulos visuales que actúan como puntos de entrada a sistemas específicos (Inscripciones, Bolsa de Trabajo, PWA).
* **Paleta de Colores:** Uso estricto de la identidad institucional (Verde, Gris, Blanco).

---

## 2. Dashboard de Usuario (Post-Login /SUsuario/index)
Una vez autenticado, la plataforma cambia a un entorno de gestión interna basado en una estética de aplicación de escritorio.

### 2.1 Identidad Visual: Metro UI
A diferencia del portal público, el panel interno utiliza el framework **Metro UI CSS**, imitando la interfaz de mosaicos ("tiles") de Windows.
* **Componentes de Interfaz:** Paneles colapsables (`panel collapsed`), botones de comando y barras de progreso delgadas (`Pace.js`).
* **Jerarquía Visual:** El contenido se organiza en una lista vertical de contenedores de colores (Verde, Azul, Cobalto, Carmesí) que no siguen una semántica de prioridad clara.

### 2.2 Análisis de Redundancia y Navegación
Se identifica una arquitectura de información circular y redundante que afecta la experiencia de usuario:

* **Triple Acceso al Calendario:** 1. Enlace de texto en el Topbar.
    2. Icono con dropdown de eventos rápidos.
    3. Sidebar lateral derecho con resumen y filtros.
* **Circularidad de Rutas:** El botón de "Información" en el menú lateral redirige a `/susuario/micuenta`, la misma ubicación que el botón "Cuenta" de la barra superior, generando confusión sobre el propósito de cada menú.

### 2.3 Componentes de Gestión Detectados
* **Paneles de Trámites:** Contenedores tipo acordeón para Titulación, Estadías e IMSS.
* **Inyección de Contenido:** Uso extensivo de `iFrames` para visualizar reglamentos y manuales PDF directamente en la interfaz.
* **Seguridad:** Script `idleTimer` integrado para el cierre automático de sesión tras 60 minutos de inactividad.

---

## 3. Conclusión del Diagnóstico
La página de inicio post-login presenta una **deuda técnica crítica**. La coexistencia de tres formas distintas de acceder a una misma función (como el calendario) y la duplicidad de rutas bajo nombres diferentes indican una falta de refactorización centralizada, sugiriendo que una reescritura total bajo estándares modernos (Next.js/Tailwind) sería más eficiente que un mantenimiento progresivo.