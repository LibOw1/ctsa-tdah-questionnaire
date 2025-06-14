const resultatsApp = Vue.createApp({
  data() {
    let test = localStorage.getItem('test') || '';
    return {
      test: localStorage.getItem('test') || '',
      questions: JSON.parse(localStorage.getItem('questions_' + test)) || [],
      réponses: JSON.parse(localStorage.getItem('réponses_' + test)) || [],
      commentaires: JSON.parse(localStorage.getItem('commentaires_' + test)) || [],
      points: JSON.parse(localStorage.getItem('points_' + test)) || [],
      titreTest: '',
      titreResultat: '',
      textResultat: ''
  };
},

  computed: {
  pointsTotal() {
    let sum = 0;
    for (let index = 0; index < this.points.length; index++) {
      sum += this.points[index];
    }
    return sum;
  }
},


  created() {
    this.vérifierRésultat();
  },

  methods: {
    vérifierRésultat() {
      //** TEST ASRS **//
      if (this.test.includes('test-ASRS')) {
          this.titreTest = 'Test ASRS';
      }
      else if (this.test.includes('test-Wender')) {
        this.titreTest = 'Échelle de Wender-Utah';
      }
      else if (this.test.includes('test-RCTQ')) {
        this.titreTest = 'Test RCTQ-13';
      }
      else if (this.test.includes('test-UPPS')) {
          this.titreTest = 'Test UPPS';
      }
      else if (this.test.includes('test-CTQ')) {
          this.titreTest = 'Test CTQ';
      }
    },
    envoyerResultats() {
      let data = {
        titreTest: this.titreTest,
        titreResultat: this.titreResultat,
        textResultat: this.textResultat,
        test: this.test,
        questions: this.questions,
        réponses: this.réponses,
        commentaires: this.commentaires,
        points: this.points,
      };
      let message = this.titreTest + '\n\n';
      for (let i = 0; i < this.questions.length; i++) {
        message += this.questions[i].text + '\n';
        message += 'Réponse: ' + this.réponses[i] + ' — Points: ' + this.points[i] + '\n';
        message += 'Commentaire: ' + (this.commentaires[i] ? this.commentaires[i] : '—') + '\n\n';
      }
      alert(
        message
      );
    },
    corrigerRéponses() {
      if (this.test === 'test-ASRS') {
        window.location.href = 'test-ASRS.html';
      } else if (this.test === 'test-Wender') {
        window.location.href = 'test-Wender.html';
      } else if (this.test === 'test-RCTQ') {
        window.location.href = 'test-RCTQ.html';
      } else if (this.test === 'test-UPPS') {
        window.location.href = 'test-UPPS.html';
      } else if (this.test === 'test-CTQ') {
        window.location.href = 'test-CTQ.html';
      };
    },
    testSuivant() {
      if (this.test === 'test-ASRS') {
        window.location.href = 'test-Wender.html';
      } else if (this.test === 'test-Wender') {
        window.location.href = 'test-RCTQ.html';
      } else if (this.test === 'test-RCTQ') {
        window.location.href = 'test-UPPS.html';
      } else if (this.test === 'test-UPPS') {
        window.location.href = 'test-CTQ.html';
      } else if (this.test === 'test-CTQ') {
        window.location.href = 'test-ASRS.html';
      };
    }
  }
});

resultatsApp.mount('#resultats');
