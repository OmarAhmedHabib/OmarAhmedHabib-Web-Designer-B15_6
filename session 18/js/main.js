// red from strage
const redFromStorage = (keyName = "users") => {
    let data
    try{
        data = JSON.parse(localStorage.getItem(keyName))
        if(!Array.isArray(data)) throw new Error("not an Array")
    }
    catch(e){
        resetInStorage(keyName)
        data = []
    }
    return data
}
// write to storage 
const writeToStorage =(data , keyName ="users") =>  localStorage.setItem(keyName , JSON.stringify(data))

//reset stoage
const resetInStorage =(keyName = "users") =>  localStorage.removeItem(keyName )


const addNewUser = document.querySelector("#addNewUser")
if(addNewUser){
addNewUser.addEventListener("submit" , function(e){
    e.preventDefault()
    let user = {
        id: Date.now(),
        name : addNewUser.userName.value,
        email : addNewUser.userEmail.value,
        phone : addNewUser.userphone.value,
        role : addNewUser.roleUser.value,
    }
    const allData = redFromStorage()
    allData.push(user)
    writeToStorage(allData)
    
    addNewUser.reset()
    window.location.href="Home.html"
})}




const createMyElement =(parent , ele, text , classes )=>{
    const newEle =document.createElement(ele)
    parent.appendChild(newEle)
    if(text) newEle.innerHTML = text
    if(classes) newEle.className =classes
    return newEle
}

const draw =(allUsers) =>{
   dataWrap.innerHTML=""
    
        allUsers.forEach((user ,i )=> {
        // dataWrap.innerHTML += 
        let tr = createMyElement(dataWrap, "tr")
        createMyElement(tr, "td" ,`${user.id ? user.id : i+1 }`)  
        createMyElement(tr, "td" ,user.name)  
        createMyElement(tr, "td" ,user.phone)  
        let td =createMyElement(tr, "td" )
        let ShowBtn =createMyElement(td,"button" ,"Show" , "btn btn-warning ms-3")  
            ShowBtn.addEventListener("click", () => show(user));        
        

        let EditBtn =createMyElement(td,"button" ,"Edit" , "btn btn-info ms-3") 
           EditBtn.addEventListener("click" ,function(e){
             Edit(user)})
        
        let DeleteBtn =createMyElement(td,"button" ,"Delete" , "btn btn-danger ms-3")  
        DeleteBtn.addEventListener("click", function(e){
            filterData(allUsers,user.id)
        }) 
    })
}

const Edit =(user)=>{
    window.location.href=`edit.html?id=Name: ${user.name}\Email: ${user.email}\Phone: ${user.phone}\Role: ${user.role}`
}

const drawEmptyData =(cols) =>{
        let tr = createMyElement(dataWrap ,"tr",null ,
        "table-danger")
        let td = createMyElement(tr ,"td" , "no user ","text-center")
        td.colSpan=cols
}

const dataWrap = document.querySelector("#dataWrap")
if(dataWrap){
    const allUsers = redFromStorage()
    if(!allUsers.length)drawEmptyData(3)
    draw(allUsers);
}


const filterData =(allUsers ,id) =>{
    allUsers = allUsers.filter(ele =>id !=ele.id)
    writeToStorage(allUsers)
    draw(allUsers)
}
const show = (user) =>{
    let showUser =document.querySelector("#showUser")
    // alert(`Name: ${user.name}\Email: ${user.email}\Phone: ${user.phone}\Role: ${user.role}`);
     let info = createMyElement(showUser,"p",user.id)
}
     