# dialogs - 对话框

对话框相关 API。

## dialogs.alert(title, message)

**功能：** 显示警告对话框

```javascript
import { dialogs } from '@autojs/pro'

await dialogs.alert("提示", "操作完成");
```

## dialogs.confirm(title, message)

**功能：** 显示确认对话框

```javascript
const result = await dialogs.confirm("确认", "确定要删除吗？");
if (result) {
    console.log("用户点击了确定");
}
```

## dialogs.prompt(title, prefill)

**功能：** 显示输入对话框

```javascript
const input = await dialogs.prompt("输入", "请输入内容");
if (input != null) {
    console.log("用户输入：" + input);
}
```

## dialogs.select(title, items)

**功能：** 显示选择对话框

```javascript
const index = await dialogs.select("选择", ["选项1", "选项2", "选项3"]);
if (index >= 0) {
    console.log("选择了：" + index);
}
```

