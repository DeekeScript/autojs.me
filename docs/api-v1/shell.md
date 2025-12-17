# shell - Shell命令

Shell 命令执行相关 API。

## shell.exec(command, root)

**功能：** 执行Shell命令

```javascript
var result = shell("ls /sdcard", true);
console.log(result.code); // 退出码
console.log(result.result); // 输出结果
```

## shell.execAsync(command, root)

**功能：** 异步执行Shell命令

```javascript
var result = shell.execAsync("pm list packages", true);
result.waitFor();
console.log(result.result);
```

## shell.exit()

**功能：** 退出Shell

```javascript
shell.exit();
```

## Shell.execCommand(command, root)

**功能：** 执行Shell命令（同shell.exec）

```javascript
var result = Shell.execCommand("pm list packages", true);
console.log(result.result);
```

