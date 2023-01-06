// 获取小卡片
const wrap = document.getElementsByClassName('wrap')[0];
const cards = document.querySelectorAll('.card');
console.log(cards); // HTMLCollection(5)  | NodeList(5)

/* classList: DOMTokenList(2) */
cards.forEach(item => {
    item.addEventListener('mouseover', ()=>{

        removeClassName();
        
        item.classList.add('active')
    })
})

function removeClassName(){
    cards.forEach(item => {
        item.classList.remove("active")
    })
}