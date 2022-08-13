# HNS SwitchNavigate 组件（切换导航栏，用于主站首页）

<img src="https://img.shields.io/badge/HNS--Switch--Navigate-v1.0-ff6987" alt="HNS-Model">

**可传参数**

|       参数名        |    类型    |             可选             | 必传  | 默认值 |      备注      |
|:----------------:|:--------:|:--------------------------:|:---:|:---:|:------------:|
|    dataSource    |  Array   |            数组列表            |  否  |  空  |      菜单      |
| switchComponents | Function |           任意回调函数           |  否  |  空  | 点击菜单栏后显示对应组件 |
|       mode       |  String  | `left`/ `center` / `right` |  否  |  空  | 导航栏靠左，居中，靠右  |

**使用示例：**

```jsx

const data = [
  {
    title: "为你推荐",
    icon: <IconLike/>
  }, {
    title: "我的关注",
    icon: <IconHeart/>
  }, {
    title: "全部圈子",
    icon: <IconAll/>
  }, {
    title: "无图标模块",
  },
]
const component = ["组件1", "组件2", "组件3"]
const [target, setTarget] = useState(0)
const switchComponents = (index) => {
  setTarget(index)
}
return (
  <div className={style.container}>
    <HNSSwitchNavigate dataSource={data} switchComponents={switchComponents} mode={"center"}/>
    <div>{component[target]}</div>
  </div>
);


```




