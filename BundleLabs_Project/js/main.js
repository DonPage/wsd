/*
 Bundle Labs
 Author: Don Page
 */
// Fix it

(function ($) {

    $("#projectsHTML").sortable();
    $("#projectsHTML").disableSelection();
    var staticName = null;
    var staticEmail = null;
    var staticPhone = null;
    var staticAva = null;
    var staticBackground = null;
    var edititingProject = null;
    var defaultPicture = "images/call-to-action2.png";
    var commUserID = null;
    var editProfileAva = $('#newAvatar').val();
    var editProfileBackground = $('#newBackground').val();




    //************************************* %TEXT_PLUGIN **************************************
    $('.tlt').textillate({ in: { effect: 'rollIn' } });

    //************************************* %FRIEND_BUNDLE_COUNT **************************************
    count();
    function count(){
        var numBundles = $(".projects li").length;
        $('#b-number').html(numBundles);

        var friendCount = $(".projects-u li").length;
        $('#f-number').html(friendCount);
    }

    //************************************* %COMMUNITY_TAB **************************************
    //TODO: The community tab is still very buggy, need to fix the function splitter() later.
    loadCommunity();
    function loadCommunity(){
    $.getJSON("xhr/get_user_list.php", function (obj) {
//        console.log(obj.users.length);
        for (var i = 0; i < obj.users.length; i++){
//            console.log(obj.users[i].avatar);
            var avatarString =  obj.users[i].avatar;
            splitter(avatarString);

            var community =

                "<li class='OpenUserBundles'>"
                + "<h2 class='pad'>{{name}}</h2>" +
//                 "<div class='u-avatar' style='background-image: url('"+ backgroundSplit +"');'></div>" +
            "<div  class='u-avatar' id='" + obj.users[i].user_n + "'></div>"
                +"</strong></li>";

            var template = Handlebars.compile(community);
            var data = { "name": obj.users[i].first_name};
            var result = template(data);
            $('#community-projectsHTML').append(result).slideDown('slow');
            $('#'+obj.users[i].user_n+'').css('background-image', 'url('+avatarSplit+')');
//            $('#'+obj.users[i].user_n+'').css('background-position', 'no-repeat center');
        }
    });
    }
    //community user bundles
    $('.OpenUserBundles').live('click',  function(){
       commUserID = $(this).attr('id');
//        console.log(commUserID);
    });

    //************************************* %SPLIT_AVATAR_BACKGROUND **************************************
    //TODO: this is used to fix people in the database that don't have avatar or background. This needs to be fixed later
    var backgroundSplit = null;
    var avatarSplit =  null;
    function splitter(ava){
        if (ava == null || ava == "" || ava == " "){
            backgroundSplit = "gray";
            avatarSplit = "gray";

        } else{

            var startSplit = ava.split(" ");
            if (startSplit[0] == null || startSplit[0] == "" || startSplit[0] == " "){ //these are just fail safes if the user hasnt uploaded a picture or background
                avatarSplit = "gray";
            }
            if (startSplit[1] == null || startSplit[1] == "" || startSplit[1] == " "){
                backgroundSplit = defaultPicture;
            } else {
                avatarSplit = startSplit[0];
                backgroundSplit = startSplit[1];
            }
        }
    }

    //************************************* %NEW_PROJECT_ORDER **************************************
//TODO: this makes sure new projects spawn at the bottom and it's given the right data object. This need to be redone.
    function findOrderSort(){
        var listItemLength =  $(".projects li").length;
        for (var i = 0; i < listItemLength; i++) {
            var currList = $('.projects li:nth-child('+i+')');
            console.log(i);
        }
        return ++ i;
    }
    //************************************* %SAVE_BUNDLE_POSITION **************************************
    $('#saveButton').on('click', function (e) {
        var listItemLength = $(".projects li").length;
        var listItemID = $(".projects li").attr('id');
        for (var i = 0; i < listItemLength; i++){
            var p = i + 1;
            var currProjectItem = ($(".projects li:nth-child("+p+")").attr('id'));
            console.log(currProjectItem);
            var splitProject = currProjectItem.split('project');
            if (p == undefined){
//                console.log("not rewriting ajax");
            }else{
//                console.log("saving position of project"+splitProject[1]);

                $.ajax({
                    url: "xhr/update_project.php",
                    type: "post",
                    dataType: "json",
                    data: {
                        projectID: splitProject[1],
                        teamID: p
                    },
                    success: function (responce) {
//                        console.log('saving position...');

                        if (responce.error) {
                            alert(responce.error);
//                            console.log('saving position ERROR.');

                        } else {
//                            console.log('Saving position COMPLETE!');
//                            clearProjects();
//                            loadProjects();

                        }
                    }
                })
            }

        }


    });

    //************************************* %LOGIN **************************************
    $('#loginButton').click(function (e) {
        e.preventDefault();
        var user = $('#user').val();
        var pass = $('#pass').val();
        console.log('This notifies you if the password is working');
        $.ajax({
            url: 'xhr/login.php',
            type: 'post',
            dataType: 'json',
            data: {
                username: user,
                password: pass
            },

            success: function (response) {
                console.log("Test User");
                if (response.error) {
                    alert(response.error);
                } else {

                    window.location.assign('profile.html');
//                    userLogin();
                }
            }
        });
    });

    //************************************* %LOGOUT **************************************
    $('#logOut').click(function (e) {
        e.preventDefault();
        $.get('xhr/logout.php', function () {
            window.location.assign('index.html')
        })
    });

    checkLogin();
    function checkLogin() {
        $.getJSON("xhr/check_login.php", function (obj) {
            $.each(obj, function (key, value) {
                $('#currentUser').html(value.first_name);
                staticName = value.first_name;
                setAvatar();
            });
        });

    }

    //************************************* %SET_USER_PICTURES **************************************
//TODO: redirect this to split function. Split handles people with no avatar but a background better than setAvatar.
    function setAvatar() {
        $.getJSON("xhr/get_user.php", function (obj) {
            var userAvatar = obj.user.avatar;
            var split = userAvatar.split(" ");
            $('.c-avatar').css('background', 'url(' + split[0] + ') no-repeat center');
            $('.call-to-action').css('background-image', 'url(' + split[1] + ')');
            console.log('setting avatar', split[0], " setting background", split[1]);
            staticAva = split[0];
            staticBackground = split[1];
        })
    }

    loadUserData();
    //************************************* %LOAD_USER_DATA **************************************
    function loadUserData() {
        $.getJSON("xhr/get_user.php", function (obj) {
//            console.log(obj);
            var user =
                "<h2 class='c-header'>{{firstname}} {{lastname}}</h2>" +
                "<div class='c-info'>" +
                "<ul>" +
                "<li>Email:<i> {{uemail}}</i></li>" +
                "<li><i>Phone: {{uphone}}</i></li>" +
                "</ul></div>" +
                "<div class='c-avatar'></div>";


            var userData = Handlebars.compile(user);

            var data = { "firstname": obj.user.first_name, "lastname": obj.user.last_name, "uemail": obj.user.email, "ucity": obj.user.city, "ustate": obj.user.state, "uzipcode": obj.user.uzipcode, "uphone": obj.user.phone  };

            var result = userData(data);

            $('.c-wrapper').html(result);
            staticEmail = obj.user.email;
            staticPhone = obj.user.phone
        });
    }


//    $('#edit-profile-btn').on('click', function(e){
//        var newCaptcha = captcha.new({matrix:[3,3]} , function(data){
//            console.log(JSON.stringify(data));
//            console.log('new captcha');
//            //send it to user
//            res.json(data);
//        });
//    });

    //************************************* %UPDATE_PROJECTS **************************************
    $('#updateProfile').on('click', function (e) {
        e.preventDefault();

        var newFirstName = $('#newFirstName').val(),
            newLastName = $('#newLastName').val(),
            newEmail = $('#newEmail').val(),
            newPhone = $('#newPhone').val(),
            newAvatar = $('#newAvatar').val();
        var newBackground = $('#newBackground').val();

        if (newAvatar == "" || newAvatar == " "){
            editProfileAva = "none";
        } else {
            editProfileAva = newAvatar;
        }
        if (newBackground == "" || newBackground == " "){
            editProfileBackground = "none";
        } else {
            editProfileBackground = newBackground;
        }

        var avaBackground = editProfileAva + " " + editProfileBackground; //link link | Avatar & Background.
        // If the user leaves one of the fields blank, it will override it with 'none'.
        // This is to insure that the community tab doesn't break when looping through the database.


        $.ajax({
            url: "xhr/update_user.php",
            type: "post",
            dataType: "json",
            data: {
//                first_name: newFirstName,
                last_name: newLastName,
                email: newEmail,
                phone: newPhone,
                avatar: avaBackground
            },
            success: function (responce) {
                console.log('testing add success');

                if (responce.error) {
                    alert(responce.error);
                } else {
                    console.log('userUpdated added');
                    clearUserData();
                    loadUserData();
                    checkLogin();

                }
            }
        })
    });

    //************************************* %SAVE_PROJECTS **************************************
    $('#saveProject').on('click', function (e) {
        e.preventDefault();
        console.log('save');
        var newprojName = $('#newName').val(),
            newprojDesc = $('#newDescription').val(),
            newprojDue = $('#newPrice').val(),
            newproStatus = $('#newStatus').val();

        $.ajax({
            url: "xhr/update_project.php",
            type: "post",
            dataType: "json",
            data: {
                projectID: edititingProject,
                projectName: newprojName,
                projectDescription: newprojDesc,
                dueDate: newprojDue,
                status: newproStatus
            },
            success: function (responce) {
                console.log('testing edit project add success');

                if (responce.error) {
                    alert(responce.error);
                } else {
                    console.log('edit project complete');
                    clearProjects();
                    loadProjects();
                }
            }
        })


    });


    //************************************* %LOAD_PROJECTS **************************************
    loadProjects();
    function loadProjects() {
        console.log('loadProjects');
        $.getJSON("xhr/get_projects.php", function (obj) {

            for (var i = 0; i < obj.projects.length; i++) {
//                console.log(obj.projects[i]);
                var project =

                    "<li data='" + obj.projects[i].teamID + "' id='project" + obj.projects[i].id + "'>"
                    + "<h2 class='pad'>{{name}}</h2>"
                    + "<p class='pad'>{{projectDesc}}</p>" +
                    "<strong class=''>{{client}}" +
                    "<p class='left' style='line-height: 2.0' >Type: {{type}}</p>" +
                    "<p class='left' style='line-height: 0.1' >Price: ${{price}}</p>" +
//                    "<p class='left' style='line-height: 4.2' >ItemList: " + obj.projects[i].teamID + "</p>" +
                    "<button data='" + obj.projects[i].id + "' id='editProject' class='yellow'>edit</button>" +
                    "<button data='" + obj.projects[i].id + "' id='deleteProject' class='red'>delete</button>" + //this makes the button dynamic, the 'data' attr will be used to target the project when deleting.
                    "</strong></li>";

                var template = Handlebars.compile(project);
                var data = { "name": obj.projects[i].projectName, "projectDesc": obj.projects[i].projectDescription, "client": obj.projects[i].clientName, "pID": obj.projects[i].id, "type": obj.projects[i].status, "price": obj.projects[i].dueDate };
                var result = template(data);
                $('#projectsHTML').append(result).slideDown('slow');
//                var projectData = $(obj.projects[i].teamID);
//                var itemData = $('.projects > li:nth-child('+ i +')').attr('data');
//                console.log('.projects li',itemData);

            }
            count();

        });
    }

    //************************************* %DELETE_PROJECT **************************************
    $('#deleteProject').live('click', function (e) { // live() helps when clicking something that is being Dynamically created into the DOM
        var buttonID = $(this).attr('data');
        var project = '#project' + buttonID;
        $(project).css('background', '#f56954');
        $(project).animate({
            duration: 500,
            opacity: .25,
            position: "fixed",
            overflow: "hidden",
            width: "auto",
            height: "10"
        }, {
            duration: 500,

            complete: function () {
                $(project).fadeOut('fast').remove();
                console.log('closing project')
            }
        });
//        console.log(buttonID);
        console.log('del clicked');
        $.ajax({
            url: 'xhr/delete_project.php',
            data: {
                projectID: buttonID
            },
            type: 'POST',
            dataType: 'json',
            success: function (responce) {
                if (responce.error) {
                    alert(responce.error)
                } else {
                    console.log(buttonID, "deleted");
                }
            }
        })
    });

    //************************************* %ADD_PROJECT **************************************
    $('#addProject').on('click', function (e) {
        e.preventDefault();
        console.log('add project');
        var projName = $('#inputName').val(),
            projDesc = $('#inputDescription').val(),
            projDue = $('#inputPrice').val(),
            proStatus = $('#status').val(),
            tID = findOrderSort();

        $.ajax({
            url: "xhr/new_project.php",
            type: "post",
            dataType: "json",
            data: {
                projectName: projName,
                projectDescription: projDesc,
                dueDate: projDue,
                status: proStatus,
                teamID: tID
            },
            success: function (responce) {
                console.log('testing add success');

                if (responce.error) {
                    alert(responce.error);
                } else {
                    console.log('project added');
                    clearProjects();
                    loadProjects();
                }
            }
        })
    });

    function clearProjects() {
        $('#projectsHTML').slideUp('fast').html('').slideDown('fast');
    }

    function clearUserData() {
        $('.c-wrapper').slideUp('fast').html('').slideDown('fast');
        $('#currentUser').fadeOut('fast').html('').fadeIn('fast');
    }
    function clearCommunity() {
        $('#community-projectsHTML').slideUp('fast').html('').slideDown('fast');
    }


    //************************************* %Register **************************************

    $('#register').on('click', function (e) {
        e.preventDefault();
        console.log('register clicked');

        var
            username = $('#username').val(),
            email = $('#email').val(),
            password = $('#password').val(),
            firstname = $('#firstName').val();
        console.log(username, email, password);

        $.ajax({
            url: 'xhr/register.php',
            type: 'post',
            dataType: 'json',
            data: {
                firstname: firstname,
                username: username,
                email: email,
                password: password

            },
            success: function (responce) {
                if (responce.error) {
                    alert(responce.error)
                } else {
                    window.location.assign('profile.html');
                }
            }
        })
    });

    var checkLoginState = function () {

        $.ajax({
            url: 'xhr/check_login.php',
            type: 'get',
            dataType: 'json',
            success: function (response) {
                // if user, loadApp()
                // if error, loadLanding()
                console.log('checkLoginState()');

            }
        });
    };




    $('.open-register').click(function (e) {
        $('#popup-login').removeClass('popup-off').addClass('popup-on');

    });
    $('#close-pop').click(function (e) {
        $('#popup-login').removeClass('popup-on').addClass('popup-off');
    });

    $('.open-bundle').click(function (e) {
        $('#popup-bundle').removeClass('popup-off').addClass('popup-on');
    });

    $('#close-pop').click(function (e) {
        $('#popup-bundle').removeClass('popup-on').addClass('popup-off');
    });

    $('#edit-profile-btn').click(function (e) {
        console.log(staticAva, staticBackground, staticName);
        $('#edit-profile').removeClass('popup-off').addClass('popup-on');
        $('#newLastName').val(staticName);
        $('#newEmail').val(staticEmail);
        $('#newPhone').val(staticPhone);
        $('#newAvatar').val(staticAva);
        $('#newBackground').val(staticBackground)
    });
    $('#close-n-user-pop').click(function (e) {
        $('#edit-profile').removeClass('popup-on').addClass('popup-off');
    });

    $('#editProject').live('click', function (e) {
        console.log('edit clicked');
        $('#popup-bundle-edit').removeClass('popup-off').addClass('popup-on');
        edititingProject = $(this).attr('data');
        console.log(edititingProject);
    });

    $('#close-bundle-pop').click(function (e) {
        $('#popup-bundle-edit').addClass('popup-off').removeClass('popup-on');
    });


    //************************************* %HOME_SLIDER **************************************
    var imagePos = null;
    var imageArray = ["url('images/call-to-action0.png')", "url('images/call-to-action2.png')", "url('images/call-to-action1.png')"];
    $('call-to-action').css("background-image", imageArray[imagePos]);

    $(document).ready(function () {
        console.log('page loaded, background set');
        var pickRandomImage = imageArray[~~(Math.random() * imageArray.length)];
        $('.call-to-action').css('background-image', pickRandomImage);
        imagePos = imageArray.indexOf(pickRandomImage);
    });


    $('.left-arrow').on("click", function () {

        imagePos--;
        if (imagePos < 0) {
            imagePos = imageArray.length - 1;
            changeImage();
        } else {
            changeImage();
        }
    });

    $('.right-arrow').on("click", function () {

        imagePos++;
        if (imagePos > imageArray.length - 1) {
            imagePos = 0;
            changeImage();
        } else {
            changeImage();
        }
    });

    function changeImage() {

        console.log(imageArray[imagePos]);
        $('.call-to-action')

            .slideUp('slow')
            .delay(50)
            .animate({
                background: 'black'

            }, "fast", "linear", function () {
                $('.call-to-action').css("background-image", imageArray[imagePos])
            })
            .delay(50)
            .slideDown('slow');

    }

//    Projects slideDowns
    //body > div > div.home-wrapper.overflow > div.dropdown-wrapper > div > div:nth-child(1) > div


    //************************************* %Tool_Tip **************************************
    $('.masterTooltip').hover(function () {
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function () {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove()
    }).mousemove(function (e) {
        var mousex = e.pageX + 20;
        var mousey = e.pageY + 10;
        $('.tooltip')
            .css({ top: mousey, left: mousex})
    });


//    //Test Button
//
//    var usernameInput = $('#usernameInput');
//    var submitButton = $('#submittest');
//
//    usernameInput.keypress(function(){
//        console.log(usernameInput.val().length);
//        var numberOfCharacters = usernameInput.val().length -1;
//        if (numberOfCharacters <= 0){
//            submitButton.css('background-color','red');
//        } else {
//            submitButton.css('background-color','blue');
//        }
//    });

    //************************************* %PROFILE_TABS **************************************

    var allPages = $('.dropdown-wrapper');
    var tabOpen = true;
    var currentPage = null;
    $(allPages).slideUp('fast');

    $('.profileTab').on('click', function (e) {
        var getID = $(this).attr('id');

        if (getID == 'bundle-btn' && currentPage != 'bundle-btn') {
            $(allPages).slideUp('slow');
            $('#bundles-html')
                .delay('400')
                .slideDown('slow');
            $('.tab-wrapper > button').removeClass('active-tab');
            $(this).addClass('active-tab');
            currentPage = getID;
        }

        if (getID == 'Info-btn' && currentPage != 'Info-btn') {
            $(allPages).slideUp('slow');
            $('#info-html')
                .delay('400')
                .slideDown('slow');
            $('.tab-wrapper > button').removeClass('active-tab');
            $(this).addClass('active-tab');
            currentPage = getID;
        }

        if (getID == 'community-btn' && currentPage != 'community-btn') {
            $(allPages).slideUp('slow');
            clearCommunity();
            loadCommunity();
            $('#community-html')
                .delay('400')
                .slideDown('slow');
            $('.tab-wrapper > button').removeClass('active-tab');
            $(this).addClass('active-tab');

            currentPage = getID;
        }

    });
//
//    (function(){
//
//        var patternId,
//            captchaHolder=$('#patternCaptcha'),
//            patternUI;
////function to get a new captcha and create a patternLock with same matrix.
//        function reloadCaptcha(){
//            $.ajax({
//                url:"http://patterncaptcha.herokuapp.com/api/getPattern",
//                type:'get',
//                dataType:"json",
//                crossDomain :true,
//                success: function(data){
//                    patternId = data.id;
//                    var matrix = data.matrix,
//                        imgData = data.imageData;
//
//                    if(!patternUI){
//                        patternUI= new PatternLock('#patternUI',{
//                            matrix : matrix,
//                            radius:20,
//                            margin:15
//                        });
//                    }
//                    else{
//                        patternUI.option('matrix',matrix);
//                    }
//
//                    captchaHolder.html('<img src="'+imgData+'" id="patternImage">');
//
//                }
//            });
//        }
//        //initialize captcha first time
//        reloadCaptcha();
//
//
//        //to refresh captcha.
//        $('#refreshCaptcha').click(function(){
//            reloadCaptcha();
//        });
//
//        //to validate captcha
//        $('#submitCaptcha').click(function(){
//            $.ajax({
//                url:"http://patterncaptcha.herokuapp.com/api/checkPattern",
//                type:'get',
//                dataType:"json",
//                data:{
//                    patternId:patternId,
//                    pattern:patternUI.getPattern()
//                },
//                crossDomain :true,
//                success: function(data){
//                    alert(data.message);
//                    reloadCaptcha();
//                }
//            });
//        });
//    }());

    var init = function () {

        checkLoginState();
    };


    init();
    /*
     ==================================== END EVENTS
     ===============================================
     */


})(jQuery); // end private scope




