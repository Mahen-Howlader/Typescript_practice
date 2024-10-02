import './App.css';
import User from './Component/User';

const user = {
  name: "User Antor Howlader", age: 34, lang: ["bangla", "english", "math"]
}

const App: React.FC = () => {
  return (
    <div className="">
      <h1>Bangladesh</h1>
      <User user={user}></User>
    </div>
  );
}

export default App;
