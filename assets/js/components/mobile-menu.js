let navs = [
    {"title": "Вопрос-ответ"},
    {"title": "Доставка и оплата"},
    {"title": "О компании"},
    {"title": "История компании"},
    {"title": "Вопрос-ответ"},
    {"title": "Контакты"},
    {"title": "Блог"},
    {"title": "Научные статьи"},
    {"title": "Полезные рецепты"},
    {"title": "Вопросы о продукции"}
];
let mobileNavs = document.querySelector('#mobile-menu-list');
let mobileNavItem="";
    navs.forEach(item=>{
        mobileNavItem += `
            <li class="mb-3"><a href="" class="text-decoration-none text-dark fs-4">${item.title}</a></li>
        `;
    });
    mobileNavs.innerHTML = mobileNavItem;

let collapseBtns = document.querySelectorAll('.collapse-btn');
    collapseBtns.forEach(item=>{
        let i = item.closest('.collapse-wrapper').querySelector('i');
        item.onclick=()=>{
            i.classList.toggle('bi-chevron-down');
            i.classList.toggle('bi-x-lg');
        }
    });

let mobileMenu = document.querySelector('#mobile-menu');
function toggleMobileMenu(event){
    let btn="";
    let target = event.target;
    if(target.tagName == 'BUTTON'){
        btn = target;
    }else{
        btn = target.closest('button');
    }
    let questionBtn = btn.closest('.mobile-buttons').querySelector('#question-button');
    btn.querySelector('i').classList.toggle('bi-list');
    btn.querySelector('i').classList.toggle('bi-x-lg');
    mobileMenu.classList.toggle('hide-mobile-menu');
    document.querySelector('header').classList.toggle('shadow');
    document.querySelector('body').classList.toggle('overflow-hidden');
    questionBtn.classList.toggle('d-none');
}