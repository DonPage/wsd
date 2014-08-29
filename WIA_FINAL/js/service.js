angular.module("wiaFinal")
    .service("itemPageService", function () {
        var itemPage = document.querySelector('#item-list-details-page');
        var currentPage = "#/nopage";
        var hash = location.hash;
        var colorInfo = document.querySelector('#color-info');

        this.openPage = function () {
            itemPage.className = "";
            itemPage.className = "item-list-page-open";
            currentPage = document.location.hash;
        };

        this.closingPage = function () {
            itemPage.className = "";
            itemPage.className = "item-list-page-close";
            document.location.hash = 'homepageyo'
        };

        this.defaultPage = function(){
            itemPage.className = "";
            itemPage.className = "item-list-page-close";
        }

        var closeItemPage = document.querySelector(".closePage");


        this.hoverState = function(color){
            if(color == "r-line"){
                colorInfo.innerHTML = "My knowledge in javascript is 87%"
            } else{
                colorInfo.innerHTML = "My knowledge in Angular is 71%"

            }
        }
    });