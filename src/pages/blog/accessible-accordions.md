---
title: "Accessible Accordions"
date: "2019-04-05"
tags: "Accessibility, Semantic HTML, Vanilla JS, React"
---

## Overview

My explorations into building an accessible accordion. First in HTML & Vanilla ES6, then again in React.

* <a href="https://codesandbox.io/s/accessible-accordion-vanilla-6sk0w" target="_blank">HTML & ES6 CodeSandbox</a>
* <a href="https://codesandbox.io/s/react-accordion-using-react-hooks-9uuvc" target="_blank">React CodeSandbox</a>

> The internet is full of wonderful articles on accessible accordions (many of which are referenced in this blog post). This post does not attempt to reinvent the wheel, it is my personal exploration of what is required to make the key components of the web inclusive and accessible. 

## My accessibility checklist

 This list was created based on the published advice of accessibility experts and standards groups.  I do not pretend to have met all user cases, and my testing is me, with a mac screen reader. **This is not, and is not intended to act as, a replacement for diverse user testing.**
* Can be operated by a mouse click.
* Can be operated by touch
* Can be operated by keyboard
	* The user is not trapped on any element
	* The user can bypass blocks of content not of interest
	* The user can tab through elements in a logical order
	* Focus does not trigger unexpected actions
* Can be operated easily by users with screen magnification tools.
	* Text can be enlarged up to 200% without the use of assistive technologies
* Can be easily understood by screen readers – are they aware the component is interactive, and whether the content is hidden or not.
* The accordion should look good, and signal functionality to sighted users.
	* Meaning should not be indicated by colour alone
	* Colour contrast meets the 4:5:1 requirement for small text and 3:1 requirement for large text
	* Supports dark-mode colour inversion
* Should be performant 
	* Where possible, rely on built-in element functionality (requiring less lines of code for implementation)

> References: <a href="https://romeo.elsevier.com/accessibility_checklist" target="_blank">Elsevier Accessibility Checklist</a>;  <a href="https://www.w3.org/TR/wai-aria-practices/" target="_blank">WAI-ARIA Authoring Practices 1.1</a>;   <a href="https://inclusive-components.design/" target="_blank">Heydon Pickering's Inclusive Components</a>;  <a href="https://www.hassellinclusion.com/blog/" target="_blank">Hassell Inclusion Blog</a>; <a href="https://w3c.github.io/html-aria/" target="_blank">W3C Editor's Draft: ARIA in HTML</a>

## Basic Mark-up 

```
 <div class="accordion__title">
    <h2>
    <button aria-expanded="false" type="button">
     Title 
     <svg focusable="false" width="20" height="20" viewBox="0 0 10 10">
          <rect height="8" width="2" y="1" x="4" class="vert" />
          <rect height="2" width="8" y="4" x="1" />
        </svg>
</button></h2>
  </div>
  <div class="accordion__content" hidden>
    <p>Content</p>
  </div>
```

## How & Why?  

**Feature:**  
--------------  
Title contains a button nested in an h2 element.  
<br>
**Rationale:**  
--------------
Using a button element affords us the default interactivity - it is focusable, and it has default keybindings (activation on space or enter). Nested the button within the heading results in (most) screen readers announcing the heading text alongside the button. This aids comprehension.  
<br>
**Implementation details:**  
--------  
* To fulfil the requirement for the accordion to look good, the button adopts the styling of its parent element.
```
button {
    all: inherit;
    }
```
* The button is not given the `role="button"` , as this is defined by the <a href="https://w3c.github.io/html-aria/#el-button" target="_blank">W3C as *implicit semantics*,</a> and should not be used. 
* The button is given `type="button"` to ensure that if the accordion was within a form element, the default button submission behaviour would not be activated.  

**Feature:**  
--------------  
The button contains a nested SVG "plus" icon. This icon transitions to a "minus" icon when the accordion section is expanded.  
<br> 
**Rationale:**  
-----
The icon allows functionality to be signalled to sighted users, without using colour alone. Functionality is already being signalled to screen reader users, and as such there is no requirement to label this icon.  
<br>
**Implementation Details:**  
------
Direction can change based on localisation (typical accordion chevrons point right when closed, down when expanded). Using plus and minus icons may be a more reliable and translatable representation of the state change occurring here. There is an established pattern of plus and minus icons representing accordion behaviour. This would, of course, require testing with your particular users. 
<br>  
**Feature:**  
------
Button has an `aria-expanded` attribute, content has a `hidden` attribute. 
<br>  
**Rationale:**  
------
The `aria-expanded` tells screen reader users that there is optional content to be viewed, if they chose to interact with this element. The `hidden` attribute prevents screen readers reading out content that has not actively been selected. 
<br>  
**Implementation details:** 
----------
* To support older browsers, the hidden attribute is supplemented by the following CSS
```
[hidden] {
  // support older Browsers
  display: none;
}
```

##Results 

* <a href="https://codesandbox.io/s/accessible-accordion-vanilla-6sk0w" target="_blank">HTML & ES6 CodeSandbox</a>
* <a href="https://codesandbox.io/s/react-accordion-using-react-hooks-9uuvc" target="_blank">React CodeSandbox</a>