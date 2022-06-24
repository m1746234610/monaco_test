一、monaco文件：通过 npm i monaco-editor下载npm包，在html页面引用 

​	运行：在index.html中通过live server 或 本地浏览器 打开

​	问题描述：

​	1. 在index.js中，language在设置成 javascript 或 typescript 的时候才有 代码提示 和 代码高亮 ，设置成其他语言（如：mysql、java）没有代码提示，只有代码高亮

原因：未知



二、react_monaco文件：通过react脚手架使用 原生monaco editor

问题描述：

1. 在App.js中，在设置了language属性后，页面就会报红，且每次在编辑区输入内容，会增加报错信息

   ![](D:\Code\20220620_monacoTest\报错.jpg)

   原因：可能缺少某些配置

尝试解决：在monaco-editor的Issues中，引入 monaco-editor-webpack-plugin  对webpack.config.js进行配置。地址：https://github.com/microsoft/monaco-editor/issues/2122。

结果：未解决



2. 在app.js中修改完代码并保存后，页面会新加载一个编辑器

​	原因：目前未知



三、react_monaco_editor文件：使用react脚手架并使用react二次封装后的monaco editor

问题描述：

1. 没有报红，但没有代码提示 和 代码高亮

   原因：未知