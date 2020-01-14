//rgb
//生成一个随机数
function randomInt() {
    return Math.floor(Math.random()*num);
}
function rgbRandom() {
    var r=randomInt();
    var g=randomInt();
    var b=randomInt();
    return "rgb("+r+","+g+","+b+")";
}
var rgb=rgbRandom();
document.write(rgb);