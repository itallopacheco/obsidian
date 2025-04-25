Este README explica a estrutura utilizada neste vault, asism como boas práticas e uso e plugins.

---

## 🌳 Visão‑geral da Estrutura

```text
📁 Projects
   📁 <Projeto>
       README.md
       Timeline.md
       Notes.md
       📁 Docs/
       📁 Tasks/
       📁 Logs/
       📁 Decisions/
	       Index.md   
📁 Templates/
📁 Snippets/
📁 Learning/
📁 Journal/
📁 Ideas/
```

> 💡 Use o comando **Navigate…** (Ctrl + O) para saltar rapidamente entre notas e pastas.

---

## 📁 Projects

Cada pasta de projeto contém **tudo que pertence a um único produto, serviço ou artefato** de software.

| Arquivo / Pasta | Conteúdo                                           | Quando usar                               |
| --------------- | -------------------------------------------------- | ----------------------------------------- |
| `README.md`     | Resumo do projeto, stack, objetivos, links.        | Crie assim que o repositório nasce.       |
| `Timeline.md`   | Linha do tempo de marcos (releases, decisões).     | Atualize a cada evento relevante.         |
| `Notes.md`      | Anotações soltas, dúvidas, experimentos.           | Durante brainstorm e sessões de pesquisa. |
| `Decisions.md`  | Registro de ADRs (Architectural Decision Records). | Sempre que decidir algo crítico.          |
| `Docs/`         | Documentação técnica detalhada (APIs, diagramas).  | Atualizar em milestones importantes       |
| `Tasks/`        | Arquivos de tarefas (plugin **Tasks** ou kanbans). | Planejamento e rastreamento de trabalho.  |
| `Logs/`         | Registro de sessões de debug ou diários de bordo.  | Útil para retro‑análise de problemas.     |

👉 **Templates automáticos**: ao criar uma nova pasta em `Projects/`, dispare o snippet _Projeto_ do **Templater** para popular todos esses arquivos.

---

## 📁 Templates

Armazena arquivos‑modelo para acelerar a criação de novas notas.

_Exemplos_

- `Projeto.md` – template completo de pasta de projeto
    
- `Entry‑Journal.md` – entrada diária pré‑formatada
    
- `Snippet‑DockerCompose.md` – trecho de docker‑compose reutilizável
    

Configure no **Templater** atalhos como `Ctrl + Alt + N` → _New Project_.

---

## 📁 Snippets

Coleção de pequenos **trechos de código** ou comandos shell recorrentes.

- `docker-compose‑postgres.md`
    
- `quarkus‑dev‑config.md`
    
- `git‑cleanup‑branches.md`
    

> Dica: inclua uma _front‑matter_ YAML com campos `language`, `tags`, `last‑tested` para filtrar via **Dataview**.

---

## 📁 Learning

Notas de estudo contínuo—frameworks, artigos, talks.

- `DDD.md`
    
- `SvelteKit.md`
    
- `Kubernetes.md`
    

Use backlinks para relacionar diretamente com implementações em `Projects/` (ex.: `[[Learning/DDD]]` em decisões).

---

## 📁 Journal

Entradas datadas para registro diário ou semanal.

```
Journal/
   2025‑04‑25.md
   2025‑04‑24.md
```

Template sugerido:

```markdown
# {{date:YYYY‑MM‑DD}}

### 🛠️ Trabalhado hoje
- …

### 📚 Aprendizado
- …

### 💡 Ideias
- …
```

---

## 📁 Ideas

Espaço de **brain‑dump** para features, produtos ou automações futuras. Ligação frequente com `Projects/` quando virarem iniciativas reais.

---

## 🔌 Plugins Recomendados

|Plugin|Uso principal|
|---|---|
|**Dataview**|Relatórios dinâmicos (ex.: lista de todos ADRs em aberto).|
|**Tasks**|Gestão de tarefas `‑ [ ]` com filtros por data/estado.|
|**Templater**|Criação de notas via templates com variáveis.|
|**Calendar** + Daily Notes|Navegação temporal para o `Journal/`.|
|**Kanban**|Quadros (trello‑like) em markdown dentro de `Tasks/`.|

Instale via _Community Plugins_ → _Browse_ e habilite cada um.

---

## 🧭 Fluxo de Trabalho Sugerido

1. **Planejar** – Crie uma entrada em `Journal/` e defina tarefas em `Tasks/` ou em um quadro Kanban.
    
2. **Codar** – Documente insights em `Notes.md` dentro do projeto correspondente.
    
3. **Decidir** – Registre impactos arquiteturais em `Decisions.md` (ADR).
    
4. **Revisar** – Atualize `Timeline.md` com marcos alcançados.
    
5. **Compartilhar** – Gere docs em `Docs/` (diagrama, swagger, tutorial) para a equipe.
    

---

## 📏 Convenções

- **Nomenclatura de pastas**: kebab‑case em inglês (`data‑ingestion‑service`).
    
- **Links internos**: use `[[Folder/Subfolder/Note]]` para clareza.
    
- **Tags globais**: `#decision`, `#todo`, `#snippet`, etc. Prefixe com contexto se necessário (`#proj/<nome>`).
    

---

## 🚀 Próximos Passos

-  Adicionar um vault‑workflow como **graph view** personalizado
    
-  Automatizar criação de projeto via script Templater
    
-  Integrar Obsidian com Git para versionar anotações
    

> Sinta‑se à vontade para adaptar, remover ou adicionar partes conforme seu estilo de trabalho evolui.

---
