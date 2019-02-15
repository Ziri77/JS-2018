angular.module('myApp.controllers').controller('thirdCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            console.log('Loading second controller');
            $scope.M = {};
            $scope.userCount = 0;
            $scope.avgScore = 0;
            $scope.bestScore = 0;

            $scope.selectedAlbum = 1;

            $scope.wybraneZdjecie =
                'https://www.fiftyflowers.com/site_files/FiftyFlowers/Image/Product/Blue_Tinted_Roses_Close_Up_350_985dbbbe.jpg';

            //dane z https://jsonplaceholder.typicode.com/photos




            // Deklaracja tablicy uczestników z początkowymi danymi
            $scope.uczestnicy = [
                {
                    'imie' : '12',
                    'nazwisko' : 'Pizza',
                    'wynik' : 3.0
                }, {
                    'imie' : '26',
                    'nazwisko' : 'Kebab',
                    'wynik' : 2
                }, {
                    'imie' : '73',
                    'nazwisko' : 'Pomidorowa',
                    'wynik' : 2
                }, {
                    'imie' : '24',
                    'nazwisko' : 'Pierogi',
                    'wynik' : 1
                }
            ];

            $scope.dodajUsera = function (imie, nazwisko, wynik) {
                console.log('Dodaję usera ' + nazwisko);
                $scope.uczestnicy.push({
                    'imie': imie,
                    'nazwisko': nazwisko,
                    'wynik': wynik
                });
            };


            $scope.sortNazwisko = function () {
                $scope.uczestnicy.sort((a, b) => {
                    return (a.nazwisko > b.nazwisko);
                });
            };

            $scope.sortImie = function () {
                console.log('Sortuję po imionach');
                $scope.uczestnicy.sort((a, b) => {
                    // return (a.imie > b.imie)?1:-1;
                    if (a.imie > b.imie) return 1;
                    else return -1;
                });
            };

            let solveA = function (n, s, v) {
                let mx = 0;
                for(let vv of v) {
                    mx = Math.max(mx, vv);
                }
                console.log(mx);
            };


            $scope.testsA = function () {
                solveA(3, 3, [1, 2, 3]);
            };




        }
    ]
);
