const AS_PATH = "./src/assets/images/image/simbologias"
const CONTENT_EL = document.querySelector('.content')
let SELECTED_ITEMS = []

window.onload = ()=>{

    DATABASE.map((item)=>{

        CONTENT_EL.innerHTML += `
            <button id="bt_${item.id}" onClick="select(${item.id})">
                <div class="button_img">
                    <img src="${AS_PATH}/${item.src}" />
                </div>
                <p>${item.name}</p>
            </button>
        `
    })
}



function select(id){
   
    if(!(SELECTED_ITEMS.includes(id))){
        SELECTED_ITEMS.push(id)
    }else{
        SELECTED_ITEMS =  SELECTED_ITEMS.filter(item => item !== id)
    }
    
    document.querySelector('#bt_'+id).classList.toggle('selected')
}