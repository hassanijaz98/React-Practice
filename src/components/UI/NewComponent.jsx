// import React, { useState } from "react";

// export default function NewComponent() {
//   const [state, setState] = useState(false);

//   const changeColor = () => {
//     setState((prevState) => {
//       prevState = !prevState;
//       return prevState;
//     });
//   };

//   const colorGreen = { color: "green" };

//   const colorRed = { color: "red" };
//   return (
//     <div>
//       <h1 style={state ? colorGreen : colorRed}> Color</h1>
//       <button onClick={changeColor}>{state} Increment</button>
//       <button onClick={changeColor}>{state} Decrement</button>
//     </div>
//   );
// }
