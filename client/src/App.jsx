import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
  import { Outlet } from 'react-router-dom';
  import { ToastContainer } from 'react-toastify';
  import Footer from './components/Footer';
  
  import 'react-toastify/dist/ReactToastify.css';
  
  import './App.css';
  
  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    
    const token = localStorage.getItem('id_token');
    
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  
  function App() {
  
    return (
      <ApolloProvider client={client}>
        <div className="w-full h-screen bg-blue-100">
          <Outlet />
          <div className='w-90 flex justify-center'>
            <Footer />
          </div>
          <ToastContainer />
        </div>
      </ApolloProvider>
    );
  }
  
  export default App
  