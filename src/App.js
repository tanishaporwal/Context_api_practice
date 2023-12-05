import React,{ useContext, useEffect } from 'react';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pages from './Components/Pages';
import { AppContext } from './Context/AppContext';
import './App.css';

export const App = () => {
  const {fetchapi}= useContext(AppContext);

  useEffect(() => {
    fetchapi();
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <Blogs/>
      <Pages/>
    </div>
  )
}

export default App;
