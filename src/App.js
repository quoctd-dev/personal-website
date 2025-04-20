import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Chỉ cần một Router ở đây
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MyPicture } from "./components/MyPicture";
import { About } from "./components/About";
import {Resume} from "./components/Resume";
import {Project} from "./components/Project";

function App() {
    return (
        <Router>  {/* Chỉ cần một Router duy nhất tại đây */}
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Banner />} />
                    <Route path="/mypicture" element={<MyPicture />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
