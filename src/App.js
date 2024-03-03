
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/navbar'
import Banner from './Components/Banner/banner'
import Post from './Components/AllPosts/post'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
    <title>AtgWorld</title>
      <Navbar/>
      <Banner/>
      <Post/>
      <ToastContainer />
    </div>
  );
}

export default App;
