import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar';
import User from './json_user/User';
import { A } from './ContextApi/A';
import { Github_home } from './Github_project/Github_home';
import { Route, Routes } from 'react-router-dom';
// import { Main_useffect } from './Use-effect/Main_useffect';
// import Users from './Users/Users';
// import Demo from './Demo';
import Home from './Navbar/Home';
import { Profile } from './Github_project/Profile';
import { Aboutus } from './Navbar/Aboutus';
import { Services } from './Navbar/Services';
import { Contact } from './Navbar/Contact';
import Navbar from './Navbar/Navbar';
import { Todohome } from './TodoApp/Todohome';
import MovieApp from './movie-app/Movie-app';
import PostTable from './poll-app/PostTable';

function App() {
  return (
    <div className="App" style={{display:"flex",flexDirection:"column",height:"100vh",width:"100%",padding:"50px"}}>
      {/* <Demo /> */}
      {/* <Users /> */}
      {/* <A /> */}
      {/* <Main_useffect />
      <Github_home /> */}
      {/* <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
      </Routes>
      </div> */}
      {/* <Todohome /> */}
      {/* <MovieApp /> */}
      <PostTable />
    </div>
  );
}

export default App;
