---
lang: bash
category: docker
last-tested: 2025-04-25
tags:
  - snippet
  - docker
---

## docker build command and args

Exemplo mínimo que executa o Dockerfile na pasta raiz.

``` bash
docker build .
```

| arg                   | desc                                                        |
| --------------------- | ----------------------------------------------------------- |
| -f, --file            | Name of the Dockerfile (default: "PATH/Dockerfile")         |
| --no-cache            | Do not use cache when building the image                    |
| --pull                | Always attempt to pull all referenced images                |
| -q, --quiet           | Suppress the build output and print image ID on success     |
| -t, --tag stringArray | Name and optionally a tag (format: "name:tag")              |
| --build-arg VAR=valor | Passa argumentos de build para o Dockerfile (`ARG`)         |
| --plataform           | Define a plataforma de build(linux/amd64, linux/arm64, etc) |
| --target              | Especifica um estágio de build (útil em multi-stage builds) |
| --progress            | Define tipo de progress output (auto, plain, tty)           |

## exemplos práticos

### build com nome/tag específico
```bash
docker build -t meuapp:latest .
```

### build usando um dockerfile customizado
```bash
docker build -f Dockerfile.prod -t meuapp:prod .
```

### build sem cache
```bash
docker build --no-cache -t meuapp:nocache .
```

### build passando variáveis para o Dockerfile
```bash
docker build --build-arg VERSION=1.2.3 -t meuapp:1.2.3 .
```
Dentro do Dockerfile, você usaria:
`ARG VERSION`

TO:DO: incrementar com dicas para construir o Dockerfile
