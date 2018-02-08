### 技术栈
1. 脚手架 create-react-app 全局安装
	
	> npm i create-react-app -g	

	> create-react-app projectName
	
	+ 弹出配置文件，可以自定义webpack配置
	
	> npm run eject

2. 使用redux
	+ 处理异步，调试工具、更优雅的和react结合
		+ Redux处理异步，需要redux-thunk插件
		
			> npm i redux-thunk -S
			
			> 使用applyMiddleware 开启thunk中间件
			
			> action可以返回函数，使用dispatch提交action
		
		+ npm i redux-devtools-extension 并且开启
		
			```
			const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}
			const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtools))
			
			```
			
		+ 使用react-redux优雅的链接react和redux
			
			> npm i react-redux -S
			
			> react-redux: 提供Provider和connect两个接口来链接
			
			+ Provider组件在应用最外层，传入store即可，只用一次
			+ Connect负责从外部获取组件需要的参数
			+ Connect 可以用装饰器的方式来写	