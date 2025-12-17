# sensors - 传感器

传感器相关 API。

## sensors.register(eventName, delay, listener)

**功能：** 注册传感器监听

```javascript
sensors.register("accelerometer", sensors.delay.ui, function(event) {
    console.log("加速度：", event.values);
});
```

## sensors.unregister(listener)

**功能：** 取消传感器监听

```javascript
sensors.unregister(listener);
```

## sensors.getSensorList()

**功能：** 获取传感器列表

```javascript
var sensorList = sensors.getSensorList();
sensorList.forEach(function(sensor) {
    console.log("传感器：" + sensor.name);
});
```

## sensors.registerListener(type, listener)

**功能：** 注册传感器监听器（同 sensors.register）

```javascript
var listener = sensors.registerListener("accelerometer", function(event) {
    console.log("加速度：", event.values);
});
```

## sensors.unregisterListener(listener)

**功能：** 取消传感器监听器

```javascript
sensors.unregisterListener(listener);
```

