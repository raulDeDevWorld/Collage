import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Cards from "../../components/Cards";
const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
      <Cards/>
        </div>
        <div className="charts">
       
        </div>
        <div className="listContainer">
          <div className="listTitle">Ultimas efectuaciones</div>
      
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
