const home = document.querySelector('.list-home');
const prices = document.querySelector('.list-prices');
const book = document.querySelector('.list-book');
const contact = document.querySelector('.list-contact')
const pricesContent = document.querySelector('.prices');
const mainContent = document.querySelector('.main');
const bookContent = document.querySelector('.inputs');
const contactContent = document.querySelector('.contact');
const booknow = document.querySelector('.bookturf');
const confirm = document.querySelector('.confirm');
const openModal = document.querySelector('.modal')
const closeModal = document.querySelector('.close');
const allItems = document.querySelectorAll('.list-item');
const allContent = document.querySelectorAll('.content');
console.log(allItems);


booknow.addEventListener('click', function(e){
    console.log(e.target);
});

/*prices.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.remove("active");
    mainContent.classList.add("hidden");
    pricesContent.classList.remove("hidden");
    prices.classList.add("active");
   

});*/

/*book.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.remove("active");
    mainContent.classList.add("hidden");
    bookContent.classList.remove("hidden");
    book.classList.add("active");

});*/

/*contact.addEventListener('click', function(e){
    e.preventDefault();
    home.classList.remove("active");
    mainContent.classList.add("hidden");
    contactContent.classList.remove("hidden");
    contact.classList.add("active");


});*/

prices.addEventListener('mouseover', function(e){
    home.classList.add("blur");
    book.classList.add("blur");
    contact.classList.add("blur");

});

prices.addEventListener('mouseout', function(e){
    home.classList.remove("blur");
    book.classList.remove("blur");
    contact.classList.remove("blur");

});

book.addEventListener('mouseover', function(e){
    home.classList.add("blur");
    prices.classList.add("blur");
    contact.classList.add("blur");

});
book.addEventListener('mouseout', function(e){
    home.classList.remove("blur");
    prices.classList.remove("blur");
    contact.classList.remove("blur");

});

contact.addEventListener('mouseover', function(e){
    home.classList.add("blur");
    prices.classList.add("blur");
    book.classList.add("blur");

});

contact.addEventListener('mouseout', function(e){
    home.classList.remove("blur");
    prices.classList.remove("blur");
    book.classList.remove("blur");
});

home.addEventListener('mouseover', function(e){
    prices.classList.add("blur");
    book.classList.add("blur");
    contact.classList.add("blur");

});

home.addEventListener('mouseout', function(e){
    prices.classList.remove("blur");
    book.classList.remove("blur");
    contact.classList.remove("blur");

});


booknow.addEventListener('click', function(e){
    console.log(e.target);

});

confirm.addEventListener('click', function(e){
    openModal.classList.remove("hidemodal");

})

closeModal.addEventListener('click', function(e){
    openModal.classList.add("hidemodal");
});

home.addEventListener('click', function(e){
    
    

    allItems.forEach(function(item){
        if(item.classList.contains("active")){
            item.classList.remove("active");
        }
    })
    home.classList.add("active");
    

    allContent.forEach(function(content){
        content.classList.add("hidden");
    })
    mainContent.classList.remove("hidden");

});

prices.addEventListener('click', function(e){
    
    

    allItems.forEach(function(item){
        if(item.classList.contains("active")){
            item.classList.remove("active");
        }
    })
    prices.classList.add("active");
    

    allContent.forEach(function(content){
        content.classList.add("hidden");
    });
    pricesContent.classList.remove("hidden");

});

book.addEventListener('click', function(e){
    

    allItems.forEach(function(item){
        if(item.classList.contains("active")){
            item.classList.remove("active");
        }
    });

    book.classList.add("active");

    allContent.forEach(function(content){
        content.classList.add("hidden");
    })

    bookContent.classList.remove("hidden");

    

});

contact.addEventListener('click', function(e){
    

    allItems.forEach(function(item){
        if(item.classList.contains("active")){
            item.classList.remove("active");
        }
    });

    contact.classList.add("active");

    allContent.forEach(function(content){
        content.classList.add("hidden");
    })

    contactContent.classList.remove("hidden");

    

});
