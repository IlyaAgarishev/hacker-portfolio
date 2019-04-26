import React, { useState, useEffect, useRef } from "react";
import Terminal from "../Terminal";
import TerminalAuto from "../TerminalAuto";
import HackingFbi from "../HackingFbi";
import Projects from "../Projects";
import ilyaSvg from "../../img/ilyahacker.svg";
import styles from "./index.module.css";
import Footer from "../Footer";
import { simpleDragAndDrop } from "../../utils";

const App = () => {
  const [hackInt, setHackInt] = useState(0);
  const [hacked, setHacked] = useState(false);
  const [dndPermission, setDndPermission] = useState("granted");
  const ilyahacker = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 975) {
      setHacked(true);
      setDndPermission("denied");
    }
  });

  return (
    <div className={styles.app}>
      <img
        src="https://i.gifer.com/C6Zz.gif"
        alt="globe"
        className={styles.globe}
      />

      <Terminal
        simpleDragAndDrop={simpleDragAndDrop}
        setHackInt={setHackInt}
        hackInt={hackInt}
      />

      {hackInt > 20 && <TerminalAuto simpleDragAndDrop={simpleDragAndDrop} />}

      {hackInt > 30 && (
        <HackingFbi
          simpleDragAndDrop={simpleDragAndDrop}
          setHacked={setHacked}
          hacked={hacked}
        />
      )}

      {hacked === true && (
        <div>
          <img
            src={ilyaSvg}
            alt=""
            className={styles.ilyahacker}
            ref={ilyahacker}
            onMouseDown={e => {
              simpleDragAndDrop(ilyahacker.current, e, dndPermission);
            }}
          />

          <Projects
            simpleDragAndDrop={simpleDragAndDrop}
            dndPermission={dndPermission}
          />
        </div>
      )}

      <Footer setHackInt={setHackInt} />
    </div>
  );
};

export default App;
