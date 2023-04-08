const menu_toggle = document.querySelector('.toggle')
const showcase_toggle = document.querySelector('.showcase')
const explore_work = document.getElementById('explore-work')
const text_toggle = document.getElementById('text')


        menu_toggle.addEventListener('click', () => {
            menu_toggle.classList.toggle('active')
            showcase_toggle.classList.toggle('active')
            text_toggle.classList.toggle('active')
        })
        
        


