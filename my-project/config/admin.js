module.exports = ({ env }) => ({
  locales: ['en', 'vi'], // Danh sách ngôn ngữ hỗ trợ
  defaultLocale: 'vi',   // Ngôn ngữ mặc định
//   app: {
//     publicPath: '/my-project/',
//   },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
