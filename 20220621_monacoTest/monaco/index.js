require.config({ paths: { vs: './node_modules/monaco-editor/min/vs' } })
require(['vs/editor/editor.main'], async function () {
  let ITextModule = monaco.editor.create(document.querySelector('#root'), {
    theme: 'vs-dark', // 主题
    language: 'javascript', // 语言
  })

  let btn = document.querySelector('button')
  // 画布
  let myChart = echarts.init(document.querySelector('#root2'))

  // 2.1 用来接收option传过来的数据
  let option = {}

  let context = null
  let onupdate = null
  let d3 = {}

  let ROOT_PATH = 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
  btn.addEventListener('click', function () {
    // 编辑区内容
    let options = ITextModule.getValue()

    // 1.1 通过new Function 将字符串转换成js运行代码
    // options = new Function('', `return ${options}`)

    // 1.2 打印转换后的编辑区内容
    // console.log(options());

    // 1.3 绘制新的图表
    // myChart.setOption(options())

    // 删除上一个图表
    // myChart.clear()

    // 2.2 通过 eval 将字符串转换成js运行代码
    // options = eval(options)
    eval(ITextModule.getValue())
    // console.log(options, option);

    // 2.3 绘制新的图表
    // if (option.series) 
    setTimeout(() => {
      myChart.setOption(option)
    }, 500);
  })
})
