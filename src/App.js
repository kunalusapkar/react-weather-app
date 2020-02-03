import React from 'react';
import Header from './Weather/Header';
import MainContainer from './Weather/mainContainer';
import ErrorBoundary from './Weather/ErrorBoundary';

// import './App.css';

function App() {
  return (
    <div>
      <ErrorBoundary>
      <Header />
      <MainContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
