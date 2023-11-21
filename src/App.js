import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Countries from './component/Countries';
import NotFound from './component/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Countries/>}></Route>
      <Route path='*' element ={<NotFound/>}></Route>

    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
