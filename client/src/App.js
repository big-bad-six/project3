import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Card from './components/Card';
import SignIn from './pages/SignIn';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Card />
      <SignIn />
    </ApolloProvider>
  );
}

export default App;
