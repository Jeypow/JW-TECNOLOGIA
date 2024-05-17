const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const busca = document.querySelector('.busca')
const projmain = document.querySelector('.projmain')
const parcmain = document.querySelector('.parcmain')
const portfolimain = document.querySelector('.portfolimain')
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        header.innerHTML = data;
        
    })
    .catch(error => console.error('Erro ao carregar o header:", error'));
    
fetch('busca.html')
    .then(response => response.text())
    .then(data => {
        busca.innerHTML = data;
        
    })
    .catch(error => console.error('Erro ao carregar o busca:", error'));

    fetch('portfolimain.html')
    .then(response => response.text())
    .then(data => {
        portfolimain.innerHTML = data;
        
    })
    .catch(error => console.error('Erro ao carregar o portifolimain:", error'));
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


    function validarCampo() {
        var texto = document.getElementById('campoTexto').value;
        var valido = document.getElementById('validaremail')
        if (texto.trim() === '') { 
           valido.style.color ="red";
           valido.innerHTML="**preencha o campo**";
            return false; // Impede o envio do formulário se o campo estiver vazio
        } else {
            alert('email Enviado!');
            return true; // Permite o envio do formulário se o campo estiver preenchido
        }
    }
