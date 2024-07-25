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

const resources = document.querySelectorAll('.featured-resources .resource-container > *');
const resource_container = document.querySelector('.featured-resources .resource-container');
const feedback_tiles = document.querySelectorAll('.feedback-tile-container > *');
const feedback_tiles_container = document.querySelector('.feedback-tile-container');

const client_list = document.querySelector('.clients .client-lists');
const client_list_copy = client_list.cloneNode(true).innerHTML;
client_list.insertAdjacentHTML("beforeend",client_list_copy);

function scroll(scroll_items,scroll_items_container){
    const scrollWidth = scroll_items[0].offsetWidth + Number(getComputedStyle(scroll_items_container).gap.substring(0,2));
    const copy = scroll_items_container.cloneNode(true).innerHTML;
    scroll_items_container.insertAdjacentHTML("beforeend",copy);
    const maxScroll = scroll_items.length * scrollWidth;
    var temp = 0;
    setInterval(()=>{
        if(temp >= maxScroll){
            scroll_items_container.scrollTo({left:0,behavior:"instant"});
            temp = scrollWidth;
        }
        else{
            temp += scrollWidth;
        }
        scroll_items_container.scrollTo({left:temp,behavior:"smooth"});
    },[2000])
}

scroll(feedback_tiles,feedback_tiles_container);
scroll(resources,resource_container);