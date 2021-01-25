const NewReg = document.querySelector('#REG');
const output = document.querySelector('#add');
const FirstName = document.querySelector('#FirstName');
const LastName = document.querySelector('#LastName');
const email = document.querySelector('#email');
//const reg_user=document.querySelector('#reg_user');
const inputs = document.querySelectorAll('input');

let users = [];

const renderUsers = () => {

  output.innerHTML = '';
  users.forEach(user => {

    let html = `
    <div class="user">
      <div id="reg_user" class="text">
        <h3>${user.firstname} ${user.lastname}</h3>
        <small>${user.email}</small>
      </div>
      <span class="buttons">
      <button class="btn btn-dark">Edit</button>
      <button class="btn btn-danger">Delete</button>
    </span>
    </div>
`

    output.innerHTML += html
  })
} 

const validate = id => {
  const input = document.querySelector(id);

  if(input.value === '' || input.value.length < 2) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');

    input.focus();
    return false;

  } else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
}

const validateEmail = (email) => {
  if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    return true

  } else {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');
    
    return false

  }
}



inputs.forEach(input => {
  input.addEventListener('keyup', function() {
    // console.log(input.type);
    if(input.type === "text") {
      validate('#'+input.id);
    } else if(input.type === "email") {
      validateEmail(email)
    }
  })
})




NewReg.addEventListener('submit', function(e) {
  e.preventDefault();


  for(let i = 0; i < e.currentTarget.length; i++) {
    if(e.currentTarget[i].type === "text") {
      validate('#'+e.currentTarget[i].id)
    } else if(e.currentTarget[i].type === "email") {
      validateEmail(email);
    }
  }

  if(validate('#FirstName') && validate('#LastName') && validateEmail(email)) {
    console.log('Success')

    createUser(FirstName.value, LastName.value, email.value);
    renderUsers();
    NewReg.reset();
  } else {
    console.log('nope')
  }

})



const createUser = (firstname, lastname, email) => {
  let user = {
    id: Date.now().toString(),
    firstname,
    lastname,
    email
  }

  users.push(user);
  console.log(users);
}

/*

reg_user.addEventListener('click', function(e) {
  e.preventDefault();


  for(let i = 0; i < e.currentTarget.length; i++) {
   
  }

})*/









