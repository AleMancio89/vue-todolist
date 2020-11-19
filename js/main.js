/*
Creare una web app con Vue che permetta ad un utente di:
- Inserire un elemento nella lista
- Rimuovere un elemento dalla lista
- Al click di un elemento presente nella lista, cambiare il colore dello sfondo di quell'elemento. Se l'utente clicca nuovamente sullo stesso elemento, riportare il colore a quello che avete scelto di default.
*/

const myApp = new Vue({
  el: '#root',
  data: {
    userInput:'',
    toDos: []
  },
  methods: {
    addToDo: function() {
      // Aggiungo all'array oggetti contenenti l'input dell'utente e lo stato iniziale per l'highlight
      this.toDos.push({
        text: this.userInput,
        active: false
      });
      //Ripulisco il campo dell'input dopo aver salvato il valore nell'array
      this.userInput = '';
    },
    removeItem: function(i) {
      //Rimuovo dall'array l'oggetto che desidero
      this.toDos.splice(i, 1);
    },
    highlightItem: function(index){
      //Vario lo stato del campo active dell'array
      this.toDos[index].active = !(this.toDos[index].active)
    }
  }
});
