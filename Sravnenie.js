var app1 = angular.module("Ch1App", ["ngRoute"]);

app1.controller('bass1Ctrl', function($scope, $http) {
    $http.get("bass1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass2Ctrl', function($scope, $http) {
    $http.get("bass2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass3Ctrl', function($scope, $http) {
    $http.get("bass3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass4Ctrl', function($scope, $http) {
    $http.get("bass4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass5Ctrl', function($scope, $http) {
    $http.get("bass5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass6Ctrl', function($scope, $http) {
    $http.get("bass6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass7Ctrl', function($scope, $http) {
    $http.get("bass7.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass8Ctrl', function($scope, $http) {
    $http.get("bass8.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass9Ctrl', function($scope, $http) {
    $http.get("bass9.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app1.controller('bass10Ctrl', function($scope, $http) {
    $http.get("bass10.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app1.config(function($routeProvider) {
    $routeProvider
        .when("/bass1", {
            templateUrl: "MaketSrav.htm",
            controller : "bass1Ctrl"
        })
        .when("/bass2", {
            templateUrl: "MaketSrav.htm",
            controller : "bass2Ctrl"
        })
        .when("/bass3", {
            templateUrl: "MaketSrav.htm",
            controller : "bass3Ctrl"
        })
        .when("/bass4", {
            templateUrl: "MaketSrav.htm",
            controller : "bass4Ctrl"
        })
        .when("/bass5", {
            templateUrl: "MaketSrav.htm",
            controller : "bass5Ctrl"
        })
        .when("/bass6", {
            templateUrl: "MaketSrav.htm",
            controller : "bass6Ctrl"
        })
        .when("/bass7", {
            templateUrl: "MaketSrav.htm",
            controller : "bass7Ctrl"
        })
        .when("/bass8", {
            templateUrl: "MaketSrav.htm",
            controller : "bass8Ctrl"
        })
        .when("/bass9", {
            templateUrl: "MaketSrav.htm",
            controller : "bass9Ctrl"
        })
        .when("/bass10", {
            templateUrl: "MaketSrav.htm",
            controller : "bass10Ctrl"
        });
});


/*var app2 = angular.module("Ch2App", ["ngRoute"]);

app2.controller('bass1Ctrl', function($scope, $http) {
    $http.get("bass1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass2Ctrl', function($scope, $http) {
    $http.get("bass2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass3Ctrl', function($scope, $http) {
    $http.get("bass3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass4Ctrl', function($scope, $http) {
    $http.get("bass4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass5Ctrl', function($scope, $http) {
    $http.get("bass5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass6Ctrl', function($scope, $http) {
    $http.get("bass6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass7Ctrl', function($scope, $http) {
    $http.get("bass7.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass8Ctrl', function($scope, $http) {
    $http.get("bass8.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass9Ctrl', function($scope, $http) {
    $http.get("bass9.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app2.controller('bass10Ctrl', function($scope, $http) {
    $http.get("bass10.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app2.config(function($routeProvider) {
    $routeProvider
        .when("/bass1", {
            templateUrl: "MaketSrav.htm",
            controller : "bass1Ctrl"
        })
        .when("/bass2", {
            templateUrl: "MaketSrav.htm",
            controller : "bass2Ctrl"
        })
        .when("/bass3", {
            templateUrl: "MaketSrav.htm",
            controller : "bass3Ctrl"
        })
        .when("/bass4", {
            templateUrl: "MaketSrav.htm",
            controller : "bass4Ctrl"
        })
        .when("/bass5", {
            templateUrl: "MaketSrav.htm",
            controller : "bass5Ctrl"
        })
        .when("/bass6", {
            templateUrl: "MaketSrav.htm",
            controller : "bass6Ctrl"
        })
        .when("/bass7", {
            templateUrl: "MaketSrav.htm",
            controller : "bass7Ctrl"
        })
        .when("/bass8", {
            templateUrl: "MaketSrav.htm",
            controller : "bass8Ctrl"
        })
        .when("/bass9", {
            templateUrl: "MaketSrav.htm",
            controller : "bass9Ctrl"
        })
        .when("/bass10", {
            templateUrl: "MaketSrav.htm",
            controller : "bass10Ctrl"
        });
});*/


var app3 = angular.module("Ch3App", ["ngRoute"]);

app3.controller('classic1Ctrl', function($scope, $http) {
    $http.get("classic1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app3.controller('classic2Ctrl', function($scope, $http) {
    $http.get("classic2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app3.controller('classic3Ctrl', function($scope, $http) {
    $http.get("classic3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app3.controller('classic4Ctrl', function($scope, $http) {
    $http.get("classic4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app3.controller('classic5Ctrl', function($scope, $http) {
    $http.get("classic5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app3.controller('classic6Ctrl', function($scope, $http) {
    $http.get("classic6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app3.config(function($routeProvider) {
    $routeProvider
        .when("/classic1", {
            templateUrl: "MaketSrav.htm",
            controller : "classic1Ctrl"
        })
        .when("/classic2", {
            templateUrl: "MaketSrav.htm",
            controller : "classic2Ctrl"
        })
        .when("/classic3", {
            templateUrl: "MaketSrav.htm",
            controller : "classic3Ctrl"
        })
        .when("/classic4", {
            templateUrl: "MaketSrav.htm",
            controller : "classic4Ctrl"
        })
        .when("/classic5", {
            templateUrl: "MaketSrav.htm",
            controller : "classic5Ctrl"
        })
        .when("/classic6", {
            templateUrl: "MaketSrav.htm",
            controller : "classic6Ctrl"
        });
});


/*var app4 = angular.module("Ch4App", ["ngRoute"]);

app4.controller('classic1Ctrl', function($scope, $http) {
    $http.get("classic1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app4.controller('classic2Ctrl', function($scope, $http) {
    $http.get("classic2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app4.controller('classic3Ctrl', function($scope, $http) {
    $http.get("classic3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app4.controller('classic4Ctrl', function($scope, $http) {
    $http.get("classic4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app4.controller('classic5Ctrl', function($scope, $http) {
    $http.get("classic5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app4.controller('classic6Ctrl', function($scope, $http) {
    $http.get("classic6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app4.config(function($routeProvider) {
    $routeProvider
        .when("/classic1", {
            templateUrl: "MaketSrav.htm",
            controller : "classic1Ctrl"
        })
        .when("/classic2", {
            templateUrl: "MaketSrav.htm",
            controller : "classic2Ctrl"
        })
        .when("/classic3", {
            templateUrl: "MaketSrav.htm",
            controller : "classic3Ctrl"
        })
        .when("/classic4", {
            templateUrl: "MaketSrav.htm",
            controller : "classic4Ctrl"
        })
        .when("/classic5", {
            templateUrl: "MaketSrav.htm",
            controller : "classic5Ctrl"
        })
        .when("/classic6", {
            templateUrl: "MaketSrav.htm",
            controller : "classic6Ctrl"
        });
});*/


var app5 = angular.module("Ch5App", ["ngRoute"]);

app5.controller('electro1Ctrl', function($scope, $http) {
    $http.get("electro1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro2Ctrl', function($scope, $http) {
    $http.get("electro2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro3Ctrl', function($scope, $http) {
    $http.get("electro3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro4Ctrl', function($scope, $http) {
    $http.get("electro4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro5Ctrl', function($scope, $http) {
    $http.get("electro5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro6Ctrl', function($scope, $http) {
    $http.get("electro6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro7Ctrl', function($scope, $http) {
    $http.get("electro7.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro8Ctrl', function($scope, $http) {
    $http.get("electro8.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro9Ctrl', function($scope, $http) {
    $http.get("electro9.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app5.controller('electro10Ctrl', function($scope, $http) {
    $http.get("electro10.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app5.config(function($routeProvider) {
    $routeProvider
        .when("/electro1", {
            templateUrl: "MaketSrav.htm",
            controller : "electro1Ctrl"
        })
        .when("/electro2", {
            templateUrl: "MaketSrav.htm",
            controller : "electro2Ctrl"
        })
        .when("/electro3", {
            templateUrl: "MaketSrav.htm",
            controller : "electro3Ctrl"
        })
        .when("/electro4", {
            templateUrl: "MaketSrav.htm",
            controller : "electro4Ctrl"
        })
        .when("/electro5", {
            templateUrl: "MaketSrav.htm",
            controller : "electro5Ctrl"
        })
        .when("/electro6", {
            templateUrl: "MaketSrav.htm",
            controller : "electro6Ctrl"
        })
        .when("/electro7", {
            templateUrl: "MaketSrav.htm",
            controller : "electro7Ctrl"
        })
        .when("/electro8", {
            templateUrl: "MaketSrav.htm",
            controller : "electro8Ctrl"
        })
        .when("/electro9", {
            templateUrl: "MaketSrav.htm",
            controller : "electro9Ctrl"
        })
        .when("/electro10", {
            templateUrl: "MaketSrav.htm",
            controller : "electro10Ctrl"
        });
});


/*var app6 = angular.module("Ch6App", ["ngRoute"]);

app6.controller('electro1Ctrl', function($scope, $http) {
    $http.get("electro1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro2Ctrl', function($scope, $http) {
    $http.get("electro2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro3Ctrl', function($scope, $http) {
    $http.get("electro3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro4Ctrl', function($scope, $http) {
    $http.get("electro4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro5Ctrl', function($scope, $http) {
    $http.get("electro5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro6Ctrl', function($scope, $http) {
    $http.get("electro6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro7Ctrl', function($scope, $http) {
    $http.get("electro7.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro8Ctrl', function($scope, $http) {
    $http.get("electro8.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro9Ctrl', function($scope, $http) {
    $http.get("electro9.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app6.controller('electro10Ctrl', function($scope, $http) {
    $http.get("electro10.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app6.config(function($routeProvider) {
    $routeProvider
        .when("/electro1", {
            templateUrl: "MaketSrav.htm",
            controller : "electro1Ctrl"
        })
        .when("/electro2", {
            templateUrl: "MaketSrav.htm",
            controller : "electro2Ctrl"
        })
        .when("/electro3", {
            templateUrl: "MaketSrav.htm",
            controller : "electro3Ctrl"
        })
        .when("/electro4", {
            templateUrl: "MaketSrav.htm",
            controller : "electro4Ctrl"
        })
        .when("/electro5", {
            templateUrl: "MaketSrav.htm",
            controller : "electro5Ctrl"
        })
        .when("/electro6", {
            templateUrl: "MaketSrav.htm",
            controller : "electro6Ctrl"
        })
        .when("/electro7", {
            templateUrl: "MaketSrav.htm",
            controller : "electro7Ctrl"
        })
        .when("/electro8", {
            templateUrl: "MaketSrav.htm",
            controller : "electro8Ctrl"
        })
        .when("/electro9", {
            templateUrl: "MaketSrav.htm",
            controller : "electro9Ctrl"
        })
        .when("/electro10", {
            templateUrl: "MaketSrav.htm",
            controller : "electro10Ctrl"
        });
});*/


var app7 = angular.module("Ch7App", ["ngRoute"]);

app7.controller('akustic1Ctrl', function($scope, $http) {
    $http.get("akustic1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app7.controller('akustic2Ctrl', function($scope, $http) {
    $http.get("akustic2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app7.controller('akustic3Ctrl', function($scope, $http) {
    $http.get("akustic3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app7.controller('akustic4Ctrl', function($scope, $http) {
    $http.get("akustic4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app7.controller('akustic5Ctrl', function($scope, $http) {
    $http.get("akustic5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app7.controller('akustic6Ctrl', function($scope, $http) {
    $http.get("akustic6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app7.config(function($routeProvider) {
    $routeProvider
        .when("/akustic1", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic1Ctrl"
        })
        .when("/akustic2", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic2Ctrl"
        })
        .when("/akustic3", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic3Ctrl"
        })
        .when("/akustic4", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic4Ctrl"
        })
        .when("/akustic5", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic5Ctrl"
        })
        .when("/akustic6", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic6Ctrl"
        });
});


/*var app8 = angular.module("Ch8App", ["ngRoute"]);

app.controller('akustic1Ctrl', function($scope, $http) {
    $http.get("akustic1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app8.controller('akustic2Ctrl', function($scope, $http) {
    $http.get("akustic2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app8.controller('akustic3Ctrl', function($scope, $http) {
    $http.get("akustic3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app8.controller('akustic4Ctrl', function($scope, $http) {
    $http.get("akustic4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app8.controller('akustic5Ctrl', function($scope, $http) {
    $http.get("akustic5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app8.controller('akustic6Ctrl', function($scope, $http) {
    $http.get("akustic6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app8.config(function($routeProvider) {
    $routeProvider
        .when("/akustic1", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic1Ctrl"
        })
        .when("/akustic2", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic2Ctrl"
        })
        .when("/akustic3", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic3Ctrl"
        })
        .when("/akustic4", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic4Ctrl"
        })
        .when("/akustic5", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic5Ctrl"
        })
        .when("/akustic6", {
            templateUrl: "MaketSrav.htm",
            controller : "akustic6Ctrl"
        });
});*/


var app9 = angular.module("Ch9App", ["ngRoute"]);

app9.controller('sintez1Ctrl', function($scope, $http) {
    $http.get("sintez1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app9.controller('sintez2Ctrl', function($scope, $http) {
    $http.get("sintez2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app9.controller('sintez3Ctrl', function($scope, $http) {
    $http.get("sintez3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app9.controller('sintez4Ctrl', function($scope, $http) {
    $http.get("sintez4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app9.controller('sintez5Ctrl', function($scope, $http) {
    $http.get("sintez5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app9.controller('sintez6Ctrl', function($scope, $http) {
    $http.get("sintez6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app9.config(function($routeProvider) {
        $routeProvider
            .when("/sintez1", {
                templateUrl: "MaketSrav.htm",
                controller: "sintez1Ctrl"
            })
            .when("/sintez2", {
                templateUrl: "MaketSrav.htm",
                controller: "sintez2Ctrl"
            })
            .when("/sintez3", {
                templateUrl: "MaketSrav.htm",
                controller: "sintez3Ctrl"
            })
            .when("/sintez4", {
                templateUrl: "MaketSrav.htm",
                controller: "sintez4Ctrl"
            })
            .when("/sintez5", {
                templateUrl: "MaketSrav.htm",
                controller: "sintez5Ctrl"
            })
            .when("/sintez6", {
                templateUrl: "MaketSrav.htm",
                controller: "sintez6Ctrl"
            });
    });


/*var app10 = angular.module("Ch10App", ["ngRoute"]);

app10.controller('sintez1Ctrl', function($scope, $http) {
    $http.get("sintez1.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app10.controller('sintez2Ctrl', function($scope, $http) {
    $http.get("sintez2.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app10.controller('sintez3Ctrl', function($scope, $http) {
    $http.get("sintez3.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app10.controller('sintez4Ctrl', function($scope, $http) {
    $http.get("sintez4.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app10.controller('sintez5Ctrl', function($scope, $http) {
    $http.get("sintez5.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});
app10.controller('sintez6Ctrl', function($scope, $http) {
    $http.get("sintez6.json")
        .then(function(response) {
            $scope.products = response.data;
        });
});

app10.config(function($routeProvider) {
    $routeProvider
        .when("/sintez1", {
            templateUrl: "MaketSrav.htm",
            controller : "sintez1Ctrl"
        })
        .when("/sintez2", {
            templateUrl: "MaketSrav.htm",
            controller : "sintez2Ctrl"
        })
        .when("/sintez3", {
            templateUrl: "MaketSrav.htm",
            controller : "sintez3Ctrl"
        })
        .when("/sintez4", {
            templateUrl: "MaketSrav.htm",
            controller : "sintez4Ctrl"
        })
        .when("/sintez5", {
            templateUrl: "MaketSrav.htm",
            controller : "sintez5Ctrl"
        })
        .when("/sintez6", {
            templateUrl: "MaketSrav.htm",
            controller : "sintez6Ctrl"
        });
});*/