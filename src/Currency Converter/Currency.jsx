// import React from 'react'
// import './Currency.css'
// import React, { useState, useEffect } from 'react';

// export default function Currency() {
//     const [currencies, setCurrencies] = useState([]);
//     const [fromCurrency, setFromCurrency] = useState('USD');
//     const [toCurrency, setToCurrency] = useState('UZS');
//     const [amount, setAmount] = useState('');
//     const [result, setResult] = useState('');

//     useEffect(() => {
//         fetch('https://v6.exchangerate-api.com/v6/0cadc84e2ffbef7fdcdfea42/latest/USD')
//             .then(resp => resp.json())
//             .then(data => {
//                 const currencyArray = Object.keys(data.conversion_rates);
//                 setCurrencies(currencyArray);
//             });
//     }, []);


//     const handleConvert = () => {
//         if (amount.length !== 0) {
//             fetch(`https://v6.exchangerate-api.com/v6/0cadc84e2ffbef7fdcdfea42/latest/${fromCurrency}`)
//                 .then(resp => resp.json())
//                 .then(data => {
//                     const fromExchangeRate = data.conversion_rates[fromCurrency];
//                     const toExchangeRate = data.conversion_rates[toCurrency];
//                     const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
//                     setResult(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
//                 });
//         } else {
//             alert('Please fill in the amount');
//         }
//     };


//     return (
//         <>
//             <div class="wrapper">
//                 <div class="app-details">
//                     <img src="app-icon.svg" class="app-icon" />
//                     <h1 class="app-title">VALYUTA KONVERTORI</h1>
//                 </div>
//                 <label for="amount">Miqdori:</label>
//                 <input type="number" id="amount" value="100" />
//                 <div class="dropdowns">
//                     <select id="from-currency-select"></select>
//                     <select id="to-currency-select"></select>
//                 </div>
//                 <button id="convert-button">Konvertatsiya qilish</button>
//                 <p id="result"></p>
//             </div>
//         </>
//     )
// }
