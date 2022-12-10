import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo';
import PostsList from './components/PostsList';

function App() {
  return (
    <ApolloProvider client={client}>
      <PostsList></PostsList>
    </ApolloProvider>
  );
}

export default App;
