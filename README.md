## Overview

In this lesson, we'll explore how to pass callback functions as props in order to change state in a parent component.

## Objectives

1. Practice enforcing React up-down information flow
2. Practice changing state in a parent from a child component

## React component structure

As you already know, a React application consists of many [components][components-readme]. Components have a 'parent'/'child' relationship that facilitates rendering order. While a component may have many children, it should only have one parent. Remember: components _receive_ their props and _own_ their state:
  - When `props` are passed from a parent to a child, they are meant to be unmodified. If a child needs a different `prop`, it should come from its parent
  - `state` is meant to be changed within a component using `this.setState()`

## React information flow

We already know, how to use props to pass information _down_ from parent to child. But how would we do the reverse? How might we have a child component send data to its parent component? In order to propagate information in the opposite direction, we can send a callback functions _as a prop_ from the parent component to it child.

This allows the callback to be _owned_ by a different component than the one
invoking it. Once invoked, the callback can send data to the parent component that _owns_ it, instead of the child component that _invoked_ it.


Let's summarize:
- For information to propagate _down_ the component tree parents pass `props` to their children
- For information to propagate _up_ the component tree, we typically invoke callbacks that were passed from parents to children as `props`

## Getting Started

Take a moment to familiarize yourself with the code base. We have a simple application that renders 3 unique components: `Tier1`, `Tier2`, and `Tier3`. Following is what our component structure looks like when fully rendered:
```
App
└───Parent
    ├───Child
    └───Child
```

`src/randomColorGenerator.js` has a few helper functions implemented for you that generate random colors, as well as lighter tints of a specific color.

## Deliverables

Understanding that React components should communicate up and down the component tree, we want to make sure that the following behavior is exhibited:

- When a `Tier` component is clicked it, and all other components within the same parent, should change colors (i.e. If a `Tier2` component is clicked, the other `Tier2` within the same parent component should also change color)
- When a component's color changes all of its children components should change to a lighter shade of the same color (use the imported `getReducedColor` function)
- Components of the same level should never communicate directly! For example, when a `tier3` component is clicked, it should communicate this _up_ the component tree (i.e. via a callback method that was passed).

The color changing functionality itself has already been implemented -- while you should feel free to, there is no need to alter the existing code in `src/randomColorGenerator.js`

A lot of starter code has been provided. Ultimately, you should only need to make minimal changes. While the React application is rendering without any bugs, not all of the provided code in our `Tier1` and `Tier2` components is what we want it to be! Be critical and make changes where appropriate.

## Example

The gif below shows what a fully working application should look like. While you won't be generating identical colors, the functionality should be the same:

![](https://learn-verified.s3.amazonaws.com/sample-functionality.gif)

You will notice that even if children components change colors without their parents, a changing of their parents' colors resets them.
