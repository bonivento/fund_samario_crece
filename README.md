# Samario Crece - Landing Page

Landing page para la Fundación Samario Crece, una organización dedicada a la restauración de vínculos familiares de jóvenes samarios en estado de vulnerabilidad a través de programas deportivos.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form + Zod
- **Deploy:** Vercel

## 📋 Requisitos

- Node.js 20.x o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
src/
├── app/              # App Router de Next.js
│   ├── globals.css   # Estilos globales
│   ├── layout.tsx    # Layout principal
│   └── page.tsx      # Página principal
├── components/
│   ├── layout/       # Header y Footer
│   ├── sections/     # Secciones de la landing
│   └── ui/           # Componentes reutilizables
└── lib/
    ├── constants.ts  # Constantes y contenido
    └── utils.ts      # Utilidades
```

## 🎨 Identidad Visual

- **Color primario:** Turquesa/Cyan (#00B4B4)
- **Color secundario:** Negro (#1a1a1a)
- **Tipografía:** Poppins (headings) + Inter (body)

## 📄 Secciones

1. **Hero** - Portada con mensaje principal y estadísticas
2. **Nosotros** - Información sobre la fundación
3. **Misión y Visión** - Propósito y objetivos
4. **Programas** - Deportivos, académicos y asesoramiento
5. **Valores** - Valores corporativos
6. **Contacto** - Formulario de contacto e información

## 🔧 Configuración

### Variables de Entorno

Copia `.env.example` a `.env.local` y actualiza los valores:

```bash
cp .env.example .env.local
```

### Actualizar Contenido

El contenido del sitio se encuentra en `src/lib/constants.ts`. Puedes actualizar:
- Información de contacto
- Enlaces de redes sociales
- Textos de misión y visión
- Programas y valores

### Reemplazar Imágenes

Las imágenes placeholder se encuentran en:
- Logo: `public/images/logo.png`
- Agregar fotos de la fundación en `public/images/`

## 🚀 Deploy en Vercel

1. Sube el proyecto a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js
4. Haz deploy

O usa el CLI de Vercel:

```bash
npm i -g vercel
vercel
```

## 📚 Documentación

- **CLAUDE.md** - Documentación completa del proyecto, arquitectura y preparación para backend de donaciones
- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

## 🔮 Roadmap Futuro

- [ ] Integración de pasarela de pagos (PayU/MercadoPago)
- [ ] Backend para donaciones
- [ ] Panel de administración
- [ ] Galería de fotos
- [ ] Blog/Noticias
- [ ] Versión en inglés

## 📝 Licencia

© 2026 Fundación Samario Crece. Todos los derechos reservados.
