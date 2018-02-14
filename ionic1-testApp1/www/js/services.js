angular.module( 'starter.services', [] )

    .factory( 'Products', function ( $http ) {
        return $http.jsonp( 'https://api.vcst.net/productSearch/cerveza?json_callback=JSON_CALLBACK&currency=EUR&country=ES&api_key=fht7r4g2&language=es_ES&instance=uvinum' )
            .then( function success( response ) {
                    return {
                        all: function () {
                            return response.data.products;
                        },
                        get: function ( productId ) {
                            for ( var i = 0; i < response.data.products.length; i++ ) {
                                if ( response.data.products[i].id_product == productId ) {
                                    return response.data.products[i];
                                }
                            }
                            return null;
                        }
                    };
                },
                function error( response ) {
                    console.log( 'ops' );
                } );


    } )

    .factory( 'Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
        }];

        return {
            all: function () {
                return chats;
            },
            remove: function ( chat ) {
                chats.splice( chats.indexOf( chat ), 1 );
            },
            get: function ( chatId ) {
                for ( var i = 0; i < chats.length; i++ ) {
                    if ( chats[i].id === parseInt( chatId ) ) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    } );
