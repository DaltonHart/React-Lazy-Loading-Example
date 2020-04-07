import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//after 16.6
import { Suspense } from 'react';


// before 16.6 suspense
// import asyncComponent from './hoc/asyncComponent';
// const AsyncApp = asyncComponent(()=>import("./App"));

// after 16.6
// names imports not supported
const LazyApp = React.lazy(()=>import("./App"));

ReactDOM.render(
  <React.StrictMode>
    {/* before 16.6 <AsyncApp /> */}
   
    <Suspense fallback={<div>Loading...</div>}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
