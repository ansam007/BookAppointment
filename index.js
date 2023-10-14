var btn = document.querySelector('#submit');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    var obj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phonenumber: document.querySelector('#phonenumber').value,
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));

    var ul = document.querySelector('#item');
    var li = document.createElement('li');

    var deleteBtn = document.createElement('button');
    deleteBtn.id = "deleteButton";
    deleteBtn.className = "deleteButton";
    deleteBtn.appendChild(document.createTextNode('Delete'));

    deleteBtn.addEventListener('click', function() {
        deleteBtn.parentElement.remove();
        localStorage.removeItem(obj.email);
        });

    var textContent = "Name: " + obj.name + " Email: " + obj.email + " Phone Number: " + obj.phonenumber;
    li.textContent = textContent;
    li.appendChild(deleteBtn);
    ul.appendChild(li);
});









