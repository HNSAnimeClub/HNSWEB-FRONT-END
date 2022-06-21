# HNS Input 组件

<img src="https://img.shields.io/badge/HNS--Input-v1.0-ff6987" alt="HNS-Input">

**可传参数**

|     参数名      |    类型    |       可选        | 必传  | 默认值  |                       备注                        |
|:------------:|:--------:|:---------------:|:---:|:----:|:-----------------------------------------------:|
|     type     |  String  | text / password |  否  | text |                      输入框类型                      |
|    label     |  String  |      任意字符串      |  否  |  空   |                     输入框标签头                      | 
|  maxLength   |  Number  |      任意数值       |  否  |  空   |                    最大允许输入长度                     | 
|   require    | boolean  |  true / false   |  否  | true |                     内容是否为必填                     |
| errorMessage |  String  |      任意字符串      |  否  |  空   |           自定义错误内容，必须与checkTypeReg同时使用           |
| checkTypeReg |  Object  |     任意正则表达式     |  否  |  空   |          输入框校验的规则，必须与errorMessage同时使用           |
|   iconSize   |  Number  |      任意数值       |  否  | 36px | 清空输入框图标，密码明文密文图标的大小。密码明密切换图标仅type="password"时激活 |
|   onChange   | Function |     任意回调函数      |  否  |  空   |      通过该回调函数的事件代理对象获取输入内容(e.target.value)       |

**使用示例：**

```jsx
 <HNSInput iconSize={48} onChange={handleChange}
           label={"密码"}
           maxLength={12}
           require={true}
           type={"password"}
           checkTypeReg={/^[a-zA-Z0-9_]+$/}
           errorMessage={"密码仅可包含a-z,0-9,下划线"}
/>
```





