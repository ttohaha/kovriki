import {React, lazy, Suspense} from 'react'

import './App.css';import Loader from './Loader/Loader';
;

const Homepage = lazy(()=> import('./Render_home/Homepage'))

function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <Homepage/>
      </Suspense>
    </div>
  );
}

export default App;
