function joke() {
    var randomJoke=new Array();
    randomJoke[0]='有人说情人节不送女朋友一束花，让她拿什么发朋友圈？\n' +
        '问了下老公，本以为会甩我一沓毛爷爷或者弄个小惊喜，结果他说：别着急，我去给你盗图去，能给你凑个九宫格';
    randomJoke[1]='看3D电影，旁边一个女孩拿手机拍照：奇怪，拍出来咋这么模糊的？\n' +
        '她男朋友：你是不是傻？你把3D眼镜给你手机戴上不就行了？';
    randomJoke[2]='上次和朋友出去喝酒，我说我没醉。\n' +
        '朋友说：那你走个直线来看看？\n' +
        '我走了。\n' +
        '他说：喝醉的人才会这么听话。';
    randomJoke[3]='火车上如何礼貌拒绝换座位\n' +
        '女：换个坐呗？\n' +
        '我：怎么了？？？\n' +
        '女：我想跟我男朋友坐一块买票的时候没调好座位\n' +
        '我：可我也想跟你男朋友坐一块。';
    randomJoke[4]='我在一家精神病院做义工。那天从医院出来，坐上回家的公交，车上太挤不小心踩一妹子的脚了，我忙说抱歉抱歉。\n' +
        '妹子不依不饶：你TM有病吧？\n' +
        '我也火了：你TM才有病呢！\n' +
        '妹子猖狂啊：我看你就是从精神病院里出来的！\n' +
        '我脑子一懵：你居然跟踪我？？？';
    randomJoke[5]='听到两个女同事聊天：“我好怕老啊。”\n' +
        '“等你真的老了，就不怕老了。”\n' +
        '“因为那时淡定了吗？”\n' +
        '“不，因为你那时就变成怕死了。”';
    var number = Math.floor(Math.random()*randomJoke.length);
    document.write(randomJoke[number]);
    alert(randomJoke[number]);
}