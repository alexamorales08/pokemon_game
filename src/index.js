import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
// import './index.css';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//  const el =  React.createElement(
//     "h1",
//     null,
//     'Hello World, React.js!'
//     );

// const AppList = ()=> {
//   const items = ['Items 1', 'items2', 'items3'];
//   const firstItems = <li>Item 0</li>;
  
//   return (
//     <ul>
//       {
//         firstItems
//       } 
//       {
//         items.map(item=><li>{item}</li>)
//       }
     
//         <li>{items[0]}</li>
//         <li> {items[1]}</li>
//     </ul> 
//   );
// }
// const AppHeader = () => {
// //  inline styles starts
//   // const margin=100;
//   // const headerStyle = {
//   //   color:'red',
//   //   marginLeft: `${margin}px`,
//   //   marginBottom: `${margin}px`
  
//   // };

//   return(
//     // style:{{color:'red'}} not working
//       <h1 
//       //inline styles end style = {headerStyle}
//       className="header">this is my header
  
//       </h1>
//   );
// }  

// const AppInput =()=>{
//   const placeholder = "Type tex...."
// return (
//   <label htmlFor='id'>
//     <input id='search' placeholder = {placeholder}/>
//   </label>
// )


// }

  
  // console.log(el);
  ReactDOM.render(<App />, document.getElementById('root'));

  // another way of rendering 
// const App = ()=>{
//   return el
// }

// const el = (
//   <>
//   <AppHeader />
//   <AppList />
//   <AppHeader />
//   <AppList />
//   </>
// );

// // console.log(el);
// ReactDOM.render(<App />, document.getElementById('root'));

//Second case