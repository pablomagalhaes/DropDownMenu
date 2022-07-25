import React, { useEffect, useState } from "react";
import axios from "axios";

import DropDownMenu from "../../components/DropDownMenu";

function Home() {

  const [data, setData] = useState<object[]>([])

  //Get data menu from Json file
  useEffect(() => {
    axios
    .get('local-json/data.json')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  },[]);

  return (
    <>
      <DropDownMenu position="left" items={data}  />
      <DropDownMenu position="right" items={data}/>
    </>
  );
}

export default Home;