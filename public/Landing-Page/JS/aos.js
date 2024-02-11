const hiddenElements = document.querySelectorAll('.hidden')
const observer = new IntersectionObserver((enteries) =>{
    enteries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el))