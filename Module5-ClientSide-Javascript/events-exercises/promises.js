function fastFunction () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log('Fast function done')
        resolve()
      }, 100)
    })
  }
  
  function slowFunction () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log('Slow function done')
        resolve()
      }, 300)
    })
  }
  
  function asyncRunner () {
      return Promise.all([slowFunction(), fastFunction()])
  }

  asyncRunner()
  .then(([ slowResult, fastResult ]) => {
    console.log('All operations resolved successfully')
  })
  .catch((error) => {
    console.error('There has been an error:', error)
  })
/**
 * Since node@12.9.0, there is a method called promise.allSettled, 
 * that we can use to get the result of all the passed in promises regardless of rejections.
 *  Much like Promise.all, this function expects an array of promises, and returns an array of 
 * objects that has a status of “fulfilled” or “rejected”, and either the resolved value or the 
 * error that occurred.
 */
  function asyncMixedRunner () {
    return Promise.allSettled([slowFunction(), failingFunction()])
}

asyncMixedRunner()
    .then(([slowResult, failedResult]) => {
        console.log(slowResult, failedResult)
    })

/**
 * SERIAL TASK EXECUTION
 * 
 * To make sure your tasks run in a specific order - maybe successive functions need the 
 * return value of previous ones, or depend on the run of previous functions less directly 
 * - which is basically the same as _.flow for functions that return a Promise. As long as 
 * it's missing from everyone's favorite utility library, you can easily create 
 * a chain from an array of your async functions:
*/

function serial(asyncFunctions) {
    return asyncFunctions.map(function(functionChain, nextFunction) {
        return functionChain
            .then((previousResult) => nextFunction(previousResult))
            .then(result => ({ status: 'fulfilled', result }))
            .catch(error => ({ status: 'rejected', error }));
    }, Promise.resolve());
}