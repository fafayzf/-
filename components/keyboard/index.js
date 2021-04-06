const letterCasePaths = ['./imgs/case-icon.png', './imgs/case-active-icon.png']
Component({
  properties: {
    title: String,
    show: {
      type: Boolean,
      value: false
    },
    modal: {
      type: Boolean,
      value: true
    },
    theme: {
      type: String,
      value: 'default'
    },
    themeColor: {
      type: String,
      value: '#F08437'
    },
    zIndex: {
      type: Number | String,
      value: 999
    },
    isRandomNumber: {
      type: Boolean,
      value: false
    },
    isRandomLetter: {
      type: Boolean,
      value: false
    },
    normalType: {
      type: String,
      value: 'number'
    },
    closeButtonText: String,
    extraKey: Array,
    icon: String,
  },
  lifetimes: {
    ready: function () {
      const animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      this.animation = animation
      this.setData({
        type: this.data.normalType
      })
    },
    attached: function() {
      const _this = this
      // 带右侧栏键盘
      if (_this.data.theme === 'custom') {
        _this.data.normaList.splice(9, 3)
        _this.data.normaList = [..._this.data.normaList, ..._this.data.customList]
        if (_this.data.extraKey[1]) {
          _this.data.normaList.splice(9, 0, { value: _this.data.extraKey[0], iconPath: '', name: _this.data.extraKey[0] })
          _this.data.normaList[_this.data.normaList.length - 1] = { value: _this.data.extraKey[1], iconPath: '', name: _this.data.extraKey[1] }
        }
      } else {
        _this.data.normaList[9] = _this.data.extraKey[0] ?
          { value: _this.data.extraKey[0], iconPath: '', name: _this.data.extraKey[0] } :
          _this.data.normaList[9]
      }
      const h = _this.queryMultipleNodes('#keyboard-header')
      const h1 = _this.queryMultipleNodes('#keyboard-body')
      Promise.all([h, h1]).then(res => {
       const h = res.reduce((a, b) => a + b)
        _this.setData({
          height: h + 80,
          normaList: _this.data.normaList
        })
      })
    }
  },
  data: {
    height: 999,
    type: 'number',
    isLetterCase: false, // 大小写转换
    normaList: [
      { value: '1', iconPath: '', name: '1' },
      { value: '2', iconPath: '', name: '2' },
      { value: '3', iconPath: '', name: '3' },
      { value: '4', iconPath: '', name: '4' },
      { value: '5', iconPath: '', name: '5' },
      { value: '6', iconPath: '', name: '6' },
      { value: '7', iconPath: '', name: '7' },
      { value: '8', iconPath: '', name: '8' },
      { value: '9', iconPath: '', name: '9' },
      { value: 'enter', iconPath: './imgs/keyboard-icon.png', name: '' },
      { value: '0', iconPath: '', name: '0' },
      { value: 'delete', iconPath: './imgs/del-icon.png', name: '' },
    ],
    lettersList: [
      { value: 'q', iconPath: '', name: 'q' },
      { value: 'w', iconPath: '', name: 'w' },
      { value: 'e', iconPath: '', name: 'e' },
      { value: 'r', iconPath: '', name: 'r' },
      { value: 't', iconPath: '', name: 't' },
      { value: 'y', iconPath: '', name: 'y' },
      { value: 'u', iconPath: '', name: 'u' },
      { value: 'i', iconPath: '', name: 'i' },
      { value: 'o', iconPath: '', name: 'o' },
      { value: 'p', iconPath: '', name: 'p' },
      { value: 'a', iconPath: '', name: 'a' },
      { value: 's', iconPath: '', name: 's' },
      { value: 'd', iconPath: '', name: 'd' },
      { value: 'f', iconPath: '', name: 'f' },
      { value: 'g', iconPath: '', name: 'g' },
      { value: 'h', iconPath: '', name: 'h' },
      { value: 'j', iconPath: '', name: 'j' },
      { value: 'k', iconPath: '', name: 'k' },
      { value: 'l', iconPath: '', name: 'l' },
      { value: 'case', iconPath: './imgs/case-icon.png', name: '' },
      { value: 'z', iconPath: '', name: 'z' },
      { value: 'x', iconPath: '', name: 'x' },
      { value: 'c', iconPath: '', name: 'c' },
      { value: 'v', iconPath: '', name: 'v' },
      { value: 'b', iconPath: '', name: 'b' },
      { value: 'n', iconPath: '', name: 'n' },
      { value: 'm', iconPath: '', name: 'm' },
      { value: 'delete', iconPath: './imgs/del-icon.png', name: '' },
      { value: '123', iconPath: '', name: '123' },
      { value: '.', iconPath: '', name: '.' },
      { value: 'spacing', iconPath: '', name: '空格' },
      { value: 'symbol', iconPath: '', name: '#+=' },
    ],
    symbolsList: [
      { value: '<', iconPath: '', name: '<' },
      { value: '>', iconPath: '', name: '>' },
      { value: '{', iconPath: '', name: '{' },
      { value: '}', iconPath: '', name: '}' },
      { value: '(', iconPath: '', name: '(' },
      { value: ')', iconPath: '', name: ')' },
      { value: '[', iconPath: '', name: '[' },
      { value: ']', iconPath: '', name: ']' },
      { value: '$', iconPath: '', name: '$' },
      { value: '\\', iconPath: '', name: '\\' },
      { value: '|', iconPath: '', name: '|' },
      { value: '%', iconPath: '', name: '%' },
      { value: '&', iconPath: '', name: '&' },
      { value: '*', iconPath: '', name: '*' },
      { value: '^', iconPath: '', name: '^' },
      { value: '/', iconPath: '', name: '/' },
      { value: '?', iconPath: '', name: '?' },
      { value: '!', iconPath: '', name: '!' },
      { value: '+', iconPath: '', name: '+' },
      { value: ':', iconPath: '', name: ':' },
      { value: ';', iconPath: '', name: ';' },
      { value: '"', iconPath: '', name: '"' },
      { value: '\'', iconPath: '', name: '\'' },
      { value: '`', iconPath: '', name: '`' },
      { value: '#', iconPath: '', name: '#' },
      { value: '@', iconPath: '', name: '@' },
      { value: '=', iconPath: '', name: '=' },
      { value: '~', iconPath: '', name: '~' },
      { value: '_', iconPath: '', name: '_' },
      { value: '-', iconPath: '', name: '-' },
      { value: ',', iconPath: '', name: ',' },
      { value: 'delete', iconPath: './imgs/del-icon.png', name: '' },
      { value: '123', iconPath: '', name: '123' },
      { value: '.', iconPath: '', name: '.' },
      { value: 'spacing', iconPath: '', name: '空格' },
      { value: 'abc', iconPath: '', name: 'abc' },
    ],
    customList: [
      { value: '0', iconPath: '', name: '0' },
      { value: '.', iconPath: '', name: '.' }
    ],
    rightKeyboardList: [
      { value: 'delete', iconPath: './imgs/del-icon.png', name: '' },
      { value: 'enter', iconPath: '', name: '完成' },
    ],
    animationData: {},
  },
  methods: {
    show () {
      this.animation.bottom(0).step()
      this.setData({
        animationData: this.animation.export()
      })
    },
    hide () {
      this.animation.bottom(-this.data.height).step()
      this.setData({
        animationData: this.animation.export(),
        type: this.data.normalType
      })
    },
    queryMultipleNodes (selector) {
      const query = wx.createSelectorQuery().in(this)
      return new Promise((resolve, reject) => {
        query.select(selector).boundingClientRect(function(res){
          resolve(res.height)
        }).exec()
      })
    },
    onClear () {
      this.setData({
        show: false,
      })
      this.hide()
    },
    onChangeKeyBoard (e) {
      let value = e.currentTarget.dataset.value
      switch(value) {
        case 'enter':
          this.onClear()
          this.triggerEvent('enter')
          break;
        case 'delete':
          this.triggerEvent('delete', value)
          break;
        case 'abc': case '123':
          this.setData({
            type: value === 'abc' ? 'letter' : 'number'
          })
          break;
        case 'symbol':
          this.setData({
            type: 'symbol'
          })
          break;
        case 'case':
          this.changeLetterCase()
          break;
        default:
          this.triggerEvent('input', value)
          break;
      }
    },
    shuffle (arr) {
      const len = arr.length, blockWordList = ['enter', 'delete', 'abc', '.', 'spacing', '123', 'symbol', 'case']
      for (let i = 0; i < len; i++) {
        const index = parseInt(Math.random() * (len - i))
        const normalVal = arr[index].value
        const lastVal = arr[len - i - 1].value
        // 当前元素都不满足，则返回true
        const status = blockWordList.every(item => item !== normalVal && item !== lastVal)
        if (status) {
          const temp = arr[index]
          arr[index] = arr[len - i - 1]
          arr[len - i - 1] = temp
        }
      }
      return arr
    },
    changeLetterCase() {
      const data = this.data,
        i = data.lettersList.findIndex((item) => item.value === 'case'),
        filterList = ['case', 'delete', '123', '.', 'spacing', 'symbol']
      data.isLetterCase = !data.isLetterCase
      data.lettersList[i].iconPath = data.isLetterCase ? letterCasePaths[1] : letterCasePaths[0]
      data.lettersList = data.lettersList.map(item => { 
        if (filterList.every(v => v !== item.value)) {
          const val = data.isLetterCase ? item.value.toLocaleUpperCase() : item.value.toLocaleLowerCase()
          return Object.assign(item, { value: val, name: val })
        } else {
          return item
        }
      })
      this.setData({
        lettersList: data.lettersList,
        isLetterCase: data.isLetterCase
      })
    }
  },
  observers: {
    'show': function (value) {
      const _this = this
      if (value) {
        _this.show()
        _this.triggerEvent('load', { height: _this.data.height }) // 键盘高度
        _this.data.isRandomNumber && _this.setData({ // 数字随机排序
          normaList: _this.shuffle(_this.data.normaList),
        })
        _this.data.isRandomLetter && _this.setData({ // 字母随机排序
          lettersList: _this.shuffle(_this.data.lettersList),
        })
      } else {
        // setTimeout(() => {
        //   _this.setData({
        //     normalType: 'number'
        //   })
        // }, 301)
      }
    }
  }
})
