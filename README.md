**# **1.创建React项目**

## （1）.方法

 终端输入

1. vscode 中 点击 ( **ctrl + `**) 调出终端

2. 输入指令`node -v`，能显示版本号，说明 node 已经装好了

3. 输入指令`npm -v`，能显示版本号，说明 npm 可以使用了

   ### 二、配置淘宝镜像

   - 输入指令：
   - `npm install -g cnpm --registry=https://registry.npm.taobao.org`
   - 输入指令`cnpm -v`，能显示版本号，说明 cnpm 已经装好了
   - ![image-20241008230010975](../../../AppData/Roaming/Typora/typora-user-images/image-20241008230010975.png)

4. vscode 中 点击 ctrl + ` 调出终端

5. 输入命令：`get-ExecutionPolicy`

6. 输入命令：`set-ExecutionPolicy RemoteSigned`

7. 输入命令：`get-ExecutionPolicy`

- 在终端输入命令：`npm install -g create-react-app`
- `react`: react的顶级库
- `react-dom`: react在web段的运行环境
- `react-scripts`: 包含运行和打包react应用程序的所有脚本及配置
- 创建项目指令：`create-react-app your-app`（your-app是项目名，可以自己取）

```
├── README.md			使用方法的文档
├── node_modules		所有的依赖安装的目录
├── package-lock.json	锁定安装时的包的版本号,保证团队的依赖能保证一致。
├── package.json					
├── public				静态公共目录
└── src					开发用的源代码目录

```



# 报错

### （1）You are using Node.js 16.6.2. For Next.js, Node.js version >= v18.17.0 is required.

这里是说Node.js版本低了要到18.17.0才可以	



```
# 查看当前node版本
$ node -v

# 清除npm缓存
$ npm cache clean -f

# 全局安装n
$ npm install -g n --force

gnvm install 18.17.1




https://blog.csdn.net/qq_41956139/article/details/105944608#:~:text=64%E4%BD%8D%E7%9A%84%E7%9B%B4%E6%8E%A5%E8%BE%93%E5%85%A5%E7%89%88%E6%9C%AC
```

### （2）npm ERR! code CERT_HAS_EXPIRED npm ERR! errno CERT_HAS_EXPIRED npm ERR! request to https://registry.npm.taobao.org/create-next-app failed, reason: certificate has expired

```
清除npm缓存
npm cache clean --force
禁用SSL
npm config set strict-ssl false
```

### （3）Error: Could not find a production build in the '.next' directory. Try building your app with 'next build' before starting the production server. https://nextjs.org/docs/messages/production-start-no-build-id



```
npm run build

npm run start
```

[React vscode 创建 react 项目流程【超详细】-CSDN博客](https://blog.csdn.net/qq_45677671/article/details/115873319#:~:text=编写第一个 reac)

## 当我尝试使用react-router-dom的Link时，遇到了以下错误。

![image-20241110230233407](../../../AppData/Roaming/Typora/typora-user-images/image-20241110230233407.png)





# 2.标准语法

## 2.1.jsx插值写法

```jsx
function App() {
  const divconst = "高";
  const divTitle = "点击可查询";
  return <div title={divTitle}>{divconst}</div>;
}

export default App;

```

## 2.2.条件渲染

```jsx
function App() {
  // const divconst = "高";
  const divTitle = "点击可查询";

  let divconst = null;
  const flag = true;

  if (flag) {
    divconst = <span>flag為true時 </span>;
  } else {
    divconst = <p>flag為false時 </p>;
  }
  return <div title={divTitle}>{divconst}</div>;
}

export default App;

```

# 3.组件调用与定义方式

## 组件通信与插槽

```jsx
import React from "react";
//调用了css里面的值
import AppCss from "./App.css";
import logo from "./img.jpg";

function App() {
      const imgStyleObj = {
    white: 400,
    // white:'200',
    height: 400,
    backgroundColor: "grey",
  };
  return (
    <>
       <img src={logo} alt="" className="small" style={imgStyleObj}></img>
      <img src={logo} alt="" className="small" style={AppCss.imgStyleObj}></img>
    </>
  );
}

export default App;

```

## jsx的展开语法

```jsx
import React from "react";
import AppCss from "./App.css";
import logo from "./img.jpg";

function App() {
  const imgDate = {
    className: "small",
    style: { white: 400, height: 400, backgroundColor: "grey" },
  };
  return (
    <>
      //这个...和之前的展开运算符还是有区别的，这是jsx独有的语法标记，这里必须先把数据展开后才能使用标签里面的数据	
      <img src={logo} alt="" {...imgDate.style}></img>
    </>
  );
}

export default App;

```

## React组件的Props

### Props组件传值方式一

```jsx
const Article = (Props) => {
  return (
    <div>
      <h2>{Props.teilt}</h2>
      <p>{Props.content}</p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Article teilt="标题1" content="内容1" />
      <Article teilt="标题2" content="内容2" />
      <Article teilt="标题3" content="内容3" />
    </>
  );
}

```

#### 使用解构的方式来获取父组件内的值

```jsx
//传值时一定要使用“{}”括起来const Article = ({ teilt, content, active }) => {
  return (
    <div>
      <h2>{teilt}</h2>
      <p>{content}</p>
      <p>显示状态：{active ? "已显示" : "已隐藏"}</p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Article teilt="标题1" content="内容1" active />
      <Article teilt="标题2" content="内容2" />
      <Article teilt="标题3" content="内容3" active />
    </>
  );
}


