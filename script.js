document.addEventListener("DOMContentLoaded", function() { 

    const baseImagens = {
        todas:['imagem.jpg', "cidade.jpg", "animal.jpg", "natureza.jpg"],
        natureza: ["natureza,jpg"],
        animal: ["animal.jpg"],
        cidade: ["cidade.jpg"],
        imagem: ["imagem.jpg"],
    }
    
        function carregaimagens(categoria){
            //selecionar elementos HMTL com base em um seletor
            const galeria = document.querySelector("#galeria-imagens");
            galeria.innerHTML = '';
    
            const imagens = baseImagens['todas'];
    
            imagens.forEach(img => {  
                console.log(img);
                galeria.innerHTML = '<div> <img src="imagens/' + img + ' " /> </div>';
            })
    
        }
    
        carregaimagens();
    
        document.body.addEventListener ('click', function (event){ 
        
            //acessa a lista de classe de onde clicou e procura pela classe botao-categoria 
            
            if(event.target.classList.contains("botao-categoria")) {
                alert(123);
            }
        
          })
        
    
         })