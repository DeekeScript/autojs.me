# 和Java交互

Java 交互相关 API。

## Java.type(className)

**功能：** 获取Java类

```javascript
var String = Java.type("java.lang.String");
var ArrayList = Java.type("java.util.ArrayList");
var list = new ArrayList();
```

## Java.use(className)

**功能：** 使用Java类（同Java.type）

```javascript
var String = Java.use("java.lang.String");
var str = String.$new("Hello");
```

## Java.scheduleOnMainThread(fn)

**功能：** 在主线程执行函数

```javascript
Java.scheduleOnMainThread(function() {
    toast("在主线程执行");
});
```

## Java.adopt(thread)

**功能：** 采用Java线程

```javascript
var thread = Java.adopt(threads.currentThread());
// 在Java线程中执行操作
```

## Java.extend(className, methods)

**功能：** 扩展Java类

```javascript
var MyRunnable = Java.extend(Java.type("java.lang.Runnable"), {
    run: function() {
        console.log("自定义Runnable");
    }
});
var runnable = new MyRunnable();
```

## Java.choose(className, callbacks)

**功能：** 查找Java对象实例

```javascript
Java.choose("com.example.MyClass", {
    onMatch: function(instance) {
        console.log("找到实例：" + instance);
    },
    onComplete: function() {
        console.log("查找完成");
    }
});
```

## Java.cast(obj, className)

**功能：** 类型转换

```javascript
var obj = someObject;
var casted = Java.cast(obj, Java.type("java.lang.String"));
```

## Java.newInstance(className, ...args)

**功能：** 创建Java对象实例

```javascript
var String = Java.type("java.lang.String");
var str = Java.newInstance(String, "Hello World");
```

## Java.array(type, elements)

**功能：** 创建Java数组

```javascript
var String = Java.type("java.lang.String");
var array = Java.array(String, ["a", "b", "c"]);
```

## 调用Java方法

调用Java对象的方法：

```javascript
var String = Java.type("java.lang.String");
var str = new String("Hello");
var length = str.length();
var upper = str.toUpperCase();

// 调用静态方法
var value = String.valueOf(123);

// 调用重载方法
var str2 = String.$new("World");
var str3 = String.$new([72, 101, 108, 108, 111]);
```

## 访问Java字段

访问Java对象的字段：

```javascript
var obj = someJavaObject;
var fieldValue = obj.fieldName;
obj.fieldName = "新值";

// 访问静态字段
var staticValue = ClassName.staticField;
```

## 实现Java接口

实现Java接口：

```javascript
var Runnable = Java.type("java.lang.Runnable");
var myRunnable = Java.extend(Runnable, {
    run: function() {
        console.log("Runnable执行");
    }
});

var thread = Java.type("java.lang.Thread").$new(myRunnable);
thread.start();
```

## Android API调用示例

调用Android API：

```javascript
// 获取系统服务
var ActivityThread = Java.use("android.app.ActivityThread");
var currentApplication = ActivityThread.currentApplication();
var context = currentApplication.getApplicationContext();

// 显示Toast
var Toast = Java.use("android.widget.Toast");
var toast = Toast.makeText(context, "Hello", Toast.LENGTH_SHORT);
toast.show();

// 获取包管理器
var PackageManager = context.getPackageManager();
var packages = PackageManager.getInstalledPackages(0);
```

