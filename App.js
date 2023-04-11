// Quick Start React from https://react.dev/learn

/* Creating and nesting components (nest - aninhando componentes) */
function MyButton() {
  return(
    <button>I'm a button</button>
  );
}

export default function MyApp() {
  return(
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

/* Writing markup (marcação) with JSX */
// JSX is stricter than HTML. You have to close tags like <br />.
// Your component also can’t return multiple JSX tags. 
// You have to wrap them into a shared parent, like a <div>...</div>
// or an empty <>...</> wrapper:
function AboutPage() {
  return(
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

/* Adding styles */
// In React, you specify a CSS class with className.
// It works the same way as the HTML class attribute:
<img className="avatar" />

// Then you write the CSS rules for it in a separate CSS file:
/* 
.avatar {
  border-radius: 50%;
}
*/

/* Displaying data */
// Curly braces (chaves) let you "escape back" into JavaScript so that you 
// can embed some variable from your code and display it to the user.

function DisplayingData() {
  return(
    <h1>
      {user.name}
    </h1>
  );
}

// For example, className="avatar" passes the "avatar" string as the CSS class,
// but src={user.imageUrl} reads the JavaScript user.imageUrl variable value,
// and then passes that value as the src attribute:
function DisplayingData2() {
  return(
    <img
      className="avatar"
      src={user.imageUrl}
    />
  );
}

// Objeto user
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
}

export default function Profile() {
  return(
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

/* Conditional rendering */
let content;
if(isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

function ConditionalRender() {
  return(
    <div>
      {content}
    </div>
  );
}

// OR TO DO COMPACTED CODE - Ternary operator

function ConditionalRender2() {
  return(
    <div>
      {isLoggedIn ? ( <AdminPanel /> ) :
      ( <LoginForm /> )}
    </div>
  );
}

// OR TO DO LOGICAL SYNTAX WHEN DON'T NEED ELSE STATEMENT

function ConditionalRender3() {
  return(
    <div>
      {isLoggedIn && <AdminPanel />}
    </div>
  );
}

/* Rendering lists */
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li 
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen"
      }}
    >
      {product.title}
    </li>
  );

  return(
    <ul>{listItems}</ul>
  );
}

/* Responding to events */
// You can respond to events by declaring event handler functions inside your components:

function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return(
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

/* Updating the screen */
// Often, you’ll want your component to “remember” some information and display it.
// For example, maybe you want to count the number of times a button is clicked.
// To do this, add state to your component. 

// You’ll get two things from useState: the current state (count), and the function
// that lets you update it (setCount). You can give them any names, but the convention
// is to write [something, setSomething].

// The first time the button is displayed, count will be 0 because you passed 0 to useState().
// When you want to change state, call setCount() and pass the new value to it.
// Clicking this button will increment the counter:

import { useState } from 'react';

export default function MyApp() {
  return(
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

/* Using Hooks */
// Functions starting with use are called Hooks. useState is a built-in Hook provided by React.
// Hooks are more restrictive than other functions. You can only call Hooks at the top of your
// components (or other Hooks). If you want to use useState in a condition or a loop, extract a
// new component and put it there.

/* Sharing data between components */
// In the previous example, each MyButton had its own independent count, and when each button was
// clicked, only the count for the button clicked changed.
// However, often you’ll need components to share data and always update together.
// To make both MyButton components display the same count and update together, you need to move
// the state from the individual buttons “upwards” to the closest component containing all of them.

// You can pass the state down from MyApp to each MyButton, together with the shared click handler.
// You can pass information to MyButton using the JSX curly braces (chaves), just like you previously
// did with built-in tags like <img>.

// The information you pass down like this is called props. Now the MyApp component contains the count
// state and the handleClick event handler, and passes both of them down as props to each of the buttons.

// When you click the button, the onClick handler fires. Each button’s onClick prop was set to the
// handleClick function inside MyApp, so the code inside of it runs. That code calls setCount(count + 1),
// incrementing the count state variable. The new count value is passed as a prop to each button, so they
// all show the new value. This is called “lifting state up”. By moving state up, you’ve shared it between components.

import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return(
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
