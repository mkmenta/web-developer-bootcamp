
# 14. JavaScript Basics!

## 147. Variables & Let
**(5:26):** let variableName = value;

to define a variable for the first time (later you can reassign)


## 149. Const & Var
**(3:39):** let x=5; for variables

const x = 5; for constants;

var is an old keyword to define variables



# 15. JavaScript Strings and More

## 157. String Template Literals -SUPER USEFUL
**(4:03):** fstring version of javascript: 'hello ${1+2}'  but with the backtips instead of '


## 158. Undefined & Null
**(1:31):** null= absence of value

undefined = variables that do not have any assigned value


## 159. Random Numbers & The Math Object
**(4:10):** Math.random()

**(0:31):** Math.PI, Math.round() Math.pow()



# 16. JavaScript Decision Making

## 163. Equality: Triple Vs. Double Equals
**(0:04):** === vs ==: second doesn't care about the type.

e.g. 1 == '1' is true.


## 164. Console, Alert, & Prompt
**(3:11):** prompt() is like input()

**(2:17):** console.error() consolre.warn()

**(0:35):** console.log() is the print()


## 165. Running JavaScript From A Script!
**(2:29):** \<script src="app.js"\>\</script\>


## 166. If Statements
**(1:08):** if () {}


## 171. Logical AND
**(0:51):** logical and &&

logical or ||



# 17. JavaScript Arrays

## 176. Introducing Arrays
**(7:26):** let a = [1,2,3];


## 178. Push & Pop
**(1:30):** array.push = add to end [].append
array.pop = remove from the end
array.shift = remove from start
array.unshift = add to start


## 179. Shift & Unshift
**(0:00):** You can create an array using const and it can still be modified. Should we create them always with const?


## 180. Concat, indexOf, includes & reverse
**(3:59):** Concat two arrays: x.concat(y), result given in x

x.indexOf(element)

x.includes(element), result is true or false

x.reverse()


## 181. Slice & Splice
**(3:23):** You can insert, replace or remove an (or a number of) element(s) at an index

x.splice(index_start, how_many_to_replace, replacing_element)

**(0:38):** x.slice(3) = x[3:]

x.slice(3,5) = x[3:5]

x.slice(0,5) = x[:5]

x.slice(-2) = x[-2:]


## 182. Reference Types & Equality Testing
**(0:57):** array1 == array2 or array1===array2 does not work. It compares pointers


## 183. Arrays + Const
**(4:22):** I think we should use const for arrays. Does not make sense to keep the pointer in a variable.



# 18. JavaScript Object Literals

## 188. Accessing Data Out Of Objects
**(2:00):** Objects are like python dictionaries:

const x = {

a:5,

b:"v"

}

but I can access them with x["a"] or x.a



# 19. Repeating Stuff With Loops

## 192. Intro to For Loops
**(2:30):** for (let i=1; i\<=10; i++) {

}


## 197. Another Loop: The While Loop
**(0:09):** while(true) {

}


## 198. The Break Keyword
**(0:03):** const list = [...]

for (let elem of list){

}


## 201. Iterating Over Objects
**(5:26):** const obj = {k:v}

if I do Object.values(obj) I get the list of the values in obj

**(2:19):** const obj = {k:v}

for (let key in obj){

key has a key in obj

}



# 20. NEW: Introducing Functions

## 207. Arguments Intro
**(4:34):** function name(arg1, arg2) {

}



# 21. Leveling Up Our Functions

## 212. Block Scope
**(1:15):** if we define a variable inside an if it is only valid into that block

if(...){

let x...

}

here x is not defined


## 214. Function Expressions
**(1:07):** I can assign a function to a variable:

const add= function (x,y){return x+y}


## 217. Defining Methods
**(0:18):** you can assign a function to a field of an object and you get a METHOD


## 218. The Mysterious Keyword 'this'
**(2:39):** you can use inside an object method the use of "this" as we do with "self" in python. (You don't need to pass it as first argument)


## 219. Using Try/Catch
**(2:18):** try {

}catch (e){

}



# 22. Callbacks & Array Methods

## 222. The forEach Method
**(0:25):** list.forEach( function (elem) { ...})


## 223. The map Method
**(0:41):** list.map( function(elem){...})


## 224. Intro to Arrow Functions
**(0:34):** Arrow (lambda) function:

(x,y) =\> {return x+y;}


## 225. Arrow Function Implicit Returns
**(1:28):** Arrow function with implicit return:

(x,y)=\>(x+y)


## 227. setTimeout and setInterval
**(2:27):** setTimeout(function, milliseconds)


## 228. The filter Method
**(0:05):** list.filter( elem =\> elem \> 5);


## 229. Some & Every Methods
**(0:16):** like a logical or or and:

array.some(elem =\> elem.length\>4)

array.every(...)


## 230. The Notorious Reduce Method
**(1:53):** array.reduce((accumulator, elem) =\> (accumulator + elem))


## 231. Arrow Functions & 'this'
**(5:00):** Here it says a weird thing but basically it says is better to use arrow functions in object methods.



# 23. Newer JavaScript Features

## 234. Spread in Function Calls
**(2:44):** Spread in function calls: se puede hacer como *list en python haciendo ...array.Por ejemplo para Math.max(...nums) seria como un np.max(*list) (aunque numpy acepta un list)


## 235. Spread with Array Literals
**(1:35):** we can use spread to concat arrays as [...cats, ...dogs] or actually copy the array content


## 236. Spread with Objects
**(3:03):** we can convert an array into an object spreading {...[ARRAY]} and we'll get {0:'A', 1:'R' etc}

**(0:33):** We can also use a spread with objects like x = {whatever} y={...x}


## 237. Rest Params
**(3:26):** we can do a *kwargs (not with key, only value) by doing function x(...kwargs){}


## 238. Destructuring Arrays
**(2:02):** like in python we can unpack an array:

const [gold, silver, bronze] = ['1', '2', '3'];


## 239. Destructuring Objects
**(3:22):** extract/unpack variables from object.

with an object const a = {field1 : 5, field2: 'A'}

I can do: const [field2, field1] = a

or even const [field2: letter, field1: number] = a (and get the 5 assigned to number


## 240. Destructuring Params
**(2:10):** I can destructure an object directly in the params.

const user = {firstName: x, lastName: y, age: z}

I can do:

function myfun({firstName, lastName}){

And directly use here the firstName and lastName

}
