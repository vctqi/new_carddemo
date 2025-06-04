**1. Prompt para Product Manager (PO):**
   *   **Objetivo do Prompt Gerado:** Coletar e documentar os requisitos do sistema.
   *   **Conteúdo a ser incluído no Prompt Gerado:**
        *   Referência à ideia do sistema: "[Ideia do Sistema]".
        *   Como Product Manager, detalhar os requisitos funcionais (o que o sistema deve fazer) e não funcionais (como o sistema deve operar, ex: performance, segurança).
        *   Solicitação para criar Épicos (grandes funcionalidades) e User Stories (descrições de funcionalidades sob a perspectiva do usuário) com Critérios de Aceitação claros e testáveis (condições para considerar a história completa e que possam ser verificados).
        *   Indicação do artefato esperado: "Um Documento de Requisitos consolidado (incluindo épicos e user stories com critérios de aceitação claros e testáveis) prontos para serem compartilhados com o Solution Architect e o Team Leader."
   *   **Entregáveis:**
       *   Documento de requisitos salvo na pasta documentção `documentacao\documento_requisitos.md`

**2. Prompt para Solution Architect (SA):**
   *   **Objetivo do Prompt Gerado:** Definir a arquitetura técnica do sistema.
   *   **Conteúdo a ser incluído no Prompt Gerado:**
        *   Referência à ideia do sistema: "[Ideia do Sistema]".
        *   **Instrução Prévia:** "Antes de iniciar, revise cuidadosamente o Documento de Requisitos fornecidos pelo Product Manager."
        *   Como Solution Architect, e com base nos requisitos do PO, desenhar a arquitetura técnica. Isso deve incluir:
            *   A escolha de tecnologias (linguagens, frameworks, bancos de dados).
            *   A definição dos principais componentes do sistema e suas interações.
            *   O design de integrações com outros sistemas (se houver).
            *   O modelo de dados conceitual.
            *   A especificação da infraestrutura necessária (servidores, cloud, etc.).
            *   A criação de diagramas chave da arquitetura (ex: visão de componentes, visão de implantação). Considere utilizar modelos como C4 Model, Diagrama de Fluxo, Diagrama de Sequencia, etc  para descrever a arquitetura em diferentes níveis de abstração, se aplicável ao contexto do sistema.
        *   Indicação do artefato esperado: "Um Documento de Arquitetura Técnica detalhado, incluindo diagramas chave (e possivelmente modelos como C4), pronto para ser compartilhado com o Team Leader e a equipe de Desenvolvimento."
   *  **IMPORTANTE**
      *  A aplicação deve ser totalmente FUNCIONAL e não apenas um mockup.
   *   **Entregáveis:**
       *   Documento de arquitetura do sistema  salvo na pasta documentção `documentacao\documento_arquitetura.md`

**3. Prompt para Team Leader (TL):**
   *   **Objetivo do Prompt Gerado:** Planejar as tarefas de desenvolvimento.
   *   **Conteúdo a ser incluído no Prompt Gerado:**
        *   Referência à ideia do sistema: "[Ideia do Sistema]".
        *   **Instrução Prévia:** "Antes de iniciar, revise cuidadosamente o Documento de Requisitos e fornecidos pelo Product Manager, bem como o Documento de Arquitetura Técnica fornecido pelo Solution Architect."
        *   Como Team Leader, e com base nos artefatos do PO e SA, decompor as User Stories  em tarefas técnicas menores e gerenciáveis para a equipe de desenvolvimento. As tarefas devem ter suas dependências identificadas, se houver.
        *   Solicitação para, realizar uma estimativa inicial de esforço para cada tarefa com numero de recursos necessários, tipo de recursos (ex. desenvolvedor pleno, desenvolvedor junior, arquiteto, etc.) e número de horas necessárias.
        *   Indicação do artefato esperado: "Uma Lista de Tarefas Técnicas detalhadas, com dependências identificadas, organizadas (ex: em um backlog de sprint ou quadro Kanban), e com estimativas iniciais (quando possível), prontas para serem atribuídas aos Desenvolvedores."
   *  **IMPORTANTE**
      *  A aplicação deve ser totalmente FUNCIONAL e não apenas um mockup.
   *   **Entregáveis:**
       *   Documento de backlog de desenvolvimento salvo na pasta documentção `documentacao\documento_backlog_desenvolvimento.md`

