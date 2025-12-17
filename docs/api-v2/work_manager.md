# work_manager - 定时与任务

定时任务相关 API。

## work_manager.addTask(task)

**功能：** 添加定时任务

```javascript
import { work_manager } from '@autojs/pro'

await work_manager.addTask({
    path: "/sdcard/script.js",
    time: "09:00",
    daysOfWeek: [1, 2, 3, 4, 5] // 周一到周五
});
```

## work_manager.removeTask(id)

**功能：** 删除定时任务

```javascript
await work_manager.removeTask(taskId);
```

## work_manager.listTasks()

**功能：** 列出所有定时任务

```javascript
const tasks = await work_manager.listTasks();
tasks.forEach(task => {
    console.log(task.path);
});
```

