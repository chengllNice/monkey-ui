# Alter 警告提示

警告提示，展示页面中需要重点关注的提示信息，可手动关闭。

## 代码示例


:::demo 基础用法

基本简单的使用方法。支持四种类型`info` `success` `error` `warning`

```html
<template>
    <Alter>Info Text</Alter>
    <Alter type="success">Success Text</Alter>
    <Alter type="error">Error Text</Alter>
    <Alter type="warning">Warning Text</Alter>
</template>
```
:::


:::demo 包含辅助性文字介绍

包含辅助性文字介绍。自定义 `name='description'` 的 `slot`的描述内容。

```html
<template>
    <Alter>
        alter
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
    <Alter type="success">
        success
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
    <Alter type="error">
        error
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
    <Alter type="warning">
        warning
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
</template>
```
:::



:::demo 带有icon图标

设置 `show-icon`属性可以显示对应 `type` 类型的icon图标，也可以通过 `name='icon'` 的 `slot`自定义图标。

```html
<template>
    <Alter type="info" show-icon>An info prompt</Alter>
    <Alter type="success" show-icon>An info prompt</Alter>
    <Alter type="error" show-icon>An info prompt</Alter>
    <Alter type="warning" show-icon>An info prompt</Alter>
    <Alter type="info" show-icon>
        An info prompt
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
    <Alter type="success" show-icon>
        An info prompt
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
    <Alter type="error" show-icon>
        An info prompt
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
    <Alter type="warning" show-icon>
        An info prompt
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
    <Alter type="warning" show-icon>
        <Icon slot="icon" type="sound"></Icon>
        custom icon
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
</template>
```
:::



:::demo 可关闭的警告提示

设置 `closable` 属性可显示关闭按钮，点击可关闭警告提示，也可以通过 `name='close'` 的 `slot` 自定义关闭按钮。

设置`transition`设置关闭时动画的方式，如果设置为空则没有动画。

```html
<template>
    <h4>默认有关闭动画</h4>
    <Alter closable>An info prompt</Alter>
    <Alter type="success" closable show-icon>An info prompt</Alter>
    <Alter type="warning" closable show-icon>
        An info prompt
        <span slot="close">close</span>
    </Alter>
    <Alter type="info" show-icon closable>
        An info prompt
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
    <Alter type="success" show-icon closable>
        An info prompt
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
        <span slot="close">close</span>
    </Alter>

    <h4>不适用关闭动画</h4>
    <Alter closable transition>An info prompt</Alter>
    <Alter type="success" show-icon closable transition>
        An info prompt
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
        <span slot="close">close</span>
    </Alter>
</template>
```
:::



:::demo 主题

设置 `theme` 属性可设置主题色，可选值 `dark` 或者不设置。

```html
<template>
    <Alter theme="dark">An info prompt</Alter>
    <Alter type="success" theme="dark">An info prompt</Alter>
    <Alter type="error" theme="dark">An info prompt</Alter>
    <Alter type="warning" theme="dark">An info prompt</Alter>
    <Alter show-icon closable theme="dark">
        An info prompt
        <span slot="close">close</span>
    </Alter>
    <Alter closable show-icon theme="dark">
        An info prompt
        <span slot="close">close</span>
        <div slot="description">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</div>
    </Alter>
</template>
```
:::



## API

### Alter props

| 属性 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | String | 警告提示样式，可选值 `info`、`success`、`warning`、`error`或者不设置 | info |
| transition | String | 指定警告框关闭时的动画 | AlterFade |
| show-icon | Boolean | 是否显示警告的icon图标，默认不显示 | - |
| closable | Boolean | 是否可关闭，默认不可关闭 | - |
| theme | String | 提供的主题，可选light/dark | light |


### Alter event

| 事件名 | 说明 | 返回值 |
| ---- | ---- | ---- |
| close | 关闭时触发 | - |


### Alter slot

| 名称 | 说明 |
| ---- | ---- |
| - | 自定义警告框的提示信息 |
| icon | 自定义警告框的icon图标 |
| description | 定义辅助性描述信息 |
| close | 自定义关闭按钮 |
