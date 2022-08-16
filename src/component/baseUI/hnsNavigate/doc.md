# HNS Navigate 组件（导航栏）

<img src="https://img.shields.io/badge/HNS--Navigate-v1.1-ff6987" alt="HNS-Model">

**可传参数**

|    参数名     |    类型    |    可选    |  必传  | 默认值 |        备注         |
|:----------:|:--------:|:--------:|:----:|:---:|:-----------------:|
|    type    |  String  | top/side |  否   | top |      导航栏的模式       | 
| dataSource |  Array   |   数组列表   |  否   |  空  |        菜单         |
| changeItem | Function |  任意回调函数  |  否   |  空  | 点击菜单栏后进行跳转或显示对应组件 |

### <font color="ff6987">注意</font>

+ `HNS-Navigate` 有两种模式 分别为 `top` 与 `side` 代表其位置位于顶部与侧边。
+ 当 模式为 `top` 时，`dataSource` 的数组列表中的子对象<font color="ff6987">应有</font> `link` 属性
+ 当 模式为 `side` 时，`link` 属性将失效，取而代之的子对象<font color="ff6987">应有</font> `component` 属性
+ `HNS-Navigate` 完成了基本地重构，暂无重大缺陷。

**使用示例：**

```jsx

const topData = [
  {
    name: "动漫",
    link: "http://localhost:2007"
  }, {
    name: "游戏",
    link: "xxxx"
  }, {
    name: "发现",
    link: "xxxx"
  }, {
    name: "热点",
    link: "xxxx"
  }
]

const sideData = [
  {
    category: "用户管理",
    icon: <IconUp/>, // 菜单栏图标
    children: [
      {
        category: "用户二级菜单",
        component: <p>二级菜单主体1</p>,
        icon: <IconUp/>
      }, {
        category: "用户二级菜单",
        component: <p>二级菜单主体2</p>,
        icon: <IconUp/>
      }
    ]
  }, {
    category: "评论管理",
    icon: <IconUp/>,
    children: [
      {
        category: "用户二级菜单",
        component: <p>二级菜单主体3</p>,
        icon: <IconUp/>
      }, {
        category: "用户二级菜单",
        component: <p>二级菜单主体4</p>,
        icon: <IconUp/>
      }
    ]
  }, {
    category: "板块管理",
    component: <p>二级菜单主体5</p>,
    icon: <IconUp/>
  }
]
const [item, setItem] = useState(null)
const changeItem = (component) => {
  setItem(component)
}

return (
  <>
    <HNSNavigate dataSource={sideData} type={"side"} changeItem={changeItem}/>
    <div>
      导航栏右侧主要展示区域
      {item}
    </div>
  </>
);
```




