### https://github.com/Jackson-p/Jackson-p.github.io/issues/20
### https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html
solution 1

meta
initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
maximum-scale：允许用户缩放到的最大比例。
minimum-scale：允许用户缩放到的最小比例。
user-scalable：用户是否可以手动缩放

solution 2

rem vm vh

em是指当前字体大小占父元素的百分比，比如父元素是16px，子元素0.75em就是12px
vw(view-width),表示视区宽度，总宽度为100vw
vh(view-height),表示视区高度，总高度为100vh
rem是CSS3新增的一个相对单位，与em相同的仍是相对大小

solution 3 

flex

css3 midal

js is pc and phone

if(Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    is phone
}else {
    is pc
}