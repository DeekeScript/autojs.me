# 项目配置文件

在 Auto.js Pro 中，我们有时不仅需要运行单文件，还有运行项目的需求。所谓项目，就是一个包含配置、代码文件、资源文件（图片等）的文件包。

在 Auto.js Pro 中可以在主页新建项目，有多种项目模块可供选择(Pro 8.7以上)。

## project.json

`project.json` 文件用于配置项目的相关参数，比如主文件、启动图、包名等信息。

### 参数表格

| 参数名称 | 意义 | 类型 | 默认值 |
|---------|------|------|--------|
| androidResources | 安卓资源，参见[androidResources](#androidresources) | Object | { "resDir": "res", "manifest": "AndroidManifest.xml" } |
| build | 自动生成的构建信息，无需修改，参见[build](#build) | Object | |
| assets | 保留字段，暂时没有作用 | string[] | [] |
| encryptLevel | 加密级别 0-不加密, 1-本地加密, 2-在线加密(仅在8.7以上版本支持) | number | 0 |
| icon | 桌面图标 | string | "icons/icon.png" |
| ignore | 从VSCode中同步项目时的忽略文件，在Pro9.3以上版本被.autojs.sync.ignore文件代替 | string[] | ["build"] |
| launchConfig | 启动配置，参见[launchConfig](#launchconfig) | Object | |
| main | 入口文件 | string | "main.js" |
| name | app名字 | string | "" |
| optimization | 优化配置，参见[optimization](#optimization) | Object | |
| packageName | 包名，必须符合Android包名规范，另外上传商店时包名必须唯一 | string | "" |
| permissionConfig | 权限配置，参见[permissionConfig](#permissionconfig) | Object | { "manifestPermissions": [], "requestListOnStartup": [] } |
| publish | 发布/上传商店配置，参见[publish](#publish) | Object | |
| scripts | 构建等时机自动触发运行的脚本配置，参见[scripts](#scripts) | Object | |
| useFeatures | 特性 **`continuation`** - 是否使用协程特性，参见示例->协程 | string[] | [] |
| versionCode | 版本号 | number | 1 |
| versionName | 给用户看的版本名称 | string | "1.0.0" |

### 完整配置示例

```json
{
  "androidResources": {
    "resDir": "res",
    "manifest": "AndroidManifest.xml"
  },
  "assets": [],
  "build": {
    "build_id": "6F47F367-1",
    "build_number": 1,
    "build_time": 1615553004812,
    "release": true
  },
  "encryptLevel": 0,
  "useFeatures": [],
  "icon": "res/icon.png",
  "ignore": ["build"],
  "launchConfig": {
    "displaySplash": true,
    "hideLogs": false,
    "splashIcon": "res/splashIcon.png",
    "splashLayoutXml": "splash.xml",
    "splashText": "Powered by Auto.js Pro",
    "stableMode": false
  },
  "main": "main.js",
  "name": "Shape3.0",
  "optimization": {
    "removeOpenCv": true,
    "unusedResources": true
  },
  "packageName": "com.suzy.rippledrawable",
  "permissionConfig": {
    "manifestPermissions": ["android.permission.WRITE_EXTERNAL_STORAGE"],
    "requestListOnStartup": ["android.permission.WRITE_EXTERNAL_STORAGE"]
  },
  "publish": {
    "category": "其他",
    "details": "控件描边、渐变、水波纹、文字渐变",
    "maxAutoJsVersion": -1,
    "minAutoJsVersion": -1,
    "maxProVersion": 8059999,
    "minProVersion": 8050000,
    "minSdkVersion": 2,
    "permissions": [],
    "summary": "控件描边、渐变、水波纹、文字渐变",
    "tags": []
  },
  "scripts": {},
  "versionCode": 1,
  "versionName": "1.0.0"
}
```

### 最小配置示例

```json
{
    "name": "新建项目",
    "main": "main.js",
    "ignore": [
        "build"
    ],
    "packageName": "com.example",
    "versionName": "1.0.0",
    "versionCode": 1
}
```

### androidResources

用于配置Android原生界面的参数，参见示例->复杂界面->Android 原生界面。

| 参数名称 | 意义 | 类型 | 默认值 |
|---------|------|------|--------|
| resDir | Android资源文件包 | string | "res" |
| manifest | AndroidManifest.xml的文件路径 | string | "AndroidManifest.xml" |

### features

用于配置Android原生界面的参数，参见示例->复杂界面->Android 原生界面。

| 参数名称 | 意义 | 类型 | 默认值 |
|---------|------|------|--------|
| activityIntentTasks | 处理外部文件 | boolean | false |
| nodejs | Node.js引擎 | string | "auto" (可选值 "disabled"=禁用 "enabled"=启用 ) |

### build

自动生成的构建信息，包含构建时间、构建号等，请勿修改。

打包软件中，将根据这里的信息判断是否需要解压覆盖安装包的文件到数据路径。每次打包后这里的信息会更新，因此安装后可以自动更新本地数据中的项目文件。

| 参数名称 | 意义 | 类型 | 默认值 |
|---------|------|------|--------|
| build_id | 自动生成的构建id | string | "" |
| build_number | 构建号，每次构建自增1 | number | 1 |
| build_time | 上次构建时间 | number | 当前13位时间戳 |
| release | 是否为打包后项目，为自动生成的字段，不需要修改 | boolean | false |

### launchConfig

打包后的相关启动配置。

| 参数名称 | 意义 | 类型 | 默认值 |
|---------|------|------|--------|
| displaySplash | 打包后是否显示启动图（即使设置为false，打包后第一次也仍然会显示启动图） | boolean | true |
| hideLogs | 打包后是否隐藏日志界面 | boolean | false |
| splashIcon | 打包后启动界面图标 | string | "icons/splashIcon.png" |
| splashLayoutXml | 启动图xml，用于打包后自定义启动图，参见示例->项目与打包->自定义启动图 (8.5以上版本) | string | "splash.xml" |
| splashText | 打包后启动界面文本 | string | "Powered by Auto.js Pro" |
| stableMode | 打包后是否以稳定模式运行 | boolean | false |

### permissionConfig

> Pro 8.8.1新增

自定义权限配置，包括应用打包后声明的权限列表和启动时自动申请的权限列表。

也可以在打包界面中使用权限配置修改。

| 参数名称 | 意义 | 类型 | 默认值 |
|---------|------|------|--------|
| manifestPermissions | 打包后应用声明的权限列表。为了兼容旧版本配置，如果该字段为null则默认为122个自带权限。 | string[] | null |
| requestListOnStartup | 应用启动时自动申请的权限列表，权限务必包含在manifestPermissions中，否则会无法申请 | string[] | ["android.permission.WRITE_EXTERNAL_STORAGE"] |

全部权限列表参见Android官方文档：[Manifest.permission](https://developer.android.google.cn/reference/android/Manifest.permission)

### publish

上传商店发布项目的相关配置。

| 参数名称 | 意义 | 类型 | 默认值 |
|---------|------|------|--------|
| maxAutoJsVersion | 支持的最大autojs版本号 | number | 0 |
| maxProVersion | 支持的最大autojspro版本号 | number | 0 |
| minAutoJsVersion | 支持的最小autojs版本号 | number | 0 |
| minProVersion | 支持的最大autojspro版本号 | number | 0 |
| minSdkVersion | 支持的最小安卓版本 | number | 0 |
| category | 项目类别，用于发布在商店时作为分类 | string | "其他" |
| details | 项目详细描述，用于发布在商店时作为项目详情的 | string | "" |
| permissions | 权限列表，比如"root"，暂时没有作用 | string[] | [] |
| summary | 脚本功能简介 | string | "" |
| tags | 脚本标签，由于商店还没有标签过滤功能，暂时没有作用 | string[] | [] |

### optimization

优化配置。目前用于打包时缩小体积。

| 参数名称 | 意义 | 类型 | 默认值 |
|---------|------|------|--------|
| removeOpenCv | 不需要图色模块 | boolean | false |
| unusedResources | 不需要内置图标 | boolean | false |
| obfuscateComponents | 是否混淆组件名称 | boolean | false |
| removeAccessibilityService | 是否移除无障碍服务 | boolean | false |

## ignore配置

> Pro 8.7.6新增

ignore配置文件类似于`.gitignore`，用于配置 Auto.js Pro 处理打包、加密等忽略的文件。

ignore文件的规则和`.gitignore`相同，比如：

```
# / 表示 当前文件所在的目录

# 忽略public下的所有目录及文件
/public

# 忽略所有以.log结尾的文件
*.log

# 忽略node_modules目录
node_modules/

# 忽略build目录
build/
```

### .autojs.source.ignore

用于配置打包、加密时忽略的文件。

### .autojs.build.ignore

用于配置打包时忽略的文件。

### .autojs.sync.ignore

用于配置从 VSCode 同步项目时忽略的文件（Pro 9.3 以上版本）。

## scripts

构建等时机自动触发运行的脚本配置。

### 构建apk时触发

在构建 apk 时，会执行 `scripts.build` 中配置的脚本文件。

例如，在 `project.json` 中配置：

```json
{
  "scripts": {
    "build": "scripts/build.js"
  }
}
```

在构建 apk 时，会自动执行 `scripts/build.js` 文件。
