import { Provider } from 'react-redux';
import AddTodo from './components/addTodo';
import { store } from './store/store';
import './App.css';
import TodosList from './components/todosList';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo />
        <TodosList />
      </Provider>
    </div>
  );
}

export default App;
