import React, { useEffect, useState } from "react";
// import { withRouter } from "react-router-dom";
import { HostelDetail } from "../components";
import axios from "axios";

function SingleHostelPage(id) {
  const hostelId = id.match.params.id;
  const [state, setstate] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post("http://localhost:4000/singlehostel", {
          hostelId,
        });
        let data = res.data.data;
        setstate(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const Loader = () => {
    return <h1 style={{ marginTop: "5rem", textAlign: "center" }}>Loading</h1>;
  };

  return state.id === undefined ? <Loader /> : <HostelDetail {...state} />;
}

export default SingleHostelPage;
