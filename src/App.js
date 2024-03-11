//import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Product from './Product';

// const App = () => {
//     console.log('button clicked');

//     const newLocal = 'http://89.111.141.36:8000/web-data';

//   const handleClick = () => {

//     const data = {
//       products: 'apple',
//       totalPrice: '150',
//   }

//     fetch(newLocal , {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data)
//     })   
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };


// export default App;


const App = () => {
  const newLocal = 'http://89.111.141.36:8000/web-data';
  const handleClick = () => {
    console.log('button clicked');
      const data = {
      products: 'apple',
      totalPrice: '150',
  }

    fetch(newLocal , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })   
  }


  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;

// function App() {
//   const newLocal = 'https://89.111.141.36:8000/web-data';

  // const handleClick = () => {

  //   const data = {
  //     products: 'apple',
  //     totalPrice: '150',
  // }

  //   fetch(newLocal , {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data)
  //   })   
  // }


//   return (
//     <div className="App">
//       <Product />
//       <Button onClick={handleClick}/>
//     </div>
//   );
// }

// export default App;
