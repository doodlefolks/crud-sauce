
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('table_name').del(),

    //put your madness here
    function spots(){
      return knex('places').select('address');
    }

    // var geocoder = new google.maps.Geocoder();
    // var rp = require('request-promise');
    //
    // var options = {
    //   uri: 'https://maps.googleapis.com/maps/api/js',
    //   qs: {
    //     key: GOOGLE_KEY + '&libraries=places'
    //   },
    //   json: true
    // }

    // spots().select('id', 'address').then(function(places){
    //   for (var i = 0; i < places.length; i++){
    //     geocoder.geocode({'address': places[i].address}, function(results, status){
    //       if (status == google.maps.GeocoderStatus.OK){
    //         spots().where({id: places[i].id}).update({lat: results[0].geometry.location.latitude, long:results[0].geometry.location.longitude})
    //       }
    //     });
    //   }
    // });

    // Inserts seed entries
    knex('table_name').insert({id: 1, colName: 'rowValue'}),
    knex('table_name').insert({id: 2, colName: 'rowValue2'}),
    knex('table_name').insert({id: 3, colName: 'rowValue3'})
  );
};
