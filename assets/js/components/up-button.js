let upButton = document.querySelector('.up-button');
    window.onscroll = ()=>{
        let scrollPosition = window.scrollY;
            scrollPosition >=1000 ? upButton.classList.remove('d-none') : upButton.classList.add('d-none');
    }
    upButton.onclick=()=>{
        window.scrollTo(0,0);
    }
