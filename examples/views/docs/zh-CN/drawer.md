# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 代码示例


:::demo 基础抽屉

基础抽屉，点击触发按钮从右侧滑出抽屉，点击遮罩层关闭。

```html
<template>
    <Button type="primary" @click="drawerBase = true">Open</Button>
    <Drawer v-model="drawerBase" title="Base Drawer">
        <p>Some contents...Some contents...Some contents...Some contents...Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
</template>
<script>
    export default {
      data(){
        return {
          drawerBase: false,
        }
      }
    }
</script>

```

:::


:::demo 不同位置滑出的抽屉

通过设置 `placement`属性可以控制抽屉滑出的位置。可选值为 `left` `right` `top` `bottom`。垂直方向滑出时默认height为260px。

```html
<template>
    <Button type="primary" @click="openDrawer('left')">Left Open</Button>
    <Button type="primary" @click="openDrawer('right')">Right Open</Button>
    <Button type="primary" @click="openDrawer('top')">Top Open</Button>
    <Button type="primary" @click="openDrawer('bottom')">Bottom Open</Button>
    <Drawer v-model="drawerPosition" title="Position Drawer" :placement="placement">
        <p>Some contents...Some contents...Some contents...Some contents...Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
</template>
<script>
    export default {
      data(){
        return {
          placement: 'right',
          drawerPosition: false,
        }
      },
      methods: {
        openDrawer(placement){
            this.placement = placement;
            this.drawerPosition = true;
          }
      }
    }
</script>

```

:::


:::demo 多层抽屉

多层抽屉。在抽屉内打开新的抽屉。

```html
<template>
    <Button type="primary" @click="drawerMore = true">Open</Button>
    <Drawer width="500" v-model="drawerMore" title="One-Level Drawer">
        <Button type="primary" @click="drawerMoreTwo = true">Open TwoDrawer</Button>
    </Drawer>
    <Drawer v-model="drawerMoreTwo" title="Two-Level Drawer">
        <p>Some contents...Some contents...Some contents...Some contents...Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
</template>
<script>
    export default {
      data(){
        return {
          drawerMore: false,
          drawerMoreTwo: false,
        }
      }
    }
</script>

```

:::



:::demo 异步关闭

异步关闭。添加 `loading`属性后点击确定按钮后模态框不会自动消失，确定按钮会显示一个`loading`加载中的效果，需要自己手动关闭模态框。

```html
<template>
    <Button type="primary" @click="visible = true">Async Open</Button>
    <Drawer v-model="visible" loading title="Async Drawer" @ok="asyncClick">
        <p>Some contents...Some contents...Some contents...Some contents...Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
</template>
<script>
    export default {
        data(){
            return {
                visible: false,
            }
        },
        methods: {
            asyncClick(){
                setTimeout(()=>{
                    this.visible = false;
                }, 3000)
            }
        }
    }
</script>

```

:::



## API

### Drawer props

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ---- |
| width | String, Number | 设置抽屉的宽度，`placement`为`top` `bottom`时无效 | 260 |
| height | String, Number | 设置抽屉的高度，`placement`为`left` `right`时无效 | 260 |
| placement | String | 抽屉滑出的位置，可选值`left` `right` `top` `bottom` | right |
| value | Boolean | 抽屉是否显示，可以使用v-model双向绑定数据 | - |
| footerHide | Boolean | 是否隐藏抽屉的页脚 | - |
| closable | Boolean | 是否显示右上角的关闭按钮 | true |
| cancelText | String | 取消按钮的文字 | 取消 |
| okText | String | 确定按钮的文字 | 确定 |
| styles | Object | 抽屉中间层的样式 | - |
| title | String | 抽屉的标题 | - |
| loading | Boolean | 异步加载的抽屉，点击确定按钮时会显示loading效果，此时需要手动关闭抽屉 | - |
| coverClosable | Boolean | 点击遮罩层是否允许关闭 | true |
| coverShow | Boolean | 是否显示抽屉的遮罩层 | true |
| renderHtml | HTMLElement, Boolean | 定义日期下拉框渲染的位置，如果为`true`则渲染到body中，可以指定渲染的元素 | true |


### Drawer event

| 事件名 | 说明 | 返回值 |
| ---- | ---- | ---- |
| ok | 点击确定按钮时触发 | - |
| cancel | 点击取消按钮、关闭按钮和点击遮罩层关闭时触发 | - |


### Drawer slot

| 事件名 | 说明 | 返回值 |
| ---- | ---- | ---- |
| close | 自定义右上角的关闭按钮 | - |
| header | 自定义标题栏内容 | - |
| footer | 自定义抽屉页脚内容 | - |

