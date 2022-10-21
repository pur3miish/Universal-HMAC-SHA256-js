# Universal-HMAC-SHA256-js

A universal JavaScript (Browsers + Node.js) HMAC-SHA256 hashing algorithm.

- Zero dependencies

# Setup

```shell
npm i universal-hmac-sha256
```

Ways to require.

```js
const hmac_sha256 = require('universal-hmac-sha256')
```

Ways to import.

```js
import hmac_sha256 from 'universal-hmac-sha256'
```

# API

## function hmac_sha256

Performs a HMAC SHA256 hash.

| Parameter | Type       | Description   |
| :-------- | :--------- | :------------ |
| `data`    | Uint8Array | Data to hash. |
| `key`     | Uint8Array | Secret key.   |

**Returns:** Uint8Array — The HMAC-SHA256 data.

### Examples

_How to use._

> ```js
> const data = Uint8Array.from([104, 101, 108, 108, …])
> const key =  Uint8Array.from([193, 208, 122, 108, …])
>
> hmac_sha256(data, key).then(console.log)
> ```
>
> > The logged output is UintArray(\[43, …])
