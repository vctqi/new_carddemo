# Prompt Mestre para Modernização da Aplicação AWS CardDemo

**Objetivo Geral:**
Planejar a modernização da aplicação AWS CardDemo (originalmente em Cobol) para uma arquitetura moderna, gerando a documentação necessária para guiar o processo de transformação.

**Arquitetura Alvo para a Modernização:**
*   **Tipo de Aplicação:** Web Application
*   **Estilo Arquitetural:** Microservices
*   **Front-End:** React
*   **Back-End:** Java Spring Boot
*   **API Gateway:** Nginx (ou considerar alternativas como AWS API Gateway)
*   **Banco de Dados:** PostgreSQL
*   **Infraestrutura:** Docker containers e Docker Compose

---

## Fase 1: Configuração do Ambiente e Análise Inicial da Aplicação Existente (Cobol)

### 1.1. Configuração Inicial
1.  **Clonar o Repositório:**
    *   Clone a aplicação AWS CardDemo do seguinte repositório: `https://github.com/aws-samples/aws-mainframe-modernization-carddemo.git` para um diretório de trabalho local.
2.  **Criar Estrutura de Diretórios:**
    *   No seu diretório de trabalho principal do projeto de modernização, crie a seguinte estrutura de pastas:
        ```
        /
        ├── prompts/              # Local para salvar prompts relacionados (este prompt pode ser salvo aqui)
        ├── documentacao/         # Local para salvar toda a documentação gerada
        ├── logs/                 # Local para salvar logs de execução (como o worklog)
        ├── codigo-original-cobol/ # Onde o código clonado do CardDemo será analisado
        └── codigo-modernizado/   # Futuro local para o código da aplicação modernizada (não usado nesta fase de planejamento)
        ```
3.  **Inicializar Worklog:**
    *   Crie um arquivo `worklog.md` na pasta `logs/`.
    *   Registre a data e hora de início e a atividade "Início do Processo de Planejamento da Modernização CardDemo".
    *   **Instrução:** Atualize este `worklog.md` NO INÍCIO e NO FIM de cada etapa principal detalhada abaixo (ex: ao iniciar e concluir a geração do Documento Discovery Executivo). O registro deve conter:
        *   Data e Hora (YYYY-MM-DD HH:MM)
        *   Atividade Realizada (ex: "Geração do Documento Discovery Técnico - Concluída")
        *   Considerações (breve resumo, desafios encontrados)
        *   Pendências (se houver)
        *   Próximos Passos (conforme este prompt)

### 1.2. Análise Profunda do Código Fonte Cobol
*   **Contexto:** Você deve realizar uma análise detalhada do código-fonte Cobol da aplicação AWS CardDemo clonada. O objetivo é extrair toda a informação necessária para gerar os documentos de descoberta e os blueprints de modernização.
*   **Processo de Análise:**
    *   Examine a estrutura do projeto, os diferentes programas Cobol, copybooks, JCLs (se presentes e relevantes para a lógica da aplicação), e qualquer outra documentação existente no repositório original.
    *   Identifique os módulos principais, suas funcionalidades, interdependências, fluxos de dados, regras de negócio embutidas, e a stack tecnológica subjacente do ambiente mainframe.
    *   Preste atenção especial aos aspectos que serão cruciais para a modernização, como:
        *   Lógica de negócio central.
        *   Processamento de transações.
        *   Interação com arquivos/banco de dados (VSAM, DB2, etc.).
        *   Interfaces de usuário (telas CICS/BMS).
        *   Programas batch.
        *   Pontos de integração com outros sistemas (se houver).

---

## Fase 2: Geração da Documentação de Descoberta (As-Is)

Baseado na análise profunda do código Cobol (item 1.2), gere os seguintes documentos e salve-os na pasta `documentacao/`:

### 2.1. Documento Discovery Executivo
*   **Nome do Arquivo:** `documentacao/discovery_executivo_carddemo.md`
*   **Objetivo:** Fornecer uma visão de alto nível da aplicação CardDemo existente para um público executivo.
*   **Conteúdo:**
    1.  **Propósito da Aplicação:**
        *   Qual é o objetivo principal do sistema CardDemo existente?
        *   Que problema de negócio ele se propõe a resolver em alto nível?
    2.  **Como Funciona (Alto Nível):**
        *   Descreva o fluxo geral de funcionamento do sistema CardDemo de forma concisa e acessível para um público não técnico.
        *   Quais são os principais passos ou processos que ele executa (ex: gerenciamento de cartões, contas, transações)?
    3.  **Regras de Negócio de Alto Nível:**
        *   Identifique e descreva as principais regras de negócio implementadas no código Cobol.
        *   Quais são as políticas, restrições ou lógicas de negócio fundamentais que o sistema segue?
    4.  **Benefícios Chave (do sistema existente):**
        *   Quais são os principais benefícios que o sistema CardDemo atual entrega para a organização ou seus usuários?

