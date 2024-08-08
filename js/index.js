const nav = document.querySelector('header nav ul');
const hamburger = document.querySelector('img.menu');
hamburger.onclick = function(){
    nav.classList.toggle('show-nav');
};
nav.onclick = function(){
    nav.classList.remove('show-nav');
};
const main = document.querySelector('main');
main.onclick = function(){
    nav.classList.remove('show-nav');
}

const techStackContainers = document.querySelectorAll('.tech-stacks .stacks');
const techStackNavs = document.querySelectorAll('.tech-stacks nav li');

var currentPage = 0;
techStackNavs.forEach((techStackNav,index) => {
    techStackNav.onclick = function(){
        togglePageVisibility(index,currentPage);
        currentPage = index;
    };
});

function togglePageVisibility(pageToShow,pageToHide){
    if(pageToShow !== pageToHide){
        techStackNavs[pageToShow].classList.add('active');
        techStackNavs[pageToHide].classList.remove('active');
        techStackContainers[pageToShow].classList.add('display-stacks');
        techStackContainers[pageToHide].classList.remove('display-stacks');
    }
}

const client_list = document.querySelector('.clients .client-lists');
const client_list_copy = client_list.cloneNode(true).innerHTML;
client_list.insertAdjacentHTML("beforeend",client_list_copy);

const swiper = new Swiper('.client-feedbacks .swiper', {
    speed: 400,
    slidesPerView : 'auto',
    spaceBetween : 20,
    autoplay : true,
    loop : true,
    centeredSlides : true,
    allowTouchMove : true,
    pagination : {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    followFinger : true
});

const resource_swiper = new Swiper('.featured-resources .swiper', {
    speed: 400,
    slidesPerView : 'auto',
    spaceBetween : window.innerWidth > 850 ? 50 : 20,
    autoplay : true,
    loop : true,
    allowTouchMove : true,
    pagination : {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    followFinger : true
});