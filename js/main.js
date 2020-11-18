const myApp = new Vue({
  el: '#root',
  data: {
    userInput:'',
    toDoes: [],
    isActive: true
  },
  methods: {
    addToDo: function() {
      this.toDoes.push(this.userInput);
      this.userInput = '';
    },
    removeItem: function(i) {
      this.toDoes.splice(i, 1);
    }
  }
});
