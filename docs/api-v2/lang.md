# lang - 语言

语言相关 API。

## lang.getLanguage()

**功能：** 获取系统语言

```javascript
import { lang } from '@autojs/pro'

const language = await lang.getLanguage();
console.log("系统语言：" + language);
```

## lang.getCountry()

**功能：** 获取系统国家/地区

```javascript
const country = await lang.getCountry();
console.log("国家/地区：" + country);
```

## lang.getLocale()

**功能：** 获取系统区域设置

```javascript
const locale = await lang.getLocale();
console.log("区域设置：" + locale);
```

