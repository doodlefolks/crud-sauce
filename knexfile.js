module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/extra-sauce-please'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
