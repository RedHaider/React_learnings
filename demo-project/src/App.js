import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import './my.css'

function App() {
  const name = "Haider"
  const companyName = "Bhen Ke Lode"
  const date = new Date().toLocaleDateString();
  const age = 10
  const facebook = "https://www.facebook.com/"
  const randomNumber = Math.random() *100
  const list = [1,2,3,4,5,6]


  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
