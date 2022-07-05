# HNS Toast 组件（消息提示框）

<img src="https://img.shields.io/badge/HNS--Toast-v1.0-ff6987" alt="HNS-Toast">

**可传参数**

|           参数名            |       类型        |       可选       | 必传  |     默认值     |              备注              |
|:------------------------:|:---------------:|:--------------:|:---:|:-----------:|:----------------------------:|
|          delay           |     Number      |     任意合法数值     |  否  |     3秒      |     用于控制消息框自动关闭所等待的时间(秒)     |
|         message          |    function     | 字符串 / React 结点 |  否  |      空      |          用于开启消息框提示框          |
|          close           |     boolean     |   true/false   |  否  |    true     | 手动控制消息框关闭，常用于异步请求，与delay属性互斥 |
| top, right, bottom, left | String / Number |   任意合法字符串/数值   |  否  | 居中离顶部 2 rem |         控制消息弹出框弹出的位置         |

### <font color="ff6987">注意</font>

+ 将 `delay` 的值设置为小于 0 是一种没有意义的行为。
+ ` HNSToast.message()` 方法用于传递提示信息，可传递字符串或React结点。
+ `close` 属性用于手动控制消息框关闭，常用于异步请求，与 `delay` 属性 <font color="ff6987">互斥</font>。

**使用示例：**

```jsx
const messageNode = (
  <div className={style.messageNode}>
    hello
  </div>
)

const handleClick = () => {
  HNSToast.message(messageNode)
}

return (
  <div className={style.container}>
    <HNSToast delay={4}/>
    <HNSButton onClick={handleClick}>按钮</HNSButton>
  </div>
);
```




