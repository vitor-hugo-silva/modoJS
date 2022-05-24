const booksByCategories= [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            }, 
            {
                title:"O homem mais rico da Babilônia",
                author:"George S. Clason"
            }, 
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiosaki e Sharon L. Lechter"
            }

        ]
    },
    {

        category: "Inteligência Emocional",
        books:[
            {
                title: "Você é insubstituivel",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]

    }



]

//!Total de categorias
const countCategories = booksByCategories.length
console.log(countCategories)

//! Livros em cada
for(let category of booksByCategories){

   console.log('Total de livros da categoria: ' + category.category)
   console.log(category.books.length)

}

//! Autores
function countAuthors(){

    //Pega categorias 
    let authors = []

    for(let category of booksByCategories){

        //Repeticao dentro nos livros de cada categoria
        for(let book of category.books){

            //* Verifica o index para não repetir o nome 
            
            if(authors.indexOf(book.author) == -1){
                //* Se voltar -1 entao TRUE o author é adcionado
                authors.push(book.author)

            }
            //* Se um numero de index for retornado entao false, nao entra no if
        }

        console.log(`Total de autores são: ${authors.length}`)

    }

}
countAuthors()

//!booksOfAugustoCury
//! Transformar booksOfAugustoCury em uma funcao mais dinamica
function booksOfAuthor(author){

    //Pega categorias 
    let books = []

    for(let category of booksByCategories){

        //Repeticao dentro nos livros de cada categoria
        for(let book of category.books){

           
            
            if(book.author === author){

            
                books.push(book.title)

            }
            
        }
        //^Utilizacao do join() para uma melhor formatacao 
        console.log(`livros do autor ${author}: ${books.join(", ")}`)

    }

}
booksOfAuthor('Augusto Cury')
booksOfAuthor('Stephen R. Covey')
booksOfAuthor('Robert T. Kiosaki e Sharon L. Lechter')
booksOfAuthor('T. Harv Eker')
booksOfAuthor('George S. Clason')


