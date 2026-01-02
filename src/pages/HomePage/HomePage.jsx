// import { GoogleAddressInput } from "./features/GoogleAddressInput/GoogleAddressInput.jsx";
// import { GoogleMapBox } from "./features/GoogleMapBox/GoogleMapBox";
import React from "react";
import { 
// generateRandomNumber, 
// getNumberListEl1 ,
// getNumberListEl2 ,
// getNumberListEl3 ,
getNumberListEl4 ,
// randomHex32
} from "../../utils/MyRandoms.jsx";
// import '../../themes/MediaQuery.css';
// import { SiteShell } from "../../components/SiteShell/SiteShell.jsx";

function HomePage() {

  const styles = {
    shell : {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        // width: "100%",
        // height: "100%",
        // gap: "var(--global-gutter-md)",
    },
    StackedContent: {
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center",
        gap: "var(--global-gutter-md)"
    },
    RowContent: {
        display: "flex", 
        flexDirection: "row",
        justifyContent: "center", 
        alignItems: "center",
        gap: "var(--global-gutter-md)"
    }
  };

  

  return (
    <div
      style={styles.shell}
    ><div style={styles.StackedContent}>
        <h1>Hello, React World!</h1>
    </div>
    </div>
    
  );
}
export default HomePage;
export { HomePage };
