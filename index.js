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

    // Add Delete Button
    var deleteBtn = document.createElement('button');
    deleteBtn.id = "deleteButton";
    deleteBtn.className = "deleteButton";
    deleteBtn.appendChild(document.createTextNode('Delete'));

    // Add Edit Button
    var editBtn = document.createElement('button');
    editBtn.id = "editButton";
    editBtn.className = "editButton";
    editBtn.appendChild(document.createTextNode('Edit'));

    axios.post("https://crudcrud.com/api/fd680b27414a425791e78da08e8d9390/appointmentData", obj)
    .then((res)=>{
        showOutput(res.data);
    })
    .catch((err)=>{
        console.error(err);
    })

    function showOutput(obj){
        var textContent = "Name: " + obj.name + " Email: " + obj.email + " Phone Number: " + obj.phonenumber;
        li.textContent = textContent;
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);

        // Add Event Listener to Edit Button
        editBtn.addEventListener('click', function() {
            editBtn.parentElement.remove();
            document.querySelector('#name').value = obj.name;
            document.querySelector('#email').value = obj.email;
            document.querySelector('#phonenumber').value = obj.phonenumber;
        });

        // Add Event Listener to Delete Button
        deleteBtn.addEventListener('click', function() {
            // Perform DELETE operation
            axios.delete("https://crudcrud.com/api/fd680b27414a425791e78da08e8d9390/appointmentData/" + obj._id)
            .then((res)=>{
                deleteBtn.parentElement.remove(); // Remove the element from the webpage on successful deletion
            })
            .catch((err)=>{
                console.error(err);
            });
        });
    }
});


window.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById('item');

    axios.get("https://crudcrud.com/api/fd680b27414a425791e78da08e8d9390/appointmentData")
        .then((res) => {
            res.data.forEach((obj) => {
                showOutput2(obj);
            });
        })
        .catch((err) => {
            console.error(err);
        });

    function showOutput2(obj) {
        var li = document.createElement('li');
        var deleteBtn = document.createElement('button');
        deleteBtn.id = "deleteButton";
        deleteBtn.className = "deleteButton";
        deleteBtn.appendChild(document.createTextNode('Delete'));

        var editBtn = document.createElement('button');
        editBtn.id = "editButton";
        editBtn.className = "editButton";
        editBtn.appendChild(document.createTextNode('Edit'));

        var textContent = "Name: " + obj.name + " Email: " + obj.email + " Phone Number: " + obj.phonenumber;
        li.textContent = textContent;
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);

        // Add Event Listener to Edit Button//
        editBtn.addEventListener('click', function () {
            document.querySelector('#name').value = obj.name;
            document.querySelector('#email').value = obj.email;
            document.querySelector('#phonenumber').value = obj.phonenumber;
            editBtn.parentElement.remove();   
        });

        // Add Event Listener to Delete Button//
        deleteBtn.addEventListener('click', function() {
            // Perform DELETE operation
            axios.delete("https://crudcrud.com/api/fd680b27414a425791e78da08e8d9390/appointmentData/" + obj._id)
            .then((res)=>{
                deleteBtn.parentElement.remove(); // Remove the element from the webpage on successful deletion
            })
            .catch((err)=>{
                console.error(err);
            });
        });
    }
});













