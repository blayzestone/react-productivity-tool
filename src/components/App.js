import { Route, Switch } from "react-router-dom";
import Timer from "./Timer";
import Header from "./Header";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Header />
      <Switch>
        <Route path="/settings">
          <div>Settings</div>
        </Route>
        <Route path="/">
          <Timer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
