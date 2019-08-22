function mOver(num,obj) {
    // document.getElementById(obj).innerHTML = infoAry[num];
    document.getElementById(obj).style.visibility = "visible";
}

function mOut(obj) {
    document.getElementById(obj).style.visibility = "hidden";
}


function chebg(chkID){
  Myid=document.getElementById(chkID);
  if(Myid.checked == true){
  Myid.parentNode.parentNode.style.backgroundColor = '#C6E5FF';
} else {
  Myid.parentNode.parentNode.style.backgroundColor = '#ffffff';
}
}




document.addEventListener('DOMContentLoaded', function(){
    // タブに対してクリックイベントを適用
    let tabs = document.getElementsByClassName('tab_item');
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }

    function tabSwitch(){
        // タブのclassの値を変更
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        // コンテンツのclassの値を変更
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        tabs = Array.prototype.slice.call(tabs);
        const index = tabs.indexOf(this);
        document.getElementsByClassName('tab_content')[index].classList.add('is-show');
    };
});
