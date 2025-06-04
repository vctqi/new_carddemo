# Análise e Planejamento de Modernização da Aplicação AWS CardDemo

**Objetivo Geral:**
Analisar detalhadamente a aplicação AWS CardDemo (originalmente em Cobol), documentar seu estado atual ("AS-IS"), e gerar planos abrangentes para sua modernização ("TO-BE") para uma arquitetura baseada em Java Spring Boot e microserviços, incluindo um plano específico para um Produto Mínimo Viável (MVP). O objetivo final é preparar o terreno para a execução da modernização.

---

## Fase 0: Configuração do Ambiente e Preparação

### 0.1. Clonar o Repositório Original
*   **Ação:** Acesse e clone (faça o download) do código-fonte da aplicação AWS CardDemo do seguinte repositório: `https://github.com/aws-samples/aws-mainframe-modernization-carddemo.git`.
*   **Local:** Salve o código clonado em um diretório chamado `codigo-original-cobol/`.

### 0.2. Criar Estrutura de Diretórios
*   No seu diretório de trabalho principal do projeto de modernização, crie (ou certifique-se que exista) a seguinte estrutura de pastas:
    ```
    /new-carddemo
    ├── prompts/                  # Local para salvar este e outros prompts relacionados
    ├── documentacao/             # Local para salvar toda a documentação gerada
    ├── logs/                     # Local para salvar logs de execução (como o worklog)
    ├── codigo-original-cobol/   # Onde o código clonado do CardDemo será analisado
    └── codigo-modernizado/       # Futuro local para o código da aplicação modernizada
    ```

### 0.3. Inicializar Worklog
*   Crie um arquivo `worklog.md` na pasta `logs/`.
*   Registre a data e hora de início (YYYY-MM-DD HH:MM) e a atividade: "Início do Processo de Análise e Planejamento da Modernização CardDemo v2".
*   **Instrução Contínua:** Atualize este `worklog.md` NO INÍCIO e NO FIM de cada etapa principal detalhada abaixo (ex: ao iniciar e concluir a Fase 1). O registro deve conter: Data e Hora, Atividade Realizada, Considerações, Pendências (se houver), e Próximos Passos.

---

## Fase 1: Análise Detalhada e Documentação da Aplicação Existente (Cobol) - Geração do "AS-IS Blueprint"

**Contexto:** Você é um especialista em análise de código, engenharia de software e documentação técnica. Sua tarefa é analisar profundamente o código-fonte Cobol da aplicação AWS CardDemo (localizado em `codigo-original-cobol/`) e gerar um documento abrangente em formato Markdown.

**Entregável Principal da Fase 1:**
*   **Nome do Arquivo:** `documentacao/analise_detalhada_carddemo_cobol_asis.md`
*   **Título do Documento Interno:** **Análise Executiva e Técnica da Aplicação – AWS CardDemo Cobol**
*   **Resumo do Documento (a ser incluído no início do arquivo):**
    Este documento apresenta os resultados da análise do código-fonte da aplicação AWS CardDemo Cobol, incluindo:
    - **Visão Executiva:** Propósito, funcionamento e benefícios.
    - **Visão Técnica:** Arquitetura, tecnologias, componentes e diagramas.
    - **Visão de Produto:** Funcionalidades, usuários e casos de uso.
    - **Visões Complementares:** Testes, segurança, dependências, estrutura do projeto, observabilidade e performance.
    - **Limitações da Análise:** Obstáculos identificados na análise.
    - **Recomendações Finais:** Ações sugeridas com base na análise.

**Instruções para o Conteúdo de `analise_detalhada_carddemo_cobol_asis.md`:**
Analise o código-fonte Cobol e estruture o documento abordando os seguintes pontos de vista. Use linguagem clara, diagramas Mermaid quando apropriado, e seja o mais específico possível com base no código.

### 1.1. Visão Executiva
*   **Propósito da Aplicação:** Objetivo principal do sistema CardDemo Cobol. Que problema/necessidade resolve?
*   **Funcionamento Geral (Alto Nível):** Explicação resumida de como o sistema opera.
*   **Regras de Negócio Identificadas:** Principais regras de negócio inferidas do código Cobol.
*   **Benefícios Estratégicos:** Ganhos que o sistema atual traz.

