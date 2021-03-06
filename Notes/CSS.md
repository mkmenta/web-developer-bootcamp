

# 6. CSS: The Very Basics

## 60. CSS is Huge, Don't Panic!
**(2:51):** DON'T FOLLOW W3SCHOOLS. FOLLOW [MDN](https://developer.mozilla.org/es/)


## 62. Color & Background-Color Properties
- **(2:43):** `color` goes for text color
- **(5:15):** `background` allows to change not only to color, but also to image gradient etc


## 66. Common Text Properties
- **(10:16):** `letter-spacing` space between the letters

- **(9:16):** `text-decorator:` under/overline + extras
- `line-height`: interlineado

- **(3:14):** `font-weight` is how bold should be the text. It can also be set to numbers, but maybe the font is not defined for those numbers

- **(2:22):** `text-align` aligns to the space that the element is taking, concretely the width. So a center align in a span would not make sense if the span doesn't have a width bigger than the content


## 68. The Font Family Property
- **(3:14):** `backup choice: font-family: Segoe UI, sans-serif;`



# 7. The World of CSS Selectors

## 70. Universal & Element Selectors
**(3:54):** select h1 and h2:
```css
h1,h2 {

}
```

## 71. The ID Selector
**(4:11):** 
```css
#id {

}
```


## 72. The Class Selector
**(2:58):** 
```css
.class {

}
```


## 73. The Descendent Selector
**(0:16):** All anchor tags that are nested or descendent of an li: 
```css
li a {

}
```


## 74. The Adjacent & Direct-Descendent Selectors
**(1:42):** Change style of the buttons that come after inputs:
```css
input + button {

}
```


## 75. The Attribute Selector
**(0:10):** style elements based on a particular attribute
```css
input[type="text]{

}
```


## 76. Pseudo Classes
**(6:15):** Every two anchors change its style
```css
a:nth-of-type(2n){

}
```

**(1:54):** Style elements in certain state e.g. when you hover over somtehing, or a checked checkbox:
```css
button:hover{

}
```


## 77. Pseudo Elements
**(2:26):** Some specific elements:
```css
h2::first-letter {

}

p::first-line {

}
```

## 78. The CSS Cascade
**(0:43):** CSS CASCADE!

If you set h1 to red and then h1 to purple, purple wins!!
```css
h1 {
    color: red
}

h1 {
    color: purple
}
```


## 79. WTF is Specificity
**(2:46):** </br>
**SPECIFITY:** i.e. priority
- ID > CLASS > ELEMENT
Also
- ELEMENT1 ELEMENT2 > ELEMENT2

**(3:51):** But be careful about overwriting! Attributes are overwritten not SELECTORS. check video here

**(7:39):** section element with class whatever
```css
section.whatever{

}
```

## 80. TIP: Chrome Dev Tools & CSS
**(1:18):** the order cascade in css can be also done by the `<link rel=X>` order in the html as in the red-purple example. The second one wins.


## 81. Inline Styles & Important
**(0:50):** INLINE STYLE SPECIFITY: if you do `style="XX"` directly in HTML this one wins over any CSS.

**(2:13):** ALSO if you do 
```css
whatever {
    color: red !important
}
```
this wins over ALL


## 82. CSS Inheritance
**(2:35):** INHERITANCE: a `<section>` nested into `<body>`, inherits the style from `<body>`.

**(3:41):** some elments dont inherit properties by default so you do:
```css
whatever {
    color: inherit
}
```


# 8. The CSS Box Model

## 88. The Display Property
- **(3:50):** Convert a block attribute as an inline and vice-versa: `display: inline;`
    - **(7:09):** inline elements **can't have width or height** and their margin and padding is mostly ignored
- **(10:37):** `inline-block`: they behave as inline elments but margin, padding, width, and height work


## 89. CSS Units Revisited
- **(1:27):** `width: 50%`: half the width of the parent
- `line-height: 50% half`: the font size of the element

