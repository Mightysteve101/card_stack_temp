
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const card_1 = document.querySelector(".card-1");
    const card_2 = document.querySelector(".card-2");
    const card_3 = document.querySelector(".card-3");
    const card_4 = document.querySelector(".card-4");
    const card_5 = document.querySelector(".card-5");
    const card_6 = document.querySelector(".card-6");
    const card_7 = document.querySelector(".card-7");
    const card_8 = document.querySelector(".card-8");

    container.onscroll = function(){
        moveCards();
    };

    function moveCards(){
       const scrollTop = container.scrollTop;

        if (scrollTop > 300){
            card_1.style.transform = 'translateY(-200%) rotate(-45deg)';
        } else {
            card_1.style.transform = '';
        }

        if (scrollTop > 600){
            card_2.style.transform = 'translateY(-200%) rotate(-45deg)';
        } else {
            card_2.style.transform = '';
        }

        if (scrollTop > 900){
            card_3.style.transform = 'translateY(-200%) rotate(-45deg)';
        } else {
            card_3.style.transform = '';
        }

        if (scrollTop > 1200){
            card_4.style.transform = 'translateY(-200%) rotate(-45deg)';
        } else {
            card_4.style.transform = '';
        }

        if (scrollTop > 1500){
            card_5.style.transform = 'translateY(-200%) rotate(-45deg)';
        } else {
            card_5.style.transform = '';
        }

        if (scrollTop > 1800){
            card_6.style.transform = 'translateY(-200%) rotate(-45deg)';
        } else {
            card_6.style.transform = '';
        }

        if (scrollTop > 2100){
            card_7.style.transform = 'translateY(-200%) rotate(-45deg)';
        } else {
            card_7.style.transform = '';
        }

        if (scrollTop > 2300){
            card_8.style.transform = 'translateY(-200%) rotate(-45deg)';
        } else {
            card_8.style.transform = '';
        }

        // Add similar conditions for other cards as needed
    };
});



/**
 *     card_1.addEventListener("scroll", function(){
        moveUp1();
    });

    function moveUp1(){
        card_1.style.transform = 'translateY(-200%) rotate(-45deg)';
    }

    card_2.addEventListener("scroll", function(){
        moveUp2();
    });

    function moveUp2(){
        card_2.style.transform = 'translateY(-200%) rotate(-45deg)';
    }
 */