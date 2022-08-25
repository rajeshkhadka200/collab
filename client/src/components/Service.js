import React from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
const Service = () => {
  const Card = (data) => {
    return (
      <>
        <div className="card_feature">
          <div className="icon">{data.icon}</div>
          <div className="fe_title">{data.title}</div>
          <div className="fe_body">{data.card_body}</div>
        </div>
      </>
    );
  };
  let data = [
    {
      title: "Realtime collab",
      card_body:
        "User can collab in realtime. The code get sync with ni a milisecond.",
      icon: <GroupsOutlinedIcon fontSize="large" className="icon_ft" />,
    },
    {
      title: "Realtime collab",
      card_body:
        "User can collab in realtime. The code get sync with ni a milisecond.",
      icon: <GroupsOutlinedIcon fontSize="large" className="icon_ft" />,
    },
    {
      title: "Realtime collab",
      card_body:
        "User can collab in realtime. The code get sync with ni a milisecond.",
      icon: <GroupsOutlinedIcon fontSize="large" className="icon_ft" />,
    },
  ];
  return (
    <>
      <div className="fet_wrapper">
        <h3>Collab's Features</h3>
        <section className="service">
          {data.map((items, i) => {
            console.log(items);
            return <Card data={items} key={i} />;
          })}
        </section>
      </div>
    </>
  );
};

export default Service;
