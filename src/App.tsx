import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Footer, Header, NoPage, SidebarMenu } from './components';
import { pagesList } from './pages';

function App() {
  return (
    <>
    <Header />
    <SidebarMenu />
    <BrowserRouter>
      <Routes>
        {pagesList.map(page => {
          const PageElement = <page.component />
          return (<Route path={page.path} element={PageElement} />)
          })}
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
