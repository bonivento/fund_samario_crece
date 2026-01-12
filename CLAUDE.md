# SAMARIO CRECE - Landing Page

## Resumen del Proyecto

Página web para la **Fundación SAMARIO CRECE**, una organización ubicada en Santa Marta, Colombia, dedicada a la restauración de vínculos familiares de jóvenes en estado de vulnerabilidad (12-20 años) a través de programas deportivos.

La fundación también gestiona el club deportivo **REINO SAMARIO**, enfocado en la formación atlética integral con énfasis en fútbol.

---

## Información de la Fundación

### Misión
Restauración de vínculos familiares de jóvenes samarios en estado de vulnerabilidad, rescatando principios y valores familiares mediante programas deportivos, bajo los valores de amor, respeto y solidaridad.

### Visión
En 2027, ser una fundación reconocida en Santa Marta y la costa Caribe Colombiana por liderar la restauración de jóvenes vulnerables mediante programas deportivos que fortalezcan el aspecto técnico, espiritual y emocional.

### Valores Corporativos
- **Solidaridad**: Trato amable y equitativo hacia la restauración del bienestar
- **Respeto**: Aceptar y reconocer diferencias con buen trato
- **Responsabilidad**: Compromiso con los acuerdos pactados
- **Honestidad**: Rectitud e integridad en actividades y proyectos

### Objetivos
- Crear relaciones con clubes deportivos
- Capacitación escolar para jóvenes
- Asesoramiento psicológico y espiritual

---

## Stack Tecnológico

### Framework Principal
- **Next.js 14+** (App Router)
  - Compatible nativamente con Vercel
  - SSG para rendimiento óptimo en landing page
  - API Routes para futuro backend de donaciones
  - Soporte TypeScript nativo

### Lenguaje
- **TypeScript** - Tipado estático para mantenibilidad

### Estilos
- **Tailwind CSS** - Utility-first, responsive por defecto
- **CSS Modules** - Para estilos específicos de componentes si es necesario

### Componentes UI
- **Componentes propios** con Tailwind
- **Framer Motion** - Animaciones sutiles

### Formularios
- **React Hook Form** - Manejo eficiente de formularios
- **Zod** - Validación de esquemas

### Hosting
- **Vercel** - Deploy automático, edge functions, analytics

---

## Identidad Visual

### Colores (extraídos del logo)
```css
:root {
  --primary: #00B4B4;        /* Turquesa/Cyan principal */
  --primary-dark: #008B8B;   /* Turquesa oscuro */
  --primary-light: #4DD4D4;  /* Turquesa claro */
  --secondary: #1a1a1a;      /* Negro texto */
  --background: #FFFFFF;     /* Blanco */
  --accent: #F5F5F5;         /* Gris claro fondos */
}
```

### Tipografía
- **Headings**: Poppins o Montserrat (Bold) - Similar al logo
- **Body**: Inter o Open Sans - Legibilidad

### Logo
- Ubicación: `/public/images/logo.png`
- Usar versión optimizada en WebP para web

---

## Estructura del Proyecto

