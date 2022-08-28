# HNS Loading 组件（加载）

<img src="https://img.shields.io/badge/HNS--Loading-v1.0-ff6987" alt="HNS-Loading">

**可传参数**

|    参数名     |   类型    |     可选     | 必传  | 默认值 |      备注      |
|:----------:|:-------:|:----------:|:---:|:---:|:------------:|
| fullScreen | boolean | true/false |  否  |  无  |  加载组件是否覆盖全屏  |
| isLoading  | boolean | true/false |  否  |  无  | 控制加载组件的开启与关闭 |

**使用示例：**

```jsx
const [loading,setLoading] = useState(false)
return (
    <HNSLoading fullScreen={true} isLoading={loading}/>
)
```

