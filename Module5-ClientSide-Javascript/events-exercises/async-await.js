/**
 * We can use another javascript feature since node@7.6 to achieve the same thing: 
 * the async and await keywords. They allow you to structure your code in a way 
 * that is almost synchronous looking, saving us the .then chaining as well as callbacks:
 */
// async-await is an abstraction on top of promises - async functions 
// always return a promise, even if you don't explicitly declare them to do so.
const promisify = require('util').promisify;
/**The await keyword can only be used inside functions 
 * that have the async tag. This also means that we cannot 
 * currently utilize it in the global scope.
 */
async function asyncRunner () {
    try {
      const slowResult = await promisify(slowFunction)()
      const fastResult = await promisify(fastFunction)()
      console.log('all done')
      return [
        slowResult,
        fastResult
      ]
    } catch (error) {
      console.error(error)
    }
}

/**
 * Let’s take an example and write a route handler for our web app, 
 * where the request can be resolved after 3 steps: validateParams, dbQuery and serviceCall.
 */
 // validateParams, dbQuery, serviceCall are higher-order functions
// DONT
function handler (done) {
    validateParams((err) => {
      if (err) return done(err)
      dbQuery((err, dbResults) => {
        if (err) return done(err)
        serviceCall((err, serviceResults) => {
          done(err, { dbResults, serviceResults })
        })
      })
    })
  }
//Instead of the callback-hell, we can use promises to refactor our code, as we have already learned:
// validateParams, dbQuery, serviceCall are higher-order functions
function handler () {
  return validateParams()
    .then(dbQuery)
    .then(serviceCall)
    .then((result) => {
      console.log(result)
      return result
    })
    .catch(console.log.bind(console))
}
//Let's take it a step further! Rewrite it to use the async and await keywords:
// validateParams, dbQuery, serviceCall are thunks
async function handler () {
    try {
      await validateParams()
      const dbResults = await dbQuery()
      const serviceResults = await serviceCall()
      return { dbResults, serviceResults }
    } catch (error) {
      console.log(error)
    }
  }

//It feels like a "synchronous" 
//code but still doing async operations one after each other.

// Essentially, a new callback is injected into the functions, 
//and this is how async knows when a function is finished