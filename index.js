var btn = document.querySelector('#submit');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    var obj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phonenumber: document.querySelector('#phonenumber').value,
    }
    

 var ul = document.querySelector('#item');
 var li = document.createElement('li');

  //Add Delete Button//
    var deleteBtn = document.createElement('button');
    deleteBtn.id = "deleteButton";
    deleteBtn.className = "deleteButton";
    deleteBtn.appendChild(document.createTextNode('Delete'));

 //Add Edit Button//
    var editBtn = document.createElement('button');
    editBtn.id = "editButton";
    editBtn.className = "editButton";
    editBtn.appendChild(document.createTextNode('Edit'));

// localStorage.setItem(obj.email, JSON.stringify(obj));    //--> Adding the data to local storage //

axios.post("https://crudcrud.com/api/957eb77ee5b446f681dc29dc585780bb/appointmentData", obj)
.then((res)=>{
    showOutput()
})
.catch((err)=>{
    console.error(err);
})

function showOutput(){
    var textContent = "Name: " + obj.name + " Email: " + obj.email + " Phone Number: " + obj.phonenumber;
    li.textContent = textContent;
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
}

//Add Event Listener to Edit Button//
    editBtn.addEventListener('click', function() {
        editBtn.parentElement.remove();
        // document.querySelector('#name').value = obj.name;
        // document.querySelector('#email').value = obj.email;
        // document.querySelector('#phonenumber').value = obj.phonenumber;
        localStorage.removeItem(obj.email);
    });

//Add Event Listener to Delete Button//
    deleteBtn.addEventListener('click', function() {
        deleteBtn.parentElement.remove();
        localStorage.removeItem(obj.email);
    });

});









