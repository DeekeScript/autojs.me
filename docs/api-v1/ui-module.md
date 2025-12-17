# ui - 用户界面

用户界面相关 API，用于创建图形界面。

## ui.layout(xml)

**功能：** 创建布局

```javascript
ui.layout(
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
ui.run(function() {
    ui.btn.setText("新文本");
});
```

## ui.post(func, delay)

**功能：** 在UI线程延迟执行函数

```javascript
ui.post(function() {
    toast("延迟执行");
}, 1000);
```

## ui.statusBarColor(color)

**功能：** 设置状态栏颜色

```javascript
ui.statusBarColor("#FF0000");
```

## ui.setContentView(view)

**功能：** 设置内容视图

```javascript
var view = <vertical>
    <text text="内容"/>
</vertical>;
ui.setContentView(view);
```

## ui.findView(id)

**功能：** 查找视图

```javascript
var btn = ui.findView("btn");
btn.setOnClickListener(function() {
    toast("点击了按钮");
});
```

## ui.finish()

**功能：** 关闭界面

```javascript
ui.finish();
```

## ui.emitter

**功能：** 事件发射器

```javascript
ui.emitter.on("event", function(data) {
    console.log("收到事件：" + data);
});

ui.emitter.emit("event", "数据");
```

## 常用视图组件

### text

文本视图：

```javascript
<text 
    text="文本内容"
    textSize="16sp"
    textColor="#000000"
    gravity="center"
    padding="10dp"
/>
```

### button

按钮：

```javascript
<button 
    id="btn"
    text="按钮"
    textSize="16sp"
    w="*"
    h="50dp"
/>
```

### input

输入框：

```javascript
<input 
    id="input"
    hint="请输入内容"
    textSize="16sp"
    inputType="text"
    w="*"
    h="50dp"
/>
```

### image

图片视图：

```javascript
<image 
    src="file:///sdcard/image.jpg"
    w="200dp"
    h="200dp"
    scaleType="fitCenter"
/>
```

### list

列表：

```javascript
<list 
    id="list"
    layout_weight="1"
/>
```

### vertical / horizontal

垂直/水平布局：

```javascript
<vertical>
    <text text="垂直布局"/>
    <horizontal>
        <text text="水平布局"/>
    </horizontal>
</vertical>
```

### frame

帧布局：

```javascript
<frame>
    <text text="帧布局"/>
</frame>
```

### linear

线性布局：

```javascript
<linear orientation="vertical">
    <text text="线性布局"/>
</linear>
```

### scroll

滚动视图：

```javascript
<scroll>
    <vertical>
        <text text="可滚动内容"/>
    </vertical>
</scroll>
```

## 视图属性

常用视图属性：

- **w** - 宽度（如 "100dp", "*" 表示填充父容器）
- **h** - 高度
- **margin** - 外边距
- **padding** - 内边距
- **gravity** - 对齐方式
- **background** - 背景
- **visibility** - 可见性（visible/invisible/gone）
- **alpha** - 透明度（0.0-1.0）

## 事件监听

### 点击事件

```javascript
ui.btn.setOnClickListener(function() {
    toast("点击了按钮");
});
```

### 长按事件

```javascript
ui.btn.setOnLongClickListener(function() {
    toast("长按了按钮");
    return true;
});
```

### 文本变化事件

```javascript
ui.input.addTextChangedListener({
    beforeTextChanged: function(s, start, count, after) {},
    onTextChanged: function(s, start, before, count) {
        console.log("文本变化：" + s);
    },
    afterTextChanged: function(s) {}
});
```

### 列表项点击事件

```javascript
ui.list.setOnItemClickListener(function(parent, view, position, id) {
    toast("点击了第" + position + "项");
});
```

## 动态创建视图

```javascript
var textView = new android.widget.TextView(context);
textView.setText("动态创建的文本");
textView.setTextSize(16);
textView.setTextColor(colors.parseColor("#000000"));
ui.container.addView(textView);
```

## 对话框

### 警告对话框

```javascript
dialogs.alert("标题", "内容");
```

### 确认对话框

```javascript
dialogs.confirm("标题", "内容").then(function(result) {
    if (result) {
        toast("确定");
    } else {
        toast("取消");
    }
});
```

### 输入对话框

```javascript
dialogs.prompt("标题", "默认值").then(function(input) {
    if (input != null) {
        toast("输入：" + input);
    }
});
```

### 选择对话框

```javascript
dialogs.select("标题", ["选项1", "选项2", "选项3"]).then(function(index) {
    if (index >= 0) {
        toast("选择了：" + index);
    }
});
```

