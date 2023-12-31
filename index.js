var btn = document.querySelector('#submit');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    var obj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phonenumber: document.querySelector('#phonenumber').value,
    }

    var ul = document.querySelector('#item');
    var li = document.createElement('li');

    // Create Delete Button
    var deleteBtn = document.createElement('button');
    deleteBtn.id = "deleteButton";
    deleteBtn.className = "deleteButton";
    deleteBtn.appendChild(document.createTextNode('Delete'));
    
    // Create Edit Button
    var editBtn = document.createElement('button');
    editBtn.id = "editButton";
    editBtn.className = "editButton";
    editBtn.appendChild(document.createTextNode('Edit'));

    // POST CALL // Add Data to CrudCrud //
    axios.post("https://crudcrud.com/api/117bc6685fee41a68213993960b9f35f/appointmentData", obj)
        .then((res) => {
            showOutput(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    

    // Show data on Browser //
    function showOutput(obj) {
        var textContent = "Name: " + obj.name + " Email: " + obj.email + " Phone Number: " + obj.phonenumber;
        li.textContent = textContent;
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);

        // Add Event Listener to Edit Button
        editBtn.addEventListener('click', function () {
            // Fetch the existing data for editing
            axios.get("https://crudcrud.com/api/117bc6685fee41a68213993960b9f35f/appointmentData/" + obj._id)
            .then((res) => {
                // Populate the form fields with the fetched data
                document.querySelector('#name').value = res.data.name;
                document.querySelector('#email').value = res.data.email;
                document.querySelector('#phonenumber').value = res.data.phonenumber;

                // Remove the existing data from the list
                axios.delete("https://crudcrud.com/api/117bc6685fee41a68213993960b9f35f/appointmentData/" + obj._id)
                .then((res) => {
                    deleteBtn.parentElement.remove(); // Remove the element from the webpage on successful deletion
                })
                .catch((err) => {
                    console.error(err);
                });
            })
            .catch((err) => {
                console.error(err);
            });
        });

        // Add Event Listener to Delete Button //
        deleteBtn.addEventListener('click', function () {
            // Perform DELETE operation
            axios.delete("https://crudcrud.com/api/117bc6685fee41a68213993960b9f35f/appointmentData/" + obj._id)
                .then((res) => {
                    deleteBtn.parentElement.remove(); // Remove the element from the webpage on successful deletion
                })
                .catch((err) => {
                    console.error(err);
                });
        });
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById('item');

    axios.get("https://crudcrud.com/api/117bc6685fee41a68213993960b9f35f/appointmentData")
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

        // Add Event Listener to Edit Button
        editBtn.addEventListener('click', function () {
            // Fetch the existing data for editing
            axios.get("https://crudcrud.com/api/117bc6685fee41a68213993960b9f35f/appointmentData/" + obj._id)
            .then((res) => {
                // Populate the form fields with the fetched data
                document.querySelector('#name').value = res.data.name;
                document.querySelector('#email').value = res.data.email;
                document.querySelector('#phonenumber').value = res.data.phonenumber;

                // Remove the existing data from the list
                axios.delete("https://crudcrud.com/api/117bc6685fee41a68213993960b9f35f/appointmentData/" + obj._id)
                .then((res)=>{
                    deleteBtn.parentElement.remove(); // Remove the element from the webpage on successful deletion
                })
                .catch((err)=>{
                    console.error(err);
                });    
            })
            .catch((err) => {
                console.error(err);
            });
        });
          
        // Add Event Listener to Delete Button//
        deleteBtn.addEventListener('click', function() {
            // Perform DELETE operation
            axios.delete("https://crudcrud.com/api/117bc6685fee41a68213993960b9f35f/appointmentData/" + obj._id)
            .then((res)=>{
                deleteBtn.parentElement.remove(); // Remove the element from the webpage on successful deletion
            })
            .catch((err)=>{
                console.error(err);
            });
        });
    }
});













