require.config({ paths: { vs: './node_modules/monaco-editor/min/vs' } })
require(['vs/editor/editor.main'], async function () {
  let ITextModule = monaco.editor.create(document.querySelector('#root'), {
    theme: 'vs-dark', // 主题
    language: 'javascript', // 语言
  })

  // 页面大小发生改变时Echarts也跟着发生改变
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  let btn = document.querySelector('button')
  // console.log(echarts);

  // 画布
  let myChart = echarts.init(document.querySelector('#root2'))

  // 2.1 用来接收option传过来的数据
  let option = {}

  let context = null
  let onupdate = null
  let d3 = {}
  var app = {};


  let ROOT_PATH = 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
  btn.addEventListener('click', function () {
    // 编辑区内容
    let options = ITextModule.getValue()

    // 删除上一个图表
    // myChart.clear()

    // 2.2 通过 eval 将字符串转换成js运行代码
    eval(ITextModule.getValue())
    // console.log(options, option);

    // 2.3 绘制新的图表
    setTimeout(() => { myChart.setOption(option) }, 500);
  })
})
