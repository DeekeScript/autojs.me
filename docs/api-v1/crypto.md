# crypto - 加解密与消息摘要

加解密与消息摘要相关 API。

## crypto.md5(data)

**功能：** 计算MD5哈希值

```javascript
var hash = crypto.md5("Hello World");
console.log(hash);
```

## crypto.sha1(data)

**功能：** 计算SHA1哈希值

```javascript
var hash = crypto.sha1("Hello World");
console.log(hash);
```

## crypto.sha256(data)

**功能：** 计算SHA256哈希值

```javascript
var hash = crypto.sha256("Hello World");
console.log(hash);
```

## crypto.hmac(algorithm, key, data)

**功能：** 计算HMAC哈希值

```javascript
var hash = crypto.hmac("sha256", "secret", "Hello World");
console.log(hash);
```

## crypto.aesEncrypt(data, key, transformation)

**功能：** AES加密

```javascript
var encrypted = crypto.aesEncrypt("Hello World", "secretkey", "AES/ECB/PKCS5Padding");
console.log(encrypted);
```

## crypto.aesDecrypt(encrypted, key, transformation)

**功能：** AES解密

```javascript
var decrypted = crypto.aesDecrypt(encrypted, "secretkey", "AES/ECB/PKCS5Padding");
console.log(decrypted);
```

## crypto.rsaEncrypt(data, publicKey)

**功能：** RSA加密

```javascript
var encrypted = crypto.rsaEncrypt("Hello World", publicKey);
console.log(encrypted);
```

## crypto.rsaDecrypt(encrypted, privateKey)

**功能：** RSA解密

```javascript
var decrypted = crypto.rsaDecrypt(encrypted, privateKey);
console.log(decrypted);
```