**4. Prompt para Developer (Dev):**
   *   **Objetivo do Prompt Gerado:** Orientar o desenvolvimento da aplicação seguindo o documento criado pelo Team Leader (TL) e tendo como documentos auxiliares os documentos criados pelo PO (documento de requisitos) e pelo SA (documentação técnica).
   *   **Instrução Prévia:** "Antes de iniciar, revise cuidadosamente o Documento de Requisitos fornecidos pelo Product Manager, o Documento de Arquitetura Técnica fornecido pelo Solution Architect e o Documento de Backlog fornecido pelo Team Leader"
   *   **Conteúdo a ser incluído no Prompt Gerado:**
        *   Contexto: "Como Developer, sua tarefa é desenvolver **todas** as funcionalidade/User Story  para o sistema '[Ideia do Sistema]' descritas pelo TL."
        *   Inputs Chave:
            *   Requisitos Específicos da Tarefa: Revise todas as tarefas criadas pelo Team Leader e seus Critérios de Aceitação detalhados no backlog. Consulte também o documento de requisitos criado pelo PO.
            *   Detalhes da Arquitetura: Consulte o documento de arquitetura para orientações técnicas.
            *   Padrões de Código: Siga aos padrões de codificação e boas práticas definidos em no documento de arquitetura.
        *   Ação: "Desenvolva o código necessário para implementar a funcionalidade, garantindo a cobertura com testes unitários robustos. Prepare o código para revisão por pares."
        *   Indicação do artefato esperado: "O código-fonte da funcionalidade/componente implementado, com testes unitários passando, devidamente comentado (quando necessário), e pronto para ser submetido a um Pull Request/Merge Request para revisão e integração. Após aprovação e merge, notifique o QA Analyst."
   *   **Entregáveis:**
       *   Código do sistema na pasta  `codigo`
       *   O código deve ser FUNCIONAL e não somente um mockup.
       *   Criar um arquivo start.sh onde verifica se todos os requisitos necessarios para a aplicacao estão instalados e se não tiver instala e posteriormente inicia a aplicação da maneira correta. Atenção para os paths dos arquivos.
       *   Criar um arquivo stop.sh que será responsável por parar a aplicação
       *   Documentação sobre como executar o sistema - criar arquivo README.MD como instruções detalhadas. Atenção para os paths dos arquivos.

**Formato da Saída Esperada (o que o prompt principal irá gerar):**
A saída deve ser o conteúdo para 7 arquivos Markdown separados. Cada arquivo conterá o prompt para um papel específico. Gere o conteúdo para cada arquivo da seguinte forma:

**Nome do Arquivo:** `prompts\step-1_prompt_po.md`
**Conteúdo:**
[Texto do prompt gerado para o Product Manager (PO) aqui, baseado nas instruções da seção "1. Prompt para Product Manager (PO)"]

**Nome do Arquivo:** `prompts\step-2_prompt_sa.md`
**Conteúdo:**
[Texto do prompt gerado para o Solution Architect (SA) aqui, baseado nas instruções da seção "2. Prompt para Solution Architect (SA)"]

**Nome do Arquivo:** `prompts\step-3_prompt_tl.md`
**Conteúdo:**
[Texto do prompt gerado para o Team Leader (TL) aqui, baseado nas instruções da seção "3. Prompt para Team Leader (TL)"]

**Nome do Arquivo:** `prompts\step-4_prompt_dev.md`
**Conteúdo:**
[Texto do prompt gerado para o Developer (Dev) aqui, baseado nas instruções da seção "4. Prompt para Developer (Dev)"]