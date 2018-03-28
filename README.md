## Objectives

- Practice enforcing React up-down information flow
- Practice debugging

## Getting Started

Take a moment to familiarize yourself with the code base. We have a simple application that renders 3 unique components: `Tier1`, `Tier2`, and `Tier3`. Following is what our component structure looks like when fully rendered:
```
App
├───Tier1
│   ├───Tier2
│   │   └───Tier3
│   │   └───Tier3
│   └───Tier2
│       └───Tier3
│       └───Tier3
└───Tier1
    ├───Tier2
    │   └───Tier3
    │   └───Tier3
    └───Tier2
        └───Tier3
        └───Tier3
```

`src/randomColorGenerator.js` has a few helper functions implemented for you that generate random colors, as well as lighter tints of a specific color.

## Deliverables

Understanding that React components should communicate up and down the component tree, we want to make sure that the following behavior is exhibited:

- When a `Tier` component is clicked it, and all other components of the same tier, should change colors (i.e. If a `Tier2` component is clicked, the other `Tier2` within the same parent component should also change color)
- When a component's color changes all of its children components should change to a lighter shade of the same color
- Components of the same tier should never communicate directly! For example, when a `tier3` component is clicked, it should communicate this _up_ to its `tier2` parent component (via a callback method that was passed). Following, the parent component can update all of its children components.

The color changing functionality itself has already been implemented -- while you should feel free to, there is no need to alter the existing code in `src/randomColorGenerator.js`

A lot of starter code has been provided. Ultimately, you should only need to make minimal changes. While the React application is rendering without any bugs, not all of the provided code in our `Tier1` and `Tier2` components is what we want it to be! Be critical and make changes where appropriate.

## Example

The gif below shows what a fully working application should look like. While you won't be generating identical colors, the functionality should be the same:

![](https://learn-verified.s3.amazonaws.com/sample-functionality.gif)


You will notice that even if children components change colors without their parents, a changing of their parents' colors resets resets them.


[sample-functionality]: "https://learn-verified.s3.amazonaws.com/sample-functionality.gif"