### 2.2. Documento Discovery Técnico
*   **Nome do Arquivo:** `documentacao/discovery_tecnico_carddemo.md`
*   **Objetivo:** Detalhar os aspectos técnicos da aplicação CardDemo existente para a equipe técnica.
*   **Conteúdo:**
    1.  **Resumo do README/Arquivos de Instruções (do repositório original):**
        *   Faça um resumo objetivo dos trechos relevantes para entender a aplicação original.
    2.  **Stack Tecnológica Detalhada (do sistema Cobol):**
        *   Linguagem: Cobol (e versões, se identificáveis).
        *   Banco(s) de Dados: (ex: VSAM, DB2 - identificar a partir do código).
        *   Sistema Transacional: (ex: CICS).
        *   Sistema Batch: (JCLs, schedulers).
        *   Outras tecnologias relevantes do ambiente mainframe.
    3.  **Arquitetura do Sistema (Cobol):**
        *   Descreva a arquitetura geral do sistema CardDemo.
        *   Identifique os principais programas, módulos, copybooks, mapas BMS, transações CICS, jobs batch.
        *   Como os componentes interagem?
    4.  **Estrutura do Projeto (Cobol):**
        *   Explique a organização das pastas e arquivos no código-fonte original.
    5.  **Componentes Chave (Cobol):**
        *   Identifique e descreva os programas/módulos mais importantes. Quais suas responsabilidades?
        *   Forneça exemplos de pseudocódigo ou descrições detalhadas da lógica principal.
    6.  **Fluxos de Execução e Dados (Cobol):**
        *   Descreva os workflows ou processos de negócio mais comuns/críticos (ex: cadastro de cliente, solicitação de cartão, processamento de transação).
        *   Como os dados fluem através do sistema? Onde e como são persistidos, lidos, modificados?
        *   Visão geral do esquema de dados (arquivos VSAM, tabelas DB2).
    7.  **Dependências e Integrações (do sistema Cobol):**
        *   Liste bibliotecas/ferramentas do mainframe utilizadas.
        *   Identifique integrações com outros sistemas mainframe ou externos.
    8.  **Testes (se houver evidências no sistema Cobol):**
        *   Existem procedimentos ou ferramentas de teste mencionados ou evidentes?
    9.  **Tratamento de Erros e Logging (no sistema Cobol):**
        *   Como a aplicação lida com erros?
    10. **Considerações de Segurança (no sistema Cobol):**
        *   Mecanismos de segurança evidentes (ex: RACF, segurança CICS).
    11. **Diagramas (Mermaid) do Sistema Cobol:**
        *   Gere diagramas em formato Mermaid para ilustrar a arquitetura existente:
            *   Diagrama de componentes (principais programas/módulos Cobol e suas interconexões).
            *   Diagrama de fluxo de dados (alto nível, mostrando o fluxo de informações através dos processos chave).
    12. **Complexidade do Código (Observações):**
        *   Forneça observações gerais sobre a complexidade do código Cobol (ex: bem estruturado, modularizado, áreas de maior complexidade, código espaguete, etc.).

---

## Fase 3: Geração dos Blueprints de Modernização (To-Be)

Com base na compreensão profunda da aplicação CardDemo existente (Fase 1 e 2) e tendo em mente a **Arquitetura Alvo** definida no início deste prompt, gere os seguintes documentos de blueprint para a aplicação modernizada. Salve-os na pasta `documentacao/`.

