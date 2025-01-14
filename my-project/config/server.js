module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8100),
  // url: env('PUBLIC_URL', 'http://localhost:8100/my-project/'),
  // admin: {
  //   url: '/my-project/admin',  // Đảm bảo rằng đường dẫn admin chính xác
  // },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
