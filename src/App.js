//import logo from './logo.svg';
import './App.css';


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


