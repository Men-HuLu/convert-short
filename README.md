## convert-short

```
npm i convert-short --save
```
example

```
import test from 'convert-short'

console.log(test(123232131))
```


npm测试
将es6转换npm包

```
安装babel
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```
配置

```
"build":"babel src --out-dir lib"
```
发布前执行npm run build