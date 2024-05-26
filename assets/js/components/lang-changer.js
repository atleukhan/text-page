let langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(item=>{
        item.onclick=()=>{
            langBtns.forEach(index=>{
                index.classList.remove('bg-orange-gradient');
                index.classList.add('bg-light');
                index.classList.remove('text-white');
            });
            item.classList.add('bg-orange-gradient');
            item.classList.remove('bg-light');
            item.classList.add('text-white');
        }
    });