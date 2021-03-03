# 4. HTML: Next Steps & Semantics

## 34. Block vs. Inline Elements - Divs and Spans
**(5:52):** SPAN: inline container

**(3:06):** DIV: container as a block element


## 35. An Odd Assortment of Elements: HR, BR, Sup, & Sub
**(1:45):** \<br\> should be only used inside a paragraph to break lines for example in a poem. Otherwise use always different paragraphs


## 36. Entity Codes
**(4:56):** You can add special symbols with &#XXX where XXX is an Entity Number

**(3:16):** \< is `&lt;` and \> is `&gt;


## 37. Intro to Semantic Markup
**(5:47):** We can do everything with divs but is way better (also for Google Search) to use some containers that actually have some meaning (all of them to write as a replacement of a div in body):

\<nav\> for a navbar

\<header\> for a header before the main part comes in

\<main\> for the main part

Inside here we create \<section\>

\<footer\> for the footer (about contacts etc).





## 38. Playing With Semantic Elements
**(11:15):** \<figure\> element which should be e.g. an \<img\> + \<figcaption\>

**(11:07):** \<time datetime="2018-07-07"\>July 7\</time\>\<time datetime="2018-07-07"\>July 7\</time\>

**(6:10):** The HTML \<article\> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).The HTML \<article\> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).

FOR EXAMPLE: something like a weather "widget" that you want to keep in the side of all your pages from your web.

**(4:26):** \<section\> can be a header  + some paragraphs for example.

**(4:02):** From MDN: It's not necessary for all links to be contained in a \<nav\> element. \<nav\> is intended only for major block of navigation links; typically the \<footer\> element often has a list of links that don't need to be in a \<nav\> element.

IDK if I can put a nav into a \<main\> for example as the wikipedia content one. Although I think I can. Because is just to say that that div is dedicated to navigation links.


## 40. VSCode Tip: Emmet
**(5:20):** nav\>ul\>li*5\>a[href=www.$.com]{Click me}

**(2:59):** \> to nest elements, + to put them in the same level, * to multiply

just write the thing and hit tab



# 5. HTML: Forms & Tables

## 43. Introducing HTML Tables
**(3:00):** table now should be left for tabular data, dont use it to layout


## 45. Tables: Thead, Tbody, and Tfoot Elements
**(1:47):** Use thead and tbody to define what is the head and what the body of a table. What if the head is actually a column and not a row?


## 46. Tables: Colspan & Rowspan
**(2:58):** use rowspan and colspan to combine cells


## 48. Common Input Types
**(4:33):** In form's input: placeholder="username" shows in grey username


## 49. The All-Important Label
**(4:35):** You can put paragraphs or divs or whatever you want into a form to organize it


## 50. HTML Buttons
**(3:49):** NOT USE \<input type="submit"\> USE \<button\> or \<button type="submit"\>

To have a useless button use button type=button

**(2:52):** a button into a form (by default) it will always submit a form


## 55. HTML5 Form Validations
**(6:35):** we can also use pattern and add a regular expression

**(6:09):** use also minlength maxlength min and max to do some html validation

**(2:41):** use \<... required\> field to force filling a field direclty from html

