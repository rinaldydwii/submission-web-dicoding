console.log("Javascript started");

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
}