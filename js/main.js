var formEl=document.querySelector('.form');
var inputEl=document.querySelector('.input');
var ulElement=document.querySelector('.ul')
var cardEl=document.querySelector('.card')
var kunTartib=[ ];

formEl.addEventListener('submit', function(evt){
    evt.preventDefault()
    let inputElValue=inputEl.value;
    cardEl.textContent=null
    if(inputEl===" " || isNaN(inputElValue)){
        var obj={
            title:inputElValue
        }
        kunTartib.push(obj)
        console.log(kunTartib)
        ulElement.innerHTML=null;
        inputEl.value=null;
        for(var reja  of  kunTartib){
            let leElement=document.createElement('li')
            leElement.textContent=reja.title
            ulElement.appendChild(leElement)
        }
    }else{

        cardEl.textContent="yozingda biron narsa"
    }
    return
})



var obj={
    title:inputEl.value ,
}
