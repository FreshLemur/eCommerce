import HomePage from "./pages/Home/HomePage";
import APIs from "./services/api/APIs";

const App: React.FC = () => {
  return (
    <div>
      <HomePage />
      <APIs />
    </div>
  );
};

export default App;
