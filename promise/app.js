// always return results otherwise callbacks wont catch the result of the previous promise
// with arrow functions, 
// () => x is short for () => {return x;}

// Error propagation
//
// doSomething()
// .then(result => doSomethingElse(result))
// .then(newResult => doThirdThing(newResult))
// .then(finalResult => console.log(`Got the final result: ${finalResult}`))
// .catch(failureCallback);

// try {
//     const result = syncDoSomething();
//     const newResult = syncDoSomethingElse(result);
//     const finalResult = syncDoThirdThing(newResult);
//     console.log(`Got the final result: ${finalResult}`);
//   } catch(error) {
//     failureCallback(error);
//   }

////////////////////////////////////////////////
//////////////////    NOTES   //////////////////
////////////////////////////////////////////////

// Whenever a promisse is rejected, 1 of 2 events is sent to the global scope(window or if we are in a web BhxBrowser, its the worker or other worker-bases interface):

//     - rejectionhandled,
//         sent when a promisse is rejected and after that rejection has been handled by the reject function

//     - unhandledrejection,
//         sent when a promisse is rejected but theres no rejection handler
