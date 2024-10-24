import "./App.css";

import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Mobile from "./components/Mobile/Mobile";

import useDeviceDetect from "./useDeviceDetect";

function App() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <div id="root">
          <LeftPanel />
          <RightPanel />
        </div>
      )}
    </>
  );
}

export default App;
