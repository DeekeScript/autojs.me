# zip - 压缩与解压

压缩解压相关 API。

## zip.zipFile(file, zipFile)

**功能：** 压缩文件

```javascript
import { zip } from '@autojs/pro'

await zip.zipFile("/sdcard/data.txt", "/sdcard/data.zip");
```

## zip.unzip(zipFile, destDir)

**功能：** 解压文件

```javascript
await zip.unzip("/sdcard/data.zip", "/sdcard/extracted/");
```

## zip.zipFiles(files, zipFile)

**功能：** 压缩多个文件

```javascript
await zip.zipFiles(["/sdcard/file1.txt", "/sdcard/file2.txt"], "/sdcard/files.zip");
```

## zip.zipDir(dir, zipFile)

**功能：** 压缩目录

```javascript
await zip.zipDir("/sdcard/myapp", "/sdcard/myapp.zip");
```

