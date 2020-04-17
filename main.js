window.Event = new class {
  constructor() {
    this.vue = new Vue()
  }

  fire(event, data = null) {
    this.vue.$emit(event, data)
  }

  listen(event, callback) {
    this.vue.$on(event, callback)
  }
}

// Alternative:
// window.Event = new Vue()

Vue.component('coupon', {
  template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      Event.fire('applied')

      // Alternative:
      // Event.$emit('applied')
    },
  }
})

new Vue({
  el: '#root',
  data: {
    couponApplied: false,
  },
  created() {
    Event.listen('applied', () => alert('Handling it!'))

    // Alternative:
    // Event.$on('applied', () => alert('Handling it!'))
  },
})
