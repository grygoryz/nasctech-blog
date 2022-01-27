import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ArticlesPage from './components/pages/Articles';
import CreateArticlePage from './components/pages/CreateArticle';
import ArticlePage from './components/pages/Article';
import routes from './helpers/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<ArticlesPage />} />
      </Routes>
      <Routes>
        <Route path={routes.articles} element={<ArticlesPage />} />
      </Routes>
      <Routes>
        <Route path={`${routes.articles}/:id`} element={<ArticlePage />} />
      </Routes>
      <Routes>
        <Route path={routes.createArticle} element={<CreateArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
