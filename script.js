const url = "wss://happy2022:WbTEMOUAZA34@mqtt.longan.link:8084/mqtt"
const client = mqtt.connect(url)  // create a client

client.on('connect', function () {
  console.log('已连接服务器')
})

function pub_callback(){
  console.log('已提交给服务器!')
  // 重定向页面， 定时器
  alert('提交中...')
  setTimeout(function(){window.location.href = "/success.html";},100);
}

function pub(message){
  let topic = '/guess-number'
  client.publish(topic, message, {}, pub_callback)
}

function submit(){
  console.log('submit!')
  let your_name = document.getElementById("your_name").value
  let your_number = parseInt(document.getElementById("your_number").value)
  if (your_name  && ( 0<=your_number && your_number<=100)){
    console.log(your_name,  your_number)
    pub(your_name + ' , ' + your_number)
  }
  else{
    alert('输入有误')
  }
  
}

