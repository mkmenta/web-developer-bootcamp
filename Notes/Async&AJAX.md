# 27. Async JavaScript: Oh Boy!

## 272. The Call Stack
**(7:47):** OMG you have a debugger under the sources tab in chrome. You can put breakpoints!


## 273. WebAPIs & Single Threaded
**(7:46):** Javascript can't do things asynchronously or in parallel, but the browser can. So things like server calls, or timeouts etc. Ar actually managed by the browser under the query of javascript.


## 274. Callback Hell :(
**(11:20):** Callback hell: many times because of calls to servers, apis etc we need to have a function that has its params and then a callback function for when it goes fine and another when wrong. And we can end up nesting lots of these. The solution should be the PROMISES


## 277. The Magic Of Promises
**(2:43):** How you use promises. Promises are an object returned by a request function, and it has two methods: .then(callBackWhenOk) and .catch(callBAckWhenError).

So you can do:

requestFn()

    .then( () =\> {whatever; return requestFn2()}

    .then( () =\> {whatever; return requestFn3()}

    .catch(ALL 3 REQUESTS WILL FALL IN HERE IF ERROR)


## 278. Creating Our Own Promises
**(3:16):** Creating promises that we will RETURN from a REQUEST:

function myRequest(){

return new Promise((resolve, reject) =\> {

[do things about request]

[if ok] resolve();

[if not ok] reject();

})

}


## 279. The Async Keyword
**(5:05):** in javascript we throw erros like: throw new Error("whatever")

**(4:44):** The resolve value of the promise from async is given by the return of the function.

The reject value of the promise from async is given by throwing an error.

**(2:50):** for inline functions I can do const x = async () =\> {}

**(1:54):** Using the async keyword in front of the function x() definition, the function will AUTOMATICALLY return a promise.


## 281. Handling Errors In Async Functions
**(3:22):** if an error happens during the execution of async just do try catch: try {await x()} catch (e) {}



# 28. AJAX and API's

## 289. The Fetch API
**(3:38):** When you do a fetch you get a promise and it is resolve once the headers are obtained. But the body might not be ready yet. So inside your .then(res=\>{}) you need to do res.json() which gives another promise

**(1:37):** To do a request simply run fetch('API endpoint');

and you will get a promise in return


## 290. Intro to Axios
**(3:13):** Instead of the native way (fetch) we can use axios.get('endpoint') which is only resolved once all the request is resolved


## 291. Setting Headers With Axios
**(3:28):** Add headers:

const myFunc = async () =\> { const config = {headers:{Accept:'application/json'}}

const res await axios.get('endpoint',  config)

}
