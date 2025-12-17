# threads - 多线程

多线程相关 API。

## threads.start(action)

**功能：** 启动新线程

```javascript
var thread = threads.start(function() {
    while (true) {
        console.log("后台线程运行中");
        sleep(1000);
    }
});

// 5秒后停止线程
setTimeout(function() {
    thread.interrupt();
}, 5000);
```

## threads.shutDownAll()

**功能：** 停止所有线程

```javascript
threads.shutDownAll();
```

## threads.currentThread()

**功能：** 获取当前线程对象

```javascript
var thread = threads.currentThread();
console.log("线程ID：" + thread.getId());
```

## threads.atomic(initialValue)

**功能：** 创建原子变量

```javascript
var count = threads.atomic(0);
count.getAndIncrement();
console.log("计数：" + count.get());
```

## threads.lock()

**功能：** 创建锁对象

```javascript
var lock = threads.lock();
lock.lock();
try {
    // 临界区代码
} finally {
    lock.unlock();
}
```

## threads.wait(lock, timeout)

**功能：** 等待条件

```javascript
var lock = threads.lock();
threads.wait(lock, 5000);
```

## threads.notify(lock)

**功能：** 通知等待的线程

```javascript
threads.notify(lock);
```

## threads.notifyAll(lock)

**功能：** 通知所有等待的线程

```javascript
threads.notifyAll(lock);
```

## thread.interrupt()

**功能：** 中断线程

```javascript
thread.interrupt();
```

## thread.waitFor()

**功能：** 等待线程执行完成

```javascript
var thread = threads.start(function() {
    sleep(5000);
    console.log("线程完成");
});
thread.waitFor();
console.log("主线程继续");
```

