
import NavBar from './Component/NavBar'
import Home from './Component/Home'
import Create from './Component/Create'
import NotFound from './Component/NotFound'
import BlogDetails from './Component/BlogDetails'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';

function App() {
  // const title='Welcome';
  // const likes=50;
  //const pwrson={name:'xyz',age:30};

  return (
    <Router>
    <div className="App">
    <NavBar/>
      <div className="content">
      <Switch>
      <Route exact path='/'>
      <Home/>
      </Route>
      <Route path='/Create'>
      <Create/>
       </Route>
      <Route path='/blogs/:id'>
      <BlogDetails/>
      </Route>
      <Route path="*">
      <NotFound/>
      </Route>

      </Switch>     
      </div>
    </div>
    </Router>
  );
}

export default App;
