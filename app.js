let addUser = document.querySelector(".button");
addUser.addEventListener("click", getRandomUser);

async function getRandomUser() {
  // document.querySelector("section").innerHTML = " "
  const res = await fetch("https://randomuser.me/api?results=10");
  const data = await res.json();
  const user = await data.results;

  for (i = 0; i < user.length; i++) {
    let dataArray = user[i];
    // console.log(user[i]);
    createUserDetails(user[i]);
  }
}
function createUserDetails(type) {
  let userCard = document.createElement("section");

  let userProfilePicture = document.createElement("img");
  userProfilePicture.src = `${type.picture.large}`;

  let userFullName = document.createElement("h3");
  userFullName.innerText = `${type.name.title}  ${type.name.first}, ${type.name.last}`;

  let userAge = document.createElement("p");
  userAge.innerText = `Age: ${type.dob.age}`;

  let userEmailAdress = document.createElement("p");
  userEmailAdress.innerText = `${type.email}`;

  let userPhone = document.createElement("p");
  userPhone.innerText = `${type.phone}`;

  let userAddress = document.createElement("p");
  userAddress.innerText = `${type.location.city}, ${type.location.country}`;

  userCard.appendChild(userProfilePicture);
  userCard.appendChild(userFullName);
  userCard.appendChild(userAge);
  userCard.appendChild(userEmailAdress);
  userCard.appendChild(userPhone);
  userCard.appendChild(userAddress);
  document.querySelector("main").appendChild(userCard);
}
