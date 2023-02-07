
const data = beer_data.slice();

const inputSearch=document.querySelector('.input')
const displayUI = document.querySelector('.product-display')


const displayData = () =>{
    displayUI.innerHTML=''
    data.forEach((el)=>{
        displayUI.innerHTML+=`
            <div class="product-box">
            <img src=${el.img_url} alt=${el.productname} >
            <div class="drink-info">
            <h2 class="drink-name">${el.productname}</h2>
            <p class="type">${el.type}</p>
            </div>
            <p class="price">$${el.price}</p>
            </div>
        `
    })
}

displayData();

const searchItems=(e)=>{
    displayUI.innerHTML=''
    console.log(e.target.value)
    let searchData = data.filter((el)=>el.productname.includes(e.target.value))
    console.log(searchData)
    searchData.forEach((el)=>{
        displayUI.innerHTML+=`
            <div class="product-box">
            <img src=${el.img_url} alt=${el.productname} >
            <div class="drink-info">
            <h2 class="drink-name">${el.productname}</h2>
            <p class="type">${el.type}</p>
            </div>
            <p class="price">$${el.price}</p>
            </div>
        `
    })

    if(searchData.length<=0){
        console.log('hell')
        displayUI.innerHTML+=`
        <div class="product-box">
            <h2>Drinks Not Found</h2>
        </div>
        `
    }
}

inputSearch.addEventListener('input',searchItems)