## 90. CSS Units: ems
**(2:42):** `em`: unit used for font size. It inherits the size of the parent (1em) and works relatively to that. So, if the parent has a 30px font size it will work relative to that
- **(3:41):** for margin and padding em is relative to the font size of the ELEMENT ITSELF

## 91. CSS Units: rems
**(2:30):** `ems` have a problem: with nested elements e.g. ul li ... they inherit recursively and end up being too small or too big

**(2:55):** `rems` are relative to the root html element's font size so I would say **ITS BETTER TO USE THIS**

**(6:03):** a good use case for `ems` is the rounded border of a button, we want it to scale if we scale the font size of the button so that it loooks the same at different sizes

# 9. Other Assorted Useful CSS Properties

## 93. Opacity & The Alpha Channel
**(3:51):** `opacity` turns all the element transparent including text, otherwise use `rgba`


## 94. The Position Property
**(1:26):** position:
- `static` is the default,
- `relative`: push in (top, bottom...) relatively to where it should be if it was static
- `absolute`: it is like on top of everything and its position is relative to the top left corner of its parent THAT HAS A POSITION != STATIC
- `fixed`: like absolute but always relative to the page


## 95. CSS Transitions (yay!)
**(2:34):** `transition` if you change from a style to another it animates. you can use it with hover but also with JS
```css
div {
    transition: <property> <duration> <timing-function> <delay>;
}
```

**(3:57):** you can also specify what has transition: background-color 3s; or a delay XXX 3s 1s;

**(6:51):** `transition-timing-function`: how the transition is made

## 96. The Power of CSS Transforms
**(4:59):** `transform`: you can rotate scale etc. I guess it will be more useful with JS

# 10. Responsive CSS & Flexbox
`display: flex;` is used in a container to organize and shape the elements inside it flexibly. In a 
<div align="center"><b><a href="https://drive.google.com/file/d/1dVWZ4K9Jc0bAR3mDtqmb3XKxMjZnfX3J/view?usp=sharing">
REFER TO THE WDB FLEX & RESPONSIVE PDF FOR VISUAL EXAMPLES
</a></b></div>

## 104. Flex-Direction
**(4:50):** The main axes normally is `row` (horizontal) and cross axes vertical. Top to bottom and left to right. But that can be changed setting:
```css
flex-direction: row; column; column-reverse;...
```

## 105. Justify-Content
**(1:28):** `justify-content` can be `right`, `left` but also `space-between` and `space-around` which makes elements be justified as in word the sentences


## 106. Flex-Wrap
**(0:13):** If no wrap is selected, elements are squeezed to fit in the containers space. If we set `flex-wrap: (wrap/wrap-revers)` when elements don't fit, they are displayed in a new line/column.

can be: wrap; wrap-reverse; etc. it basically defines the cross-axis


## 107. Align-Items
**(1:38):** `align-items`: it affects the cross-axis. it says where to distribute elements in that axis (not when is a new line as in wrap, but always)
```css
align-items: flex-end; center;..
```
**(4:24):** `align-items: baseline;` aligns everything to the baseline of the letters/words inside. A bit weird but might be useful

## 108. Align-Content & Align-Self
**(2:54):** `align-self`: to modify a single element alignment

**(1:50):** `align-content`: how to distribute elements when multiple lines/columns.


## 109. Flex-Basis, Grow, & Shrink
**(1:17):** `flex-basis`: size along the main axis by DEFAULT. When there is space for it.

**(3:18):** ok its a bit messy. use flex-grow flex-baseline max-width min width etc to define how to   wrap elements when display changes

## 110. Flex Shorthand
**(0:26):** flex: [flex-grow] [flex-shrink] [flex-basis]

## 111. Responsive Design & Media Queries Intro
**(5:00):** 
```css
@media(min-width: 800px){

}
```
when width is 800px or more. `max-width` is the opposite


## 112. The Power of Media Queries
**(4:34):** 
```css
@media(min-width:500px) and (max-width: 800px) {
    ...
    h1{

    } 
    img{

    }
}
```
or you can play with order and use only min-width various times so that at different points it changes
