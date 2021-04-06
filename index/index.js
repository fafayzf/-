Page({
  data: {
    show: false,
    value: '',
    icon: '/components/keyboard/imgs/case-icon.png'
  },
  onLoad: function () {
   
  },
  onChangeKeyBoard1: function() {
    this.setData({
      show1: true,
    })
    
  },
  onChangeKeyBoard2: function() {
    this.setData({
      show2: true,
    })
  },
  onChangeKeyBoard3: function() {
    this.setData({
      show3: true
    })
  },
  onChangeKeyBoard4: function() {
    this.setData({
      show4: true
    })
  },
  onChangeKeyBoard5: function() {
    this.setData({
      show5: true
    })
  },
  onChangeKeyBoard6: function() {
    this.setData({
      show6: true
    })
  },
  onChangeKeyBoard7: function() {
    this.setData({
      show7: true
    })
  },
  onChangeKeyBoard8: function() {
    this.setData({
      show8: true
    })
  },
  onChangeKeyBoard9: function() {
    this.setData({
      show9: true
    })
  },
  onChangeKeyBoard10: function() {
    this.setData({
      show10: true
    })
  },
  changeInput: function(e) {
    const val = e.detail
    wx.showToast({
      title: val,
      icon: 'none'
    })
  },
  changeDetete: function(e) {
    const val = e.detail
    wx.showToast({
      title: val,
      icon: 'none'
    })
  }
});