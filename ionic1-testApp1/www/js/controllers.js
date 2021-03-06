angular.module( 'starter.controllers', [] )

    .controller( 'DashCtrl', function ( $scope ) {
    } )

    .controller( 'ProductsCtrl', function ( $scope, Products ) {
        Products.then( function ( data ) {
            $scope.products = data.all();
        } );
    } )

    .controller( 'ProductDetailCtrl', function ( $scope, $stateParams, Products ) {
        Products.then( function ( data ) {
            $scope.product = data.get( $stateParams.productId );
        } );
    } )

    .controller( 'ChatsCtrl', function ( $scope, Chats ) {
        $scope.chats = Chats.all();
        $scope.remove = function ( chat ) {
            Chats.remove( chat );
        };
    } )

    .controller( 'ChatDetailCtrl', function ( $scope, $stateParams, Chats ) {
        $scope.chat = Chats.get( $stateParams.chatId );
    } )

    .controller( 'AccountCtrl', function ( $scope ) {
        $scope.settings = {
            enableFriends: true
        };
    } );
