import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar title="Blorty" gitLinktext="GitHub" aboutText="About us" />

      <div className="container my-5">
        <Form heading="Enter text below"/>
      </div>
    </>
  );
}

export default App;
