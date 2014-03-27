
(function () {
    console.log("js ready");
    $(document).ready(function (e) {
        console.log("jq ready");
        var login = document.querySelector('#login-button');
        var inputUsername = document.querySelector('#Username');
        var inputPassword = document.querySelector('#Userpass');
        var user = document.querySelector('#user');


        login.addEventListener('click',loginPressed);
        function loginPressed(){
            var usernameCharacters = inputUsername.value.length;
            var passwordCharacters = inputPassword.value.length;
            if (usernameCharacters > 0 && passwordCharacters > 0){
                $(user).replaceWith('<p id="user">Welcome: '+inputUsername.value+'</p>');
//                user.innerHTML = '<p id="userLoged">Welcome: '+inputUsername.value+'</p>';

            }

        }


    });
})();
