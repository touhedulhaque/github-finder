let searchBtn = document.getElementById('searchBtn');
let searchUser = document.getElementById('searchUser');
let ui = new UI;


searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if (userText != '') {
        //Fetch API
        fetch(`https://api.github.com/users/${userText}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.message == 'Not Found') {
                    //show alert
                    ui.showAlert("User not Found!!", "alert alert-danger");
                } else {
                    //show profile
                    ui.showProfile(data)
                }
            })
    } else {
        //clear Profile
        ui.clearProfile();
    }
})