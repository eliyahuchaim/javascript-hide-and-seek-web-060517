function getFirstSelector(selector){
  return document.querySelector(selector)
};


function nestedTarget(){
  return document.getElementById('nested').getElementsByClassName('target')[0]
};


function deepestChild(){
  return document.querySelectorAll('#grand-node div')[document.querySelectorAll('#grand-node div').length -1]
};

function increaseRankBy(n){
  let lists = document.querySelectorAll('.ranked-list li')

    for (let i = 0; i < lists.length; i++){
  	   let int = parseInt(lists[i].innerHTML)
          int += n
          lists[i].innerHTML = int.toString()
  }
}
