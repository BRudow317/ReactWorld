import { useGoogleLocationPicker } from "../../features/GoogleLocationPicker/useGoogleLocationPicker.jsx";

function GoogleAddressPage() {
    const [GoogleAddressInput, GoogleMapBox] = useGoogleLocationPicker();

    return (
        <>
        <h2>Google Input From Hook</h2>
        {GoogleAddressInput}
        <h2>Google Map From Hook</h2>
        {GoogleMapBox}
        </>
    );
}
export default GoogleAddressPage;