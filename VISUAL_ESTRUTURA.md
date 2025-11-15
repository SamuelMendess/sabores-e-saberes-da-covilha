# 📊 VISUAL: Estrutura Completa do Site

## 🗺️ MAPA DO SITE

```
                        ┌─────────────┐
                        │  HOME PAGE  │
                        │  index.html │
                        └──────┬──────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             ▼             ▼
           ┌─────────────┐  ┌──────────────┐  ┌──────────────┐
           │   SOBRE     │  │ COMERCIANTES │  │  INSCRIÇÃO   │
           │  COVILHÃ    │  │              │  │              │
           │.html        │  │  .html       │  │  .html       │
           └─────────────┘  └──────────────┘  └──────────────┘
                 │                 │                  │
          ┌──────┴─────┐    ┌──────┴───────┐   ┌─────┴───────┐
          ▼             ▼    ▼              ▼   ▼             ▼
       HISTÓRIA    PATRIMÔNIO THAINÁ      RAQUEL BENEFÍCIOS  FORM
       TIMELINE    (3 Cards)   ALICIA     FELIPE  (6 items)  SUBMIT
```

---

## 🎨 DESIGN VISUAL POR PÁGINA

### 1️⃣ HOME (index.html)
```
╔════════════════════════════════════════════════════════════╗
║                    HEADER VERDE                            ║
║  Logo | Menu (Loja, Sobre, Comerciantes, Inscrever)  🛒 0 ║
╠════════════════════════════════════════════════════════════╣
║                                                             ║
║  HERO SECTION (Bege Claro com Gradiente)                  ║
║  ┌──────────────────┐        ┌──────────────────┐         ║
║  │  Texto Grande    │   +    │  Foto Principal  │         ║
║  │  "Sabores..."    │        │  [Imagem 1:1]    │         ║
║  │  CTA Button      │        └──────────────────┘         ║
║  └──────────────────┘                                      ║
║                                                             ║
╠════════════════════════════════════════════════════════════╣
║  GRID DE 4 PRODUTOS                                        ║
║  ┌──────────┬──────────┬──────────┬──────────┐            ║
║  │ Queijo   │ Broa     │ Casaco   │ Requeijo │            ║
║  │ €18.50   │ €5.00    │ €95.00   │ €4.50    │            ║
║  │ [Botão]  │ [Botão]  │ [Botão]  │ [Botão]  │            ║
║  └──────────┴──────────┴──────────┴──────────┘            ║
║                                                             ║
╠════════════════════════════════════════════════════════════╣
║  CARRINHO (Sidebar Bege)                                   ║
║  Meu Carrinho      [X]                                     ║
║  ├─ Item 1: €XX.XX                                        ║
║  ├─ Item 2: €XX.XX                                        ║
║  └─ Total: €XX.XX                                         ║
║  [Finalizar no WhatsApp]                                  ║
╠════════════════════════════════════════════════════════════╣
║              FOOTER VERDE COM TEXTO CLARO                  ║
╚════════════════════════════════════════════════════════════╝
```

### 2️⃣ SOBRE COVILHÃ (sobre-covilha.html)
```
╔════════════════════════════════════════════════════════════╗
║            HERO VERDE ESCURO (Verde → Verde Claro)         ║
║  "A Covilhã: Cidade da Lã e Tradição"                     ║
╠════════════════════════════════════════════════════════════╣
║  SEÇÃO: Um Pouco da Nossa História                        ║
║  ┌─────────────────────────┬──────────────────────────┐  ║
║  │ Texto histórico (esq)   │  Emoji 🏔️ (dir)          │  ║
║  │ 3 parágrafos...         │  Serra da Estrela        │  ║
║  └─────────────────────────┴──────────────────────────┘  ║
║                                                             ║
╠════════════════════════════════════════════════════════════╣
║  PATRIMÔNIO CULTURAL (3 Cards em Grid)                    ║
║  ┌────────────┐  ┌────────────┐  ┌────────────┐          ║
║  │ 🧶 A Lã    │  │ 🧀 Queijo  │  │ 🍞 Pão     │          ║
║  │ Descrição  │  │ Descrição  │  │ Descrição  │          ║
║  └────────────┘  └────────────┘  └────────────┘          ║
║                                                             ║
╠════════════════════════════════════════════════════════════╣
║  TIMELINE (Vertical)                                       ║
║  ● Século XIV - Origem Medieval                           ║
║  │ Texto descritivo...                                    ║
║  ●                                                         ║
║  │ Século XVII-XVIII - Auge Têxtil                        ║
║  │ Texto descritivo...                                    ║
║  ●                                                         ║
║  ├─ Século XIX-XX - Industrialização                      ║
║  │ Texto descritivo...                                    ║
║  ●                                                         ║
║  └─ Século XXI - Resgate Digital                          ║
║    Texto descritivo...                                    ║
║                                                             ║
╠════════════════════════════════════════════════════════════╣
║  CTA (Gradiente Verde)                                     ║
║  "Conheça os Artesãos" [Botão]                            ║
╠════════════════════════════════════════════════════════════╣
║                       FOOTER                               ║
╚════════════════════════════════════════════════════════════╝
```

