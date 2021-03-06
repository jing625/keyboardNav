//  1.  初始化数据

var hashX = init()
var keys = hashX['keys']
var hash = hashX['hash']

// 2.  生成键盘
generateKeybord(keys, hash)

//  3.  监听用户动作
listenToUser(hash)

function getFromLocalStorage (name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}
function tag (tagName) {
  return document.createElement(tagName)
}
function createSpan (textContent) {
  var spanX = tag('span')
  spanX.textContent = textContent
  spanX.className = 'text'
  return spanX
}
function createButton (id) {
  var buttonX = tag('button')
  buttonX.textContent = '编辑'
  buttonX.id = id
  buttonX.onclick = function (shubiao) {
    var buttonX2 = shubiao['target']
    var imgX2 = buttonX2.previousSibling
    var key = buttonX2['id']
    var x = prompt('输入网址')
    hash[key] = x
    imgX2.src = 'http://' + x + '/favicon.ico'
    imgX2.onerror = function (shubiao) {
      shubiao.target.src = '//i.loli.net/2018/07/26/5b59bbe4b6f40.png'
    }
    localStorage.setItem('zzz', JSON.stringify(hash))
  }
  return buttonX
}
function createImage (domain) {
  var imgX = tag('img')
  if (domain) {
    imgX.src = 'http://' + domain + '/favicon.ico'
  }else {
    imgX.src = '//i.loli.net/2018/07/26/5b59bbe4b6f40.png'
  }
  imgX.onerror = function (xxx) {
    xxx.target.src = '//i.loli.net/2018/07/26/5b59bbe4b6f40.png'
  }
  return imgX
}
function init () {
  var keys = {
    0: {
      '0': 'q',
      '1': 'w',
      '2': 'e',
      '3': 'r',
      '4': 't',
      '5': 'y',
      '6': 'u',
      '7': 'i',
      '8': 'o',
      '9': 'p',
      length: 10
    },
    1: {
      0: 'a',
      1: 's',
      2: 'd',
      3: 'f',
      4: 'g',
      5: 'h',
      6: 'j',
      7: 'k',
      8: 'l',
      length: 9
    },
    2: {
      0: 'z',
      1: 'x',
      2: 'c',
      3: 'v',
      4: 'b',
      5: 'n',
      6: 'm',
      length: 7
    },
    length: 3
  }
  var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    't': 'taobao.com',
    'y': 'youku.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'a': 'acfun.cn',
    's': 'segmentfault.com',
    'd': 'douban.com',
    'f': 'ifeng.com',
    'g': 'ganji.com',
    'h': 'hupu.com',
    'j': 'juejin.im',
    'k': 'kfc.com.cn',
    'l': 'lol.qq.com',
    'z': 'zhihu.com',
    'x': 'xiedaimala.com',
    'c': 'cctv.com',
    'v': 'vip.com',
    'b': 'bilibili.com',
    'n': 'nba.com',
    'm': 'www.mcdonalds.com.cn'
  }
  var hashInLocalStorage = getFromLocalStorage('zzz')
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }
  return {
    'keys': keys,
    'hash': hash
  }
}
function generateKeybord (keys, hash) {
  for (var index = 0; index < keys['length']; index = index + 1) {
    var divX = tag('div')
    divX.className = 'row'

    mainX.appendChild(divX)

    var row = keys[index]
    for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
      var spanX = createSpan(row[index2])

      var buttonX = createButton(row[index2])

      var imgX = createImage(hash[row[index2]])

      var kbdX = tag('kbd')
      kbdX.className = 'key'
      kbdX.appendChild(spanX)
      kbdX.appendChild(buttonX)
      kbdX.appendChild(imgX)

      divX.appendChild(kbdX)
    }
  }
}
function listenToUser (hash) {
  document.onkeypress = function (jianpan) {
    var key = jianpan['key']
    var website = hash[key]
    // location.href = 'http://' + website
    window.open('http://' + website, '_blank')
  }
}
