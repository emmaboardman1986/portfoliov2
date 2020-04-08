---
title: "Accessible, custom-styled Radio Buttons"
date: "2019-04-08"
tags: "Accessibility, Semantic HTML, no JS, React"
---

> The internet is full of wonderful articles on accessible custom radio buttons (some of which are referenced in this blog post). This post does not attempt to reinvent the wheel, it is my personal exploration of what is required to make the key components of the web inclusive and accessible. 

Results:
* <a href="https://codesandbox.io/s/accessible-styled-radio-buttons-no-js-beln1?file=/index.html" target="_blank">HTML & CSS CodeSandbox</a>
* <a href="https://codesandbox.io/s/accessible-custom-styled-radio-buttons-react-xqktr?file=/src/App.js" target="_blank">React CodeSandbox</a>

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
  <fieldset>
        <legend>Allow 3rd party cookies</legend>
        <input type="radio" id="3rd-party-on" name="3rd-party" value="on" />
        <label for="3rd-party-on">on</label>
        <input
          type="radio"
          id="3rd-party-off"
          name="3rd-party"
          value="off"
          checked
        />
        <label for="3rd-party-off">off</label>
      </fieldset>
```

## How & Why?

**Feature:** Rely on built-in behaviours where possible

**Rationale:** HTML offers us keyboard functionality for radio buttons out of the box. The fieldset and legend work together to identify the buttons as a group and the shared name allows a keyboard user to toggle between the buttons using the arrow keys.  

**Implementation Details: **
To ensure this default functionality is not lost to custom styling, it is important to not hide the input from the DOM. A visually hidden class will ensure that styling for sighted users can be implemented, without losing the keyboard accessibility. 

**Feature:** Nest the input within the label 

**Rationale:** When the input is nested within the label, the label becomes the trigger for the input itself. It also increases the hit area of the input, improving usability for mouse or touch users. 

**Feature:** Wrap the label text in a span 

**Rationale:** Wrapping the label text in a span allows 
* a custom radio button to be created as the span's :before element 
* focus styling to be added. this is lost when the original input is visually hidden.

**Implementation Details:** 

* using a box-shadow to wrap the span on focus enables the use of border-radius, facilitating a (potentially) improved visual design.

> References: <a href="https://inclusive-components.design/" target="_blank">Heydon Pickering's Inclusive Components</a>;  <a href="https://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/" target="_blank">Replacing Radio Buttons without Replacing Radio Buttons</a>; 

#Results 

* <a href="https://codesandbox.io/s/accessible-styled-radio-buttons-no-js-beln1?file=/index.html" target="_blank">HTML & CSS CodeSandbox</a>
* <a href="https://codesandbox.io/s/accessible-custom-styled-radio-buttons-react-xqktr?file=/src/App.js" target="_blank">React CodeSandbox</a>