// import Product from './Product';
// import Book from './BookList';

// const App = () => {
//   return (
//     <div>
//       <h1>Best selling</h1>
//       <Product name="Tacos With Lime" price={10.99} />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//       <Book />;
//     </div>
//   );
// };

// export default App;

// import Alert from './Alert';
// import UserMenu from './UserMenu';

// export const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         <UserMenu /> Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

// const App = () => {
//   const handleClick = evt => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={evt => console.log(evt)}>Second button</button>
//     </>
//   );
// };

// --------------

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };
//----------------

// import { useState } from 'react';
// import ClickCounter from './ClickCounter';

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// !!!---------------
// Хук useEffect(callback, deps) оголошує ефект, який приймає два аргументи:

// Перший аргумент (callback) завжди є анонімною функцією, всередині якої виконується вся логіка ефекту. Наприклад, запити на сервер, запис у локальне сховище і т.п.
// Другий аргумент (deps) - це масив залежностей ефекту. Коли будь-яка з цих залежностей змінюється, ефект буде викликаний і виконувати callback. Це може бути стан, пропси або будь-яке локальне значення всередині компонента.

// Хук useEffect не повертає жодного значення як результат своєї роботи, а лише запускає виконання анонімної функції. Іншими словами, неможливо виконати в середині функції обчислення і повернути їх у зовнішній код. Ефекти не призначені для цього!

// В коді прикладу ми не передаємо другий аргумент useEffect.

// !-----------------------------

// import { useEffect, useState } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked &{clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };
// !!!--------------------------
// Якщо другим аргументом хука useEffect передати порожній масив, то такий ефект виконається лише один раз - на етапі монтування компонента, і більше ніколи.

// !---------------------------
// import { useEffect, useState } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see my only once!');
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// !!!--------------------
// import { useEffect, useState } from 'react';

// const Modal = () => {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// !!!---------------------
// import { useEffect, useState } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('Clicks update: ', clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// !!!-------------------
// import { useEffect, useState } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   useEffect(() => {
//     console.log("'Clicks update: ', clicks");
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// !!!------------------------------
// import { useEffect, useState } from 'react';
// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log('First updated: ', first);
//   }, [first]);

//   useEffect(() => {
//     console.log('Second updated: ', second);
//   }, [second]);

//   useEffect(() => {
//     console.log('First or second updated: ', first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// !!!------------------------------
// ! Робота з LocalStorage

import { useEffect, useState } from 'react';

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');

    if (savedClicks !== null) {
      return savedClicks;
    }

    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

export default App;
