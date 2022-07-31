# HNS Rate 组件（好评度）

<img src="https://img.shields.io/badge/HNS--Rate-v1.0-ff6987" alt="HNS-Model">

**可传参数**


|     参数名     |       类型        |     可选     | 必传  | 默认值 |           备注            |
|:-----------:|:---------------:|:----------:|:---:|:---:|:-----------------------:|
| defaultRate |     Number      |    任意数值    |  否  |  0  |          默认评分           | 
|    lock     |     Boolean     | true/false |  否  |  空  | lock为true时，评分组件的鼠标交互将关闭 |
|   onClick   | Function(score) |   任意回调函数   |  否  |  空  | score参数可以获取评分，为Double类型 |


**使用示例：**

```jsx
return (
  <HNSRate defaultRate={4}/>
);
```




