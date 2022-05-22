
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <h1>hallow</h1>
      <button onClick={notify}>Notify!</button>
    
     <ToastContainer/>
    </div>
  );
}

export default App;
