//height를 0px로 만들어 둔다.
//height가 0px일 경우 안에 컨텐츠 크기만큼 height를 늘려준다.
//height가 0px이 아닐 경우 height를 0px로 만들어준다.

let openhelpitem = (e) =>{
    if(e.nextElementSibling.style.height==''||e.nextElementSibling.style.height=='0px'){
      e.nextElementSibling.style.height=e.nextElementSibling.scrollHeight;
    }else{
      e.nextElementSibling.style.height='0px';
    }
    
  }