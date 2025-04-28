
# Ideia geral
A ideia geral do projeto é criar uma pagina com desafios estilo "leet-code" diários, uma das inspirações do projeto é o jogo termo, onde todos os usuários que acessarem o site naquele dia receberão o mesmo desafio. 

# Desafios de implementação
A plataforma funciona como se fosse apenas uma parte de um online judge, então a implementação passa a ser de um online judge.

O funcionamento básico de um online judge contempla a execução de um código de uma submissão, que está vinculada à uma questão e por sua vez tem os casos de teste e limitações de tempo de execução e memória.

Uma submissão é considerada um sucesso quando todos seus casos de teste são aprovados dentro das limitações estabelecidas.

Para esse projeto, utilizaremos o [[piston]] como um serviço de execução de código, abaixo destrincharei algumas das rotas possíveis para a aplicação

- GET questions/id
		retorna a definição da questão (descrição, limites, exemplos)
- GET runtimes
		lista as linguagens/versões disponíveis no Piston
- POST submissions/question_id
		recebe { language, source }, dispara execução e retorna submission_id
- GET submission/id
		consulta o status e resultado (aceito/rejeitado, tempo, memória, logs)


```mermaid
flowchart TD
  C[Client] -->|REST| API[Quarkus-API]
  subgraph Ingress Service
    API -->|write| DB[(Postgres)]
    API -->|"enqueue(submission_id)"| Q[(RabbitMQ/Kafka)]
  end

  subgraph Evaluation Service
    Q -->|"dequeue()"| W[Quarkus-Worker]
    W -->|POST /run| P[Piston Service]
    P -->|result| W
    W -->|update| DB
  end

  subgraph Executor Service
    P -->|containerized| Pods[Piston Pods 🐳]
  end

```



É importante implementar um monitoramento forte nos serviços para fazer um levantamento de quanto recurso computacional é necessário para atender x numero de requisições, isso precisará ser estudado futuramente e testes de estresse podem servir para entender a capacidade "base" do projeto.


