import PixelDemo from "../../features/Demos/PixelDemo.jsx";
import { SaveAndDeleteButtons } from "../../features/Demos/SaveAndDeleteButtons.jsx";

function DemoPage() {
  
  return (
    <>
      <h4>PixelDemo</h4>
      <PixelDemo />
      <h4>SaveAndDeleteButtons</h4>
      <SaveAndDeleteButtons />
      <h4>Window API</h4>
      {/* <label>Screen Details:</label>
      <span>{Window.getScreenDetails()}</span> */}
      <label>Location:</label>
      <span>{Window.location}</span>
    </>
  );
}
export default DemoPage;
export { DemoPage };