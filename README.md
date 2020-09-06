# React Information Flow

## Overview

In this lesson, we'll explore how to pass callback functions as props in order to change state in a parent component.

## Objectives

1. Practice enforcing React up-down information flow
2. Practice changing state in a parent from a child component

## How Does Information Flow Between Components?

We already know, how to use props to pass information _down_ from parent to child. 
But how would we do the reverse? How might we have a child component send data to 
its parent component? In order to propagate information in the opposite direction, 
we can send a callback functions _as a prop_ from the parent component to its child.

This allows the callback to be _owned_ by a different component than the one
invoking it. Once invoked, the callback can send data to or change state in the 
parent component that _owns_ it, instead of the child component that _invoked_ it.

## Getting Started

Assuming you've pulled down the starter code and ran `npm install` and `npm start`,
you should see a few rectangles in your browser. The large outer rectangle will be a
random color every time you refresh the page, but the two smaller rectangles inside
will always have a white background. Take a moment to familiarize yourself with the
code base. We have a simple application that renders a single `Parent` component and
two `Child` components. The component hierarchy is as followed:

```
App
└───Parent
    ├───Child
    └───Child
```

## Deliverables
- When either `Child` component is clicked, the `Parent` component should change color.

`src/randomColorGenerator.js` has a helper function `getRandomColor()` implemented for
you that generates a random color.


#### Changing the color of Parent

The `Parent` component has a state called `color` that is initially set to a random color.
If we want to set the state, it would be easy to do so in an instance method like shown below:

```js
function Parent() {
  const [color, setColor] = useState(getRandomColor())

  const handleChangeColor = () => {
    setColor(getRandomColor())
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child />
      <Child />
    </div>
  )
}
```

But we are going to want to run this `handleChangeColor()` function when either `Child`
component is clicked. So we are going to pass this state changing function _as a
prop_ to both `Child` components.

```js
return (
  <div className="parent" style={{ backgroundColor: color }}>
    <Child onChangeColor={handleChangeColor} />
    <Child onChangeColor={handleChangeColor} />
  </div>
)
```

Now, `Child` will have a prop called `onChangeColor` that is a _function_.
Specifically, it is the same function object as our `Parent`'s '`handleChangeColor`
function. Want to see for yourself? Put a `console.log` inside the `Child` component.

```js
function Child(props) {
  console.log(props)
  return (
    <div className="child" style={{backgroundColor: "#FFF"}} />
  )
}
```

What we want to do now is pass this `onChangeColor` prop into a React event handler.

```js
console.log(props)
return (
  <div 
    onClick={props.onChangeColor}
    className="child"
    style={{backgroundColor: "#FFF"}}
  />
)
```

And Ta-Da! Now, if you go to the app, clicking on _either_ of the white rectangle
`Child` components will cause the `Parent` component to change color! But let's
add one more feature!

## Deliverables
- When either `Child` component is clicked, it should change to its own background
color to a random color, and the other `Child` component should change to _that same_ color.

Now, we could put some state in our `Child` component to keep track of its color.
However, React components cannot pass data between 'sibling' components. Data can
only flow up and down between parent/child. So if we update the color of one `Child`
component, we have no way to pass that  data to the _other_ `Child` component. The
solution is to store the color of the `Child` in the state of the `Parent` component.
Then, we let the `Parent` component handle the passing of that data to each of it's
children components.

```js
function Parent() {
  const [color, setColor] = useState(getRandomColor())
  const [childrenColor, setChildrenColor] = useState('#FFF')

  ...
}
```

Since the data that represents the color of the two `Child` components lives in
`Parent`, we should pass that data down as props:

```js
return (
  <div className="parent" style={{ backgroundColor: color }}>
    <Child color={childrenColor} onChangeColor={handleChangeColor} />
    <Child color={childrenColor} onChangeColor={handleChangeColor} />
  </div>
)
```

Now let's actually use that props data in the `Child` component

```js
function Child(props) {
  return (
    <div 
      onClick={props.onChangeColor}
      className="child" 
      style={{backgroundColor: props.color}}
    />
  )
}
```

Lastly, we have to update the `handleChangeColor()` function in `Parent` to change
not just the `color` state, but also the `childrenColor`. To practice sending
data _back_ to the parent, let's change our `handleChangeColor` to take in an argument
of `newChildColor`.

```js
const handleChangeColor = (newChildColor) => {
  setColor(getRandomColor())
  setChildrenColor(newChildColor)
}
```

Now that the function takes in an argument, we'll need to update the `onClick`
of `Child` to be a function that invokes `this.props.handleColorChange` and passes
in a random color as the argument:

```js
function Child(props) {
  return (
    <div 
      onClick={() => props.onChangeColor(getRandomColor())}
      className="child" 
      style={{backgroundColor: props.color}}
    />
  )
}
```

Wow! Check out the finished product in the browser! When either `Child` component is
clicked, the `Parent` changes to a random color, but also, both `Child` components
change to a different random color.

#### Let's summarize:

- For information to propagate _down_ the component tree, parents pass `props` to their children
- For information to propagate _up_ the component tree, we typically invoke callbacks that were passed from parents to children as `props`
- Components of the same level (sibling components) cannot communicate directly! We can only communicate up and down the component tree. So if multiple components need to share the same information, that state should live in the parent (or a more general ancestor) component.

