import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]);

  const handlePopulate = async (config) => {
    await axios
      .get("http://localhost:3002/home/article", config)
      .then((res) => {
        setListData(res.data.data);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
  }, [listData]);

  useEffect(() => {
    let tokenValid = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenValid,
      },
    };
    if (!tokenValid) {
      navigate("/login");
    } else {
      handlePopulate(config);
    }
  }, []);
  return (
    <div>
      <div className="pt-10 px-10 justify-items-stretch border border-red-200 w-5/6 mx-auto mt-2 h-[700px] grid grid-cols-2  gap-2">
      {listData.map((item, index) => {
            return (
              <div key={index} className="border border-slate-900">
                <div className="font-semibold text-xl mb-4">{item.title}</div>
                <div>{item.content}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
