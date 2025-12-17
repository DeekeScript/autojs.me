# shell - Shell命令

Shell 命令执行相关 API。

## shell.exec(command, root)

**功能：** 执行Shell命令

```javascript
import { shell } from '@autojs/pro'

const result = await shell.exec("ls /sdcard", true);
console.log(result.code); // 退出码
console.log(result.result); // 输出结果
```

## shell.execAsync(command, root)

**功能：** 异步执行Shell命令

```javascript
const result = await shell.execAsync("pm list packages", true);
await result.waitFor();
console.log(result.result);
```

