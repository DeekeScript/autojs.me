# ui - 用户界面

用户界面相关 API，用于创建图形界面。

## ui.layout(xml)

**功能：** 创建布局

```javascript
import { ui } from '@autojs/pro'

await ui.layout(
    <vertical>
        <text text="标题" textSize="20sp" textColor="#000000"/>
        <button id="btn" text="按钮"/>
        <input id="input" hint="请输入"/>
    </vertical>
);
```

## ui.run(func)

**功能：** 在UI线程运行函数

```javascript
await ui.run(() => {
    ui.btn.setText("新文本");
});
```

## ui.findView(id)

**功能：** 查找视图

```javascript
const btn = await ui.findView("btn");
await btn.setOnClickListener(() => {
    toast("点击了按钮");
});
```

## ui.finish()

**功能：** 关闭界面

```javascript
await ui.finish();
```

