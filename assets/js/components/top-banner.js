let topBanners = [
    {
        "text": "🔥 Новые! Вкусные! Полезные! <b>Фитомиллы гречевых</b> 🔥",
        "href": "link-1"
    },
    {
        "text": "Другая акция",
        "href": "link-2"
    }
];

let bannersPlace = document.querySelector('#top-banners_list');
let bannerItem = "";
    topBanners.forEach(item=>{
        bannerItem += `
            <div class="top-banner-item d-flex align-items-center justify-content-center position-relative">
                <span class="me-3 text-white top-banner-item_inner-text">${ item.text }</span>
                <a href="#${ item.link }" class="btn btn-light rounded-5 btn-sm">Посмотреть продукт 👀</a>
            </div>
        `;
    });
    bannersPlace.innerHTML = bannerItem;


// top banners slider
let topBannerItems = document.querySelectorAll('.top-banner-item');
let bgGradient = document.querySelector('#bg-gradient');
let bannerIndex = 0;

    topBannerItems.forEach((item, index)=>{
        if(index != 0){
            item.classList.add('d-none');
        }
    });

    setInterval(()=>{
        topBannerItems[bannerIndex].classList.add('d-none');
        bannerIndex = (bannerIndex + 1) % topBannerItems.length;
        topBannerItems[bannerIndex].classList.remove('d-none');

        bgGradient.classList.toggle('bg-orange');
        bgGradient.classList.toggle('bg-coral');
    }, 3000);
    