
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('neighborhoods').del(),

    // Inserts seed entries
    knex('neighborhoods').insert({name: 'Ballard', lat: 47.6792, long: -122.3860}),
    knex('neighborhoods').insert({name: 'Beacon Hill/Columbia City/Rainier Valley', lat: 47.5804, long: -122.3056}),
    knex('neighborhoods').insert({name: 'Belltown/Queen Anne/Interbay', lat: 47.6147, long: -122.3448}),
    knex('neighborhoods').insert({name: 'Capitol Hill', lat: 47.6161, long: -122.3190}),
    knex('neighborhoods').insert({name: 'Central District/Madrona/Madison Valley', lat: 47.6088, long: -122.2964}),
    knex('neighborhoods').insert({name: 'Downtown', lat: 47.6108, long: -122.3386}),
    knex('neighborhoods').insert({name: 'Eastlake/South Lake Union', lat: 47.6418, long: -122.3265}),
    knex('neighborhoods').insert({name: 'Fremont/Wallingford', lat: 47.6542, long: -122.3500}),
    knex('neighborhoods').insert({name: 'Georgetown/Sodo', lat: 47.5432, long: -122.3221}),
    knex('neighborhoods').insert({name: 'Greenwood/Phinney', lat: 47.6969, long: -122.3562}),
    knex('neighborhoods').insert({name: 'International District', lat: 47.5987, long: -122.3240}),
    knex('neighborhoods').insert({name: 'North End/Aurora', lat: 47.7129, long: -122.3448}),
    knex('neighborhoods').insert({name: 'Pioneer Square', lat: 47.6015, long: -122.3343}),
    knex('neighborhoods').insert({name: 'Ravenna/University District', lat: 47.6628, long: -122.3139}),
    knex('neighborhoods').insert({name: 'South End', lat: 47.5411, long: -122.2750}),
    knex('neighborhoods').insert({name: 'West Seattle/White Center', lat: 47.5538, long: -122.3835})
  );
};
