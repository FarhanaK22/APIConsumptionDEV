
import './App.css';
import DeleteInfo from './Components/DeleteInfo'
import UpdateInfo from './Components/PutInfo'
import GetInfo from './Components/GetInfo'
import PostInfo from './Components/PostInfo'

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <h1>API Consumption</h1>
      </header>
      <main>
        <GetInfo />
        <PostInfo />
        <UpdateInfo />
        <DeleteInfo />
      </main>
    </div>
  );
}

export default App;
