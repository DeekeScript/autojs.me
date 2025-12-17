# work_manager - 定时与任务

定时任务相关 API。

## work_manager.addTask(task)

**功能：** 添加定时任务

```javascript
work_manager.addTask({
    path: "/sdcard/script.js",
    time: "09:00",
    daysOfWeek: [1, 2, 3, 4, 5] // 周一到周五
});
```

## work_manager.removeTask(id)

**功能：** 删除定时任务

```javascript
work_manager.removeTask(taskId);
```

## work_manager.listTasks()

**功能：** 列出所有定时任务

```javascript
var tasks = work_manager.listTasks();
tasks.forEach(function(task) {
    console.log(task.path);
});
```

## work_manager.schedule(task, schedule)

**功能：** 调度任务（使用 cron 表达式）

```javascript
work_manager.schedule({
    path: "/sdcard/script.js"
}, "0 9 * * *"); // 每天9点执行
```

