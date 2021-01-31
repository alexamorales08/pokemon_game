// import HeaderBlock from "./components/HeaderBlock";
import Header from "./components/Header";
import Bg3IMG from './asserts/bg3.jpg';
import Layout from "./components/Layout";
import React from "react";
import Footer from "./components/Footer";


const App = ()=>{
  return (
    <>
    {/* <HeaderBlock title='this is new marathon' /> */}
    <Header
     title = 'WoW, This is TRULLY REACTED'
     descr = "This is Description!"
     />
     <Layout
     id="rules"
      title = 'asdadas'
      descr = "This is DescrSDSDiption!"
      urlBg = {Bg3IMG}
      
     />

<Layout
id='about'
title = 'the second'
descr = "Tsdgsdgsdbhsdh!"
colorBg = "red"
/>
<Layout
id="rules"
title = 'asdadas'
descr = "This is DescrSDSDiption!"
urlBg = {Bg3IMG}
 />
<Footer />
    </>

  )
}

export default App;
