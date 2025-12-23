import logo from '../../assets/MlmLogo.jpg';
import banner from '../../assets/MlmBanner.jpg';
import React from "react";
import { LayoutStyles } from "../";

const Header = () => {
    
    return (
        <>
            <div className={LayoutStyles.HeaderPrimaryWrapperStyle}>
                <img src={banner}
                    className={LayoutStyles.HeaderImgStyle}
                    alt="mlm-banner"
                />
            </div>
        </>
    );
}
export default Header;
