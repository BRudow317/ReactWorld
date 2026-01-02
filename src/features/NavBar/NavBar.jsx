import { ROUTES } from "../../App";
import { NavLink, useLocation } from "react-router-dom";
import toProperCase from "../../utils/toProperCase.js";
import "./NavBar.module.css";

// import * as MediaQuery from "./MediaQuery.module.css";
// CSS to className
const styles = {
    NavShell: {
        display: "flex",
        flexDirection: "row",
        // alignItems: "stretch",
        justifyContent: "center",
        
        border: "2px solid #900000" ,
        width: "100%",
        // height: "50px",
    },
    NavBlock1: {
        flexGrow: 1,
    },
    NavBlock2: {
        flexGrow: 2,
    },
    NavBlockMain: {
        flexGrow: 1,
    },
    NavList: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        listStyleType: "none",
        padding: 0,
        margin: 0,
        // gap: "var(--global-gutter-sm)",
        border: "2px solid #000000",
        // padding: "10px 15px",
        
    },
    NavLink: {
        // position: "relative",
        // display: "inline-flex",
        // alignItems: "center",
        // padding: "10px 15px",
        color: "#000000",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "all 200ms ease",
        border: "2px solid #000000" ,
        
    },
    isActive: {
        // transform: "translateY(var(--lift-y-1, 1px))",
        filter: "brightness(1.03)"
    }
};

export const NavBar = () => {
    const location = useLocation(); //{location}
  return (
    <div role="navigation" 
        style={styles.NavShell}
        className={"navshell"}
    >
    <ul style={styles.NavList}>
      {Object.entries(ROUTES).map(
        ([key, value]) => (
        <li key={key}
            // className={MediaQuery.NavListItem}
            // style={styles.NavListItem}
        >
            <NavLink
                role="button" 
                id={`Nav:${key}`}
                style={({ isActive }) => isActive 
                ? { ...styles.NavLink, ...styles.isActive } : styles.NavLink}
                to={value}
                end={value === "/"}
            >
                <span>{toProperCase(key.toString())}</span>
                <span>{location.toString()}</span>
            </NavLink>
        </li>
      ))}
    </ul>
    </div>
  );
}
