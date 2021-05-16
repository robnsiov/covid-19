const _ = document,
header = _.querySelector('header'),
toggle = _.querySelector('header i'),
menu = _.querySelector('.menu'),
arry = ['fa-bars', 'fa-times', 'rotate', 'show'],
btns = _.querySelectorAll('.menu li');
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0);
})
toggle.addEventListener('click', ()=>{
    change();
})
btns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        change();
    })
})

function change(){
    arry.forEach((element)=>{
        if (element !== 'show')
            toggle.classList.toggle(`${element}`);
        else  menu.classList.toggle(`${element}`);
    })
}