import React from 'react';

import "../styles/Payment.css"

function Payment() {
    
    return(
        <main id="main-payment">
            <p>Número do Cartão:</p>
			<input type="text" id="CC" name="CC"/>
			<p>Código PIN</p>
			<input type="text" id="PIN" name="PIN"/>
			<button type="button">Comprar</button> 
        </main>
    );
}

export default Payment;