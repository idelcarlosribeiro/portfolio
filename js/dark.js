
/*efeito aparecer*/
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove("show");
        }
    })
})

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element))
/*efeito aparecer FIM*/



/* Carrosel animado */
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})


/* Carrosel animado FIM*/