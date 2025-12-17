# media - 多媒体

多媒体相关 API。

## media.playMusic(path)

**功能：** 播放音乐

```javascript
import { media } from '@autojs/pro'

await media.playMusic("/sdcard/music.mp3");
```

## media.pauseMusic()

**功能：** 暂停音乐

```javascript
await media.pauseMusic();
```

## media.stopMusic()

**功能：** 停止音乐

```javascript
await media.stopMusic();
```

## media.getMusicDuration()

**功能：** 获取音乐时长（毫秒）

```javascript
const duration = await media.getMusicDuration();
console.log("时长：" + duration + "ms");
```

