export default process.env.NODE_ENV ===
'production'
  ? 'https://.herokuapp.com'
  : 'http://localhost:3000'
