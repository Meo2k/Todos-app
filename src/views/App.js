import logo from './logo.svg';
import './App.scss';
import MyComponents from './example/myComponents'; 
import ListTodos from './example/Todos/listTodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './example/Nav/nav';
import Home from './example/Home/home';
import User from './example/User/user';
import DetailUser from './example/User/detailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {connect} from 'react-redux'; 

const handleBody = (bodyRedux)=>{
 bodyRedux()
}
function App(props) {
  
  return (
  <Router>
    <div className="App">
      <header className="App-header" onClick={()=>handleBody(props.bodyRedux)}>
        <Nav/>
        <img src={logo} className="spin" alt="logo" width={200} heigt={200}/>
        <br/>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todos">
            <ListTodos />
          </Route>
          <Route path="/about">
            <MyComponents name ="Meo "/>
          </Route>
          <Route path="/user" exact>
            <User />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
       </Switch>

      </header> 

      <ToastContainer
        
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  </Router>
  );
}
const mapDispatchToProps = (dispatch)=>{
  return{
    bodyRedux: ()=> dispatch({type:"BODY_USER"})
  }
}
export default connect(null, mapDispatchToProps)(App);
