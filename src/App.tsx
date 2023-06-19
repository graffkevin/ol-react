import './App.css';

import { Provider } from 'react-redux';

import { Map } from './components';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Map></Map>
    </Provider>
  );
}

export default App;