### 3️⃣ COMERCIANTES (comerciantes.html)
```
╔════════════════════════════════════════════════════════════╗
║         HERO VERDE (Comerciantes em Destaque)              ║
╠════════════════════════════════════════════════════════════╣
║  GRID 2x2 DE COMERCIANTES                                 ║
║                                                             ║
║  ┌────────────────────────┐  ┌────────────────────────┐  ║
║  │ CARD 1: THAINÁ         │  │ CARD 2: RAQUEL         │  ║
║  │ ┌─────────────────────┐│  │┌─────────────────────┐│  ║
║  │ │  Header Verde       ││  ││  Header Verde       ││  ║
║  │ │  ┌─────────────────┐││  ││┌─────────────────┐││  ║
║  │ │  │  👩‍💼 (ou FOTO)   │││  │││ 🧶 (ou FOTO)   │││  ║
║  │ │  └─────────────────┘││  ││└─────────────────┘││  ║
║  │ │  Thainá Miranda    ││  ││  Raquel Rocha     ││  ║
║  │ │  Cantinho da Serra ││  ││  Ateliê de Lã     ││  ║
║  │ └─────────────────────┘│  │└─────────────────────┘│  ║
║  │ Body (Branco):          │  │ Body (Branco):        │  ║
║  │ 🏪 Coordenadora        │  │ 🧶 Artesã de Lã       │  ║
║  │                         │  │                       │  ║
║  │ [Historia]             │  │ [História]            │  ║
║  │ Casacos | Xales        │  │ Xales | Cobertores   │  ║
║  │ [WhatsApp] [Detalhes]  │  │ [WhatsApp] [Detalhes] │  ║
║  └────────────────────────┘  └────────────────────────┘  ║
║                                                             ║
║  ┌────────────────────────┐  ┌────────────────────────┐  ║
║  │ CARD 3: ALICIA         │  │ CARD 4: FELIPE         │  ║
║  │ [Mesmo layout]         │  │ [Mesmo layout]         │  ║
║  │ 🍞 Padeira            │  │ 🧀 Queijeiro          │  ║
║  └────────────────────────┘  └────────────────────────┘  ║
║                                                             ║
╠════════════════════════════════════════════════════════════╣
║                       FOOTER                               ║
╚════════════════════════════════════════════════════════════╝
```

### 4️⃣ INSCRIÇÃO (inscricao.html)
```
╔════════════════════════════════════════════════════════════╗
║         HERO VERDE (Junte-se à Comunidade)                 ║
╠════════════════════════════════════════════════════════════╣
║  LAYOUT 2 COLUNAS                                          ║
║                                                             ║
║  COLUNA ESQUERDA (Bege)    │  COLUNA DIREITA (Branco)     ║
║  ┌────────────────────────┐│┌─────────────────────────┐  ║
║  │ Por que se Inscrever?  │││  Formulário de Inscrição││  ║
║  │                        │││                         │  ║
║  │ 🌍 Alcance Global      │││ [Form Success Msg]      │  ║
║  │ Descrição...           │││                         │  ║
║  │                        │││ [Nome________]          │  ║
║  │ 📱 WhatsApp Integrado  │││ [Marca_______]          │  ║
║  │ Descrição...           │││ [Email_______]          │  ║
║  │                        │││ [WhatsApp____]          │  ║
║  │ 🎓 Treinamento Gratuito│││ [Especialidade ▼]       │  ║
║  │ Descrição...           │││ [Descrição................]│  ║
║  │                        │││                         │  ║
║  │ 💰 Custo Zero         │││ [Produtos.................]│  ║
║  │ Descrição...           │││                         │  ║
║  │                        │││ ☑ Concordo com termos   │  ║
║  │ 👥 Comunidade Forte    │││                         │  ║
║  │ Descrição...           │││ [Cancelar] [Enviar]     │  ║
║  │                        │││                         │  ║
║  │ 🏆 Visibilidade        │││                         │  ║
║  │ Descrição...           │││                         │  ║
║  └────────────────────────┘└─────────────────────────┘  ║
║                                                             ║
╠════════════════════════════════════════════════════════════╣
║                       FOOTER                               ║
╚════════════════════════════════════════════════════════════╝
```

---

## 🎯 PALETA DE CORES VISUAL

