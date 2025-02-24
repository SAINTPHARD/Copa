var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30, 
    centeredSlides: true, 
    autoplay: {
      delay: 2500, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener('DOMContentLoaded', function() {

    // Adiciona rolagem suave para links de âncora (links que levam para seções na mesma página)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link (pular para a seção)

            // Seleciona o elemento alvo do link (seção com o ID correspondente)
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Faz a rolagem suave até o elemento
            });
        });
    });


    
    // Gerencia o posicionamento do submenu
    const menuItems = document.querySelectorAll('.menu__lista__link'); // Seleciona todos os itens do menu

    menuItems.forEach(item => {
        const submenu = item.querySelector('.submenu'); // Seleciona o submenu do item (se existir)
        if (submenu) {
            // Quando o mouse entra no item do menu
            item.addEventListener('mouseenter', () => {
                const rect = submenu.getBoundingClientRect(); // Obtém a posição do submenu na tela

                // Se o submenu ultrapassar a largura da janela, alinha-o à direita
                if (rect.right > window.innerWidth) { 
                    submenu.style.left = 'auto'; // Remove a posição à esquerda
                    submenu.style.right = '0'; // Define a posição à direita como 0
                }
            });
        }
    });

    // Adiciona um evento de rolagem para controlar a visibilidade do cabeçalho
    let lastScroll = 0; // Variável para armazenar a última posição de rolagem
    const header = document.querySelector('.cabecalho'); // Seleciona o elemento do cabeçalho

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset; // Obtém a posição vertical atual da rolagem

        // Se estiver no topo da página, o cabeçalho fica totalmente visível
        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)'; // Remove qualquer translação vertical
            return; // Sai da função
        }

        // Se estiver rolando para baixo e passou do cabeçalho, esconde o cabeçalho
        if (currentScroll > lastScroll && currentScroll > 50) { // 50 é o limite para esconder o cabeçalho
            header.style.transform = 'translateY(-100%)'; // Move o cabeçalho para cima, escondendo-o
        } else {
            // Se estiver rolando para cima, mostra o cabeçalho
            header.style.transform = 'translateY(0)'; // Remove qualquer translação vertical, mostrando o cabeçalho
        }

        lastScroll = currentScroll; // Atualiza a última posição de rolagem
    });
});