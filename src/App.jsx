import { useEffect, useState } from "react";
import MapView from "./components/MapView";
import Legend from "./components/Legend";
import DisclaimerModal from "./components/DisclaimerModal";
import Header from "./components/Header";
import "./styles/app.css";

export default function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [date, setDate] = useState("2025-12-18");

  return (
    <>
      {showDisclaimer && (
        <DisclaimerModal onClose={() => setShowDisclaimer(false)} />
      )}

      <Header date={date} />

      <MapView date={date} />

      <Legend />
    </>
  );
}
