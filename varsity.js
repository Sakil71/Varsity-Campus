const menu = document.getElementById('menu');
const hideMenuButton = document.getElementById('hideMenu');

document.getElementById('hideMenu').addEventListener('click', ()=>{
    menu.style.display = 'none';
})

document.getElementById('showMenu').addEventListener('click', ()=>{
    menu.style.display = 'block';
    menu.classList.add('bg-[#f44336]', 'h-[100vh]', 'w-48', 'absolute', 'top-0', 'right-0', 'z-10', 'text-right', 'p-5', 'transition', 'duration-1000');
    hideMenuButton.style.display = 'block';
})