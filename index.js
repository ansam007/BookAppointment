var btn = document.querySelector('#submit');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    var obj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phonenumber: document.querySelector('#phonenumber').value,
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));

    var outputList = document.querySelector('#item');
    var listItem = document.createElement('li');
    listItem.textContent = "Name: " + obj.name + " Email: " + obj.email + " Phone Number: " + obj.phonenumber;
    outputList.appendChild(listItem);
})




