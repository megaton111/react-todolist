const proxy = require( 'http-proxy-middleware' ) ;

module.exports = ( app ) => {
  app.use(
    proxy('/api', {
      target : 'http://loacalhost:3002/' 
    })
  )
}