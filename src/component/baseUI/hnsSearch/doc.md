# HNS Search 组件（搜索框）

<img src="https://img.shields.io/badge/HNS--Search-v1.0-ff6987" alt="HNS-Search">

**可传参数**

|    参数名     |                类型                |   可选   | 必传  | 默认值 |                  备注                  |
|:----------:|:--------------------------------:|:------:|:---:|:---:|:------------------------------------:|
| onFinished |         function(result)         |   无    |  否  |  无  |               拿到输入框的值                |
| className  | style.className/style[className] | 任意样式变量 |  否  |  空  | 可以定制组件的样式，但需要在定制样式后添加 !important 关键字 |

**使用示例：**

```jsx
const onFinished = (result) => {
  console.log(result)
}

<HNSSearch onFinished={onFinished}/>
```

