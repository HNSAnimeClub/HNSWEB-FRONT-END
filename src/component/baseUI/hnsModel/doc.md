# HNS Model 组件（弹出框）

<img src="https://img.shields.io/badge/HNS--Model-v1.0-ff6987" alt="HNS-Model">

**可传参数**

|    参数名     |      类型       |     可选     | 必传  |  默认值  |      备注       |
|:----------:|:-------------:|:----------:|:---:|:-----:|:-------------:|
|  visible   |    boolean    | true/false |  否  | false | 用于控制弹出框的显示与关闭 | 
|   title    |     弹出框标题     |    字符串     |  否  |   空   |    弹出框的标题     |
|   width    | Number/String |   数值/字符串   |  否  |   空   |    弹出框的宽度     |
|   height   | Number/String |   数值/字符串   |  否  |   空   |    弹出框的高度     |
|  toolBar   |  React1.Node  |  React结点   |  否  |   空   |     底部工具栏     |
| modelClose |   function    |   任意回调函数   |  是  |   空   |  用于弹出框的取消关闭   |

### <font color="ff6987">注意</font>

`HNS-Model` 中的 `modelClose` 属性 **必须指定** ,否则无法通过右上角按钮关闭弹窗。

**使用示例：**

```jsx

const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

const toolBar = (
  <>
    <HNSButton onClick={handleCancel}>取消</HNSButton>
    <HNSButton type={"primary"} onClick={handleOk}>确定</HNSButton>
  </>
)

return (
  <>
    <HNSModel visible={isModalVisible} title={"弹出框"} modelClose={handleCancel} toolBar={toolBar} height={"15rem"}>
      哈哈哈哈哈
    </HNSModel>
    <HNSButton onClick={showModal}>点击开启</HNSButton>
  </>
);
```




