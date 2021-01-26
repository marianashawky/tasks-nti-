
taskKeys =["tasktitle","catagery","content"]
catagery= ['T1', 'T2', 'T3']


TASKS = JSON.parse(localStorage.getItem("TASKS"))||[]
  addUserForm = document.querySelector('#formtask')
  todotable =document.querySelector("#todotable")
todolist=[]  
// ----------------------------------------------------------------------------------------------


document.querySelector("#showHide").addEventListener ("click", function (e){
    // this.textContent=="show"?  this.textContent="hide":this.textContent="show";
    if ( this.textContent=="show" ) {
        this.textContent="hide"
    } else {
        this.textContent="show"
    }

        document.querySelector("#formsection").classList.toggle("d-none")
})

addUserForm.addEventListener('submit', function(e){
e.preventDefault()
let data = this.elements  
 let task = {}
taskKeys.forEach( Element => {    
task[Element] = data[Element].value})
        
      TASKS.push(task)
          addUserForm.reset()
          console.log(TASKS)
          localStorage.setItem("TASKS",JSON.stringify(TASKS))
          singleshow(task, TASKS.lenght-1)

       })

       deltask= function(btn, i){
        btn.addEventListener('click',function(e){
            TASKS.splice(i,1)
            localStorage.setItem('TASKS', JSON.stringify(TASKS))
            showTasks()
        })
    }

    
       
    
   
    let addElement = function(elementType, elementTxt,parent,index,eleClass=[]){
        ele = document.createElement(elementType)
        ele.textContent = elementTxt
        eleClass.forEach(c=>{ele. classList.add(c)})  
        if(elementType=="button" && elementTxt=="delete") deltask(ele, index)

       parent.appendChild(ele)
    }



let singleshow= function(task, i) {
    tr = document.createElement('tr')
    addElement('td', i+1, tr ,i)
    taskKeys.forEach(key=>{ addElement('td', task[key], tr, i,[]) })
    addElement('button', "delete", tr, i, ['btn', 'btn-warning', 'm-1'])
    todotable.appendChild(tr)


    
}


    let showTasks = function(){ 
            todotable.innerHTML=""
            TASKS.forEach((task, i)=>{
                singleshow(task, i)
        })
    }
    showTasks()    


// ..............................................div ...........field
// let showTasks = function()
// {     document.querySelector('#todotable').textContent="";

//     TASKS.forEach((task) => {
//         div= document.createElement("div");
//      h3=document.createElement("h3")
//      h3.textContent=task["tasktitle"]
//      div.appendChild(h3)
//      h4=document.createElement("h4")
//      h4.textContent=task["catagery"]
//      div.appendChild(h4)
//      p=document.createElement("p")
//      p.textContent=task["content"]
//      div.appendChild(p)
//      document.querySelector('#todotable').append(div)

//  });
