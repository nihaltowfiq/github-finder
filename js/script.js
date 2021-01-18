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
        if (data.message == "Not Found") {
          //show alert
          ui.showAlert("User not Found!", "alert alert-danger");
        } else {
          // show profile
          ui.showProfile(data);
          // ui.showAlert("User Found!", "alert alert-success");
        }
      });
  } else {
    // clear profile
    ui.clearProfile();
  }
  e.preventDefault();
});
