import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  allLightsOn,
  allLightsOff,
  numberOfLightsOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
        numberOfLightsOn={numberOfLightsOn}
      />
    </>
  );
}
