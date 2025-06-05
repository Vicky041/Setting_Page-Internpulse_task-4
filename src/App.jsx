import BillingNew from "./components/Setting/BillingNew";

import PaymentNew from "./components/Setting/PaymentNew";
import SecuritySetting from "./components/Setting/SecuritySavy";

import SettingN from "./components/Setting/SettingN";

function App() {
  return (
    <div>
      <p className="text-5xl">Task Practice</p>

      <SettingN />
      <BillingNew />
      <PaymentNew />
      <SecuritySetting />
    </div>
  );
}

export default App;
