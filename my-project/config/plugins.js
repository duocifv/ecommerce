module.exports = ({ env }) => ({
  'content-type-builder': {
    enabled: env('NODE_ENV') === 'development', // Chỉ bật trong môi trường development
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'YOUR_GENERATED_JWT_SECRET'), // Lấy từ môi trường hoặc giá trị mặc định
    },
  },
});
