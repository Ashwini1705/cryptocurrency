import "./App.css";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import CyptoCurrencies from "./components/CyptoCurrencies";
import CyptoDetails from "./components/CyptoDetails";
import News from "./components/News";
import { Typography, Space } from "antd";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="menu">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<CyptoCurrencies />} />
              <Route path="/crypto/:coinId" element={<CyptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CyptoVerse © All rights are reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
