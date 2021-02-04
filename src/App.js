import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import { authSelectors } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import './App.css';

function App() {
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        <Container>
          <AppBar />

          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Container>
      </div>
    )
  );
}

export default App;
