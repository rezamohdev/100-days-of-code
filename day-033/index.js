// .then(user => console.log(user))
// H. Doesn't get called.
// This should be "E. 5". Since there are no errors, control will be passed from .then to .then, beginning with .then blocks attached to the fetch request, and then moving on to those attached to functions that enclose the fetch request.
// .finally(() => console.log('All done!'));
// G. 7
// This should be "F. 6". This line is executed after all of the .then and .catch blocks. In this case, since there are no errors, the .catch block doesn't get executed at all.
// const getUserById = (id) => {
// H. Doesn't get called.
// Actually, this line gets executed first.
// then(res => res.ok ? res.json() : Promise.reject(`Uh oh! Error: ${res.status}`;)
// E. 5
// This should be "D. 4". As long as an error doesn't occur, when an asynchronous function returns, control will be passed to the first .then attached to the function call. In this case, the asynchronous function is the fetch request itself, not getUserById.
// return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
// A. 1
// This should be "C. 3". After getUserById(1) is called, the code inside that function's body will be executed.
// .catch(err => console.log(err))
// B. 2
// This line is not executed since there are no errors to catch.
// getUserById(1)
// C. 3
// Actually, this should be "B. 2". The body of a function won't be run until the function is actually called, so we skip lines two and three.
