# Demonstração Alternativa do CardDemo (Sem Docker)

Se você estiver enfrentando problemas com o Docker, como erros de rede ou TLS, pode usar esta abordagem alternativa para visualizar a demonstração do CardDemo.

## Requisitos

- Python 2.7+ ou Python 3.x (para o servidor web simples)
- Navegador web moderno

## Executando a Demonstração Local

1. No terminal, navegue até o diretório `codigo-modernizado`
2. Execute o script `demo.sh`:
   ```bash
   ./demo.sh
   ```
3. Acesse http://localhost:8000/local-demo.html no seu navegador

Este método inicia um servidor web Python simples que serve o arquivo HTML estático da demonstração, completamente evitando a necessidade de Docker, imagens remotas ou builds complexos.

## O que Esta Demonstração Inclui

- Visão geral da arquitetura de microserviços
- Descrição dos componentes do sistema
- Exemplo da configuração Docker Compose
- Lista de funcionalidades principais
- Passos para implementação real

## Limitações

Esta demonstração é puramente estática e não inclui funcionalidades interativas. É apenas uma visualização da arquitetura e dos componentes do sistema modernizado.

## Retornando à Implementação Docker

Quando os problemas de rede/Docker forem resolvidos, você pode voltar à implementação completa com:

```bash
./start.sh
```

## Solução de Problemas Comuns do Docker

Se você quiser tentar resolver os problemas do Docker, aqui estão algumas sugestões:

1. **Erro "tls: bad record MAC"**:
   - Este erro geralmente indica problemas de rede TLS entre seu cliente Docker e o Docker Hub
   - Verifique sua conexão de rede e configurações de proxy/firewall
   - Tente reiniciar o daemon do Docker
   - Considere usar um registro Docker alternativo ou local

2. **Erro de sintaxe YAML**:
   - Certifique-se de que seu arquivo docker-compose.yml está corretamente formatado
   - Use `docker compose config` para validar a sintaxe

3. **Imagens não encontradas**:
   - Certifique-se de que as imagens referenciadas existem no Docker Hub
   - Considere usar tags específicas em vez de `latest`

Para mais detalhes, consulte o arquivo TROUBLESHOOTING.md.