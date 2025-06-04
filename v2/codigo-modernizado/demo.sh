#!/bin/bash

# CardDemo Local Demo Script
# Esta é uma versão simplificada que evita problemas de Docker

echo "Iniciando demonstração local do CardDemo..."

# Verificar se o Python está instalado (para o servidor web simples)
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "Python não encontrado. Não é possível iniciar o servidor web."
    echo "Por favor, visualize o arquivo local-demo.html diretamente em seu navegador."
    exit 1
fi

# Obter o diretório atual
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Servidor web simples com Python
echo "Iniciando servidor web local na porta 8000..."
echo "Acesse http://localhost:8000/local-demo.html no seu navegador"
echo "Pressione Ctrl+C para encerrar o servidor"
echo ""

# Iniciar o servidor na porta 8000
cd "$DIR"
if [[ "$PYTHON_CMD" == "python3" ]]; then
    $PYTHON_CMD -m http.server 8000
else
    $PYTHON_CMD -m SimpleHTTPServer 8000
fi