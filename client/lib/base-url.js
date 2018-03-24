export default process.env.NODE_ENV ===
'production'
  ? 'https://marama-app.herokuapp.com/'
  : 'http://localhost:3000'
