# HNS Form 组件


<img src="https://img.shields.io/badge/HNS--Form-v1.0-ff6987" alt="HNS-Form">

**可传参数**

|    参数名     |        类型        | 可选  | 必传  | 默认值 |              备注               |
|:----------:|:----------------:|:---:|:---:|:---:|:-----------------------------:|
| onFinished | function(result) |  无  |  否  |  无  | 拿到Form内输入框子组件的值，输入框name属性必须唯一 |

**使用示例：**

```jsx
const onFinished = (result) => {
  console.log(result)
}

<HNSForm onFinished={onFinished}>
  <HNSInput iconSize={48}
            label={"用户名"}
            name={"userName"}
            maxLength={12}
            require={true}
            type={"text"}
            checkTypeReg={/^[a-zA-Z0-9_]+$/}
            errorMessage={"用户名仅可包含a-z,0-9,下划线"}
  />
  <HNSInput iconSize={48}
            label={"密码"}
            name={"password"}
            maxLength={12}
            require={true}
            type={"password"}
            checkTypeReg={/^[a-zA-Z0-9_]+$/}
            errorMessage={"密码仅可包含a-z,0-9,下划线"}
  />
</HNSForm>
```
##注意
`HNSForm`组件只能与绑定了此属性：`组件.组件名_value` 的组件配合使用，如：`HNSInput.HNSInput_value` 且不允许所有 `HNSInput` 均无限制条件。

该组件主要利用 `Object/Reflect.defineProperty()` 作数据劫持，监视 `Hns-Input` 组件`type`上的 `HNSInput_value` 属性， 一旦该属性发生了变化，便会触发监听的回调函数。

```jsx
  Reflect.defineProperty(item.type, `${item.type.name}_value`, {
  configurable: true,
  set(v) {
    console.log("input_value发生了变化", v)
  },
  get(v) {
    
  }
})
```
