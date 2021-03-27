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
      value: 1
    },
    closeButtonText: String,
    extraKey: Array
  },
  lifetimes: {
    ready: function() {

    },
    attached: function() {
      const _this = this
      
      if (_this.data.theme === 'custom') {
        _this.data.normaList.splice(9, 3)
        _this.data.normaList = [..._this.data.normaList, ..._this.data.customList]
        if (_this.data.extraKey[1]) {
          _this.data.normaList.splice(9, 0, { value: _this.data.extraKey[0], iconPath: '', name: _this.data.extraKey[0] })
          _this.data.normaList[_this.data.normaList.length - 1] = { value: _this.data.extraKey[1], iconPath: '', name: _this.data.extraKey[1] }
        }
      } else {
        _this.data.extraKey[0] &&
      (_this.data.normaList[9] = { value: _this.data.extraKey[0], iconPath: '', name: _this.data.extraKey[0] })
      }
      
      // 带右侧栏键盘
      // if (theme === 'custom') {

      // }
      const h = _this.queryMultipleNodes()
      const h1 = _this.queryMultipleNodes1()
      Promise.all([h, h1]).then(res => {
       const h = res.reduce((a, b) => a + b)
        _this.setData({
          height: h + 22,
          normaList: _this.data.normaList
        })
      })
    }
  },
  data: {
    height: 0,
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
      { value: 'enter', iconPath: './keyboard-icon.png', name: '' },
      { value: '0', iconPath: '', name: '0' },
      { value: 'delete', iconPath: './del-icon.png', name: '' },
    ],
    customList: [
      { value: '0', iconPath: '', name: '0' },
      { value: '.', iconPath: '', name: '.' }
    ],
    rightKeyboardList: [
      { value: 'delete', iconPath: './del-icon.png', name: '' },
      { value: 'enter', iconPath: '', name: '完成' },
    ],
    animationData: {}
  },
  methods: {
    show: function() {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      this.animation = animation
      this.animation.bottom(0).step()
      this.setData({
        animationData: this.animation.export()
      })
    },
    hide: function() {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      this.animation = animation
      this.animation.bottom(-this.data.height).step()
      this.setData({
        animationData: this.animation.export()
      })
    },
    queryMultipleNodes() {
      const _this = this
      const query = wx.createSelectorQuery().in(this)
      return new Promise((resolve, reject) => {
        query.select('#keyboard-header').boundingClientRect(function(res){
          resolve(res.height)
        }).exec()
      })
 
    },
    queryMultipleNodes1() {
      const _this = this
      const query = wx.createSelectorQuery().in(this)
      return new Promise((resolve, reject) => {
        query.select('#keyboard-body').boundingClientRect(function(res){
          resolve(res.height)
        }).exec()
      })
    },
    onClear: function() {
      this.setData({
        show: false,
      })
      this.hide()
    },
    onChangeKeyBoard: function(e) {
      let value = e.currentTarget.dataset.value
      switch(value) {
        case 'enter':
          this.onClear()
          this.triggerEvent('enter')
          break;
        case 'delete':
          this.triggerEvent('delete', value)
          break;
        default:
          this.triggerEvent('input', value)
          break;
      }
    }
  },
  observers: {
    'show': function(value) {
      if (value) {
       this.show()
      } else {
        // this.hide()
      }
    }
  }
})