### 1.2. Visão Técnica
*   **Arquitetura do Sistema:** Estrutura geral (Monolito, etc.), principais programas/módulos Cobol, JCLs, CICS, interações.
*   **Tecnologias Utilizadas:** Linguagem Cobol (versões), bancos de dados (VSAM, DB2, etc.), sistema transacional (CICS), sistema batch.
*   **Componentes-Chave e Fluxos:** Principais componentes (programas, copybooks, mapas) e como dados/execuções fluem.
*   **Complexidade e Qualidade de Código:** Organização, modularidade, complexidade, _code smells_ no Cobol.
*   **Diagramas Técnicos (Mermaid):**
    *   Diagrama de Componentes (principais módulos Cobol e interconexões).
    *   Diagrama de Fluxo de Dados (alto nível, fluxos chave).
    *   Diagrama de Implantação/Infraestrutura (se detectável do ambiente mainframe).

### 1.3. Visão de Produto
*   **Funcionalidades Identificadas:** Ações e operações que o sistema Cobol permite.
*   **Usuários e Perfis de Uso:** Para quem o sistema foi desenvolvido.
*   **Problemas que Resolve / Necessidades Atendidas:** Dores do usuário/negócio que o sistema Cobol aborda.
*   **Principais Casos de Uso ou Jornadas do Usuário:** Interações típicas com o sistema Cobol.
*   **Domínios de Negócio Envolvidos:** Áreas como finanças, cartões, contas, etc.

### 1.4. Visão de Testes
*   **Frameworks e Tipos de Testes:** Evidências de testes no sistema Cobol (unitários, integração, manuais).
*   **Nível de Cobertura Estimada:** Áreas críticas com/sem testes.
*   **Observações sobre Testabilidade:** Código Cobol é testável?

### 1.5. Visão de Segurança
*   **Vulnerabilidades Potenciais ou Mecanismos de Segurança:** Análise de segurança no contexto Cobol/Mainframe (ex: RACF, validação de entrada em telas CICS).
*   **Dependências (Copybooks, Utilitários) e Segurança:**
*   **Boas Práticas de Segurança Mainframe:**

### 1.6. Visão de Dependências
*   **Dependências Identificadas:** Copybooks centrais, utilitários comuns do mainframe, outros programas chamados.
*   **Versões e Status (se aplicável):**
*   **Sugestões (se houver débito técnico relacionado):**

### 1.7. Visão de Estrutura de Projeto
*   **Diretórios e Módulos:** Organização do código-fonte Cobol.
*   **Separação de Responsabilidades:**
*   **Estrutura de Configuração (JCLs, Parâmetros):**

### 1.8. Visão de Observabilidade
*   **Logging e Instrumentação:** Como são feitos logs e rastreamento de erros no Cobol/CICS/Batch.
*   **Ferramentas de Monitoramento (se inferível):**
*   **Mecanismos de Healthcheck ou Alertas (se existentes):**

### 1.9. Visão de Performance
*   **Potenciais Gargalos:** Análise de performance no contexto Cobol (ex: acesso a arquivos VSAM, loops).
*   **Uso Ineficiente de Recursos (Mainframe):**
*   **Sugestões de Melhoria (no contexto Cobol, se aplicável, ou pontos de atenção para modernização):**

### 1.10. Limitações da Análise
*   **Restrições Encontradas:** Código incompleto, ausência de documentação externa, lógica complexa.
*   **Como Superar essas Limitações (para futuras análises ou para o processo de modernização):**

### 1.11. Recomendações Finais Automatizadas (para o código Cobol)
*   **Melhorias Técnicas Prioritárias (se o sistema fosse mantido em Cobol, ou pontos críticos para modernizar):**
*   **Alertas Críticos para Revisão Manual:**

---

## Fase 2: Planejamento da Modernização Completa para Java Spring Boot e Microserviços - "TO-BE Blueprint (Full)"

