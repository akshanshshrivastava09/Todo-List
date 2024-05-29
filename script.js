const inputTask= document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    
    if(inputTask.value === ''){
     alert("PLEASE! You must write something ")
    }
    else{
        
        let li = document.createElement('li');
        li.innerHTML= inputTask.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span)

    }
    inputTask.value="";
    saveData()

}

listContainer.addEventListener('click',(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    saveData()
    
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData()


}
})

function saveData(){
localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
listContainer.innerHTML=localStorage.getItem('data')
}
showData()
