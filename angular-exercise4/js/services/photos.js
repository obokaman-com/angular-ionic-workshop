app.factory('photos', ['$http', function($http) {
  // https://api.vcst.net/productSearch/cerveza?json_callback=JSON_CALLBACK&currency=EUR&country=ES&api_key=fht7r4g2&language=es_ES&instance=uvinum
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
