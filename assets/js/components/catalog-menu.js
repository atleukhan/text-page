function toggleCatalog(event){
    let target = event.target;
    let btn;
    let catalogMenu = document.querySelector('#catalog-menu');
    if(target.tagName == 'BUTTON'){
        btn = target;
    }else{
        btn = target.closest('button');
    }
    let i = btn.querySelector('i');
    catalogMenu.classList.toggle('hide-catalog-menu');
    i.classList.toggle('bi-list');
    i.classList.toggle('bi-x-lg');
}