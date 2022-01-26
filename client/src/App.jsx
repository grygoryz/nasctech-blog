import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ArticlesPage from './components/pages/Articles';
import CreateArticlePage from './components/pages/CreateArticle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
      </Routes>
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
      <Routes>
        <Route path="/articles/create" element={<CreateArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
