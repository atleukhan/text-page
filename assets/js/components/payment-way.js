let payments = [
    {
        "logo":"assets/images/icons/kaspi-ico.svg",
        "title":"Купить в магазине на Kaspi.kz",
        "text":"93% положительных отзывов"
    },
    {
        "logo":"assets/images/icons/ozon-ico.svg",
        "title":"Купить в магазине на Ozon",
        "text":"93% положительных отзывов"
    },
    {
        "logo":"assets/images/icons/wb-ico.svg",
        "title":"Купить в магазине на Wildberies",
        "text":"93% положительных отзывов"
    },
    {
        "logo":"assets/images/icons/yandex-ico.svg",
        "title":"Купить в магазине на Yandex Market",
        "text":"93% положительных отзывов"
    },
];
let paymentPlace = document.querySelector('#payment-way');
let paymentItem = "";
    payments.forEach(item=>{
        paymentItem +=`
            <div class="col-lg-3 col-12 mb-lg-0 mb-2">
                <div class="d-flex align-items-center">
                    <img src="${item.logo}" class="logo me-2" alt="">
                    <div class="d-flex flex-column">
                        <span class="fw-bold text-s">${item.title}</span>
                        <div class="d-flex align-items-center">
                            <i class="bi bi-star-fill text-warning me-2 text-s"></i>
                            <span class="text-secondary text-s">${item.text}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    paymentPlace.innerHTML = paymentItem;