**Contexto:** Com base na análise da Fase 1, planeje a modernização completa da aplicação CardDemo para uma arquitetura moderna.

**Arquitetura de Destino (Geral):**
*   **Back-End:** Java com Spring Boot
*   **Estilo Arquitetural:** Microserviços
*   **Práticas:** Seguir as melhores e mais modernas práticas de desenvolvimento Java e microserviços.

**Entregável Principal da Fase 2:**
*   **Nome do Arquivo:** `documentacao/plano_modernizacao_completa_carddemo_java.md`
*   **Título do Documento Interno:** **Plano de Modernização Completa: AWS CardDemo para Java Microservices**

**Conteúdo de `plano_modernizacao_completa_carddemo_java.md`:**
Detalhe as seguintes seções para guiar um time de desenvolvimento:

1.  **Arquitetura Proposta (Detalhada):**
    *   Descrição dos microserviços a serem criados (ex: Serviço de Contas, Serviço de Cartões, Serviço de Transações, Serviço de Clientes).
    *   Tecnologias específicas dentro do ecossistema Java/Spring Boot (ex: Spring Cloud, Spring Data, etc.).
    *   Estratégias de comunicação entre microserviços (ex: REST, mensageria).
    *   Considerações sobre persistência de dados para cada microserviço.
2.  **Diagrama da Arquitetura Proposta (Mermaid):**
    *   Diagrama de componentes mostrando os microserviços, suas interações, e possíveis bancos de dados.
3.  **Fases de Modernização:**
    *   Divisão do projeto em fases, idealmente modularizado por microserviço ou conjunto de funcionalidades.
    *   Ordem sugerida para desenvolvimento e entrega dos módulos/microserviços.
4.  **Estimativas de Tempo de Desenvolvimento:**
    *   Estimativa de esforço (ex: em semanas ou story points) para cada módulo/fase/microserviço.
5.  **Detalhes Técnicos da Migração:**
    *   Estratégia de migração de dados do sistema legado para os novos bancos de dados.
    *   Abordagem para refatorar/recriar a lógica de negócio Cobol em Java.
    *   Tratamento de dependências e integrações.
6.  **Requisitos Funcionais (Mapeados e Novos):**
    *   Lista de requisitos funcionais para a nova aplicação, mapeados a partir do sistema Cobol e identificando possíveis novas funcionalidades.
7.  **Requisitos Não Funcionais:**
    *   Performance, escalabilidade, segurança, manutenibilidade, disponibilidade para a nova arquitetura.
8.  **Casos de Testes (Estratégia):**
    *   Abordagem para testes unitários, de integração, de contrato e E2E para os microserviços.
9.  **Gestão de Projeto Ágil:**
    *   **Épicos:** Grandes blocos de funcionalidade para a modernização.
    *   **Estórias de Usuário:** Detalhamento dos requisitos sob a perspectiva do usuário.
    *   **Estórias Técnicas:** Tarefas de infraestrutura, refatoração, configuração necessárias.
10. **Outras Informações Pertinentes:**
    *   Riscos do projeto, premissas, equipe sugerida, ferramentas de desenvolvimento.

---

## Fase 3: Planejamento da Modernização para um MVP (Produto Mínimo Viável) - "TO-BE Blueprint (MVP)"

**Contexto:** Planeje um MVP (Produto Mínimo Viável) da aplicação CardDemo modernizada, focando em entregar valor rapidamente com um subconjunto essencial de funcionalidades e a arquitetura alvo especificada.

**Arquitetura de Destino (MVP Específica):**
*   **Tipo de Aplicação:** Web Application
*   **Estilo Arquitetural:** Microservices
*   **Front-End:** React
*   **Back-End:** Java Spring Boot
*   **API Gateway:** Nginx (ou considerar alternativas como AWS API Gateway)
*   **Banco de Dados:** PostgreSQL
*   **Infraestrutura:** Docker containers e Docker Compose

**Entregável Principal da Fase 3:**
*   **Nome do Arquivo:** `documentacao/plano_modernizacao_mvp_carddemo.md`
*   **Título do Documento Interno:** **Plano de Modernização MVP: AWS CardDemo (React, Java, PostgreSQL)**

