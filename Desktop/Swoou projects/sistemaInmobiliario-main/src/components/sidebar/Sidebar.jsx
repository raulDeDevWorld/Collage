import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import BookmarksIcon from '@mui/icons-material/Bookmarks';import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <li><AccountBalanceIcon className=""/></li> 
          <span className="">CRIS</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">CRIS | PANEL</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Panel</span>
          </li>
          <p className="title">Listas</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <BookmarksIcon className="icon" />
              <span>Cotizaciones Guardadas</span>
            </li>
            <li>
              <FormatAlignLeftIcon className="icon" />
              <span>Historial de solicitudes</span>
            </li>
          </Link>
        
      
         
          <p className="title">Utilidades</p>
        
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
       
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Historial de acceso</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Ajustes</span>
          </li>
          <p className="title">Mi cuenta</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Salir</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
