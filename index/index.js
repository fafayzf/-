Page({
  data: {
    show: false,
    value: ''
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