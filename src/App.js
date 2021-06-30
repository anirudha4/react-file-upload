import Upload from './pages'
import Layout from './layout'
import {AnimatePresence} from 'framer-motion';
function App() {
  return (
    <div className="container">
      <AnimatePresence>
        <Layout>
          <Upload />
        </Layout>
      </AnimatePresence>
    </div>
  );
}

export default App;
