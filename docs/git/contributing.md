---
outline: deep
---

##  编码规则

+ 为了确保整个源代码的一致性，请在工作时牢记以下规则：
+ 所有功能或错误修复都必须通过一项或多项规范（单元测试）进行测试。
+ 所有公共 API 方法都必须记录在案。
+ 我们遵循[Google的JavaScript样式指南](https://google.github.io/styleguide/jsguide.html)，但将所有代码限制为100 个字符。
可以使用自动格式化程序

## 提交消息格式
对于 Git 提交消息的格式必须如何设置，我们有非常精确的规则。这种格式使提交历史记录更容易阅读。

每条提交消息均由标头、正文和页脚组成。
```javascript
<header>
<空一行>
<body>
<空一行>
<footer>
````


+ header 是必要的
+ body 也是必要的，除了类型为 docs 之外，body 的内容必须大于 20 个字符
+ footer 是可选的，比如放置引用的 issue
````javascript
<类型>(<作用域>): <主题>
  │       │        │
  │       │        └─⫸ 简短总结，现在时态，不需要首字母大写，末尾不用加句号
  │       │
  │       └─⫸ Commit 作用域: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|
  │                          devtools
  │
  └─⫸ Commit 类型: build|ci|docs|feat|fix|perf|refactor|test
````
