function menuShow(){
    //INICIO FUNÇÃO MENU MOBILE
    
    let menuMobile = document.querySelector('.mobile-menu');//SELECIONANDO AS PROPRIEDADES DA CLASSE
    if(menuMobile.classList.contains('open')){//VERIFICANDO SE TEM A CLASSE NO ELEMENTO
        menuMobile.classList.remove('open');//REMOVENDO A CLASSE QUE MOSTRA O ELEMENTO DA TEA
        document.querySelector('.icon').src = "imagens/icones/menu_white_36dp.svg" //TROCANDO A IMAGEM DO BOTAO MOBILE
    }else{
        menuMobile.classList.add('open');//ADICIONANDO A CLASSE PARA APRESENTAR O MENU OCULTO
        document.querySelector('.icon').src = "imagens/icones/close_white_36dp.svg"//TROCANDO A IMAGEM DO MENU MOBILE
    }
}

//FIM FUNÇÃO MENU MOBILE