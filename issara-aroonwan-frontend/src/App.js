import React, {lazy} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Routeingpa from './Route/Routeing'
//const Route = lazy(() => import('./Route/Routeing'));


function App() {
  return (
    <div className="App">
     <Routeingpa/>
    </div>
  );
}

export default App;
