export default process.env.NODE_ENV ===
'production'
  ? 'http://marama.org.nz'
  : 'http://localhost:3000'
