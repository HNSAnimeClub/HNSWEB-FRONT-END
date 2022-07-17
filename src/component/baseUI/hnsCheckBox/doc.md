# HNS CheckBox 组件（选择框）

<img src="https://img.shields.io/badge/HNS--CheckBox-v1.0-ff6987" alt="HNS-CheckBox">

**可传参数**

|    参数名    |                类型                |      可选       | 必传  |  默认值  |                  备注                  |
|:---------:|:--------------------------------:|:-------------:|:---:|:-----:|:------------------------------------:|
|   label   |    String / React1.Node(自定义组件)    | 任意字符串与React组件 |  否  |   空   |              选择框后的提示信息               |
|   name    |              String              |  true/false   |  否  | false |        选择框的属性名 （{name:value}）        |
| className | style.className/style[className] |    任意样式变量     |  否  |   空   | 可以定制组件的样式，但需要在定制样式后添加 !important 关键字 |

### <font color="ff6987">注意</font>
`HNS-CheckBox` 应尽可能配合 `HNS-Form` 组件使用，虽然也可以给该组件传递 `onClick` 函数拿到结果。

**使用示例：**

```jsx
 <HNSCheckBox name={"checkBox"} className={style.checkBox} label={<span>我保证和大家<a>好好相处！</a></span>}/>
```





