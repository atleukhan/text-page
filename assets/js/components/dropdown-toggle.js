let dropdownBtns = document.querySelectorAll('.dropdown-toggle');
    dropdownBtns.forEach(item=>{
        let i = item.querySelector('.arrow');
        item.addEventListener('click', ()=>{
            i.classList.toggle('rotate-arrow');
        });
    });