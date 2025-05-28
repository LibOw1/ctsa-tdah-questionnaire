const resultatsApp = Vue.createApp({
  data() {
    return {
      score: 0,
      test: '',
      titreTest: '',
      titreResultat: '',
      textResultat: '',
    };
  },

  created() {
    const dernierScore = parseInt(localStorage.getItem('dernierScore'));
    const dernierTest = localStorage.getItem('dernierTest');
    this.analyserRésultat();
  },

  methods: {
    analyserRésultat() {
      if (this.test.includes('test-ASRS')) {
        if (this.score < 24) {
          this.titreTest = 'Test ASRS';
          this.titreResultat = 'Risque faible de TDAH';
          this.textResultat = 'Votre résultat indique l\'absence ou des symptômes très faibles du trouble du TDAH. Il est peu probable que vous ayez ce trouble, mais si vous avez des l\'impression que des problèmes de concentration ou d\'attention affectent votre vie, il est recommandé de consulter un professionnel.';
        } else if (this.score < 48) {
          this.titreTest = 'Test ASRS';
          this.titreResultat = 'Risque modéré de TDAH';
          this.textResultat = 'Votre résultat peut indiquer la présence de certains symptômes du TDAH. Cela ne confirme pas un diagnostic, mais suggère la nécessité d\'une consultation supplémentaire avec un médecin pour clarifier le diagnostic.';
        } else if (this.score > 47) {
          this.titreTest = 'Test ASRS';
          this.titreResultat = 'Risque élevé de TDAH';
          this.textResultat = 'Votre résultat indique une forte probabilité de TDAH. Nous vous conseillons vivement de consulter un spécialiste pour un examen approfondi et un diagnostic précis.';
        }
      }
    }
  }
});

resultatsApp.mount('#resultats');
