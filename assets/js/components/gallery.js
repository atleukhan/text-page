let slides = [
    { "src":"/assets/images/products/123456/Instagram post - 1.webp" },
    { "src":"/assets/images/products/123456/Instagram post - 2.webp" },
    { "src":"/assets/images/products/123456/Instagram post - 3.webp" },
    { "src":"/assets/images/products/123456/Instagram post - 4.webp" },
    { "src":"/assets/images/products/123456/Instagram post - 5.webp" },
];
let fancyCarousel = document.querySelector('.f-carousel');
let slideItem = "";
    slides.forEach(item=>{
        slideItem += `
        <div class="f-carousel__slide" data-fancybox="gallery" data-thumb-src="${item.src}" data-src="${item.src}">
            <img alt="" class="w-100" data-lazy-src="${item.src}"/>
            <button class="doc-image_button position-absolute z-2 p-0 bg-orange-gradient border-0 rounded-circle circle-button text-decoration-none d-flex flex-column align-items-center justify-content-center">
                <i class="bi bi-arrows-angle-expand text-white fs-4"></i>
            </button>
        </div> 
        `;
    });
    fancyCarousel.innerHTML = slideItem;

    new Carousel(document.getElementById("myCarousel"), {
        Dots: false,
        Thumbs: {
          type: "classic",
        },
        Dots: {
            minCount: 2,
          },
      }, { Thumbs });