# dialogs - 对话框

对话框相关 API。

## dialogs.alert(title, message)

**功能：** 显示警告对话框

```javascript
dialogs.alert("提示", "操作完成");
```

## dialogs.confirm(title, message)

**功能：** 显示确认对话框，返回 true 或 false

```javascript
var result = dialogs.confirm("确认", "确定要删除吗？");
if (result) {
    // 用户点击了确定
}
```

## dialogs.prompt(title, prefill)

**功能：** 显示输入对话框，返回用户输入的内容

```javascript
var input = dialogs.prompt("输入", "请输入内容");
if (input != null) {
    console.log("用户输入：" + input);
}
```

## dialogs.select(title, items)

**功能：** 显示选择对话框

```javascript
var index = dialogs.select("选择", ["选项1", "选项2", "选项3"]);
if (index >= 0) {
    console.log("选择了：" + index);
}
```

## dialogs.singleChoice(title, items, selectedIndex)

**功能：** 显示单选对话框

```javascript
var index = dialogs.singleChoice("选择", ["选项1", "选项2", "选项3"], 0);
if (index >= 0) {
    console.log("选择了：" + index);
}
```

## dialogs.multiChoice(title, items, selectedIndices)

**功能：** 显示多选对话框

```javascript
var indices = dialogs.multiChoice("选择", ["选项1", "选项2", "选项3"], [0, 1]);
if (indices != null) {
    console.log("选择了：" + indices);
}
```

## dialogs.build(options)

**功能：** 构建自定义对话框

```javascript
var dialog = dialogs.build({
    title: "自定义对话框",
    content: "这是内容",
    positive: "确定",
    negative: "取消"
}).show();
```

