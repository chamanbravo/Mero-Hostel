import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HostelDetail } from "../components";
import axios from "axios";

function SingleHostelPage() {
  let { id } = useParams()
  const hostelId = id;
  const [state, setstate] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post("https://merohostel.herokuapp.com/singlehostel", {
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
