import { Provider } from 'react-redux';
import AddTodo from './components/addTodo';
import { store } from './store/store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo />
      </Provider>
    </div>
  );
}

export default App;
