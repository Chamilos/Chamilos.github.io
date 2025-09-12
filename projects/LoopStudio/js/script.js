

document.getElementById('menu-btn').addEventListener("click", (e)=> {
    document.getElementById('menu-btn').classList.toggle('open');
    document.getElementById('menu').classList.toggle('hidden');
    document.getElementById('menu').classList.toggle('flex');
});