const AS_PATH = "./src/assets/images/image/simbologias"
const CONTENT_EL = document.querySelector('.content')
const PREVIEW = document.querySelector('.preview')

let SELECTED_ITEMS = []

window.onload = ()=>{
    DATABASE.map((item)=>{
        CONTENT_EL.children[item.type].innerHTML += `
            <button id="bt_${item.id}" onClick="select(${item.id})">
                <div class="button_img">
                    <img src="${AS_PATH}/${item.src}" />
                </div>
                <p>${item.name}</p>
            </button>
        `
    })
}

function renderPreview(){
    const MAIN_PREVIEW = PREVIEW.querySelector('.preview_main')
    
    MAIN_PREVIEW.innerHTML = '<center><label style="font-size: 20pt; font-weight: bold;">SIMBOLOGIAS</label></center>'
    
    if (SELECTED_ITEMS.length > 6 ){
        MAIN_PREVIEW.style.overflowY = "scroll"
    }else{
        MAIN_PREVIEW.style.overflowY = ""
    }

    DATABASE.forEach(item=>{
        if(SELECTED_ITEMS.includes(item.id)){
            MAIN_PREVIEW.innerHTML += `
                <div class="preview_item">
                    <div class="preview_img"">
                        <img src="${AS_PATH}/${item.src}"/>
                    </div>
                    <label>${item.name} </label><br>
                </div>
            `
        }
    })
}

function clearPreview(){
    SELECTED_ITEMS = []
    renderPreview()
    document.querySelectorAll('.content_types')
            .forEach(
                (item)=>{
                    item.querySelectorAll('button')
                        .forEach((subitem)=>{
                            subitem.className = ''
                        })
                })
}

function dti(element){
    domtoimage.toBlob(element)
    .then(function (blob) {
        window.saveAs(blob, 'legendas.png');
    });
}

async function download(){
    element = document.querySelector('.preview_main')
    dti(element)
}


function select(id){
   
    if(!(SELECTED_ITEMS.includes(id))){
        SELECTED_ITEMS.push(id)
    }else{
        SELECTED_ITEMS =  SELECTED_ITEMS.filter(item => item !== id)
    }
    
    document.querySelector('#bt_'+id).classList.toggle('selected')

    renderPreview()
}

function button_type(bt_name){
    document.querySelector('.content_buttons').childNodes.forEach(item=>{
        
        item.className = ''
    })

    document.querySelector('.content_buttons').children[bt_name].className = 'selected'

    document.querySelectorAll('.content_types').forEach(item=>item.className = 'content_types hidden')
    
    document.querySelector('.content').children[bt_name.replace('bt_','')].classList.toggle('hidden')


}