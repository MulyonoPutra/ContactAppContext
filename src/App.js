import Header from './components/Header';
import ContactForm from './pages/ContactForm';
import { ContactList } from './pages/Index';

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

/// Store: Suatu wadah besar yang menyimpan state secara global
/// Reducer: Suatu fungsi untuk meng-update value yang ada pada Store
/// Dispatch / Action: Proses pemanggilan sebuah instruksi/fungsi yg disediakan/dimiliki oleh reducer
/// Subscribtion: Proses pemanggilan store yang diperlukan