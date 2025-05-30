// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [mobile, setMobile] = useState('');
//   const [storedMobile, setStoredMobile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStoredMobile(mobile);
//     setMobile('');
//   };

//   return (
//     <div className="App" style={{ padding: '20px' }}>
//       <h2>Enter Your Mobile Number</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="tel"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//           placeholder="Enter mobile number"
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>

//       {storedMobile && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Stored Mobile Number:</h3>
//           <p>{storedMobile}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;






// function MyButton(){
//   return (
//   <button>
//     I'm a Button
//     </button>
//   );
// }

// export default function MyApp(){
//   return(
//     <div>
//       <h1>Welcome to My Page</h1>
//       <MyButton/>
//     </div>
//   );
// }




// const user = {
//   name : 'Hedy Lamarr',
//   imageurl : 'https://i.imgur.com/yXOvdOSs.jpg',
//   imagesize : 90,
// };

// function Myappp(){
//   return(
//     <div>
//       <h1>
//         Welcome to My Page
//       </h1>
//       <img
//         class = "avatar"
//         alt = {'Photo of' + (user.name)}
//         src = {user.imageurl}
//         style={{
//           height :user.imagesize,
//           width : user.imagesize,
//           borderRadius: '50%',
//         }}
//       />
//     </div>
//     );
// };

// export default Myappp;




// const items = [
//   {item : 'Carrot', isFruit : false, id: 1 },
//   {item : 'Beetroot', isFruit : false, id: 2 },
//   {item : 'Apple', isFruit : true, id: 3 },
// ];

// function Products(){
//   const listofitems = items.map(product =>
//     <li
//       key = {product.id}
//       style={{
//         color: product.isFruit ? 'blue' : 'pink'
//       }} >
//     {product.item}
//     </li>
//   );

//   return (
//     <ol>
//       {listofitems}
//     </ol>
//   )
// }

// export default Products;




// import { useState } from "react";

// function MyApp(){
//   return (
//     <div>
//       <p>Click Buttons to check the count</p>
//       <Button/> <br />
//       <Button/>
//     </div>
//   );
// }

// function Button(){
//   const [count, setcount] = useState(0);

//   function handleclick(){
//     return setcount(count+1);
//   }

//   return (
//     <button onClick={handleclick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default MyApp;




import { useState } from "react";

function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} /> <br />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default MyApp;