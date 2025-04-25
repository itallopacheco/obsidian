# Decisions – Index

```dataview
table id, status, date, file.link as "ADR"
from "Projects/{{tp_title}}/Decisions"
where adr = true
sort id asc
```
