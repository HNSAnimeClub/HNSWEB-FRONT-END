# HNS Button 组件（按钮）

<img src="https://img.shields.io/badge/HNS--Button-v1.0-%23ff6987" alt="HNS-Button">

**可传参数**

|    参数名    |                类型                |        可选         | 必传  |   默认值   |                  备注                  |
|:---------:|:--------------------------------:|:-----------------:|:---:|:-------:|:------------------------------------:|
|   type    |              String              | primary / default |  否  | default |       暂时可选primary/default 按钮样式       |
| disabled  |             Boolean              |    true/false     |  否  |  false  |              控制按钮是否可操作               |
| className | style.className/style[className] |      任意样式变量       |  否  |    空    | 可以定制组件的样式，但需要在定制样式后添加 !important 关键字 |

**使用示例：**

```jsx
<HNSButton type={"primary"} onClick={handleClick}>按钮</HNSButton>
```

动画和样式 通过切换不同的 `className` 实现不同的效果




