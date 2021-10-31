
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import { About } from './components/About';
import { ArticlesList } from './components/ArticlesList';
import { Article } from './components/Article';
import { Home } from './components/Home';


function App() {
  return (
    <div className="max-w-screen mx-auto">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article-list" component={ArticlesList} />
        <Route exact path="/article" component={Article} />
      </Router>
    </div>
  );
}

export default App;
