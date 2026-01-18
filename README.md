# Founder Journey Blog

Blog personal de Pathfinders Labs documentando el journey de construir productos SaaS y democratizar tecnología web.

**Stack:** Next.js 14 + MDX + Tailwind CSS

**Live:** [founderjourney.pathfinderslabs.com](https://founderjourney.pathfinderslabs.com)

## Publicar contenido

```bash
# Crear nuevo artículo
npm run new "Título del artículo"

# Ver drafts pendientes
npm run drafts

# Publicar a producción
npm run publish
```

### Workflow completo

1. `npm run new "Mi artículo"` - Crea draft con template
2. Editar `content/drafts/mi-articulo.md`
3. `npm run dev` - Preview en localhost:3000
4. `npm run publish` - Publica, commit y deploy automático

### CLI unificado

```bash
npm run blog help     # Ver todos los comandos
npm run blog new      # Crear draft
npm run blog drafts   # Ver pendientes
npm run blog publish  # Publicar
npm run blog dev      # Servidor local
```

## Estructura de contenido

```
content/
├── drafts/           # Borradores (escribir aquí)
│   └── published/    # Archivo de publicados
└── posts/            # Artículos publicados (.mdx)
```

### Formato de artículo

```markdown
# Título del Artículo

Párrafo introductorio que se usa como excerpt.

## Secciones...
```

El script de publicación auto-detecta:
- **Categoría** según keywords (Architecture, Technical, Building in Public, Case Study)
- **Slug** desde el título
- **Fecha** de publicación
- **Reading time**

## Desarrollo

```bash
npm run dev      # Servidor desarrollo
npm run build    # Build producción
npm run lint     # Linter
```

## Deploy

Push a `main` → GitHub Actions → Deploy automático a VPS via SSH.
