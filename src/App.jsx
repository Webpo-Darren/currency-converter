import './App.css'
import { useEffect } from "react";




function App() {
  // function handleMouseEnter(){
  //   alert('Just click!!')
  // }

  return (
    <>
      <h1>Finance DashBoard</h1>
      <label>
      Stock Symbol: <input name="Stock Symbol" /> 
    </label> 
    <label>
     Quantity: <input name="Quantity" />
    </label>
    <label>
     Purchase Price: <input name="Purchase Price" />
    </label>

    </>
  )
}

export default App;


{/* <button onMouseEnter={handleMouseEnter}>
        Click me
      </button>
  <select name="currency" id="currencySelect">
      <option value="usd">USD</option>
      <option value="jpy">JPY</option>
      <option value="sgd">SGD</option>
      <option value="myr">MYR</option>
</select>
<div> testing </div> */}

//Drop down list
// import './App.css' 

// function App() {
//   function handleSelect() {
//     alert('New option selected!');
//   }

//   return (
//     <>
//       <h1>Currency Converter</h1>
//       <select name="currency" id="currencySelect" onChange={handleSelect}>
//         <option value="usd">USD</option>
//         <option value="jpy">JPY</option>
//         <option value="sgd">SGD</option>
//         <option value="myr">MYR</option>
//       </select>
//     </>
//   )
// }

// export default App;
