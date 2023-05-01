const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

//Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(){
    let availableBooks=[]
    for(b of books){
        if(b.isAvailable===true){
            availableBooks.push(b.title)

        }
    }
    return availableBooks
}
console.log(getAvailableBooks());

//2. Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.
function getBooksByAuthor(author){
    let booksByAuthor=[]
for(b of books){
    if(b.author===author){
        booksByAuthor.push(b.title)
    }
}
return booksByAuthor
}
console.log(getBooksByAuthor('J.D. Salinger'));

//Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
//     publicationYear, and isAvailable).
//  function addNewBook(book){
//     for(book of books){
// books.book.title=""
// books.book.author=""
// books.book.publicationYear=
    
//  }
// }

//Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
 function checkoutBook(title){
    for(b of books){
        if(b.title===title && b.isAvailable===true){
            return b.isAvailable===false
            break;
        }
        else if(b.isAvailable===false)
        {
            console.log("book is not available");
        }
    }
    
 }
checkoutBook('The Great Gatsby')

//Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(title){
for(b of books){
    if(b.isAvailable===false){
        return b.isAvailable===true
    }
    else{
        console.log(b+"does not belong to the library");
    }
}
}
returnBook()