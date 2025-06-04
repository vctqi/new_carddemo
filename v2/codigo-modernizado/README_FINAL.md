# CardDemo - Aplicação Modernizada

## AVISO IMPORTANTE - LEIA PRIMEIRO

**Se você está enfrentando problemas com o Docker, como erros TLS ou falhas de rede:**

Use nossa **versão independente** da demonstração que não requer Docker:

```bash
./local-run.sh
```

Este script fornecerá opções para visualizar uma demonstração estática do sistema modernizado.

---

## Sobre o Projeto

Este é o projeto de modernização da aplicação AWS CardDemo, migrando de um sistema mainframe baseado em Cobol/CICS/VSAM para uma arquitetura moderna usando Java Spring Boot, React, e microserviços.

## Opções de Execução

### Opção 1: Demonstração Local (Sem Docker)

Ideal para ambientes com restrições de rede ou problemas com o Docker:

```bash
./local-run.sh
```

Esta opção abrirá uma demonstração estática HTML em seu navegador, mostrando a arquitetura e os componentes do sistema modernizado.

### Opção 2: Execução Simplificada com Docker

Para testar a infraestrutura Docker com requisitos mínimos:

```bash
./start.sh
```

Esta versão usa um subconjunto simplificado de serviços para minimizar problemas de download e build.

### Opção 3: Implementação Completa (Avançado)

Para desenvolvedores que desejam implementar a versão completa:

1. Consulte o documento `plano_modernizacao_mvp_carddemo.md` para o plano detalhado
2. Siga a arquitetura definida para implementar cada microserviço
3. Use as melhores práticas de Spring Boot e React conforme documentado

## Solução de Problemas

Se você encontrar problemas ao executar a versão Docker:

1. Consulte o arquivo `TROUBLESHOOTING.md` para soluções comuns
2. Use a alternativa local com `./local-run.sh` para contornar problemas de Docker
3. Verifique as configurações de rede e firewall em seu ambiente

## Estrutura do Projeto

```
codigo-modernizado/
├── backend/                # Microserviços Java Spring Boot
├── frontend/               # Aplicação React
├── database/               # Scripts de inicialização do banco de dados
├── infrastructure/         # Configurações de infraestrutura
├── docker-compose.yml      # Configuração Docker Compose
├── start.sh                # Script para iniciar a aplicação
├── stop.sh                 # Script para parar a aplicação
├── local-run.sh            # Script para executar a demonstração local
├── local-demo.html         # Demonstração estática em HTML
└── README.md               # Este arquivo
```

## Problemas Conhecidos

- Problemas de rede podem afetar o download de imagens Docker
- Alguns ambientes corporativos podem bloquear o acesso ao Docker Hub
- A aplicação completa requer implementação adicional conforme o plano

## Próximos Passos

Após visualizar a demonstração, você pode:

1. Explorar a análise do sistema legado em `analise_detalhada_carddemo_cobol_asis.md`
2. Revisar o plano completo em `plano_modernizacao_completa_carddemo_java.md`
3. Estudar o plano de MVP em `plano_modernizacao_mvp_carddemo.md`
4. Iniciar a implementação baseada nos artefatos fornecidos