```
samario-crece/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo.webp
│   │   └── hero/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── index.ts
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Mission.tsx
│   │       ├── Programs.tsx
│   │       ├── Values.tsx
│   │       ├── Impact.tsx
│   │       ├── Contact.tsx
│   │       └── index.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── hooks/
│   │   └── useScrollspy.ts
│   └── types/
│       └── index.ts
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Secciones de la Landing Page

### 1. Header/Navegación
- Logo a la izquierda
- Menú de navegación (scroll suave a secciones)
- Botón CTA "Donar" (preparado para futuro)
- Menú hamburguesa en móvil
- Sticky header con efecto de blur al hacer scroll

### 2. Hero Section
- Imagen de fondo con jóvenes deportistas o Santa Marta
- Título principal: "Transformando vidas a través del deporte"
- Subtítulo con misión resumida
- CTA principal: "Conoce más" / "Únete"
- Efecto parallax sutil

### 3. Sobre Nosotros
- Breve historia de la fundación
- Imagen del equipo o actividades
- Estadísticas de impacto (jóvenes beneficiados, familias, etc.)

### 4. Misión y Visión
- Cards con misión y visión
- Iconografía relacionada
- Diseño visual atractivo

### 5. Programas
- **Programas Deportivos** - Club Reino Samario
- **Apoyo Académico** - Capacitación escolar
- **Asesoramiento** - Psicológico y espiritual
- Cards interactivas con más información

### 6. Valores
- Grid de valores corporativos
- Iconos representativos
- Animación al entrar en viewport

### 7. Impacto / Testimonios
- Contador animado de beneficiarios
- Testimonios de jóvenes y familias (placeholder)
- Galería de fotos

### 8. Contacto
- Formulario de contacto (nombre, email, mensaje)
- Información de ubicación (Santa Marta)
- Redes sociales
- Mapa embebido (opcional)

### 9. Footer
- Logo y descripción corta
- Links de navegación
- Información legal
- Redes sociales
- Copyright

---

## Patrones de Diseño y Arquitectura

### Frontend
1. **Component Composition Pattern**
   - Componentes pequeños y reutilizables
   - Props tipadas con TypeScript

2. **Container/Presentational Pattern**
   - Separación de lógica y presentación
   - Componentes UI puros en `/components/ui`

3. **Custom Hooks Pattern**
   - Lógica reutilizable extraída en hooks
   - `useScrollspy`, `useInView`, etc.

4. **Barrel Exports**
   - Archivos `index.ts` para exportaciones limpias

### Estado y Datos
1. **Server Components** (Next.js 14)
   - Componentes del servidor por defecto
   - Client components solo cuando sea necesario

2. **Colocation**
   - Datos estáticos cerca de donde se usan
   - Constantes en `/lib/constants.ts`

---

## Buenas Prácticas Implementadas

### Performance
- [ ] Imágenes optimizadas con `next/image`
- [ ] Lazy loading de secciones below-the-fold
- [ ] Font optimization con `next/font`
- [ ] Preload de recursos críticos
- [ ] Static generation (SSG)

### SEO
- [ ] Metadata dinámica con Next.js Metadata API
- [ ] Open Graph tags para redes sociales
- [ ] Structured data (JSON-LD) para organización
- [ ] Sitemap automático
- [ ] robots.txt configurado

### Accesibilidad (a11y)
- [ ] Semantic HTML
- [ ] ARIA labels donde sea necesario
- [ ] Contraste de colores WCAG AA
- [ ] Navegación por teclado
- [ ] Focus visible states
- [ ] Alt text en imágenes

### Responsive Design
- [ ] Mobile-first approach
- [ ] Breakpoints: sm(640), md(768), lg(1024), xl(1280)
- [ ] Touch-friendly en móvil
- [ ] Testing en múltiples dispositivos

### Código
- [ ] ESLint + Prettier configurados
- [ ] Husky para pre-commit hooks
- [ ] Conventional commits
- [ ] TypeScript strict mode

---

## Preparación para Backend (Donaciones)

### Fase 1 - Infraestructura (Actual)
```
src/app/api/
├── contact/
│   └── route.ts      # Formulario de contacto
```

### Fase 2 - Donaciones (Futuro)
```
src/app/api/
├── contact/
│   └── route.ts
├── donations/
│   ├── route.ts          # Crear donación
│   └── [id]/
│       └── route.ts      # Estado de donación
├── webhooks/
│   └── payment/
│       └── route.ts      # Webhook de pagos
```

### Integraciones de Pago Sugeridas (Colombia)
1. **PayU** - Popular en Colombia
2. **MercadoPago** - Amplia cobertura LATAM
3. **Stripe** - Si hay donantes internacionales
4. **PSE** - Transferencias bancarias directas

### Base de Datos (Futuro)
- **Vercel Postgres** o **PlanetScale** - Serverless SQL
- **Prisma** como ORM

### Modelo de Donación (Referencia)
```typescript
interface Donation {
  id: string;
  amount: number;
  currency: 'COP' | 'USD';
  donorName: string;
  donorEmail: string;
  isRecurring: boolean;
  status: 'pending' | 'completed' | 'failed';
  paymentMethod: string;
  createdAt: Date;
}
```

---

## Variables de Entorno

### .env.example
```env
# App
NEXT_PUBLIC_SITE_URL=https://samariocrece.org

# Contact Form (futuro)
RESEND_API_KEY=
CONTACT_EMAIL=contacto@samariocrece.org

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=

# Payments (futuro)
PAYU_MERCHANT_ID=
PAYU_API_KEY=
PAYU_API_LOGIN=
```

---

## Fases de Implementación

### Fase 1: Setup y Estructura
1. Inicializar proyecto Next.js con TypeScript
2. Configurar Tailwind CSS
3. Configurar ESLint y Prettier
4. Crear estructura de carpetas
5. Configurar fuentes y colores base

### Fase 2: Componentes Base
1. Crear componentes UI (Button, Card, Container)
2. Implementar Header y Footer
3. Crear layout principal

### Fase 3: Secciones Landing
1. Hero Section
2. About Section
3. Mission/Vision Section
4. Programs Section
5. Values Section
6. Contact Section

### Fase 4: Funcionalidad
1. Navegación con scroll suave
2. Formulario de contacto funcional
3. Animaciones con Framer Motion
4. Optimización de imágenes

### Fase 5: SEO y Performance
1. Configurar metadata
2. Agregar structured data
3. Optimizar Core Web Vitals
4. Configurar sitemap y robots.txt

### Fase 6: Deploy
1. Configurar repositorio Git
2. Conectar con Vercel
3. Configurar dominio (si aplica)
4. Verificar analytics

---

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npm run type-check

# Preview producción
npm run start
```

---

## Recursos

### Documentación
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### Assets
- Logo: `/public/images/logo.png`
- Documento estratégico: `PLATAFORMA ESTRATEGICA REINO SAMARIO CRECE.pdf`

---

## Notas Adicionales

- El sitio debe reflejar los valores de la fundación: calidez, profesionalismo y compromiso social
- Priorizar la experiencia en móvil dado el público objetivo
- Mantener el diseño limpio y profesional, evitando exceso de elementos
- Las imágenes de jóvenes deben mostrar diversidad y actividades deportivas positivas
- Considerar versión en inglés para donantes internacionales (futuro)
