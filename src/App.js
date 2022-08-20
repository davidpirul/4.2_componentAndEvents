import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input.js';
import ShowButton from './components/ShowButton';
import { useState } from 'react'


function App() {

  const [showButton, setShowButton] = useState('');
  console.log(setShowButton)

  const passCode = e => setShowButton(e.target.value)


  return (
    <div className='App'>
      <div className='container'>
        <div className='inputGroup'>
          <Input
            control='formBasicEmail'
            text='User'
            type='user'
            placeholder='Enter user name'
          />
          <Input
            control='formBasicPassword'
            text='Password'
            type='password'
            placeholder='Password'
            onChange={passCode}
          />
          <div>
            {showButton === '252525' ? <ShowButton /> : null}
          </div>
        </div>
      </div>
    </div >

  );
}

export default App;
