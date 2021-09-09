import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
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
        <main className="main-container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/generate-meme">
            <MemeGen />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/log-in">
            <LogIn />
          </Route>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

//import router

export default App;
