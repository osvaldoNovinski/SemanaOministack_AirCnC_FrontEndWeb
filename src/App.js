import React, {useState} from 'react';
import './App.css';
import api from './services/api';


import braces from './assets/braces.svg';



function App() {

  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    
  const response = await api.post('/session', {email });

  const {_id} = response.data;

  localStorage.setItem('user', _id);

  console.log(_id);
 }

  return (
   
     <div className="container">
       <img src={braces} alt="logo1"/>
          <div className="content">
            <p> Ofereça <strong>spots</strong> para programadores e encontre grandes <strong>talentos</strong>.</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-MAIL *</label>
              <input 
              id="email" 
              type="email" 
              placeholder="Seu melhor E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
              />
              <button className="btn" type="submit">Entrar</button>

            </form>
          </div>
     </div>
   
  );
}

export default App;
