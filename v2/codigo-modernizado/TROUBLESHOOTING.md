# Solução de Problemas do CardDemo

Este documento fornece orientações para solucionar problemas comuns ao executar a aplicação CardDemo.

## Problemas com Docker

### Erro "tls: bad record MAC"

Se você encontrar o erro `failed to solve: failed to compute cache key: failed to copy: local error: tls: bad record MAC`, isso indica um problema na comunicação TLS entre o Docker e o Docker Hub. Para resolver:

1. **Versão Simplificada**: 
   - Estamos fornecendo uma versão simplificada do `docker-compose.yml` que usa menos imagens e construções mais simples.
   - O sistema usa imagens básicas do Docker Hub e evita builds complexos.

2. **Verificação de Rede**:
   - Certifique-se de que sua conexão com a internet esteja funcionando.
   - Verifique se você está atrás de um proxy ou firewall que pode estar interferindo nas conexões TLS.

3. **Limpeza do Docker**:
   - Execute `docker system prune -a` para limpar imagens, contêineres e caches.
   - Reinicie o daemon do Docker.

### Erro "not found" para imagens

Se encontrar erros como `failed to resolve source metadata for docker.io/library/maven:3.8.6-openjdk-17-slim: docker.io/library/maven:3.8.6-openjdk-17-slim: not found`, isso indica que a imagem específica não está disponível. Nós:

1. Atualizamos os Dockerfiles para usar imagens mais amplamente disponíveis.
2. Simplificamos a configuração para minimizar dependências.

## Usando a Versão Simplificada

Para um ambiente de demonstração, a versão simplificada inclui:

1. **Frontend**: Um servidor Nginx simples com uma página HTML estática.
2. **Database**: Postgres para armazenamento de dados.
3. **Auth Service**: Um serviço Java simples que simula o serviço de autenticação.

Esta versão é adequada para demonstrar a arquitetura geral sem os desafios de construir todas as imagens.

## Instruções para Ambiente de Produção

Para um ambiente de produção completo:

1. Desenvolva cada microserviço individualmente
2. Construa e teste localmente antes da implantação
3. Considere usar registros de contêineres privados
4. Implemente CI/CD para automação de build e deploy

## Próximos Passos

Depois de ter a versão simplificada funcionando, você pode incrementalmente:

1. Adicionar um microserviço por vez
2. Desenvolver o frontend React completo
3. Integrar a funcionalidade real de autenticação
4. Expandir para o conjunto completo de serviços