**Conteúdo de `plano_modernizacao_mvp_carddemo.md`:**
Detalhe as seguintes seções, focando no escopo do MVP:

1.  **Escopo do MVP:**
    *   Definição clara das funcionalidades e microserviços que farão parte do MVP.
    *   Justificativa para a seleção dessas funcionalidades para o MVP.
2.  **Arquitetura Proposta para o MVP (Detalhada):**
    *   Como os componentes (React, Java Spring Boot microservices, Nginx, PostgreSQL, Docker) se encaixam para o MVP.
    *   Quais microserviços específicos do plano completo serão implementados no MVP.
3.  **Diagrama da Arquitetura Proposta para o MVP (Mermaid):**
    *   Diagrama mostrando os componentes do MVP.
4.  **Fases de Modernização do MVP:**
    *   Passos para desenvolver e entregar o MVP.
5.  **Estimativas de Tempo de Desenvolvimento do MVP:**
    *   Estimativa de esforço para o MVP.
6.  **Detalhes Técnicos da Migração para o MVP:**
    *   Foco na migração de dados e lógica para as funcionalidades do MVP.
7.  **Requisitos Funcionais do MVP:**
    *   Lista específica de requisitos funcionais para o MVP.
8.  **Requisitos Não Funcionais do MVP:**
    *   Critérios de performance, segurança, etc., para o MVP.
9.  **Casos de Testes do MVP:**
    *   Testes essenciais para validar o MVP.
10. **Gestão de Projeto Ágil para o MVP:**
    *   **Épicos do MVP.**
    *   **Estórias de Usuário do MVP.**
    *   **Estórias Técnicas do MVP.**
11. **Outras Informações Pertinentes para o MVP:**
    *   Critérios de sucesso do MVP.

---

## Fase 4: Desenvolvimento e Implementação da Aplicação Modernizada

**Contexto:** Com os planos de modernização (Completo e/ou MVP) definidos nas fases anteriores, esta fase foca na codificação e construção da nova aplicação. A IA atuará como um desenvolvedor sênior/equipe de desenvolvimento.

**Decisão de Escopo:**
*   Priorize a implementação do **Plano de Modernização MVP** (`documentacao/plano_modernizacao_mvp_carddemo.md`) primeiro para entregar valor incremental.
*   Após a conclusão e validação do MVP, o desenvolvimento pode prosseguir com base no **Plano de Modernização Completa** (`documentacao/plano_modernizacao_completa_carddemo_java.md`), expandindo as funcionalidades.

**Local do Código:** Todo o código da aplicação modernizada deve ser salvo dentro da pasta `codigo-modernizado/`. Organize subdiretórios conforme a arquitetura (ex: `codigo-modernizado/backend/`, `codigo-modernizado/frontend/`, `codigo-modernizado/database/`, `codigo-modernizado/infrastructure/`).

**Instruções Gerais para Desenvolvimento:**
*   **Linguagens e Frameworks:**
    *   **Back-End:** Java Spring Boot para os microserviços.
    *   **Front-End (para MVP):** React.
    *   **Banco de Dados (para MVP):** PostgreSQL.
    *   **API Gateway (para MVP):** Nginx ou similar.
    *   **Infraestrutura (para MVP):** Docker e Docker Compose.
*   **Qualidade de Código:** Siga as melhores práticas de desenvolvimento, código limpo, padrões de projeto relevantes, e as diretrizes de estilo da linguagem/framework.
*   **Testes:** Implemente testes unitários robustos para toda a lógica de negócio. Considere testes de integração para os microserviços.
*   **Documentação de Código:** Comente o código onde necessário para explicar lógicas complexas.
*   **Versionamento:** (Simulado) Assuma que o código está sendo versionado (ex: Git).

**Tarefas de Desenvolvimento (Iterar conforme o plano MVP e depois o Completo):**

1.  **Configuração do Ambiente de Desenvolvimento:**
    *   Prepare os arquivos de configuração base para os microserviços Spring Boot.
    *   Configure o projeto React.
    *   Defina os scripts de schema para o PostgreSQL.
