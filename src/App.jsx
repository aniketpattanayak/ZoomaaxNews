import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BulletinStory from "./BulletinStory";
import Footer from "./Footer";
import Header from "./Header";
import LatestNews from "./LatestNews";
import MustRead from "./MustRead";
import Navbar from "./Navbar";
import SubscribeSection from "./SubscribeSection";
import TopCreator from "./TopCreator";
import WelcomeBanner from "./WelcomeBanner";
import BlogPage from "./BlogPage"; 

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Navbar />
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <WelcomeBanner />
                <LatestNews />
                <BulletinStory />
                <MustRead />
                <TopCreator />
                <SubscribeSection />
              </>
            }
          />
         
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
