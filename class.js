let log = function() {
    console.log.apply(console, arguments);
}


// 类

// 语法

// 定义类: 使用 class 关键字

class Point {
    bar() {
        log("hello, this is bar");
    }
}

// class 不存在变量提升

// 以下代码报错
/*
new Cat;
class Cat {
  //
}
*/

// 类表达式




//使用类: 使用 new 关键字
// 不使用类直接采用将报错
let point1 = new Point();
point1.bar();
// "hello, this is bar"


// 类与构造函数
// 类的类型是函数
log("typeof Point: ", typeof Point);
// function

// 类本身指向构造函数
log("Point.prototype.constructor is Point ", Point.prototype.constructor === Point);
// true

// 类的原型
// 类的 prototype 属性指向类的原型
// 类的所有方法定义在 prototype 上
log("Point.prototype.bar: ", Point.prototype.bar === point1.bar);

//

// 定义类方法时不需要 function 关键字， 方法之间也不需要逗号
// 类方法中的 this 表示实例对象


// constructor 方法
// 使用 new 生成实例时，自动调用该方法
// 如果省略该方法，将自动添加空的constructor
// constructor 默认返回实例对象， 即this

// 类的实例
// 实例的属性
// 除了直接定义在 实例 即 this 上的属性， 其他属性定义在原型上；

class Dog {
    constructor(h, w) {
        this.height = h;
        this.weight = w;
    }

    bark() {
        console.log("汪");
    }
}

let pug = new Dog(50, 20);

log ( pug.hasOwnProperty("height") );
// true
log( pug.hasOwnProperty("bark") );
// false
log( pug.__proto__.hasOwnProperty("bark") );

// 私有方法