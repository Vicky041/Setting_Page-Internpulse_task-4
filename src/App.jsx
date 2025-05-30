
import Billing from "./components/Setting/Billing";
import Payment from "./components/Setting/PaymentDetails";
import SecuritySettings from "./components/Setting/Security";
import SecuritySavy from "./components/Setting/SecuritySavy"
import SettingDetails from "./components/Setting/SettingDetails";
function App() {
  return <div>
    <p className="text-5xl">Task Practice</p>
    <SettingDetails/>
    <Billing/>
    <Payment/>
    <SecuritySettings/>

    <SecuritySavy/>

  </div>;
}

export default App;