2.  **Desenvolvimento dos Microserviços (Back-End):**
    *   Para cada microserviço definido no plano (começando pelos do MVP):
        *   Crie a estrutura do projeto Spring Boot.
        *   Implemente os endpoints da API REST.
        *   Desenvolva a lógica de negócio.
        *   Configure a persistência de dados (Spring Data JPA com PostgreSQL).
        *   Escreva testes unitários e de integração.
3.  **Desenvolvimento do Front-End (React - para MVP):**
    *   Crie os componentes React para as interfaces de usuário definidas no MVP.
    *   Implemente a lógica de interação com os microserviços do back-end.
    *   Garanta a responsividade e usabilidade da interface.
4.  **Configuração do API Gateway (Nginx - para MVP):**
    *   Configure o Nginx para rotear as requisições para os microserviços apropriados.
5.  **Infraestrutura com Docker (para MVP):**
    *   Crie `Dockerfile`s para cada microserviço e para o front-end React.
    *   Crie um arquivo `docker-compose.yml` para orquestrar todos os serviços (microserviços, frontend, PostgreSQL, Nginx).
6.  **Scripts de Execução:**
    *   Crie um arquivo `start.sh` na raiz de `codigo-modernizado/` que:
        *   Verifique dependências (ex: Docker, Docker Compose).
        *   Construa as imagens Docker (se necessário).
        *   Inicie todos os serviços usando `docker-compose up -d`.
    *   Crie um arquivo `stop.sh` na raiz de `codigo-modernizado/` que pare todos os serviços usando `docker-compose down`.
7.  **Documentação da Aplicação Modernizada:**
    *   Crie um arquivo `README.md` na raiz de `codigo-modernizado/` com instruções detalhadas sobre:
        *   Pré-requisitos para rodar a aplicação.
        *   Como construir o projeto.
        *   Como executar a aplicação usando os scripts `start.sh` e `stop.sh`.
        *   Uma breve descrição da arquitetura e dos serviços.
        *   Como executar os testes.

**Entregáveis da Fase 4:**
*   Código-fonte completo da aplicação modernizada (MVP inicialmente, depois expandido) em `codigo-modernizado/`.
*   `Dockerfile`s para cada serviço.
*   `docker-compose.yml` para orquestração.
*   `codigo-modernizado/start.sh`
*   `codigo-modernizado/stop.sh`
*   `codigo-modernizado/README.md`

---

## Fase 5: Conclusão e Próximos Passos

Os documentos gerados (análise AS-IS, plano de modernização completo, plano de modernização MVP) e o código implementado (Fase 4) servirão como base fundamental para a efetiva modernização e implantação da aplicação AWS CardDemo.

---

**Instruções Finais para a IA:**
*   **Coerência:** Certifique-se de que as informações e implementações entre os diferentes documentos e o código sejam coerentes. A análise AS-IS alimenta os planos TO-BE, que por sua vez guiam o desenvolvimento.
*   **Detalhes:** Forneça o máximo de detalhes possível com base nas informações disponíveis e nas inferências lógicas.
*   **Clareza:** Use linguagem clara e estrutura bem definida em todos os documentos.
*   **Worklog:** Lembre-se de registrar o início e o fim de cada fase principal no `logs/worklog.md`.
*   **Entregáveis Finais Esperados (conforme este prompt):**
    1.  `documentacao/analise_detalhada_carddemo_cobol_asis.md` (Fase 1)
    2.  `documentacao/plano_modernizacao_completa_carddemo_java.md` (Fase 2)
    3.  `documentacao/plano_modernizacao_mvp_carddemo.md` (Fase 3)
    4.  Código-fonte da aplicação modernizada em `codigo-modernizado/` (Fase 4)
        *   Incluindo `Dockerfile`s, `docker-compose.yml`, `start.sh`, `stop.sh`, `README.md`.
    5.  `logs/worklog.md` (atualizado ao longo do processo)

**Ação Imediata:**
Comece pela Fase 0 (Configuração) e prossiga sequencialmente pelas fases, gerando os artefatos e código descritos.