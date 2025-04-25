// Scripts/new_project.js
function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

async function new_project(tp) {
  const { app } = tp;

  const sourceNote = tp.file;                         // pode ser undefined
  const input = await tp.system.prompt("Digite o nome do projeto:");
  if (!input) {
    new tp.obsidian.Notice("Criação de projeto cancelada.");
    return "";
  }

  const projectName = input.trim();
  const folderName  = slugify(projectName);
  const base        = `projects/${folderName}`;

  if (await app.vault.adapter.exists(base)) {
    new tp.obsidian.Notice(`A pasta "${base}" já existe. Abortado.`);
    return "";
  }
  await app.vault.createFolder(base);

  // subpastas
  for (const f of ["Docs", "Tasks", "Logs", "Decisions"]) {
    await app.vault.createFolder(`${base}/${f}`).catch(() => {});
  }

  // templates
  const templatePairs = [
    ["Templates/Projeto",         `${base}/README`],
    ["Templates/Timeline",        `${base}/Timeline`],
    ["Templates/Notes",           `${base}/Notes`],
    ["Templates/Decisions-Index", `${base}/Decisions/Index`]
  ];
  for (const [tpl, dest] of templatePairs) {
    const tfile = tp.file.find_tfile(tpl);
    if (tfile) await tp.file.create_new(tfile, dest);
  }

  // remove Untitled (se existir **e** tiver vindo do Insert-template)
  if (sourceNote?.basename?.startsWith("Untitled")) {
    await app.vault.delete(sourceNote, true);
  }

  new tp.obsidian.Notice(`Projeto "${projectName}" criado em ${base}`);
  await app.workspace.openLinkText(`${base}/README`, "", false);
  return "";
}

module.exports = new_project;

