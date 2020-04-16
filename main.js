Vue.component('message', {
  props: ['title', 'body'],
  data() {
    return {
      isVisible: true,
    }
  },
  template: `
    <article v-show="isVisible" class="message">
      <div class="message-header">
        {{ title }}

        <button @click="isVisible = false" class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        {{ body }}
      </div>
    </article>
  `,
})
new Vue({
  el: '#root',
})
