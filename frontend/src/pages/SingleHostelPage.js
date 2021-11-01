import React from "react";
import { data } from "../context/mockData/data";
import { withRouter } from "react-router-dom";
import { HostelDetail } from "../components";

function SingleHostelPage(id) {
  const hostel = data.filter(
    (place) => place.id === parseInt(id.match.params.id)
  )[0];
  return (
    <div>
      <HostelDetail {...hostel} />
    </div>
  );
}

export default withRouter(SingleHostelPage);
