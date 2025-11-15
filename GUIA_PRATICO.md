# 🔧 Guia Prático: Configurações Finais e Personalização

## ⚠️ CONFIGURAÇÕES OBRIGATÓRIAS

### 1️⃣ Alterar Número do WhatsApp

**Arquivo: `inscricao.html`**

Procure pela linha (por volta da linha 180):

```javascript
const numeroWhatsApp = "351912345678";
```

**Substitua por seu número no formato:**

- Código do país (Portugal: 351)
- Seu número sem espaços ou hífens
- **Exemplo:** `351912345678` (código + 9 dígitos)

---

**Arquivo: `comerciantes.html`**

Procure pela função `whatsapp()` (por volta da linha 260) e adicione os números de cada comerciante:

```javascript
function openWhatsApp(nome, whatsapp) {
  const message = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre seus produtos: ${nome}`
  );
  window.open(`https://wa.me/${whatsapp}?text=${message}`, "_blank");
}
```

---

## 📸 Adicionar Fotos dos Comerciantes

### Em `comerciantes.html`

Substitua os emojis por fotos reais:

**Atual (linha ~60):**

```html
<div class="merchant-avatar">👩‍💼</div>
```

**Novo (com foto):**

```html
<div class="merchant-avatar">
  <img src="images/thaina-miranda.jpg" alt="Thainá Miranda" />
</div>
```

**Adicione no CSS:**

```css
.merchant-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
```

---

## 🛍️ Adicionar Novos Produtos

### Em `index.html`

Encontre a seção `featured-products` e copie um card de produto:

```html
<div class="product-card">
  <div class="product-image-container">
    <img src="URL-DA-IMAGEM" alt="Nome Produto" loading="lazy" />
  </div>
  <h3>Nome do Produto</h3>
  <p class="price">€ PREÇO</p>
  <button
    class="btn add-to-cart-btn"
    data-name="Nome do Produto"
    data-price="PREÇO"
  >
    Adicionar ao carrinho
  </button>
</div>
```

**Exemplo Completo:**

```html
<div class="product-card">
  <div class="product-image-container">
    <img src="images/xale-lã.jpg" alt="Xale de Lã Artesanal" loading="lazy" />
  </div>
  <h3>Xale de Lã Artesanal</h3>
  <p class="price">€ 45.00</p>
  <button
    class="btn add-to-cart-btn"
    data-name="Xale de Lã Artesanal"
    data-price="45.00"
  >
    Adicionar ao carrinho
  </button>
</div>
```

---

## 👥 Adicionar Novo Comerciante

### Em `comerciantes.html`

Copie um card de comerciante inteiro:

```html
<div class="merchant-card">
  <div class="merchant-header">
    <div class="merchant-avatar">🎨</div>
    <h3>Nome do Comerciante</h3>
    <p class="merchant-brand">Nome da Marca/Ateliê</p>
  </div>
  <div class="merchant-body">
    <span class="merchant-specialty">🎨 Especialidade</span>

    <div class="merchant-story">
      <strong>Sobre o Comerciante</strong>
      <p>História breve e inspiradora...</p>
    </div>

    <div class="merchant-products">
      <h4>Produtos</h4>
      <div class="product-list">
        <span class="product-tag">Produto 1</span>
        <span class="product-tag">Produto 2</span>
      </div>
    </div>

    <div class="merchant-cta">
      <a
        href="javascript:void(0)"
        onclick="whatsapp('Nome')"
        class="btn btn-whatsapp"
        >WhatsApp</a
      >
      <a href="#detalhes" class="btn btn-secondary">Ver Detalhes</a>
    </div>
  </div>
</div>
```

---

## 🎨 Personalizar Cores (Opcional)

### Em `style.css` - Procure por:

```css
:root {
  --dark-green: #224229; /* Verde principal */
  --light-beige: #f5f3f0; /* Bege backgrounds */
  --accent-light-green: #4a7c59; /* Verde claro */
  --accent-gold: #d4a574; /* Ouro detalhes */
}
```

**Para mudar cores globais, edite esses valores.**

---

## 📝 Editar Conteúdo das Páginas

### **sobre-covilha.html**

Para adicionar mais contexto histórico, procure por:

```html
<div class="about-text">
  <p>Aqui você pode adicionar/editar o texto...</p>
</div>
```

---

### **inscricao.html**

Para adicionar/remover benefícios, procure por:

```html
<div class="benefit-item">
  <div class="benefit-icon">🎯</div>
  <div class="benefit-text">
    <h3>Título do Benefício</h3>
    <p>Descrição...</p>
  </div>
</div>
```

---

## 🧪 Testar Localmente

Antes de publicar, teste o site localmente:

### Opção 1: Abrir direto no navegador

- Navegue até a pasta do projeto
- Abra `index.html` com o navegador

### Opção 2: Com servidor local (recomendado)

```powershell
# Instale Node.js se não tiver
# Depois:
npm install -g http-server
cd "c:\Users\samue\OneDrive\Documentos\Projeto\Sabores e saberes"
http-server -p 8000
```

Acesse: `http://localhost:8000`

---

## ✅ Checklist de Publicação

- [ ] Alterei o número do WhatsApp em `inscricao.html`
- [ ] Alterei o número do WhatsApp em `comerciantes.html`
- [ ] Testei todos os links de navegação
- [ ] Testei o carrinho de compras
- [ ] Testei o formulário de inscrição
- [ ] Adicionei fotos dos comerciantes
- [ ] Revisei todo o conteúdo de texto
- [ ] Fiz commit das mudanças: `git add . && git commit -m "Personalizações finais"`
- [ ] Publiquei no GitHub Pages

---

## 🚀 Publicar no GitHub Pages

```powershell
cd "c:\Users\samue\OneDrive\Documentos\Projeto\Sabores e saberes"
git push origin main
```

**Aguarde 2-5 minutos e acesse:**
`https://seu-usuario.github.io/sabores-e-saberes/`

---

## 🔍 Troubleshooting

### P: Os links não funcionam

**R:** Certifique-se de que os nomes dos arquivos são exatos:

- `index.html` ✅
- `sobre-covilha.html` ✅ (com hífen)
- `comerciantes.html` ✅
- `inscricao.html` ✅

### P: WhatsApp não abre

**R:** Verifique:

1. O número está em formato internacional (com código país)
2. Removeu espaços e hífens
3. A mensagem não contém caracteres especiais não-codificados

### P: Imagens não aparecem

**R:**

1. Coloque as imagens em `images/`
2. Use caminho relativo: `images/seu-arquivo.jpg`
3. Verifique a extensão (.jpg, .png, etc)

### P: Site está lento

**R:**

1. Comprima as imagens (máx 200KB cada)
2. Use formato WebP se possível
3. Remova imagens grandes desnecessárias

---

## 📞 Contato e Suporte

Se tiver dúvidas sobre configurações, consulte:

- `ESTRUTURA_DO_SITE.md` - Visão geral
- `GITHUB_PAGES_GUIDE.md` - Como publicar
- `ANALISE_MELHORIAS.md` - Ideias futuras

---

**Boa sorte com seu projeto! 🎉**
**Empreendedoras da Serra: A Inclusão Digital no Artesanato da Covilhã**
