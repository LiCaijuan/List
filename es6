字符串遍历接口：Iterator
	使得字符串可以被for...of循环遍历
	for(let codePoint in 'foo'){
		console.log(codePoint);
	}//"f" "o" "o"
	
原始数据类型：Symbol 
	表示独一无二的值。是JavaScript的第七种数据类型

set 
	新的数据结构，类似于数组，成员的值无重复
	set.prototype.size: 返回Set实例的成员总数
	set.prototype.add(value)	添加某个值，返回Set结构本身
	set.prototype.delete(value)	删除某个值，返回一个布尔值，表示删除是否成功
	set.prototype.has(value)
	set.prototype.clear()	清除所有成员，无返回值
	Array.from	可以将set结构转为数组
	
Map
	类似于对象，也是键值对的集合，但是“键”的范围不限于字符串
	各种类型的值都可以当作键
	
Promise
	容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果
	语法上：Promise是一个对象，从它可以获取异步操作的消息。
	特点：
		1.对象的状态不受外界影响。
			Padding（进行中） fulfilled（已成功） rejected（已失败）
			有异步操作的结果，可以决定当前是哪一种状态
		2.一旦改变就不会再变
			改变原因：从padding到fulfilled 从padding到rejected
			resolved:已定型
	基本用法：
		const promise = new Promise(function(resolve, reject) {
			//...some code
			if(/*异步操作成功*/){
				resolve(value);
			}else{
				reject(error);
			}
		});
		
Generator
	es6提供的一种异步编程解决方案
	状态机，封装了多个内部状态。执行Generator函数会返回一个遍历器对象，
	也就是说，Generator函数除了状态机，还是一个遍历器对象生成函数。
	返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。
	形式：
		function* helloWorldGenerator() {
			yield 'hello';
			yield 'world';
			return 'ending';
		}
		var hw = helloWorldGenerator();
	特征：
		function关键字与函数名之间有一个*
		函数体内部使用yield表达式，定义不同的内部状态（yield 产出）
	用法：遍历器的next方法	
		返回一个对象（value done）

Module的语法：
	模块体系
	es6模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令引入
	编译时加载，使得静态分析成为可能
	es6模块中，顶层this指向undefined，即不应该在顶层代码中使用this
	export default
		为模块指定默认输出
		import后面不需要{}

用法：
	数组：
		使用扩展运算符(...)拷贝数组
			eg: const itemsCopy=[...items];
		使用Array.from方法，将类似数组的对象转为数组
	函数：
		立即执行函数写成箭头函数的形式
		使用匿名函数当参数的场合，用箭头函数代替
	vue 路由传参 params 与 query两种方式的区别 
		query要用path来引入，params要用name来引入
		query在浏览器地址栏中显示参数，params则不显示
	