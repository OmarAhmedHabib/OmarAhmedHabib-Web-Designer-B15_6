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



const dataWrap = document.querySelector("#dataWrap")
if(dataWrap){
    const allUsers = redFromStorage()
    allUsers.forEach((user ,i )=> {
        // dataWrap.innerHTML += 
        let tr = createMyElement(dataWrap, "tr")
        createMyElement(tr, "td" ,`${user.id ? user.id : i+1 }`)  
        createMyElement(tr, "td" ,user.name)  
        let td =createMyElement(tr, "td" )
        let ShowBtn =createMyElement(td,"button" ,"Show" , "btn btn-warning ms-3")  
        let EditBtn =createMyElement(td,"button" ,"Edit" , "btn btn-info ms-3")  
        let DeleteBtn =createMyElement(td,"button" ,"Delete" , "btn btn-danger ms-3")  
    })
}

// ` <tr>
//         <td></td>
//         <td>${user.name}</td>
//         <td>${user.userphone}</td>
//         <td>
//             <a href="" class=>Show</a>
//             <a href="" class="btn btn-info ms-3">Edit</a>
//             <a href="" class="btn btn-danger ms-3">Delete</a>
//         </td>
//     </tr>`        