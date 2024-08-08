let form = document.querySelector("form");
let main = document.querySelector(".main");

form.addEventListener("submit", (data) => {
  let checkstatus = 0;
  let name = event.target.uname.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  for (v of userData) {
    if (v.email === email || v.phone === phone) {
      checkstatus = 1;
      break;
    } 
  }
  if (checkstatus === 1) {
    alert("Data is already exist");
    event.target.reset();
  } else {
    userData.push({
      name: name,
      email: email,
      phone: phone,
    });
    localStorage.setItem("userDetails", JSON.stringify(userData));
    event.target.reset();
    display();
  }

  data.preventDefault();
});

const display = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  main.innerHTML = "";

  userData.forEach((element, index) => {
    main.innerHTML += `<div class="items" >
                 <span onclick="removedata(${index})">&times;</span>
                 <h4>Name :</h4>
                 <h5>${element.name}</h5>
     
                 <h4>Email :</h4>
                 <h5>${element.email}</h5>
     
                 <h4>Phone :</h4>
                 <h5>${element.phone}</h5>
             </div>`;
  });
};
const removedata = (index) => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index, 1);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  display();
};
display();
