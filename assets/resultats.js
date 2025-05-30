const resultatsApp = Vue.createApp({
  data() {
    return {
      test: localStorage.getItem('test') || '',
      questions: JSON.parse(localStorage.getItem('questions')) || [],
      réponses: JSON.parse(localStorage.getItem('réponses')) || [],
      commentaires: JSON.parse(localStorage.getItem('commentaires')) || [],
      points: JSON.parse(localStorage.getItem('points')) || [],
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
      if (this.test.includes('test-ASRS')) {
        if (this.pointsTotal < 24) {
          this.titreTest = 'Test ASRS';
          this.titreResultat = 'Risque faible de TDAH';
          this.textResultat = 'Votre résultat indique l\'absence ou des symptômes très faibles du trouble du TDAH. Il est peu probable que vous ayez ce trouble, mais si vous avez des l\'impression que des problèmes de concentration ou d\'attention affectent votre vie, il est recommandé de consulter un professionnel.';
        } else if (this.pointsTotal < 48) {
          this.titreTest = 'Test ASRS';
          this.titreResultat = 'Risque modéré de TDAH';
          this.textResultat = 'Votre résultat peut indiquer la présence de certains symptômes du TDAH. Cela ne confirme pas un diagnostic, mais suggère la nécessité d\'une consultation supplémentaire avec un médecin pour clarifier le diagnostic.';
        } else if (this.pointsTotal > 47) {
          this.titreTest = 'Test ASRS';
          this.titreResultat = 'Risque élevé de TDAH';
          this.textResultat = 'Votre résultat indique une forte probabilité de TDAH. Nous vous conseillons vivement de consulter un spécialiste pour un examen approfondi et un diagnostic précis.';
        }
      }
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
    }
  }
});

resultatsApp.mount('#resultats');
