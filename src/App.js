
import './index.css';
import HomeScreen from './screens/Home';
import { ListScreen } from './screens/List';
import { BrowserRouter as Router,   Routes,  Route

  
  
}from "react-router-dom";


function App() {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<HomeScreen/>}/>
       <Route path="/list" element={<ListScreen/>}/>
     </Routes>
  </Router>
  );
  
}

export default App;