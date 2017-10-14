angular.
    module('albumsList').
    component('albumsList',{
    templateUrl:'albums-list/albums-list.template.html',
    controller: ['$http',
        function AlbumsListCtrl($http){
            var self = this;
            $http.get('albums/albums.json').then(function(response){
                self.albums = response.data;
            });
        }
    ]
});
