#!/usr/bin/env node

const { spawn, execSync } = require('child_process');
const path = require('path');

const COMMANDS = {
  new: {
    description: 'Crear nuevo draft',
    script: 'new.js'
  },
  drafts: {
    description: 'Ver drafts pendientes',
    script: 'drafts.js'
  },
  publish: {
    description: 'Publicar drafts a producción',
    script: 'publish.js'
  },
  dev: {
    description: 'Iniciar servidor de desarrollo',
    command: 'next dev'
  },
  build: {
    description: 'Build de producción',
    command: 'next build'
  }
};

function showHelp() {
  console.log(`
┌─────────────────────────────────────────────┐
│      📝 Founder Journey Blog CLI            │
└─────────────────────────────────────────────┘

Uso: npm run blog <comando>

Comandos disponibles:

  new      ${COMMANDS.new.description}
  drafts   ${COMMANDS.drafts.description}
  publish  ${COMMANDS.publish.description}
  dev      ${COMMANDS.dev.description}
  build    ${COMMANDS.build.description}

Ejemplos:
  npm run blog new              # Crear draft interactivo
  npm run blog new "Mi título"  # Crear draft con título
  npm run blog drafts           # Ver drafts pendientes
  npm run blog publish          # Publicar todo

Workflow típico:
  1. npm run blog new           # Crear draft
  2. [editar el archivo .md]    # Escribir contenido
  3. npm run blog dev           # Preview local
  4. npm run blog publish       # Publicar

`);
}

function runScript(scriptName, args = []) {
  const scriptPath = path.join(__dirname, scriptName);
  const child = spawn('node', [scriptPath, ...args], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  child.on('close', (code) => {
    process.exit(code);
  });
}

function runCommand(command) {
  const [cmd, ...args] = command.split(' ');
  const child = spawn(cmd, args, {
    stdio: 'inherit',
    cwd: process.cwd(),
    shell: true
  });

  child.on('close', (code) => {
    process.exit(code);
  });
}

function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const extraArgs = args.slice(1);

  if (!command || command === 'help' || command === '-h' || command === '--help') {
    showHelp();
    return;
  }

  const cmd = COMMANDS[command];

  if (!cmd) {
    console.log(`\n❌ Comando desconocido: "${command}"\n`);
    showHelp();
    process.exit(1);
  }

  if (cmd.script) {
    runScript(cmd.script, extraArgs);
  } else if (cmd.command) {
    runCommand(cmd.command);
  }
}

main();
