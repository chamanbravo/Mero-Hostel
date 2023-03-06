import React from "react";
import { Hero, ExploreNearby, Recommend, Host } from "../components";

function Homepage() {
  return (
    <div>
      <Hero />
      <ExploreNearby />
      <Recommend />
      <Host />
    </div>
  );
}

export default Homepage;
