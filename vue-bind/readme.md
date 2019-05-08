### realize vue bind

from :
http://www.cnblogs.com/canfoo/p/6891868.html

Object.defineProperty 数据劫持

Observer 监听 ，通知订阅者

watcher  订阅者

compile 解析器

###### reg.exec()
exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。

var reg = /ab*/g;

var a= 'abcd';

var b = reg.exec(a); // arr

Array.from('abc') => ['a','b','c']