# HNS Avatar 组件（头像框）

<img src="https://img.shields.io/badge/HNS--Avatar-v1.0-ff6987" alt="HNS-Avatar">

**可传参数**

| 参数名  |      类型       |       可选        | 必传  |  默认值   |      备注       |
|:----:|:-------------:|:---------------:|:---:|:------:|:-------------:|
| type |    String     | circle / square |  否  | circle | 可选圆形头像框或方形头像框 |
| src  |    String     |      任意url      |  否  |   空    |   图片的url地址    |
| size | String/Number |   任意数值或数字字符串    |  否  |  32px  |     头像框大小     |

**使用示例：**

```jsx
<HNSAvatar type={"circle"} size={64} src={imageUrl}/>
```






