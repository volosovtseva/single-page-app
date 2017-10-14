angular.
    module('photoGallery').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/gallery', {
                template: '<albums-list></albums-list>'
            }).
            when('/gallery/:pageId/:pageName', {
                template: '<photo-album></photo-album>'
            }).
            otherwise('/gallery');
        }
    ]);