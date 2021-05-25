
import Layout from "./components/Layout/Layout" ;
import Animal from "./components/Animal/Animal" ;
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import "./App.css" ;
import { Redirect, Route, Switch } from "react-router";


import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { restore } from "./store/actions/auth";
const App =() =>{
  const disptach = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => {
    disptach(restore());
  }, [disptach]);

  let Output = (
    <Switch>
      <Route path="/" exact component={Animal} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/"/>
    </Switch>
  );
  if (isAuthenticated) {
    Output = (
      <Switch>
        <Route path="/" component={Animal} exact />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className="App">
      <Layout>  
      
    {Output}
    </Layout></div>
   
  );
}

export default App;
