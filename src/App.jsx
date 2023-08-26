import {BrowserRouter, Routes, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home} from './pages/Home';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<p>sign in</p>} />
        <Route path={ROUTES.SIGN_UP} element={<Home />} />
        <Route path={ROUTES.BROWSE} element={<p>Browse video</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
