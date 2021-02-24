var one = 'myday030902';
var two = 'admin';
var tree = 'huangruqing';

var userName01 = 'UserOs'
var userName02 = 'Administrator'
var userName03 = 'Guest'
function boxText() {
    var i = document.getElementById("Text");
    var x = document.getElementById("content");
    var b = document.getElementById("User");
    console.log(b.value)
    if (b.value == "立即登录") {
        var j = prompt('请输入管理员登录密码');
    if (j == one) {
        i.innerText = '欢迎您！尊敬的会员：' + userName02;
        x.style.display = "block"
        b.value = "立即注销";
    }else {
        if (j == two) {
            i.innerText = '欢迎您！尊敬的会员：' + userName03;
            x.style.display = "block"
            b.value = "立即注销";
        }else {
            if (j == tree) {
                i.innerText = '欢迎您！尊敬的会员：' + userName01;
                x.style.display = "block"
                b.value = "立即注销";
            }else {
                alert('登录错误');
            }
        }
        
    }
    }else {
        x.style.display = "none"
        i.innerText = "";
        b.value = "立即登录";
    }
    
    
}