### 3.1. Modernization Blueprint Executivo
*   **Nome do Arquivo:** `documentacao/blueprint_executivo_modernizacao_carddemo.md`
*   **Objetivo:** Apresentar uma visão executiva da aplicação CardDemo modernizada e do projeto de modernização.
*   **Conteúdo:**
    1.  **Overview da Aplicação Modernizada:**
        *   Descreva a nova aplicação CardDemo (React, Java Spring Boot, Microservices) e seu propósito.
        *   Como ela se alinhará com os objetivos de negócio modernos?
    2.  **Funcionalidades Macro (da Aplicação Modernizada):**
        *   Liste as principais funcionalidades que a aplicação modernizada oferecerá. (Derivar das funcionalidades do sistema Cobol, mas adaptadas/melhoradas para o novo paradigma).
    3.  **Regras de Negócio (na Aplicação Modernizada):**
        *   Descreva as regras de negócio chave que serão implementadas na nova aplicação. (Basear-se nas regras identificadas no sistema Cobol, mas validar e adaptar para o contexto moderno. Indicar quais regras são mantidas, modificadas ou descartadas).
    4.  **Complexidade Técnica (do Projeto de Modernização):**
        *   Avalie a complexidade técnica estimada do projeto de modernização.
        *   Quais são os principais desafios técnicos esperados (ex: refatoração da lógica Cobol, migração de dados, adoção de novas tecnologias, curva de aprendizado)?
    5.  **Principais Integrações (da Aplicação Modernizada):**
        *   Descreva as principais integrações que a nova aplicação terá (ex: com outros microserviços, sistemas legados que permanecerão, APIs de terceiros, serviços de nuvem).

### 3.2. Modernization Blueprint de Negócios e Produto
*   **Nome do Arquivo:** `documentacao/blueprint_negocios_produto_modernizacao_carddemo.md`
*   **Objetivo:** Detalhar os requisitos de negócio, produto e planejamento de desenvolvimento para a aplicação CardDemo modernizada.
*   **Conteúdo:**
    1.  **Iniciativas Estratégicas de Modernização:**
        *   Defina 2-3 iniciativas estratégicas de alto nível para o projeto de modernização (ex: "Melhorar Experiência do Usuário com Nova Interface Web", "Aumentar Agilidade com Arquitetura de Microserviços", "Reduzir Custos Operacionais com Infraestrutura em Nuvem").
    2.  **Épicos (para a Aplicação Modernizada):**
        *   Com base nas funcionalidades macro e nas iniciativas, defina os Épicos para a aplicação modernizada. Cada épico deve representar uma grande funcionalidade ou um conjunto de funcionalidades relacionadas.
        *   Exemplo de Épico: "Gerenciamento Completo de Contas de Clientes na Nova Plataforma".
    3.  **User Stories (para a Aplicação Modernizada):**
        *   Para cada Épico, detalhe as User Stories. Siga o formato: "Como um [tipo de usuário], eu quero [ação] para que [benefício]".
        *   Inclua Critérios de Aceitação claros e testáveis para cada User Story.
        *   Exemplo de User Story: "Como um cliente, eu quero visualizar o saldo da minha conta online para que eu possa controlar minhas finanças."
            *   Critério de Aceitação 1: O saldo exibido corresponde ao saldo real no sistema.
            *   Critério de Aceitação 2: A interface é responsiva em dispositivos móveis.
    4.  **Tarefas Técnicas de Desenvolvimento (para a Aplicação Modernizada):**
        *   Decomponha as User Stories em tarefas técnicas menores e gerenciáveis para a equipe de desenvolvimento (considerando a arquitetura alvo: React, Java Spring Boot, Microservices, PostgreSQL, Docker).
        *   Exemplos de Tarefas:
            *   "Criar microserviço de Contas (Java Spring Boot) com endpoint para consulta de saldo."
            *   "Desenvolver componente React para exibir informações da conta."
            *   "Configurar schema do PostgreSQL para a tabela de Contas."
            *   "Criar Dockerfile para o microserviço de Contas."
        *   Identifique dependências entre tarefas, se possível.
    5.  **Cenários de Testes (para a Aplicação Modernizada):**
        *   Para as User Stories mais críticas ou Épicos, defina cenários de teste de alto nível.
        *   Estes cenários devem cobrir os fluxos principais e garantir que os requisitos de negócio são atendidos.
        *   Exemplo de Cenário de Teste: "Cliente consulta saldo após transação":
            1.  Cliente realiza uma transação (débito/crédito).
            2.  Cliente acessa a tela de consulta de saldo.
            3.  Verificar se o saldo reflete a transação corretamente.

---

**Instruções Finais:**
*   Lembre-se de atualizar o `worklog.md` no início e no fim de cada fase/documento principal.
*   Todos os documentos gerados devem ser salvos na pasta `documentacao/` com os nomes de arquivo especificados.
*   Use linguagem clara e objetiva.
*   Onde diagramas são solicitados, utilize o formato Mermaid embutido no Markdown.
*   O foco é no planejamento da modernização. A codificação da nova aplicação não faz parte deste escopo, apenas a sua definição e o planejamento para seu desenvolvimento.

**Boa sorte com a análise e planejamento da modernização da AWS CardDemo!**
