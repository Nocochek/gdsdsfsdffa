const blocks = document.querySelectorAll('.repair-block-2')

blocks.forEach(function(e){
    e.addEventListener('click',function(){
        const list = e.querySelector('.ol')
        const text = e.querySelector('h3')
        const svg = e.querySelector('svg')

        
        svg.classList.toggle('rotate')
        text.classList.toggle('yellowText')
        list.classList.toggle('hidden')
    })
})