const label = document.querySelector('.label');
let importText = document.querySelector('.import-text');
function labelClick(){
    label.addEventListener('click',()=>{
       if(label.click){
          label.style.color = 'blue';
        }
        else if(label == label.click){
            label.addEventListener('click',()=>{
                alert('oi')
            })
        }
    })
}
labelClick();