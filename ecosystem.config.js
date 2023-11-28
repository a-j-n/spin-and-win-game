module.exports = {
  apps: [
    {
      name: 'Spin',
      port: 3005,
      script: '/bin/yarn dev',
      // cwd: '/home/user/your-nuxt-project/app1',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
  ]
};
