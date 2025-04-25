# Timeline

|Data|Evento|Nota|
|---|---|---|
|{{date:YYYY-MM-DD}}|Início do projeto|—|

```dataview
table date as "Data", event as "Evento", note as "Nota"
from "Projects/{{tp_title}}/Decisions"
where contains(status, "Accepted")
sort date asc
```
