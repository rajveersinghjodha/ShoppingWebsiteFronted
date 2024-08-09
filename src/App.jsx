// import { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar";
// import Carsouel from "./Components/Carousel";
// import Card from "./Components/Card";
// import Fotter from "./Components/Fotter";
// function App() {
//   // let [data, setData] = useState([]);
//   // useEffect(() => {
//   //   const fun = async () => {
//   //     const response = await fetch("http://11circle.live/");
//   //     const jsonResponse = await response.json();
//   //     setData(jsonResponse["data"]["catalogs"]);
//   //   };
//   //   fun();
//   // }, []);
//   // // console.log(data);
//   return (
//     <>
//       {/* <Navbar />
//       <Carsouel />
//       {data.map((item,index) => (
//         <Card one={item}/>
//       ))}
//       <Fotter /> */}
//     </>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Carsouel from "./Components/Carousel";
import Card from "./Components/Card";
import Fotter from "./Components/Fotter";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ItemsForm from "./Components/ItemsForm";
import ItemsTable from "./Components/ItemsTable";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/navbar" element={<Navbar />} />
          {/* <Route path="/carousel" element={<Carousel />} /> */}
          <Route path="/fotter" element={<Fotter />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/itemsform" element={<ItemsForm/>} />
          <Route path="/itemstable" element={<ItemsTable/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;