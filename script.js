
let borderedWrapper = document.querySelectorAll('.bordered-wrapper');


borderedWrapper.forEach((item)=>{
    item.addEventListener('click', function selected(event){
        
            if(item.classList.contains('selected')){
            console.log('to disable')
            item.classList.remove('selected')
            item.classList.add('disabled')
            item.parentNode.childNodes[3].classList.add('changer-none')
            item.parentNode.childNodes[5].classList.add('changer-none')
            item.parentNode.lastElementChild.classList.add('changer')
            item.onmouseenter = function(){
                return false
            }
            item.onmouseover = function(){
                return false
            }
            
            }
            else if(item.classList.contains('disabled')){
                item.classList.remove('disabled')
                item.parentNode.childNodes[3].classList.toggle('changer-none')
                item.parentNode.childNodes[5].classList.toggle('changer')
                item.parentNode.lastElementChild.classList.remove('changer')
                console.log('to default')
                item.onmouseenter = function(){
                    return false
                }
                item.onmouseover = function(){
                    return false
                }
            }   
            else{
                item.classList.toggle('selected')
                item.parentNode.childNodes[3].classList.toggle('changer-none')
                item.parentNode.childNodes[5].classList.remove('changer-none')
                item.parentNode.childNodes[5].classList.toggle('changer')
                console.log('to selected')
                item.onmouseover = function(){
                    item.childNodes[1].childNodes[1].innerHTML = "Котэ не одобряет?"
                    item.childNodes[1].childNodes[1].style.color = '#E52E7A'
                }
                item.onmouseout = function(){
                    item.childNodes[1].childNodes[1].innerHTML = "Сказочное заморское яство"
                    item.childNodes[1].childNodes[1].style.color = '#666666'
                }
                item.onclick = function(){
                    item.childNodes[1].childNodes[1].innerHTML = "Сказочное заморское яство"
                    item.childNodes[1].childNodes[1].style.color = '#666666'
                }
            }
        
            
        
    })
})


let linkBuy = document.querySelectorAll('.link')

linkBuy.forEach((item) => {
    item.addEventListener('click',function(){
        item.parentNode.parentNode.querySelector(".bordered-wrapper").classList.toggle('selected')
        item.parentNode.parentNode.childNodes[5].classList.remove('changer-none')       
        item.parentNode.parentNode.childNodes[3].classList.toggle('changer-none')
        item.parentNode.parentNode.childNodes[5].classList.toggle('changer')       
    })
})

