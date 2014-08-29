/**
 * Created by donpage on 4/30/14.
 */
(function () {
    $(document).ready(function (e) {

        $('.nav-button').on('click', openMainNav);
        function openMainNav(e){
            var mainOverlay = document.querySelector('#mainOverlay');
            console.log(mainOverlay, "clicked button", e);
            var getID = e.target.id;
            $(mainOverlay).removeClass('.overlay overlay-contentscale').addClass('.overlay-contentscale.open');
        }

    });
})();
