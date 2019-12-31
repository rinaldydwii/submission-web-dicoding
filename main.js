console.log("Javascript started");

const skills = [
    0.8,// html
    0.75,// css
    0.7,// javascript
    0.65,// php
    0.6,// sass
    0.5,// firebase
    0.55,// laravel
    0.65,// reactjs
    0.55,// react native
    0.55,// java
    0.75,// photoshop
    0.65// figma
]

window.onload = function(){
    document.querySelectorAll(".collapseable")
        .forEach(function(item) {
            const title = item.querySelector('.article-title');
            title.addEventListener('click', function() {
                item.classList.toggle('collapsed')
            })
        })

    document.querySelectorAll(".nav-link")
        .forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const offset = 109 + 15;
                const target = item.href.substr(item.href.indexOf("#"));
                const elem = document.querySelector(target);
                const elemOffset = elem.offsetTop;
                
                window.scrollTo({
                    top: elemOffset - offset,
                    behavior: "smooth",
                })
            })
        })
    document.querySelectorAll(".item-meter")
        .forEach(function(item, index) {
            // console.log(skills[index])
            const width = (skills[index] * 100) + "%";
            // console.log(width);
            item.children[0].style.width = width;
        })
}