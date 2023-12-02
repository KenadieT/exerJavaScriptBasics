const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = "Please enter all feilds";

        setTimeout(()=> msg.remove(), 3000);
    } else {
        const li = document.createElement ('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}





//const btn = document.querySelector('.btn');

//btn.addEventListener('click', (e)=> {
    //e.preventDefault();
    //document.querySelector('#my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
//});


//const ul = document.querySelector('.items');
//ul.lastElementChild.remove();
//ul.remove();
//ul.firstElementChild.textContent = 'hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//
//btn.style.background = 'red';

//const item = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

//single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//multi element
//console.log(document.querySelectorAll('.item'));
//consolelog(getElementByClassName('.item'));
//consolelog(getElementByTagName('li'));

