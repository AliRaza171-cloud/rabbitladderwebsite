import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import OurStory from './pages/OurStory.jsx';
import Contact from './pages/Contact.jsx';
import NeeDohRules from './pages/NeeDohRules.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="contact" element={<Contact />} />
        <Route path="needoh-drawing-rules" element={<NeeDohRules />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
