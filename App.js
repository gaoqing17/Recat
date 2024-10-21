import { useState } from "react";

function App() {
  const ListId= [
    { name: "小王", title: "12", id: 1 },
    { name: "小王", title: "24", id: 1 },
    { name: "小王", title: "25", id: 1 },
    { name: "小张", title: "11", id: 2 },
    { name: "小张", title: "12", id: 2 },
    { name: "小张", title: "13", id: 2 },
    { name: "小李", title: "44", id: 3 },
    { name: "小李", title: "45", id: 3 }
  ];

  const [mapID,setMapID] = useState(null);
  
  function screen(id) {
    setMapID(id);
  };
  const filetList = mapID ? ListId.filter((product) => product.id === mapID : ListId);
  
  const ListTitle = filetList.map((item,index) => (
    <li key={index}>
      姓名：{item.name} &nbsp;&nbsp;金额：{item.title}
    </li>
  ));

  return (
    <>
      <ul> {ListTitle} </ul>
      &nbsp;&nbsp;&nbsp;
      <button onClick={screen}>小王</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={screen}>小张</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={screen}>小李</button>
    </>
  );
}

export default App;
