const generateUserGreeting = function (name) {
    const greeting = "Hello ";
    return greeting + name;
  };

  /*
In JavaScript, function expressions (as opposed to function declarations) can be anonymous.
 When you assign a function to a variable, the function doesn't have to have a name—it can simply be an unnamed function expression. 
 The variable (generateUserGreeting in this case) holds the reference to that function, allowing you to call it by the variable name.

  */

 // Alternative function 
/*
function generateUserGreeting(name) {
  const greeting = "Hello ";
  return greeting + name;
}
*/
