# 📱 Sabores e Saberes da Covilhã - Estrutura Completa do Site

## ✅ Páginas Criadas

### 1. **index.html** - Loja Online (Home)
   - **Hero Section** com banner e call-to-action
   - **Produtos em Destaque** com grid de 4 produtos
   - **Carrinho de Compras** com integração WhatsApp
   - **Otimizações:** Lazy loading de imagens, resumo sobre artesanato local
   - **Navegação:** Links para as outras páginas

### 2. **sobre-covilha.html** - História da Cidade
   - **Hero Section** verde com título chamativo
   - **Um Pouco da Nossa História** - Contexto histórico da Covilhã
   - **Patrimônio Cultural** - 3 cards sobre Lã, Queijo e Pão
   - **Timeline** - Evolução histórica (Século XIV até XXI)
   - **CTA** - Link para conhecer comerciantes
   - **Fonte de Conteúdo:** Casa das Muralhas, Wikipedia, UBI Museum

### 3. **comerciantes.html** - Perfil de Cada Comerciante
   - **4 Comerciantes em Destaque:**
     - 👩‍💼 **Thainá Miranda** - Cantinho da Serra (Coordenadora)
     - 🧶 **Raquel Rocha** - Ateliê de Lã da Serra (Artesã de Lã)
     - 🍞 **Alicia Janssen** - Padaria Artesanal (Padeira)
     - 🧀 **Felipe Posso** - Queijaria da Serra (Produtor de Queijo)
   - **Cada Card Contém:**
     - Avatar com ícone representativo
     - Nome, marca e especialidade
     - Histórico pessoal
     - Lista de produtos
     - Botão WhatsApp + "Ver Detalhes"

### 4. **inscricao.html** - Formulário para Novos Comerciantes
   - **Seção de Benefícios** (lado esquerdo)
     - 🌍 Alcance Global
     - 📱 WhatsApp Integrado
     - 🎓 Treinamento Gratuito
     - 💰 Custo Zero
     - 👥 Comunidade Forte
     - 🏆 Visibilidade
   - **Formulário Completo** (lado direito)
     - Nome, Marca/Ateliê, Email, WhatsApp
     - Seleção de especialidade
     - Descrição e produtos
     - Checkbox de termos
     - **Funcionalidade:** Envia inscrição via WhatsApp

---

## 🎨 **Paleta de Cores**

| Cor | Variável CSS | Uso |
|-----|-------------|-----|
| Verde Escuro | `--dark-green: #224229` | Headings, CTA principal |
| Bege Claro | `--light-beige: #F5F3F0` | Backgrounds, Cards |
| Verde Claro | `--accent-light-green: #4a7c59` | Gradientes, Hover |
| Ouro | `--accent-gold: #d4a574` | Preços, Detalhes |

---

## 📊 **Estrutura de Navegação**

```
index.html (HOME)
    ├── sobre-covilha.html (HISTÓRIA)
    ├── comerciantes.html (PERFIS)
    ├── inscricao.html (SE INSCREVER)
    └── Carrinho de Compras (Modal)

Todas as páginas possuem:
    - Header com logo e navegação
    - Footer com branding
    - Links para todas as outras páginas
```

---

## 🚀 **Otimizações de Performance Implementadas**

✅ **Lazy Loading** - Imagens carregam sob demanda
✅ **CSS Otimizado** - Gradientes em vez de imagens
✅ **Responsividade** - Mobile-first approach
✅ **Acessibilidade** - Redução de movimento para usuários sensíveis
✅ **Estrutura Semântica** - HTML5 semântico

---

## 📱 **Responsividade**

- **Desktop** (900px+): 4 colunas de produtos, layout duplo
- **Tablet** (501px-899px): 2 colunas de produtos
- **Mobile** (<500px): 1 coluna, menu hamburger oculto

---

## 🔗 **Integrações**

### WhatsApp
- **Checkout:** Envio de pedidos via WhatsApp
- **Inscrição:** Recebimento de novas inscrições
- **Número:** `351912345678` (ALTERAR PARA SEU NÚMERO)

### GitHub Pages
- Hospedagem gratuita
- Domínio: `https://seu-usuario.github.io/sabores-e-saberes/`

---

## 📝 **Documentos de Apoio**

1. **GITHUB_PAGES_GUIDE.md** - Como publicar no GitHub Pages
2. **ANALISE_MELHORIAS.md** - Sugestões estratégicas baseadas na metodologia de pesquisa

---

## 🎯 **Alinhamento com ODS**

### ODS 1 - Erradicação da Pobreza
✅ Novo canal de vendas digital
✅ Geração de renda para artesãos
✅ Visibilidade de produtos locais

### ODS 5 - Igualdade de Gênero
✅ Empoderamento de mulheres empreendedoras
✅ Capacitação digital (páginas dedicadas)
✅ Protagonismo nas histórias dos comerciantes

---

## 📁 **Estrutura de Arquivos**

```
projeto/
├── index.html (Home - Loja Online)
├── sobre-covilha.html (História da Cidade)
├── comerciantes.html (Perfil dos Comerciantes)
├── inscricao.html (Formulário de Inscrição)
├── style.css (Estilos Globais)
├── script.js (Funcionalidades: Carrinho + WhatsApp)
├── images/
│   └── home.png (Imagem Principal)
├── .gitignore
├── GITHUB_PAGES_GUIDE.md
├── ANALISE_MELHORIAS.md
└── ESTRUTURA_DO_SITE.md (este arquivo)
```

---

## ⚙️ **Configurações Necessárias**

### 1. **Número do WhatsApp**
   - Abra `inscricao.html` e `comerciantes.html`
   - Procure por: `const numeroWhatsApp = '351912345678'`
   - Altere para seu número (formato: código país + número)

### 2. **Fotos dos Comerciantes**
   - Substitua os emojis por fotos reais em `comerciantes.html`
   - Salve em `images/` e atualize os caminhos

### 3. **Produtos**
   - Edite `index.html` para adicionar/remover produtos
   - Adicione URLs de imagens reais (substitua placehold.co)

---

## 🔄 **Fluxo de Compra**

1. **Usuário Navega** → Visualiza produtos na HOME
2. **Adiciona ao Carrinho** → Aparece sidebar com itens
3. **Clica "Finalizar Pedido"** → Abre WhatsApp pré-preenchido
4. **Artesão Recebe** → Mensagem formatada com detalhes

---

## 🔄 **Fluxo de Inscrição**

1. **Novo Comerciante** → Acessa página de inscrição
2. **Preenche Formulário** → Nome, marca, especialidade, produtos
3. **Envia Inscrição** → Formata mensagem para WhatsApp
4. **Você Recebe** → Inscrição em seu WhatsApp pessoal
5. **Processa Internamente** → Adiciona à página `comerciantes.html`

---

## 📞 **Suporte e Próximos Passos**

- [ ] Substituir números do WhatsApp de teste
- [ ] Adicionar fotos reais dos comerciantes
- [ ] Testar todos os links de navegação
- [ ] Publicar no GitHub Pages
- [ ] Coletar fotos do treinamento de fotografia
- [ ] Adicionar depoimentos em vídeo (futuro)

---

**Projeto:** Empreendedoras da Serra: A Inclusão Digital no Artesanato da Covilhã
**Aluno:** Samuel Mendes
**Data:** Novembro 2025
**Status:** ✅ Estrutura Completa
