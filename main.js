console.log("Javascript started");

window.onload = function(){
    document.querySelectorAll(".collapseable")
        .forEach(function(item) {
            const title = item.querySelector('.article-title');
            title.addEventListener('click', function() {
                item.classList.toggle('collapsed')
            })
        })

}