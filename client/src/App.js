import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import MemeGen from './pages/MemeGen';
import Nav from './components/Nav';
import Footer from './components/Footer';

// just import index

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Route exact path="/">
          <MemeGen />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

//import router

export default App;
