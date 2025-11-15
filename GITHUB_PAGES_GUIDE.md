# 📚 Guia: Como Hospedar no GitHub Pages

## ✅ O que já foi feito:
- ✓ Repositório Git inicializado
- ✓ Arquivos do projeto adicionados
- ✓ Primeiro commit realizado

## 🚀 Próximos passos:

### 1. **Criar um repositório no GitHub**
   - Acesse https://github.com/new
   - **Nome do repositório:** `sabores-e-saberes` (ou seu-usuario.github.io se quiser usar como site pessoal)
   - Deixe como **Public**
   - NÃO marque "Initialize this repository with a README"
   - Clique em "Create repository"

### 2. **Conectar seu repositório local ao GitHub**
   Abra o terminal na pasta do projeto e execute:
   ```
   git remote add origin https://github.com/SEU-USUARIO/sabores-e-saberes.git
   git branch -M main
   git push -u origin main
   ```

### 3. **Ativar GitHub Pages**
   - Vá ao repositório no GitHub
   - Clique em **Settings** (Configurações)
   - Na sidebar esquerda, clique em **Pages**
   - Em "Source", selecione **main** branch
   - Deixe a pasta como **/(root)**
   - Clique em **Save**

### 4. **Aguardar e acessar o site**
   - GitHub vai processar em alguns minutos
   - Seu site estará disponível em: `https://SEU-USUARIO.github.io/sabores-e-saberes/`
   - (Ou em `https://SEU-USUARIO.github.io/` se usar "seu-usuario.github.io" como nome do repo)

## 📝 Para fazer atualizações no site:
```
git add .
git commit -m "Descrição da mudança"
git push origin main
```
GitHub Pages atualizará automaticamente em alguns minutos.

## ✨ Dicas:
- Use sempre mensagens de commit descritivas
- Faça commits pequenos e frequentes
- Mantenha o `index.html` como arquivo principal
- GitHub Pages aceita HTML, CSS, JavaScript estáticos

## 🆘 Precisa de ajuda?
- Documentação oficial: https://docs.github.com/en/pages
- Tutorial completo: https://pages.github.com/
