# media - 多媒体

多媒体相关 API。

## media.playMusic(path)

**功能：** 播放音乐

```javascript
media.playMusic("/sdcard/music.mp3");
```

## media.pauseMusic()

**功能：** 暂停音乐

```javascript
media.pauseMusic();
```

## media.stopMusic()

**功能：** 停止音乐

```javascript
media.stopMusic();
```

## media.getMusicDuration()

**功能：** 获取音乐时长（毫秒）

```javascript
var duration = media.getMusicDuration();
console.log("时长：" + duration + "ms");
```

## media.setMusicVolume(volume)

**功能：** 设置音乐音量（0.0-1.0）

```javascript
media.setMusicVolume(0.5); // 设置为50%音量
```

## media.scanFile(path)

**功能：** 扫描文件到媒体库

```javascript
media.scanFile("/sdcard/image.jpg");
```

## media.takePicture()

**功能：** 拍照

```javascript
var path = media.takePicture();
console.log("照片路径：" + path);
```

## media.recordVideo(path, duration)

**功能：** 录制视频

```javascript
var path = media.recordVideo("/sdcard/video.mp4", 10000); // 录制10秒
console.log("视频路径：" + path);
```

