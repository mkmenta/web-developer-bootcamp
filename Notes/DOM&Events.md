# 24. Introducing The World Of The DOM

## 245. getElementsByTagName & className
**(1:44):** if we do document.getElementByTagName or className then we get something like an array of HTML elements with that tag or classname


## 246. querySelector & querySelectorAll
**(1:59):** querySelector takes the first one querySelectorAll takes the array of all

**(0:54):** document.querySelector is the all in one function: 'tag', '#id' or '.class'


## 247. innerHTML, textContent, & innerText
**(7:11):** innerText does not show for example the hidden content (display:none). textContent yes. And innerHTML shows all the html


## 248. Attributes
**(6:59):** Between x.href or x.getAttribute("href") there is some diffeerence but is not really explained. Not sure which is best. Looks more clean x.href


## 249. Changing Styles
**(5:04):** The shitty udemy doesn't let me do comments right. To modify an style we can do h1.style.color. But this is like modifying the style="" html tag so its not the best idea. Its better to define a CSS class in general and add it (next class). Also when doing window.getComputedStyle(h1) the h1 must be already an h1=document.querySelector("h1")

**(9:01):** window.getComputedStyle(h1).color will give me the final color visualized. Because over many css files etc, I might not obtain the actual color of the element if I do a querySelector("h1").color. Because one CSS could override another. So I have to wait to the COMPUTED final STYLE

**(2:56):** querySelector("h1").style.color will give the color attribute value WHEN its set in the html file (style=) NOT IN CSS.


## 250. ClassList
**(6:21):** also we have h2.classList.toggle('myClass') which will add or remove the class depending on if its already applied

**(4:10):** To add a class to an element h2.classList.add('myClass') and to remove h2.classList.remove("myOtherClass")


## 251. Traversing Parent/Child/Sibling
**(6:40):** also all DOM elements have .nextElementSibling and .prevElementSibling to go to the next element within the same parent. .nextSibling will have into account text, for example a '\n'. So better use the other one unless needed

**(3:16):** each DOM element has its .parentElement and .children


## 252. Append & AppendChild
**(1:08):** Also we can create elements by document.createElement('img')

**(5:50):** we can do .appendChild to append an element or just .append to append also text (I guess .append also accepts elements? because its a newer method). And we can also .prepend.


## 253. removeChild & remove
**(2:41):** To remove an element we can do: element.parentElement.removeChild(element) or just element.remove() which is newer



# 25. The Missing Piece: DOM Events

## 258. The Onclick Property
**(4:47):** or do btn.onclick =. somefunction;

(of course)

**(3:23):** To add onclick just do a querySelector of the element and do:

btn.onclick=function(){

whatever

}


## 259. addEventListener
**(7:54):** also you can add special options (check MDN) like once:

addEventListener('click', function1, {once:true}) which will make to execute function1 only the first time it is clicked

**(6:20):** but the good thing of addEventListener is that I can add more than one function to a single event like:

btn.addEventListener('click', function1)

btn.addEventListener('click', function2)

and both be executed in order

**(3:16):** instead of doing btn.onclick = somefunction,

we can do btn.addEventListener('click', somefunction).


## 261. Events & The Keyword This
**(7:15):** or you can just create a function like:

function colorize() {

this.style.backgroundColor = 'red';

}

and later assing that function to a 'click' event listener and it will just work

**(2:53):** you can have access to the button itself where you are adding the addEventListener, at least if you are doing an inline function:

btn.addEventListener(.., function() {btn.style.backgroundColor='red';})


## 262. Keyboard Events & Event Objects
**(10:15):** I missed break between the cases in last note, but udemy's web works pretty bad and didn't let me change it

**(9:45):** switch (e.code) {

    case 'ArrowUp':

        console.log("UP!")

    case ...:

        ...

}

**(4:48):** keyup and keydown events correspond to pushing a button of the keyboard and releasing it. I guess that later with the event object you get the info of which key was it

**(1:36):** there is an event object that is always passed to the function when an event happens and you can just get it like

btn.addEventListener('click', function (evt) {console.log(evt})

it has lots of info about the event


## 263. Form Events & PreventDefault
**(10:46):** form.elements.username.value for example

**(9:20):** you can select the form object and do form.elements to get the collection of elements inside the form. Had we already seen this before like children? or is it specific for the form. Also remember that console.dir(form) will print the form as an object that we can analyze better

**(7:55):** you can also do a querySelector for the form and add an event listener of 'submit'. That will execute your function before submiting the form.

If you also want to prevent the default submitting action you just write at the end of your function an evt.preventDefault(); where evt is the event object


## 264. Input & Change Events
**(2:50):** instead, the evnet that is fired each time you change something in the input field is actually the 'input' event.

**(2:10):** the 'change' event in an input works when you leave the attention to that input. So it won't be activated while you write, but when you end writing and move to somewhere else in the page


## 265. Event Bubbling
**(6:33):** e.stopPropagation() will stop event bubbling

**(3:02):** if you have elements inside elements with some onclicks, they don't override, they run one after the other if you click in the inner one. Event bubbling


## 266. Event Delegation
**(4:06):** you can create an event listenerin a parent element and then check the event object's target attribute (which will contain the actual element clicked) to do whatever with it. so that we can create inner elements and don't need to add the same event listener to each of them all the time.

