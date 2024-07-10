const nav = document.querySelector('header nav');
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

const resources = document.querySelectorAll('.featured-resources .resource-container > *');
const resource_container = document.querySelector('.featured-resources .resource-container');
var scrollWidth = resources[0].offsetWidth + Number(getComputedStyle(resource_container).gap.substring(0,2));
var scrollLimit = ((resources.length +1) * scrollWidth) - resource_container.offsetWidth;
var temp = scrollWidth;
const scroll = () => {
    resource_container.scrollTo({left:temp,behavior:"smooth"});
    if(temp >= scrollLimit){
        resource_container.scrollTo({left:-temp,behavior:"instant"});
        temp = scrollWidth;
    }
    else{
        temp += scrollWidth;
    }
}
setInterval(scroll,[2000]);