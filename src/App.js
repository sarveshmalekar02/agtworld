
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/navbar'
import Banner from './Components/Banner/banner'
import Post from './Components/AllPosts/post'

function App() {
  return (
    <div className="App">
    <title>AtgWorld</title>
      <Navbar/>
      <Banner/>
      <Post/>
    </div>
  );
}

export default App;
