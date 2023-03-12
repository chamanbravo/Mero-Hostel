import Hero from "./Hero";
import ExploreNearby from "./ExploreNearby";
import Recommend from "./Recommend";
import Host from "./Host";

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
