import './App.css';

import Provider from "./context"

import Header from "./components/layout/Header"
import StationView from "./components/pages/StationView"

function App() {
  return (
    <Provider>
      <div className="App">
        <Header title="Trainalyze"></Header>
        <StationView></StationView>
      </div>
    </Provider>

  );
}

export default App;
