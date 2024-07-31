import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import CardUpload from './components/CardUpload';
import CardList from './components/CardList';
import CardSearch from './components/CardSearch';
import Message from './components/Message';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/account" component={Account} />
          <Route path="/upload" component={CardUpload} />
          <Route path="/cards" component={CardList} />
          <Route path="/search" component={CardSearch} />
          <Route path="/messages" component={Message} />
          <Route path="/" element={
            <div>
              <h1>Welcome to CardShark</h1>
              <p>My friend is bold enough to trust me with her app. We'll see how it goes.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

