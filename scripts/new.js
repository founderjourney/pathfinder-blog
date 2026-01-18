#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DRAFTS_DIR = path.join(process.cwd(), 'content/drafts');

const TEMPLATE = `# {{TITLE}}

{{EXCERPT}}

## Introduccion

[Tu contenido aqui...]

## Desarrollo

### Seccion 1

...

### Seccion 2

...

## Conclusion

...

---

**Sobre el autor:** Soy Mauro, fundador de Pathfinders Labs. Este blog documenta mi journey construyendo productos SaaS y democratizando tecnologia web.
`;

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60);
}

async function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function main() {
  console.log('\n📝 Crear nuevo artículo para Founder Journey\n');

  // Check if title was passed as argument
  let title = process.argv.slice(2).join(' ');

  if (!title) {
    title = await prompt('Título del artículo: ');
  }

  if (!title) {
    console.log('❌ El título es requerido.');
    process.exit(1);
  }

  const excerpt = await prompt('Descripción breve (1-2 oraciones): ');

  // Create draft content
  const content = TEMPLATE
    .replace('{{TITLE}}', title)
    .replace('{{EXCERPT}}', excerpt || '[Agrega una descripción breve aquí...]');

  // Ensure drafts directory exists
  if (!fs.existsSync(DRAFTS_DIR)) {
    fs.mkdirSync(DRAFTS_DIR, { recursive: true });
  }

  // Create file
  const filename = `${slugify(title)}.md`;
  const filepath = path.join(DRAFTS_DIR, filename);

  if (fs.existsSync(filepath)) {
    console.log(`\n⚠️  Ya existe un draft con ese nombre: ${filename}`);
    const overwrite = await prompt('¿Sobrescribir? (s/n): ');
    if (overwrite.toLowerCase() !== 's') {
      console.log('Cancelado.');
      process.exit(0);
    }
  }

  fs.writeFileSync(filepath, content);

  console.log('\n✅ Draft creado exitosamente!');
  console.log(`\n📄 Archivo: content/drafts/${filename}`);
  console.log('\n📋 Próximos pasos:');
  console.log('   1. Edita el archivo con tu contenido');
  console.log('   2. Ejecuta: npm run publish');
  console.log('   3. El artículo se publicará automáticamente\n');

  // Try to open in default editor
  const editor = process.env.EDITOR || process.env.VISUAL;
  if (editor) {
    console.log(`💡 Tip: Abriendo en ${editor}...\n`);
    require('child_process').spawn(editor, [filepath], {
      detached: true,
      stdio: 'ignore'
    }).unref();
  }
}

main().catch(console.error);
