|参数名            |值            |类型            |是否必填      |注释|
|------           |-----:        |-----:          |-----:       |:-----:|
|show	            |false         |Boolean	        |是           |是否显示键盘	
|title	          |''            |String          |否           |键盘标题
|theme	          |''            |String          |否           |样式风格，可选值为 custom	string	default
|themeColor       |#F08437       |String          |否           |主题颜色
|modal            |true          |Boolean         |否           |是否点击蒙层关闭键盘
|z-index	   	    |1             |Number，String  |否           |键盘 z-index 层级
|extra-key		    |''            |String, string[] |否          |底部额外按键的内容
|close-button-text|''        		 |string          |否           |关闭按钮文字，空则不展示

|方法                       |返回值                     |注释|
|-----                     |-----:                     |:-----:|
input		                   |key: 按键内容               |点击按键时触发
delete	                   |                           |点击删除键时触发
enter                      |                           |点击完成