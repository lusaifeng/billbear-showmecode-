import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.filter('time', function(value){
  var date = new Date(value)

  return (date.getMonth() + 1) + '月'
   + date.getDate() + '日 '
   + date.getHours() + ':'
   + date.getMinutes()
});

Vue.filter('len',function (value,num) {
  var desHtml = value.replace(/<\/?.+?>/g,"")
  var des = desHtml.substring(0,num)
  return des + '…'
});

Vue.filter('img', function (value) {
  var imgUrl = value.match(/<img.*?src="(.+?)".*?(?:>|\/>)/i)
  if(imgUrl && imgUrl.length > 1) {
    return imgUrl[1]
  } else {
    return "http://cn.vuejs.org/images/logo.png"
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
