require.config({ paths: { vs: './node_modules/monaco-editor/min/vs' } });

let btn = document.querySelector('button')

require(['vs/editor/editor.main'], function () {
  let ITextModule = monaco.editor.create(document.querySelector('#root'), {
    theme: 'vs-dark', // 主题
    language: 'javascript', // 语言
    readOnly: false, // 是否只读
    letterSpacing: 0, // 字母间距
    tabSize: 2, // 回车空格
    automaticLayout: true, // 自适应布局
  })
  console.log(G2);
  let Chart = G2.Chart


  // 点击
  btn.onclick = function () {
    if (ITextModule.getValue() === '') return
    console.log(ITextModule.getValue());

    eval(ITextModule.getValue())
  }

});