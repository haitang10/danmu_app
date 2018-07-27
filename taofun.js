
var log = function() {
  console.log.apply(console, arguments)
}
// 选择元素和绑定事件分开
// 用w 代替  其中selector 是元素的id或标签名或class
var w = function(selector) {
  return document.querySelector(selector)
}
// wAll 函数返回一个元素集合
var wAll = function(selecter) {
  return document.querySelectorAll(selecter)
}

// find 函数可以查找element元素的子节点
var find = function(element, selector) {
  return element.querySelector(selector)
}
var bindEvent = function(element, event, callback) {
  element.addEventListener(event, callback)
}

// 给所有按钮绑定事件
//先选择所有gua-menu-toggle
var bindAll = function(elements, event, callback) {
  for (var i = 0; i < elements.length; i++) {
    var a = elements[i]
    a.addEventListener(event, callback)
  }
}

// 删除添加某个属性可以直接用element.classList.add() remove()
// 有几种情况1，直接删除，2，检查是否已经删除，3，删除所有符合条件的
var deleteClass = function(element, className) {
  //检查元素是否有某个class,if exist delete
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  }
}
// 检查元素是否存在某个元素，如果不存在就添加
var addClass = function(element, className) {
  if (element.classList.contains(className)) {

  } else {
    // if not exist then add
    element.classList.add(className)
  }
}


// toggleClass 这个函数用来给元素开关某一个class
var toggleClass = function(element, className) {
  //检查元素是否有某个class,if exist delete
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    // if not exist then add
    element.classList.add(className)
  }
}


// removeClassAll 可以删除所有指定的class,接受class参数，不加.
// 要注意一点，querySelectorAll() 接受参数是.gua-slide-active
// 而element.classList.remove() 接受'gua-slide-active' 没有.
var removeClassAll = function(selector) {
  var new_selector = '.' +selector
  var elements = document.querySelectorAll(new_selector)
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    element.classList.remove(selector)
  }

}

// addClassAll 函数通过查找id，添加指定class,
//selector 为完整选择器，#gua-slide, new_class 为字符串
var addClassAll = function(selector, new_class) {
  log('addClassAll')
  var elements = document.querySelectorAll(selector)
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    element.classList.add(new_class)
  }
}


// 构建函数 插入todo-cell 到 container中,
//todoValue 是标签中文本内容，doneStatus为done的状态
var insertodos = function(todoValue, doneStatus) {
    log('内容', todoValue, doneStatus)
    var todoContainer = w('#id-div-container')
    var t = templateTodo(todoValue, doneStatus)
    appendHtml(todoContainer,t)
}


// 构建函数用来创建含有文本输入值的div-todo-cell
var templateTodo = function(todoValue, doneStatus) {
  // 如果doneStatus为 true，则给todo-cell，加上done这个class
  var status = 'false'
  if(doneStatus) {
    status = 'done'
    log('status',status)
  }
  // 构建含有 todoValue 的div
  var t = `
  <div class='todo-cell ${status}'>
      <button class='todo-done'>完成</button>
      <button class='todo-delete'>删除</button>
      <span class='todo-content' contenteditable='true'>${todoValue}</span>
  </div>
  `
  return t
}

var appendHtml = function(element, html) {
  element.insertAdjacentHTML('beforeend', html)
}
