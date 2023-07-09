import React from 'react';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Center from './components/Center/Center';
import Monitor from './components/Monitor/Monitor';
import Last from './components/Last/Last';
import Footer from './components/Footer/Footer';
import LastFooter from './components/LastFooter/LastFooter';
function App() {
  return (
    <div className="App">
      <Header />
      <Information />
      <Center />
      <Monitor />
      <Last />
      <Footer />
      <LastFooter />
    </div>
  );
}

export default App;
