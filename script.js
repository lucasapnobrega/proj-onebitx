const header = document.querySelector('.header')
const menuBtn = document.querySelector('.menu-bars')
const body = document.querySelector('body')
const divMenuIcon = document.querySelector('.div-menu-icon')

divMenuIcon.addEventListener('click', () => {
    header.classList.toggle('active')

    const closeBtn = document.querySelector('.x-close')

    if(closeBtn) {
        divMenuIcon.innerHTML = '<i class="bi bi-list menu-bars"></i>'
    } else {
        divMenuIcon.innerHTML = '<i class="bi bi-x-lg x-close"></i>'
    }

    document.addEventListener('click', ev => {
        if(!ev.target.classList.contains('bi-list')) {
            header.classList.remove('active')
        }
    })
})
