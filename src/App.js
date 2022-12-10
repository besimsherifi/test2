import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>

          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
