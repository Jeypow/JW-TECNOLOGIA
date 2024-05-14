const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const main = document.querySelector('.main')
const projmain = document.querySelector('.projmain')
const parcmain = document.querySelector('.parcmain')
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        header.innerHTML = data;
        
    })
    .catch(error => console.error('Erro ao carregar o header:", error'));
    
fetch('main.html')
    .then(response => response.text())
    .then(data => {
        main.innerHTML = data;
        
    })
    .catch(error => console.error('Erro ao carregar o main:", error'));

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        footer.innerHTML = data;
        
    })
    .catch(error => console.error('Erro ao carregar o footer:", error'));

    fetch('projmain.html')
    .then(response => response.text())
    .then(data => {
        projmain.innerHTML = data;
        
    })
    .catch(error => console.error('Erro ao carregar o projmain:", error'));


    fetch('parcmain.html')
    .then(response => response.text())
    .then(data => {
        parcmain.innerHTML = data;
        
    })
    .catch(error => console.error('Erro ao carregar o projmain:", error'));


      // Salvar a posição atual da página antes de atualizar
      window.onbeforeunload = function() {
        window.sessionStorage.setItem('scrollPosition', window.scrollY);
    };

    // Restaurar a posição da página após a atualização
    window.onload = function() {
        var scrollPosition = window.sessionStorage.getItem('scrollPosition');
        if (scrollPosition !== null) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
            window.sessionStorage.removeItem('scrollPosition');
        }
    };