```

#### 多层传输

``` jsx
const Detail = ({ content, active }) => {
  return (
    <>
      <p>{content}</p>
      <p>显示状态：{active ? "已显示" : "已隐藏"}</p>
    </>
  );
};

const Article = ({ teilt, DetailData }) => {
  return (
    <div>
      <h2>{teilt}</h2>
      <Detail {...DetailData} />
    </div>
  );
};

export default function App() {
  const articleDate = {
    teilt: "标题1",
    DetailData: {
      content: "内容1",
      active: true,
    },
  };
  return (
    <>
      <Article {...articleDate} />
    </>
  );
}

```

## React组件的children

### children的传值方式（插槽的概念）

```jsx
function List({ children }) {
    //插槽的概念，把jsx作为props传给子组件做值
  return <ul>{children}</ul>;
}

export default function App() {
  return (
    <>
      <List>
          //相当于把这一块的li都作为参数传到上面的子组件里面
        <li>列表1</li>
        <li>列表1</li>
        <li>列表1</li>
      </List>
      <List>
        <li>列表2</li>
        <li>列表2</li>
        <li>列表2</li>
      </List>
    </>
  );
}

```

### 向多个位置传递jsx

```jsx
function List({ children, te, fute = null }) {
  return (
    <>
      <h2>{te}</h2>
      <ul>{children}</ul>
      {fute}
    </>
  );
}

export default function App() {
  return (
    <>
      //复合使用chidren+props
      <List te="列表1" fute=<p>这是底部</p>>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
      </List>
      <List te="列表2" fute=<p>这是底部</p>>
        <li>列表A</li>
        <li>列表B</li>
        <li>列表C</li>
      </List>
      <List te="列表3">
        <li>列表E</li>
        <li>列表F</li>
        <li>列表Z</li>
      </List>
    </>
  );
}

```

### 函数回调 子组件往父组件传值关键字：“onActive”

```jsx
import { React, useState } from "react";

function Depend({ onActive }) {
  const [starts, setStarts] = useState(true);
  function ButtonClick() {
    setStarts(!starts);
    onActive(starts);
  }
  return (
    <>
      <button onClick={ButtonClick}>按钮</button>
      <p style={{ display: starts ? "block" : "none" }}>这是可控制的显示内容</p>
    </>
  );
}