```
┌─────────────────────────────────────────────────────────┐
│ VERDE ESCURO             BEGE CLARO        OURO          │
│ #224229                  #F5F3F0          #d4a574        │
│ ████████                 ████████         ████████       │
│ Logo, Headers            Backgrounds      Preços, Detalhe│
│ Buttons Prin.            Cards Leves      Accents        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ VERDE CLARO              BRANCO           CINZA          │
│ #4a7c59                  #FFFFFF          #666666        │
│ ████████                 ████████         ████████       │
│ Gradientes               Containers       Textos         │
│ Accents                  Cards            Secundário     │
└─────────────────────────────────────────────────────────┘
```

---

## 📱 RESPONSIVIDADE VISUAL

### Desktop (900px+)
```
┌──────────────────────────────────────────────────────┐
│              Full Width - 4 Colunas                  │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                   │
│  │  1  │ │  2  │ │  3  │ │  4  │                   │
│  └─────┘ └─────┘ └─────┘ └─────┘                   │
└──────────────────────────────────────────────────────┘
```

### Tablet (500px-900px)
```
┌──────────────────────────────────────────────────────┐
│           Medium Width - 2 Colunas                   │
│  ┌──────────────┐  ┌──────────────┐                │
│  │      1       │  │      2       │                │
│  └──────────────┘  └──────────────┘                │
│  ┌──────────────┐  ┌──────────────┐                │
│  │      3       │  │      4       │                │
│  └──────────────┘  └──────────────┘                │
└──────────────────────────────────────────────────────┘
```

### Mobile (<500px)
```
┌──────────────────┐
│  Small Width     │
│  1 Coluna       │
│  ┌────────────┐ │
│  │     1      │ │
│  └────────────┘ │
│  ┌────────────┐ │
│  │     2      │ │
│  └────────────┘ │
│  ┌────────────┐ │
│  │     3      │ │
│  └────────────┘ │
│  ┌────────────┐ │
│  │     4      │ │
│  └────────────┘ │
└──────────────────┘
```

---

## 🔄 FLUXO DE INTERAÇÃO

### Compra de Produto
```
User →  Vê Produto  →  Clica Botão  →  Item no Carrinho  →  
Vê Total  →  Clica Finalizar  →  WhatsApp Abre  →  
Envia Pedido
```

### Inscrição Comerciante
```
Novo Comerciante  →  Acessa Página  →  Preenche Formulário  →  
Clica Enviar  →  Ver Mensagem Sucesso  →  WhatsApp Abre  →  
Você Recebe Inscrição
```

### Navegação
```
Qualquer Página  →  Clica Menu  →  Va para Outra Página  →  
Menu Segue Consistente  →  Footer com Links
```

---

## 📊 HIERARQUIA DE CONTEÚDO

```
NÍVEL 1 (Mais Importante)
├─ Logo/Marca
├─ Títulos H1 (Verde)
└─ Chamadas à Ação (Botões)

NÍVEL 2 (Importante)
├─ Subtítulos H2/H3
├─ Descrições principais
└─ Preços

NÍVEL 3 (Suporte)
├─ Textos descritivos
├─ Detalhes de produtos
└─ Histórias

NÍVEL 4 (Contextual)
├─ Labels
├─ Elementos de forma
└─ Rodapé
```

---

## ✨ ELEMENTOS ESPECIAIS

### Buttons
```
Normal: Verde Escuro + Gradiente
┌────────────────────┐
│  Adicionar Carrinho │ (com shadow)
└────────────────────┘

Hover: Levanta + Sombra Maior
┌─────────────────────┐
│  Adicionar Carrinho │ (shadow maior)
└─────────────────────┘
```

### Cards
```
┌─────────────────────────┐
│                         │
│  Background Bege       │
│  Borda sutil            │
│  Shadow suave          │
│                         │
└─────────────────────────┘

Hover: Levanta + Borde Verde
```

### Hover Effects
```
Links: Sublinhado que cresce (left to right)
Images: Zoom leve (scale 1.02)
Cards: Levanta (translateY -8px)
Buttons: Inverte gradiente + shadow
```

---

## 🎬 ANIMAÇÕES

```
Transição Padrão: 0.3s ease
├─ Color changes
├─ Transform (hover)
└─ Box-shadow (depth)

Respeitando:
├─ prefers-reduced-motion (acessibilidade)
└─ Sem movimento automático (performance)
```

---

## 📈 ESTRUTURA DE DADOS VISUAL

```
PRODUTO {
  Imagem: URL
  Nome: String
  Preço: Float (€)
  Botão: "Adicionar"
}

COMERCIANTE {
  Avatar: Image/Emoji
  Nome: String
  Marca: String
  Especialidade: String
  História: Text
  Produtos: [Tags]
  WhatsApp: Link
}

BENEFÍCIO {
  Ícone: Emoji
  Título: String
  Descrição: Text
}
```

---

**Este visual te ajuda a entender exatamente como o site se parece e funciona! 🎨**
