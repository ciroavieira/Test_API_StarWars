exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    	REST: {
        endpoint: 'https://swapi.co/api',
      },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Test_API',
  
}
