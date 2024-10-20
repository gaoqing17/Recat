import { useState } from "react";

function App() {
  const [ListId, setListId] = useState([
    { name: "小王", title: "12", id: 1 },
    { name: "小王", title: "24", id: 1 },
    { name: "小王", title: "25", id: 1 },
    { name: "小张", title: "11", id: 2 },
    { name: "小张", title: "12", id: 2 },
    { name: "小张", title: "13", id: 2 },
    { name: "小李", title: "44", id: 3 },
    { name: "小李", title: "45", id: 3 },
    { name: "小李", title: "46", id: 3 },
  ]);

  function screen() {
    setListId(ListId.filter((product) => product.id === 1));
  }

  const ListTitle = ListId.map((item) => (
    <li key={item.id}>
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
