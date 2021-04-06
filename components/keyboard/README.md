|参数名            |值            |类型            |是否必填      |注释|
|------           |-----:        |-----:          |-----:       |:-----:|
|show	            |false         |Boolean	        |是           |是否显示键盘	
|title	          |''            |String          |否           |键盘标题
|theme	          |''            |String          |否           |样式风格，可选值为 custom	string	default
|themeColor       |#F08437       |String          |否           |主题颜色
|normalType       |'number'      |string          |否           |键盘属性， 可选值为 number（数字） letter（字母） symbol（符号）
|extra-key		    |''            |String, string[] |否          |底部额外按键的内容，例如['abc'] ,['abc', '.']
|isRandomNumber   |false         |Boolean         |否           |是否开启数字随机排序
|isRandomLetter   |false         |Boolean         |否           |是否开启字母随机排序
|modal            |true          |Boolean         |否           |开启蒙层
|z-index	   	    |1             |Number，String  |否           |键盘 z-index 层级
|close-button-text|''        		 |string          |否           |关闭按钮文字，空则不展示
|icon             | ''           |string          |否           |标题资源图标，本地或远程图片链接

|方法                       |返回值                     |注释|
|-----                     |-----:                     |:-----:|
input		                   |key: 按键内容               |点击按键时触发
delete	                   |                           |点击删除键时触发
enter                      |                           |点击完成