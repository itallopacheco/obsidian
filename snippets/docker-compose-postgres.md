---
lang: bash
category: docker
last-tested: 2025-04-25
tags:
  - snippet
  - docker
  - postgres
---

```bash
version: "3.9"
services:
  db:
    image: postgres:16-alpine
    container_name: postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-postgres}
      POSTGRES_DB: ${POSTGRES_DB:-appdb}
      TZ: America/Maceio
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

## Uso

```
docker compose up -d db
```

A variável `TZ` mantém o timezone correto no container. Ajuste `POSTGRES_*` via `.env` ou nas variáveis acima.*

## Observações

- Volume nomeado mantém dados entre recriações do container.
    
- `restart: unless-stopped` reinicia automaticamente após reboot.
    
- Para habilitar log_min_duration_statement ou outras configs, monte um arquivo `postgresql.conf` adicional.