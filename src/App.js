import { ContactList } from './pages/Index';
import Header from './components/Header';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <h1>
            <strong>Contact App</strong>
          </h1>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <ContactList />
          </div>
          <div className='col'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
