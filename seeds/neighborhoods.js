
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('neighborhoods').del(),

    // Inserts seed entries
    knex('neighborhoods').insert({name: 'Ballard'}),
    knex('neighborhoods').insert({name: 'Beacon Hill/Columbia City/Rainier Valley'}),
    knex('neighborhoods').insert({name: 'Belltown/Queen Anne/Interbay'}),
    knex('neighborhoods').insert({name: 'Capitol Hill'}),
    knex('neighborhoods').insert({name: 'Central District/Madrona/Madison Valley'}),
    knex('neighborhoods').insert({name: 'Downtown'}),
    knex('neighborhoods').insert({name: 'Eastlake/South Lake Union'}),
    knex('neighborhoods').insert({name: 'Fremont/Wallingford'}),
    knex('neighborhoods').insert({name: 'Georgetown/Sodo'}),
    knex('neighborhoods').insert({name: 'Greenwood/Phinney'}),
    knex('neighborhoods').insert({name: 'International District'}),
    knex('neighborhoods').insert({name: 'North End/Aurora'}),
    knex('neighborhoods').insert({name: 'Pioneer Square'}),
    knex('neighborhoods').insert({name: 'Ravenna/University District'}),
    knex('neighborhoods').insert({name: 'South End'}),
    knex('neighborhoods').insert({name: 'West Seattle/White Center'})
  );
};
