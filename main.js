Vue.component('task', {
  template: '<li><slot></slot></li>',
  data() {
     return {
       message: 'Hi there!'
     }
  },
})

Vue.component('task-button', {
  template: '<button><slot></slot></button>',
})

new Vue({
  el: '#root',
})
