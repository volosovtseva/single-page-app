angular.
    module('photoAlbum').
    component('photoAlbum', {
        templateUrl:'album-photos/album-photos.template.html',
        controller: ['$http','$routeParams',
            function PhotoAlbumCtrl($http, $routeParams) {
                var self = this;

                self.setImage = function setImage(imageUrl){
                    self.mainImageUrl = imageUrl;
                };
                $http.get('albums/' + $routeParams.pageName + '.json').then(function(response){
                    self.photo = response.data;
                    self.setImage(self.photo.images[0]);
                });
            }
        ]
    });