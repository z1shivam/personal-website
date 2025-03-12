import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import AboutPage from "./pages/About";
import BlogPage from "./pages/BlogPage";
import BlogsPage from "./pages/Blogs";
import ConfirmContactPage from "./pages/ConfirmContact";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import PortfolioPage from "./pages/Portfolio";
import { clearCache } from "./utils/cache";

export default function App() {
  useEffect(() => {
    clearCache("LATEST_POSTS_INFO_CACHE");
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 font-inter text-base">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/confirm" element={<ConfirmContactPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
