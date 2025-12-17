# files - 文件系统

文件系统操作相关 API。

## files.read(path)

**功能：** 读取文件内容为字符串

```javascript
var content = files.read("/sdcard/data.txt");
console.log(content);
```

## files.write(path, text)

**功能：** 写入文本到文件

```javascript
files.write("/sdcard/data.txt", "Hello World");
```

## files.exists(path)

**功能：** 判断文件或目录是否存在

```javascript
if (files.exists("/sdcard/data.txt")) {
    console.log("文件存在");
}
```

## files.readBytes(path)

**功能：** 读取文件内容为字节数组

```javascript
var bytes = files.readBytes("/sdcard/image.jpg");
console.log("文件大小：" + bytes.length);
```

## files.writeBytes(path, bytes)

**功能：** 写入字节数组到文件

```javascript
var bytes = files.readBytes("/sdcard/image.jpg");
files.writeBytes("/sdcard/copy.jpg", bytes);
```

## files.append(path, text)

**功能：** 追加文本到文件

```javascript
files.append("/sdcard/log.txt", "新的一行\n");
```

## files.ensureDir(path)

**功能：** 确保目录存在，不存在则创建

```javascript
files.ensureDir("/sdcard/myapp/data");
```

## files.create(path)

**功能：** 创建文件

```javascript
files.create("/sdcard/newfile.txt");
```

## files.createWithDirs(path)

**功能：** 创建文件，如果目录不存在则创建目录

```javascript
files.createWithDirs("/sdcard/myapp/data.txt");
```

## files.remove(path)

**功能：** 删除文件或目录

```javascript
files.remove("/sdcard/data.txt");
files.removeDir("/sdcard/myapp");
```

## files.listDir(path)

**功能：** 列出目录下的文件和文件夹

```javascript
var fileList = files.listDir("/sdcard");
fileList.forEach(function(file) {
    console.log(file);
});
```

## files.getName(path)

**功能：** 获取文件名

```javascript
var name = files.getName("/sdcard/data.txt");
console.log(name); // 输出: data.txt
```

## files.getExtension(path)

**功能：** 获取文件扩展名

```javascript
var ext = files.getExtension("/sdcard/data.txt");
console.log(ext); // 输出: txt
```

## files.getParent(path)

**功能：** 获取父目录路径

```javascript
var parent = files.getParent("/sdcard/data.txt");
console.log(parent); // 输出: /sdcard
```

## files.getSdcardPath()

**功能：** 获取SD卡路径

```javascript
var sdcard = files.getSdcardPath();
console.log(sdcard); // 输出: /sdcard
```

## files.getAppDataPath()

**功能：** 获取应用数据目录路径

```javascript
var path = files.getAppDataPath();
console.log(path);
```

## files.copy(from, to)

**功能：** 复制文件

```javascript
files.copy("/sdcard/data.txt", "/sdcard/backup.txt");
```

## files.move(from, to)

**功能：** 移动文件

```javascript
files.move("/sdcard/data.txt", "/sdcard/new/data.txt");
```

