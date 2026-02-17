# 🎨 Agent Guidelines - Frontend Development Standards

## Contexto General

Este documento establece los estándares obligatorios para **todas las modificaciones del frontend** en este proyecto. Estos estándares garantizan **accesibilidad**, **mantenibilidad** y **consistencia visual** en toda la aplicación.

---

## 1. Accesibilidad: WAI-ARIA & WCAG Compliance

### ✅ Obligatorio para TODAS las modificaciones

Cada componente, sección o elemento interactivo **DEBE cumplir** con:

- **WCAG 2.1 Level AA** como mínimo (preferentemente AAA)
- **WAI-ARIA** especificaciones de roles, estados y propiedades
- **Contraste de color**: ratio mínimo 4.5:1 para texto normal, 3:1 para texto grande
- **Focus management**: elemento :focus-visible visible y claro en todo elemento interactivo

### 📋 Checklist de Accesibilidad (ANTES de hacer commit)

- [ ] ¿Todos los inputs tienen label asociado (for/id o nativa)?
- [ ] ¿Los botones tienen role/aria-label explicito si no es un `<button>` nativo?
- [ ] ¿Los modales/dialogs tienen `[role="dialog"]` y `aria-labelledby`?
- [ ] ¿Las listas tienen `<ul>`, `<ol>`, `<li>` o `[role="list"]` apropiados?
- [ ] ¿Los formularios validan con `[aria-invalid="true"]` en errores?
- [ ] ¿Los elementos deshabilitados usan `[aria-disabled="true"]` o `disabled`?
- [ ] ¿El color de :focus-visible es verde oscuro (#0F7246), NO azul del navegador?
- [ ] ¿El contraste de color pasa prueba de WCAG AA (usa https://webaim.org/resources/contrastchecker/)?
- [ ] ¿Los iconos sin texto tienen `aria-label`?
- [ ] ¿Los elementos visualmente ocultos hidden usan `display: none` o `visibility: hidden` + `aria-hidden="true"`?

### 🎯 Primitivas ARIA disponibles en globals.css

```css
/* Estados válidos para usar en componentes */
:focus-visible              /* Outline verde oscuro automático */
[aria-invalid="true"]       /* Input con error - borde rojo */
[aria-disabled="true"]      /* Elemento deshabilitado */
[aria-pressed="true/false"] /* Toggle buttons */
[aria-current="page"]       /* Navegación activa */
[role="alert"]              /* Alertas y notificaciones */
[role="status"]             /* Información dinámica */
[aria-expanded="true/false"]/* Collapsibles y acordeones */
```

---

## 2. Sistema de Variables de Color

### ⛔ REGLA DE ORO: NUNCA hardcodear colores en CSS

#### ❌ INCORRECTO:
```css
button {
  background-color: #60A917;  /* PROHIBIDO - hardcoded */
  color: white;               /* PROHIBIDO - hardcoded */
}
```

#### ✅ CORRECTO:
```css
button {
  background-color: var(--btn-primary-bg);
  color: var(--btn-primary-text);
}
```

### 📦 Variables de color disponibles en globals.css

#### **Capa Primitiva (Colores Base de Marca)**
```css
--color-primitive-green-darkest      /* #047235 - Verde Logo */
--color-primitive-green-dark         /* #0F7246 - Verde Oscuro Brand */
--color-primitive-green-medium       /* #128023 - Verde Medio */
--color-primitive-green-primary      /* #60A917 - Verde Botón Principal */
--color-primitive-green-light        /* #5EBB53 - Verde Claro */
--color-primitive-green-olive        /* #5C8C25 - Verde Oliva */
--color-primitive-gray-darkest       /* #272727 - Gris Casi Negro */
--color-primitive-gray-dark          /* #22282B - Gris Azulado Oscuro */
--color-primitive-gray-neutral       /* #455258 - Gris Neutro */
--color-primitive-gray-light         /* Blanco/Muy Claro */
```

#### **Capa Semántica (Variables Funcionales)**

**Botones:**
```css
--btn-primary-bg          /* Verde botón principal */
--btn-primary-text        /* Texto oscuro (WCAG compliant) */
--btn-primary-hover       /* Estado hover */
--btn-primary-active      /* Estado activo/pressed */

--btn-secondary-bg        /* Verde oliva */
--btn-secondary-text      /* Texto blanco */
--btn-secondary-hover     /* Verde oscuro al pasar */

--btn-dark-bg             /* Verde oscuro */
--btn-dark-text           /* Blanco */
--btn-dark-hover          /* Verde logo (más oscuro) */
```

**Texto:**
```css
--text-body               /* Texto principal (gris casi negro) */
--text-secondary          /* Texto secundario (gris neutro) */
--text-muted              /* Texto tenue */
--text-inverse            /* Texto sobre fondos oscuros (blanco) */
```

**Superficies:**
```css
--surface-bg              /* Fondo principal (blanco) */
--surface-card            /* Fondo de tarjetas */
--surface-secondary       /* Fondo secundario (gris muy claro) */
```

**Bordes y Estados:**
```css
--border-default          /* Borde gris claro */
--border-focus            /* Borde en focus (verde oscuro) */
--border-error            /* Borde de error (rojo) */

--state-error-bg          /* Fondo tenue para error */
--state-error-border      /* Rojo para validación */
--state-error-text        /* Texto rojo oscuro */

--state-disabled-bg       /* Fondo deshabilitado */
--state-disabled-text     /* Texto deshabilitado */
--state-disabled-border   /* Borde deshabilitado */
```

---

## 3. ¿Necesitas un color nuevo?

### Proceso OBLIGATORIO:

1. **NO** crees variables ad-hoc en componentes
2. **Agrega** la nueva variable a **[globals.css]** en `src/styles/globals.css`
3. **Decide** si es:
   - **Primitiva** (color base de marca): agrega en LAYER 1
   - **Semántica** (variable funcional): agrega en LAYER 2
4. **Convierte** de Hex a OKLCH usando:
   - https://oklch.com/
   - O usa una herramienta de conversión confiable
5. **Documentza** el cambio con comentario que incluya el valor Hex original
6. **Usa** la variable en tus componentes

#### Ejemplo - Agregar un color nuevo:

**En globals.css:**
```css
:root {
  /* ... variables existentes ... */
  
  /* NUEVA VARIABLE - Agregada para [razón] */
  --color-primitive-brand-accent: oklch(0.85 0.1 45.5); /* #FFD700 - Nuevo accent */
  --btn-accent-bg: var(--color-primitive-brand-accent);
  --btn-accent-text: var(--color-primitive-gray-darkest);
}
```

**En tu componente:**
```tsx
// ✅ CORRECTO
<button style={{
  backgroundColor: 'var(--btn-accent-bg)',
  color: 'var(--btn-accent-text)'
}}>
  Click me
</button>

// ❌ NUNCA hagas esto:
<button style={{
  backgroundColor: '#FFD700',  // PROHIBIDO
  color: 'black'               // PROHIBIDO
}}>
  Click me
</button>
```

---

## 4. Flujo de trabajo recomendado

### Antes de modificar componentes:

```
1. ¿Necesito cambiar colores? → Revisa globals.css primero
2. ¿El color existe? → Usa var(--nombre-variable)
3. ¿No existe? → Agrega a globals.css en LAYER 1 o 2
4. ¿Necesito input? → Usa [aria-invalid="true"] en error
5. ¿Necesito estado deshabilitado? → Usa [aria-disabled="true"]
6. ¿Es interactivo? → Asegura :focus-visible visible
7. Antes de commit → Ejecuta prueba de contraste WCAG
```

---

## 5. Referencias y Recursos

### 📚 Documentación oficial:
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [OKLCH Color Space](https://oklch.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 🛠 Herramientas útiles:
- **Validador ARIA**: [ARIA DevTools](https://chrome.google.com/webstore/detail/aria-devtools/dneemiigcbbgbpmjnlnpgaijngdjipod)
- **Análisis de contraste**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Prueba de accesibilidad**: [WAVE](https://wave.webaim.org/)
- **Conversor Hex→OKLCH**: [oklch.com](https://oklch.com/)

---

## 6. Ejemplos prácticos

### Ejemplo 1: Crear un botón accesible

```tsx
// ✅ Correcto
export function Button({ disabled, isLoading, children, ...props }) {
  return (
    <button
      aria-disabled={disabled}
      aria-busy={isLoading}
      style={{
        backgroundColor: disabled ? 'var(--state-disabled-bg)' : 'var(--btn-primary-bg)',
        color: disabled ? 'var(--state-disabled-text)' : 'var(--btn-primary-text)',
        borderColor: disabled ? 'var(--state-disabled-border)' : 'var(--border-default)',
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Ejemplo 2: Input con validación

```tsx
// ✅ Correcto
export function Input({ error, ...props }) {
  return (
    <input
      aria-invalid={!!error}
      style={{
        borderColor: error ? 'var(--state-error-border)' : 'var(--border-default)',
        backgroundColor: error ? 'var(--state-error-bg)' : 'var(--surface-bg)',
        color: error ? 'var(--state-error-text)' : 'var(--text-body)',
      }}
      {...props}
    />
  );
}
```

### Ejemplo 3: Alerta accesible

```tsx
// ✅ Correcto
export function Alert({ type = 'info', children }) {
  const roleMap = {
    error: 'alert',
    success: 'status',
    info: 'status',
  };
  
  return (
    <div
      role={roleMap[type]}
      style={{
        backgroundColor: type === 'error' ? 'var(--state-error-bg)' : 'var(--surface-secondary)',
        color: type === 'error' ? 'var(--state-error-text)' : 'var(--text-body)',
        borderColor: type === 'error' ? 'var(--state-error-border)' : 'var(--border-default)',
      }}
    >
      {children}
    </div>
  );
}
```

---

## 7. Validación antes de Push

### Pre-commit checklist:

```bash
# 1. Ejecutar linter (si existe)
npm run lint

# 2. Verificar que NO hay hardcoded colors
grep -r "#[0-9A-Fa-f]\{6\}" src/components/  # Buscar hex colors

# 3. Verificar ARIA attributes
grep -r "aria-" src/components/

# 4. Manual: Probar con navegador
# - F12 → Accessibility tab
# - Tab por toda la página
# - Verificar :focus-visible visible
# - Verificar contraste con WCAG AA mínimo
```

---

## 📌 Resumen ejecutivo

| Regla | Excepción | Acción |
|-------|-----------|--------|
| ❌ No hardcodear colores | Ninguna | Usa `var(--nombre)` siempre |
| ✅ Cumplir WCAG 2.1 AA | Ninguna | Revisa contraste antes de commit |
| ✅ Usar WAI-ARIA | Campos nativos HTML5 | `[role]`, `[aria-*]` en divs |
| ✅ :focus-visible visible | Acceso por teclado | Green (#0F7246) outline required |
| 📥 Agregar variable nueva | Primero en globals.css | NUNCA en componentes |

---

**Última actualización**: 17 de febrero de 2026  
**Responsable**: Frontend Team  
**Criticidad**: 🔴 **OBLIGATORIO** para todos los cambios
