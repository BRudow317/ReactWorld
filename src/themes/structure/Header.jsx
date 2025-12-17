import logo from '../../assets/MlmLogo.jpg';
import React from "react";
//import { useNavigation } from '../hooks/useNavigation';
import { DarkTheme,
// LightTheme, 
// ContainerBorderTheme, 
// createDiagonalGradient 
} from "../ThemeStyles";

//export default
//class Header extends React.Component {

    const Header = function() {
        //const { getCurrentPageName } = useNavigation();

       // render() 
        const mystyle = {
             color: "white",
        //     backgroundColor: "DodgerBlue",
        //     padding: "10px",
        //     fontFamily: "Arial"
        }
        

        const mlmLogoStyle = {
            width: '5px',
            height: '5px',
            borderRadius: '2px',
        }
        
        const pageNameStyle = {
            fontSize: '1.05rem', // slightly larger for page name
            fontWeight: 700, // bold weight for emphasis
            color: DarkTheme.MlmGreen, // green accent color
        };
        
        return (
            <>
                <div className="Header-container">
                    <div className="header-logo-container">
                        <img src={logo} 
                            style={mlmLogoStyle} 
                            className="header-logo" 
                            alt="mlm-logo"
                        />
                    </div>
                    <div className="Header-layer layer2" style={mystyle}><h1>Miller Land Management</h1></div>
                    {/* <div className="Header-layer layer3"><h2 style={pageNameStyle}>{getCurrentPageName()}</h2></div> */}
                    <div className="Title"><h2 style={pageNameStyle}>Page Title Goes Here</h2></div>
                </div>
            </>
        );
    }
//}
export default Header;