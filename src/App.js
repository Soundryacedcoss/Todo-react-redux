import './App.css';
import { Provider } from 'react-redux'
import {Todo} from './Todo'
import store from './Store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Todo/>
      </Provider>
    </div>
  );
}

export default App;
