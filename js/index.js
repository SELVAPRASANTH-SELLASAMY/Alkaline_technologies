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
techStackNavs.forEach((techStackNav)=>{
    techStackNav.onclick = function(){
        const id = techStackNav.innerText.toLowerCase().replace(" ","_");
        var targetId = document.getElementById(`${id}`);
        techStackNavs.forEach(techStackNav => {
            techStackNav.classList.remove('active');
            const id = techStackNav.innerText.toLowerCase().replace(" ","_");
            var targetId = document.getElementById(`${id}`);
            targetId.classList.remove('display-stacks');
        });
        targetId.classList.add('display-stacks');
        techStackNav.classList.add('active');
    };
});

//TODO:Logic should be simplified