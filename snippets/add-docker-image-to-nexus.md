---
lang: bash
category: docker
last-tested: 2025-04-25
tags:
  - snippet
  - docker
  - nexus
---

## Pré-requisitos

- Ter acesso ao Nexus com repositório de Docker Registry configurado (por ex., `https://nexus3.k8s.infox.com.br/repository/infox-docker-prod/`)
- Usuário e senha válidos no Nexus (ou token)
- A imagem docker do projeto **[[create-docker-image]]**

--

## Passos

### 1. Autenticar no Registry

```bash
docker login nexus3.k8s.infox.com.br
```

**PS:** O Docker armazenará seu token de login localmente, geralmente em `.~/.docker/config.json`

### 2. Taguear a imagem corretamente
Você precisa taguear sua imagem com o endereço do Registry Nexus:

```bash
docker tag meuapp:latest nexus3.k8s.infox.com.br/meuapp:latest
```

**Formato base:** ``<url-do-registry>/<nome-do-repo>/<nome-da-imagem>:<tag>``

### 3. Fazer o push da imagem

```bash
docker push nexus3.k8s.infox.com.br/meuapp:latest
```


## Pull da imagem no k8s 

```bash
docker pull nexus3.k8s.infox.com.br/meuprojeto:latest
```

**OBS:** Provavelmente vai ser necessária a configuração de uma secret para autenticação no registry, a depender do seu registry a forma como você configurará essa secret pode mudar siga a [documentação](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/).

### Exemplo de configuração de secret

```bash
kubectl create secret docker-registry nexus-secret \
  --docker-server=nexus3.k8s.infox.com.br\
  --docker-username=username \
  --docker-password=password
```
