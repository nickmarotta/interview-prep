## Write a function that takes an array of characters and reverses the letters in place. 

An in-place function modifies data structures or objects outside of its own stack frame ↴ (i.e.: stored on the process heap or in the stack frame of a calling function). Because of this, the changes made by the function remain after the call completes.

In-place algorithms are sometimes called destructive, since the original input is "destroyed" (or modified) during the function call.

Careful: "In-place" does not mean "without creating any additional variables!" Rather, it means "without creating a new copy of the input." In general, an in-place function will only create additional variables that are O(1)O(1) space.

An out-of-place function doesn't make any changes that are visible to other functions. Usually, those functions copy any data structures or objects before manipulating and changing them.

In many languages, primitive values (integers, floating point numbers, or characters) are copied when passed as arguments, and more complex data structures (arrays, heaps, or hash tables) are passed by reference. This is what Javascript does.

### Working in-place is a good way to save time and space. 
An in-place algorithm avoids the cost of initializing or copying data structures, and it usually has an O(1)O(1) space cost.

### But be careful: an in-place algorithm can cause side effects. 
Your input is "destroyed" or "altered," which can affect code outside of your function. For example: