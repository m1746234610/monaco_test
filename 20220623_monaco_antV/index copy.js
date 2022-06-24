require.config({ paths: { vs: './node_modules/monaco-editor/min/vs' } });

let btn = document.querySelector('button')
// 获取画布绑定的容器
let container = document.querySelector('#container')

require(['vs/editor/editor.main'], function () {
  let ITextModule = monaco.editor.create(document.querySelector('#root'), {
    theme: 'vs-dark', // 主题
    language: 'javascript', // 语言
    readOnly: false, // 是否只读
    letterSpacing: 0, // 字母间距
    tabSize: 2, // 回车空格
    automaticLayout: true, // 自适应布局
  })
  // console.log(G2);
  // console.log(DataSet);

  // antv
  let { Chart, Util, registerAnimation, registerShape } = G2

  // echarts画布
  // let myChart = echarts.init(container)
  // 用来接收option传过来的数据
  let option = {}
  // let chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });

  // 点击
  btn.onclick = function () {
    if (ITextModule.getValue() === '') return
    // console.log(chart.destroy);
    // chart.destroy()

    // myChart.clear()

    // antV 删除上一个图表的dom节点
    if (container.children.length) {
      container.removeChild(container.children[0])
    }

    eval(ITextModule.getValue())

    // 绘制echarts图表
    // setTimeout(() => { myChart.setOption(option) }, 500);
  }
});


