const searchBtn = document.querySelector("#searchBtn");
const searchUser = document.querySelector("#searchUser");

let ui = new UI();

searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;
  if (userText != "") {
    // Fetch API
    fetch(`https://api.github.com/users/${userText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Not Found") {
          //show alert
        } else {
          // show profile
          ui.showProfile(data);
        }
      });
  } else {
    // clear profile
  }
  e.preventDefault();
});
