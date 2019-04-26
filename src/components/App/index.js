import React, { useState, useEffect, useRef } from "react";
import Terminal from "../Terminal";
import HackingFbi from "../HackingFbi";
import Projects from "../Projects";
import ilyaSvg from "../../img/ilyahacker.svg";
import styles from "./index.module.css";
import Footer from "../Footer";
import { simpleDragAndDrop } from "../../utils";

const App = () => {
  const [preHacked, setPreHacked] = useState(false);
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

      <Terminal setPreHacked={setPreHacked} auto={false} />

      {preHacked === true && (
        <div>
          <Terminal auto={true} />
          <HackingFbi setHacked={setHacked} hacked={hacked} />
        </div>
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

          <Projects dndPermission={dndPermission} />
        </div>
      )}

      <Footer setPreHacked={setPreHacked} />
    </div>
  );
};

export default App;
