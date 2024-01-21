// function display(some){
//     document.querySelector("#root").innerHTML = some;
// }
// function total(a, b ,callback){
//     const result = a + b;
//     callback(result);
// }
// total(5, 20 ,function(some){
//     console.log(some);
// });

// const button = document.querySelector('#button');
// button.addEventListener('click',function(){
//     console.log('Button clicked');
// });

// console.log(1);
// setTimeout( () => {
//     console.log(2);
// },0);
// console.log(3);
// setTimeout( () => {
//     console.log(4);
// },0); 

//const url = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";
// function loadScript(src, callback){
//     //tạo thẻ srcipt
//  const script = document.createElement("script");
//     // nhúng thẻ script vào src
//  script.src = src;

//  script.onload = function (){
//     callback(script);
//  };
//  script.onerror = function(){
//     callback("lỗi rồi");
//  }
//  document.head.append(script);
// }
// loadScript(url , function(error, script){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(script);
//   }
// });



function loadScript(src, callback) {
    // Tạo thẻ script
    const script = document.createElement("script");
    // nhúng src vào thẻ script
    script.src = src;
    // script => <script src="xxx.js"></script>
    script.onload = function () {
        callback(null, script);
    };
    script.onerror = function () {
        callback("Lỗi rồi");
    };
    document.head.append(script);
}
loadScript("url");



