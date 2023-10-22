import React from 'react';
import logo from './assets/logo.jpg'; // replace with your logo
import mainImage from './assets/main.jpg'; // replace with your main image

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '1px solid gray',
    padding: '10px',
    boxSizing: 'border-box',
  };

  const logoStyle = {
    height: 'auto',
    width: '50px',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '5px 10px',
    color: 'black',
    fontFamily: 'Intel, sans-serif',
  };

  const mainImageStyle = {
    height: '80vh',
    width: '80vw',
    backgroundImage: `url(${mainImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Intel, sans-serif',
    borderRadius: '20px', // Add this line to make the corners rounded
    marginTop: '50px', 
  };

  const textStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add this line to add a semi-transparent background to the text
    padding: '10px',
  };


  const titleStyle = {
    fontSize: '3em',
    textAlign: 'center',
  };

  const subtitleStyle = {
    fontSize: '1.5em',
    textAlign: 'center',
  };

  
  const handleButtonClick = () => {
    window.location.href = 'https://www.example.com'; // replace with your URL
  };

  return (
    <div style={appStyle}>
      <div style={headerStyle}>
        <img src={logo} style={logoStyle} alt="Logo" />
       <button style={buttonStyle} onClick={handleButtonClick}>Account</button>
      </div>
      <div style={mainImageStyle}>
        <div style={{...titleStyle, ...textStyle}}>Find your Valeur</div>
        <div style={{...subtitleStyle, ...textStyle}}>Valeur is a new way to manage and verify physical assets</div>
      </div>
    </div>
  );
}

export default App;
// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import backgroundImage from './assets/minimalist.jpg'; // import the image


// function App() {
//   const backgroundImageStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '100vh',
//     width: '100vw',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   const textStyle = {
//     color: 'rgba(140,20,252,1)',
//     textShadow: '2px 2px 4px rgba(140, 20, 252, 1)',
//     fontFamily: 'Georgia, serif',
//   };

//   const h1Style = {
//     color: 'rgba(140,20,252,1)', // Change to your preferred color
//     fontFamily: 'Arial, sans-serif',
//     position: 'absolute',
//     top: '10px',
//     left: '10px',
//   };

//   const buttonStyle = {
//     backgroundColor: 'rgba(140,20,252,1)', 
//     color: 'yellow', 
//     border: 'none', 
//     padding: '10px 20px', 
//     fontFamily: 'Arial, sans-serif', 
//     fontSize: '16px' 
//   };

//   return (
//     <div style={backgroundImageStyle}>
//       <h1 style={h1Style}>VALEUR</h1>
//       <div className="content" style={textStyle}>
//         <div>
//         💎💎💎
//         </div>
//         <h1>Diamond Transaction...</h1>
//         💎💎💎<div></div>
//         <button style={buttonStyle}>Buy</button>
//       </div>
//     </div>
//   );
// }

// export default App