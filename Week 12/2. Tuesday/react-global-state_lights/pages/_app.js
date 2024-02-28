import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initiallightState = [
  { name: "living room", id: 1, isOn: false },
  { name: "kitchen", id: 2, isOn: false },
  { name: "bedroom", id: 3, isOn: false },
  { name: "bathroom", id: 4, isOn: false },
  { name: "garage", id: 5, isOn: false },
  { name: "porch", id: 6, isOn: false },
  { name: "garden", id: 7, isOn: false },
  { name: "office", id: 8, isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initiallightState);

  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function allLightsOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }
  function allLightsOff() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  const lightsOn = lights.filter((light) => light.isOn === true);
  const numberOfLightsOn = lightsOn.length;

  const isDimmed = numberOfLightsOn === 0 ? true : false;

  console.log(isDimmed);

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        numberOfLightsOn={numberOfLightsOn}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
      />
    </Layout>
  );
}
