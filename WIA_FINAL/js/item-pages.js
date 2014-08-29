/* $routePrams not present, decided early-on not to use and leave it up to service.js to handle what page is being opened.
                                                                                                                    Much regret. . .
                                                                                                                    */
angular.module("wiaFinal", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider

            .when("/video", {
                controller: "videoController",
                templateUrl: "video.html"
            })
            .when("/audio", {
                controller: "audioController",
                templateUrl: "audio.html"
            })
            .when("/index", {
                controller: "defaultController",
                templateUrl: "default.html"
            })
            .when("/svganimation", {
                controller: "svgController",
                templateUrl: "svganimation.html"
            })
            .when("/svganimation2", {
                controller: "svg2Controller",
                templateUrl: "svganimation2.html"
            })
            .when("/infograph", {
                controller: "infographController",
                templateUrl: "SVGinfograph.html"
            })
            .when("/about", {
                controller: "aboutController",
                templateUrl: "about.html"
            })
            .when("/gallery", {
                controller: "galleryController",
                templateUrl: "gallery.html"
            })
            .otherwise({
                redirectTo: "index"
            })
    })
    .controller("videoController", function ($scope, itemPageService) {
        itemPageService.openPage();
        $scope.closeItemPage = function () {
            itemPageService.closingPage();
        }
    })

    .controller("audioController", function ($scope, itemPageService) {
        itemPageService.openPage();
        $scope.closeItemPage = function () {
            itemPageService.closingPage();
        }
    })

    .controller("defaultController", function ($scope, itemPageService) {
        console.log('default controller');
        itemPageService.defaultPage();

    })

    .controller("svgController", function ($scope, itemPageService) {
        itemPageService.openPage();
        $scope.closeItemPage = function () {
            itemPageService.closingPage();
        }
    })

    .controller("svg2Controller", function ($scope, itemPageService) {
        itemPageService.openPage();
        $scope.closeItemPage = function () {
            itemPageService.closingPage();
        }
    })

    .controller("infographController", function ($scope, itemPageService) {
        itemPageService.openPage();
        $scope.closeItemPage = function () {
            itemPageService.closingPage();
        };

        $scope.hover = function(color){
            itemPageService.hoverState(color);
        }
    })

    .controller("aboutController", function($scope, itemPageService){
        itemPageService.openPage();
        $scope.closeItemPage = function () {
            itemPageService.closingPage();
        };
    })

    .controller("galleryController", function($scope, itemPageService){
        itemPageService.openPage();
        $scope.closeItemPage = function () {
            itemPageService.closingPage();
        };
        $scope.makeImageBigger = function(){
            console.log(this);
            this.className = "";
            this.className = "bigger"
        }
    })






