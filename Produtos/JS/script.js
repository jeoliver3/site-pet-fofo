    itensJson.map((item, index) => {
    
    //setando a quantidade de itens
    let animalItem = document.querySelector('.models .animal-item').cloneNode(true)
    //funçao clonenode faz uma copia de um elemento html

    //injetando o html
    document.querySelector('.animal-area').append(animalItem);
    
    //preenchendo infos de cada animal
    animalItem.querySelector('.animal-item--img img').src= item.img
    animalItem.querySelector('.animal-item--price').innerHTML = `R$ ${item.price.toFixed(2)}` //fixa 2 casas decimais
    animalItem.querySelector('.animal-item--name').innerHTML = item.name
    animalItem.querySelector('.animal-item--descricao').innerHTML = item.description
   
    // quando o produto for clicado
    animalItem.querySelector('.animal-item a').addEventListener('click', (e) =>{
        e.preventDefault()

    // abrir janela do carrinho    
    document.querySelector('.animalWindowArea').style.display = 'flex';
    document.querySelector('.btn-lulu').addEventListener('click',() => {
            
        
        let cep = document.getElementById("cep").value;

        alert("para o cep " + cep + " valor fixo de R$20,00" );
    })
    
   
    // preenchendo dados da janela
    document.querySelector('.animalImage img').src = item.img
    document.querySelector('.animalInfo h1').innerHTML = item.name
    document.querySelector('.animalInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`

    })
    // fechando a janela 
        document.querySelector('.animalnfo--cancelBtn').addEventListener('click', () => {
        document.querySelector('.animalWindowArea').style.display = 'none'
              
        
        })
    
       
    // cart icon - ao clicar no carrinho
    
        const cartButton = document.querySelector('.animalInfo--addButton');
        const closeCartButton = document.querySelector('span.material-symbols-outlined'); 
        const cartItens = [];
        const elementsToHide = document.querySelectorAll("[data-empty-cart]");
        const createCartItem = (item) => {
            
        };

        // ao clicar no icone de fechar, ele não aparece
        closeCartButton.onclick = () => {
            const cart = document.querySelector(".cart");

            cart.style.display = "none";
        }


            // ao clicar no btn de add ao carrinho, aparece o carrinho
        cartButton.addEventListener("click", () => {
            const cart = document.querySelector(".cart");

            cart.style.display = "block";
        })

        //validando se o carrinho estiver vazio, mostrar os elementos.
        if(cartItens.length === 0){
            
            elementsToHide.forEach((element) =>{
                element.style.display = "block";
            });
        }
            else{
                elementsToHide.forEach((element) =>{
                    element.style.display = "none";
                })
            }
        
    
});

