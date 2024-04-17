import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";
import portal from "./assets/portal.png";
import { useRef, useState } from "react";

const App = () => {
  const ref = useRef<IParallax>(null);
  const [isPortal, setPortal] = useState(false);
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${isPortal ? portal : moon})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current?.scrollTo(3)}
        >
          <h2>Welcome To Parallax Universe</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.9}
          speed={0.05}
          style={{ left: "50px", bottom: "50px", zIndex: 10 }}
        >
          <button onClick={() => setPortal((prevState) => !prevState)}>
            Jump To {isPortal ? "Our Universe" : "Portal"}
          </button>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current?.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
