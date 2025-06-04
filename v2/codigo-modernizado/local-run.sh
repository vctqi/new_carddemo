#!/bin/bash

# Script de demonstração local final do CardDemo
# Totalmente independente de Docker ou recursos externos

echo "CardDemo - Demonstração Local Independente"
echo "============================================="
echo ""

# Obtém o caminho absoluto do diretório do script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HTML_FILE="$SCRIPT_DIR/local-demo.html"

# Verifica se o HTML existe
if [ ! -f "$HTML_FILE" ]; then
    echo "Erro: Arquivo de demonstração não encontrado em: $HTML_FILE"
    exit 1
fi

# Opções de visualização
echo "Escolha uma opção para visualizar a demonstração:"
echo "1) Abrir com navegador padrão (recomendado)"
echo "2) Iniciar servidor web Python na porta 8000"
echo "3) Exibir o caminho do arquivo para abrir manualmente"
echo ""
read -p "Sua escolha (1-3): " choice

case $choice in
    1)
        # Tenta abrir com o navegador padrão
        echo "Tentando abrir com o navegador padrão..."
        
        # Detecta o sistema operacional e usa o comando apropriado
        if [[ "$OSTYPE" == "linux-gnu"* ]]; then
            if command -v xdg-open > /dev/null; then
                xdg-open "$HTML_FILE"
            elif command -v gnome-open > /dev/null; then
                gnome-open "$HTML_FILE"
            else
                echo "Não foi possível detectar um programa para abrir o navegador."
                echo "Tente a opção 2 ou 3."
            fi
        elif [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            open "$HTML_FILE"
        elif [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
            # Windows
            start "$HTML_FILE"
        else
            echo "Sistema operacional não reconhecido. Tente a opção 2 ou 3."
        fi
        ;;
        
    2)
        # Inicia um servidor web Python
        echo "Iniciando servidor web Python..."
        
        # Detecta a versão do Python
        if command -v python3 > /dev/null; then
            echo "Usando Python 3"
            cd "$SCRIPT_DIR"
            echo "Acesse http://localhost:8000/local-demo.html no seu navegador"
            echo "Pressione Ctrl+C para encerrar o servidor"
            python3 -m http.server 8000
        elif command -v python > /dev/null; then
            echo "Usando Python 2"
            cd "$SCRIPT_DIR"
            echo "Acesse http://localhost:8000/local-demo.html no seu navegador"
            echo "Pressione Ctrl+C para encerrar o servidor"
            python -m SimpleHTTPServer 8000
        else
            echo "Python não encontrado. Por favor use a opção 3."
        fi
        ;;
        
    3)
        # Apenas mostra o caminho do arquivo
        echo "Para visualizar a demonstração, abra o seguinte arquivo em seu navegador:"
        echo "$HTML_FILE"
        ;;
        
    *)
        echo "Opção inválida. Saindo."
        exit 1
        ;;
esac

echo ""
echo "Obrigado por usar a demonstração do CardDemo!"