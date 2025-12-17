# 自动化 - 控件操作

控件操作是 Auto.js Pro 的核心功能，可以通过控件的各种属性来查找和操作界面元素。

## 控件选择器

通过文本、ID、类名等查找控件：

```javascript
// 通过文本查找
text("确定").click();
textContains("登录").click();
textMatches(/确定|OK/).click();

// 通过ID查找
id("btn_ok").click();
id("com.example:id/button").click();

// 通过类名查找
className("android.widget.Button").clickable().findOne().click();

// 通过描述查找
desc("确定按钮").click();
descContains("登录").click();

// 通过边界查找
bounds(0, 0, 100, 100).click();
```

## 控件操作方法

- **click()** - 点击控件
- **longClick()** - 长按控件
- **setText(text)** - 设置文本
- **input(text)** - 输入文本
- **scrollForward()** - 向前滚动
- **scrollBackward()** - 向后滚动
- **select()** - 选择控件
- **copy()** - 复制文本
- **paste()** - 粘贴文本

## 控件查找方法

- **findOne(timeout)** - 查找一个控件
- **findOnce(i)** - 查找第i个控件
- **find()** - 查找所有符合条件的控件
- **untilFind()** - 一直查找直到找到
- **exists()** - 判断控件是否存在
- **waitFor()** - 等待控件出现
- **count()** - 统计控件数量

## 更多控件方法

- **getText()** - 获取控件文本
- **getDesc()** - 获取控件描述
- **getBounds()** - 获取控件边界
- **getParent()** - 获取父控件
- **getChildren()** - 获取子控件
- **getChildCount()** - 获取子控件数量
- **getChild(i)** - 获取第i个子控件
- **bounds()** - 获取控件边界矩形
- **drawingOrder()** - 获取绘制顺序
- **depth()** - 获取控件深度
- **id()** - 获取控件ID
- **className()** - 获取控件类名
- **packageName()** - 获取包名

## 控件状态判断

- **isClickable()** - 是否可点击
- **isLongClickable()** - 是否可长按
- **isEnabled()** - 是否启用
- **isFocusable()** - 是否可聚焦
- **isFocused()** - 是否已聚焦
- **isSelected()** - 是否已选中
- **isCheckable()** - 是否可勾选
- **isChecked()** - 是否已勾选
- **isScrollable()** - 是否可滚动
- **isEditable()** - 是否可编辑

