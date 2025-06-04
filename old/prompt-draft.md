Eu preciso criar um prompt para que uma IA possa realizar as seguintes tarefas:

1) Clonar a aplicação Card Demo localizada no repositorio do github https://github.com/aws-samples/aws-mainframe-modernization-carddemo.git
2) Analizar o código fonte da aplicação Card Demo e gerar as seguintes informações:
   1) Usar o prompt discovery-app.md 
   2) Usar o prompt discovery-dev.md
3) Como um PO analisar os documentos gerados pelos discoveries e gerar um documento de requisitos da aplicação
4) Como um solutions arquitect analisar os documentos e gerar um documento de arquitetura
   1) arquitetura de modernização: 
      - Web Application
      - Microservices
      - Front-End: React
      - Back-End: java springboot
      - API Gateway: Nginx
      - Database: Postgree
      - Infraestrutura: Docker containers e Docker compose
      - Folders: 
          -- APP/
              -- BackEnd
              -- FrontEnd
              -- Database
              -- Infrastructure
5) como um team leader analisar os documentos gerados e criar as tarefas para o desenvolvedor realizar a codificação
6) como um desenvolvedor java, criar o codigo necessario para que a aplicação seja concluida baseado não somente, mas também nas tarefas criadas pelo tl. 

Instruçoes gerais:

- Criar um arquivo de worklog.md e atualizar esse arquivo **NO INICIO** e **NO FIM** de cada etapa do processo com os seguintes informaçoes:
  - Data e Hora no formato: YYYY-MM-DD HH:MM
  - Atividade realizada
  - Consideraçòes
  - Pendencias
  - Proximos passos

**Configuração Inicial**

- Criar diretorios para cada tipo de asset
```md

├── prompts - local para salvar os prompts criados pelo prompt de setup
├── documentacao - local para salvar a documentação criada pelos agents
├── logs - local para salvar os logs
├── codigo- local para salvar os arquivos de código criados pelo agent de desenvolvedor

```