## Background Changer Application

- React + Vite
- Tailwind css

# About : -

It is a Simple Beginner Project using React, which uses some basic Concepts of React like

- Components
- callback functions
- State Management (useState)
- Event Handling (onClick)

* `onClick()` :-

It's an HTML attribute that allows you to trigger JavaScript code when the user clicks on an element.

so , onClick() is a unique function which accepts function in return.

here,in this project

                     const [color, setColor] = useState("olive");

'setColor' is an updater function which updates the 'color' state variable.

- 1 - `onClick = {setColor}` //passing Reference of a function
- 2 - `onClick = () => setColor("Red") ` // Using call back Function

`onClick = {setColor}` - Using this method on button will not get the desired results, because 'onClick' expects a function to be returned or
to be passed and here we are passing the 'reference' of a function.
This Might work in some cases but our major problem is we cannot pass parameters.

                         `onClick = {setColor("Red)}`  // This is not allowed. It is a Syntax problem.

                         Here we are passing a parameter "Red" to 'setColor' function. so it will be executed directly & will 'return value'. and the value will be stored in 'onClick'.

                         But 'onClick' requires/expects function and 'setColor' function will return only 'value'. so that's why it will not work.

`onClick = () => setColor("Red")` - we know 'setColor' is a function & so `onClick = {setColor}` might work in some cases.
But we also have to pass Parameters and `onClick = {setColor("Red)}` . This is a Syntax Problem.

                                     To solve this we made use of 'callBack' function. So by using this
                                     - onClick gets a function
                                     - we can pass a function inside function.

                                     So by using this we get our desired Output.

# useState() :-

                It is a Hook used to Maintain state of a component. (Used for UI updation).

                const [color, setColor] = useState("olive");

                Here: useState(initial-value)
                         returns 2 values in the form of array .
                            first - stateVariable [color]
                            second - update function to change state variable. [setColor]

So as we click on buttons it changes the Background color of the page according to button
and When we hit the reload the background set's back to default state.
Because the initial state has color olive and the reload technically resets the state. So, it gets the olive color.
