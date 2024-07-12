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

function scroll(scroll_items,scroll_items_container){
    var copy = scroll_items_container.cloneNode(true).innerHTML;
    scroll_items_container.insertAdjacentHTML("beforeend",copy);
    var scrollWidth = scroll_items[0].offsetWidth + Number(getComputedStyle(scroll_items_container).gap.substring(0,2));
    var scrollContainerWidth = scroll_items_container.offsetWidth;
    var maxdisplayableItemsCount = scroll_items.length - Math.round((scroll_items.length * scroll_items[0].offsetWidth) / scrollContainerWidth);
    var maxItemsNeeded = scrollContainerWidth <= 365 ? (scroll_items.length + maxdisplayableItemsCount) : (scroll_items.length + maxdisplayableItemsCount - 1);
    var scrollLimit = (maxItemsNeeded * scrollWidth) - scrollContainerWidth;
    var temp = 0;
    const scroll = () => {
        if(temp >= scrollLimit){
            scroll_items_container.scrollTo({left:-temp,behavior:"instant"});
            temp = scrollWidth;
        }
        else{
            temp += scrollWidth;
        }
        scroll_items_container.scrollTo({left:temp,behavior:"smooth"});
    }
    const interval = setInterval(scroll,[2000]);
}

const resources = document.querySelectorAll('.featured-resources .resource-container > *');
const resource_container = document.querySelector('.featured-resources .resource-container');
const feedback_tiles = document.querySelectorAll('.feedback-tile-container > *');
const feedback_tiles_container = document.querySelector('.feedback-tile-container');
scroll(resources,resource_container);
scroll(feedback_tiles,feedback_tiles_container);