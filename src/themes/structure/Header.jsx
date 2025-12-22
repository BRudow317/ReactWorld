import logo from '../../assets/MlmLogo.jpg';
import banner from '../../assets/MlmBanner.jpg';
import React from "react";
import styles from "./Layout.module.css";

import { DarkTheme
//,LightTheme
//,ContainerBorderTheme
//,createDiagonalGradient 
} from "../ThemeStyles";

const Header = () => {
    
    return (
        <>
            <div className={styles.HeaderPrimaryWrapperStyle}>
                <img src={banner}
                    className={styles.HeaderImgStyle}
                    alt="mlm-banner"
                />
            </div>
        </>
    );
}
export default Header;
