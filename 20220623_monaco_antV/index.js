require.config({ paths: { vs: './node_modules/monaco-editor/min/vs' } });

let btn = document.querySelector('button')
// 获取画布绑定的容器
let container = document.querySelector('#container')

require(['vs/editor/editor.main'], function () {
  let ITextModule = monaco.editor.create(document.querySelector('#root'), {
    theme: 'vs-dark', // 主题
    language: 'python', // 语言
    readOnly: false, // 是否只读
    letterSpacing: 0, // 字母间距
    tabSize: 2, // 回车空格
    automaticLayout: true, // 自适应布局
  })

  // 创建代码提醒
  monaco.languages.registerCompletionItemProvider('python', {
    provideCompletionItems: function (model, position) {
      // find out if we are completing a property in the 'dependencies' object.
      var textUntilPosition = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column
      });
      var suggestions = [];
      var word = model.getWordUntilPosition(position);
      var range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };

      if (textUntilPosition.charAt(textUntilPosition.length - 2) == '.') {
        suggestions = createTips();
      }
      return { suggestions: suggestions };
    }
  });


})

// 代码提示方法(返回一个数组)
function createTips() {
  return [
    {
      label: 'SetValue', //显示的提示名称
      insertText: 'SetValue("text")' //选择后粘贴到编辑器中的文字
    },
  ]
}