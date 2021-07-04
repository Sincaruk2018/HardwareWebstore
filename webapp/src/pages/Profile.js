import React from 'react';

import "../styles/Profile.css";

function Profile() {
    
    return(
        <main id="main-profile">
            <div className="profile-user-input">
                <label htmlFor="profile-nome-input">Nome Completo</label>
                <input type="text" id="profile-nome-input"/>
            </div>
            
            <div className="profile-user-input">
                <label htmlFor="profile-email-input">Email</label>
                <input type="email" id="profile-email-input"/>
            </div>

            <div className="profile-user-input">
                <label htmlFor="profile-telefone-input">Telefone</label>
                <input type="text" id="profile-telefone-input"/>
            </div>

            <div className="profile-user-input">
                <label htmlFor="profile-endereco-input">Endereço</label>
                <input type="" id="profile-endereco-input"/>
            </div>

            <div id="profile-buttons">
                <button>Editar</button>
                <button>Salvar</button>
            </div>

        </main>
    );
}

export default Profile;