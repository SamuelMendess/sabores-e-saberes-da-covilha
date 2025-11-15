// Aguarda o documento HTML estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // ----- MENU HAMBURGUER -----
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ----- ATENÇÃO: COLOQUE O NÚMERO DA ARTESÃ AQUI -----
    // Formato internacional: (Código do País) + (Número)
    // Exemplo para Portugal (usando o contexto do projeto): 3519XXXXXXXX
    const numeroWhatsApp = '351912466210';
    // ----------------------------------------------------


    // Seleciona todos os botões "Adicionar"
    const productButtons = document.querySelectorAll('.add-to-cart-btn');
    
    // Seleciona os elementos do carrinho
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const cartCountSpan = document.getElementById('cart-count'); // O novo contador no ícone
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartEmptyMessage = document.querySelector('.cart-empty');

    let cart = []; // Array para guardar os itens do carrinho
    let total = 0; // O valor total do carrinho

    // Adiciona um "ouvinte" para cada botão "Adicionar"
    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);

            // Adiciona o item ao array do carrinho
            cart.push({ name, price });
            // Adiciona o preço ao total
            total += price;

            // Atualiza o visual do carrinho
            updateCartVisual();
            
            // Mensagem simples para o usuário
            alert(`${name} foi adicionado ao seu carrinho!`); // pt-BR
        });
    });

    // Função para atualizar o HTML do carrinho
    function updateCartVisual() {
        // Se o carrinho não estiver vazio, remove a mensagem "carrinho vazio"
        if (cart.length > 0 && cartEmptyMessage) {
            cartEmptyMessage.style.display = 'none';
        }

        // Limpa a lista antiga (mas não a mensagem de vazio, caso exista)
        cartItemsList.querySelectorAll('li:not(.cart-empty)').forEach(li => li.remove());

        // Adiciona cada item do carrinho como um <li>
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
            // Insere o novo item *antes* da mensagem de "carrinho vazio"
            cartItemsList.insertBefore(li, cartEmptyMessage);
        });

        // Atualiza o valor total
        cartTotalSpan.textContent = total.toFixed(2);
        // Atualiza a contagem no ícone
        cartCountSpan.textContent = cart.length;
    }

    // Função do botão "Finalizar Pedido"
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!'); // pt-BR
            return;
        }

        // 1. Monta a mensagem do pedido
        let message = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
        
        cart.forEach(item => {
            message += `- ${item.name} (${item.price.toFixed(2)}€)\n`;
        });
        
        message += `\n*Total do Pedido: ${total.toFixed(2)}€*`;

        // 2. Codifica a mensagem para a URL
        const encodedMessage = encodeURIComponent(message);

        // 3. Cria o link do WhatsApp
        const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${encodedMessage}`;

        // 4. Abre o WhatsApp numa nova aba
        window.open(whatsappURL, '_blank');
    });

});