export default function App() {
  function ontCklick(starts) {
    console.log(starts);
  }

  return <Depend onActive={ontCklick}></Depend>;
}

```



# 练习

## 1.遍历数组与对数组进行条件抽出

```jsx
import { useState } from "react";

function App() {
  const ListId = [
    { name: "小王", title: "12", id: 1 },
    { name: "小王", title: "24", id: 1 },
    { name: "小王", title: "25", id: 1 },
    { name: "小张", title: "11", id: 2 },
    { name: "小张", title: "12", id: 2 },
    { name: "小张", title: "13", id: 2 },
    { name: "小李", title: "44", id: 3 },
    { name: "小李", title: "45", id: 3 },
    { name: "小李", title: "46", id: 3 },
  ];

  // 当前选择的用户ID，初始为null表示显示所有用户
  const [currentId, setCurrentId] = useState(null);

  function screen(id) {
    setCurrentId(id);
  }

  const filteredList = currentId
    ? ListId.filter((item) => item.id === currentId)
    : ListId;

  const ListTitle = filteredList.map((item, index) => (
    <li key={index}>
      姓名：{item.name} &nbsp;&nbsp;金额：{item.title}
    </li>
  ));

  return (
    <>
      <ul> {ListTitle} </ul>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => screen(1)}>小王</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => screen(2)}>小张</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => screen(3)}>小李</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => screen(null)}>显示所有</button>
    </>
  );
}

export default App;

```

## 2.MyContext.Provider（主要学会组件间的调用）

### 公共组件

```jsx
import { createContext } from "react";
//使用createContext定义初期方法和值
const MyContext = createContext({
  color: "red",
  onclickColor: () => {},
});

export default MyContext;

```

### 父组件

```tsx
import React from "react";
import { useState } from "react";
//调用子组件
import Clort from "./Clort";
//调用共通组件
import MyContext from "./MyContext";

//在父组件中定义俩个方法来传给后面的子组件 孙组件 子孙组件调用
function ClortA() {
  const [color, setColor] = useState("red");

  function onclickColor() {
    setColor((prevColor) => (prevColor === "green" ? "blue" : "green"));
  }
    
    
  return (
    <>
      //使用Provider关键字来传递方法与值 value是把当前组件定义的内容传到后面去 注意点："一定要使用.Provider 把你要传值的所有组件包起来"
      <MyContext.Provider value={{ color, onclickColor }}>
        <div>
          <h2 style={{ color: "red" }}>父组件颜色来自于createContext:red</h2>
          ------------------------------------------
        </div>
        <Clort />
      </MyContext.Provider>
    </>
  );
}

export default ClortA;

```

### 子组件

```jsx
import React from "react";
import Grandchild from "./Grandchild";
import { useContext } from "react";
import MyContext from "./MyContext";

function Clort() {
  //如果需要调用父组件的值需要使用useContext
  const Context = useContext(MyContext);
  return (
    <>
      <div>
        <h2 style={{ color: Context.color }}>
          子组件的颜色来自于父组件更新:{Context.color}
        </h2>
        ------------------------------------------
      </div>

      <Grandchild />
    </>
  );
}

export default Clort;

```

### 孙组件

```jsx
import React from "react";
import Grandson from "./Grandson";

function Grandchild() {
  return (
    <>
      <div>
        <h2>孙组件颜色使用默认色</h2>
      </div>
      ------------------------------------------
      <Grandson />
    </>
  );
}

export default Grandchild;

```

### 子孙组件

```jsx
import React from "react";
import { useContext } from "react";
import MyContext from "./MyContext";

function Grandson() {
  const Context = useContext(MyContext);

  return (
    <>
      <div>
        <h2 style={{ color: Context.color }}>
          子孙组件颜色来自于父组件，并使用父组件的改变颜色方法
        </h2>
        <button onClick={Context.onclickColor}>换颜色</button>
      </div>
    </>
  );
}

export default Grandson;

```**
