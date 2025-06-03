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
          let zoneCritique = 0;
          for (let index = 0; index < this.réponses.length; index++) {
            let score = this.points[index];
            if ((index < 3 && score >= 3) || (index > 2 && score >= 2)) {
              zoneCritique++;
            }
          }
          if (zoneCritique >= 4) {
            this.titreResultat = 'Suspicion de TDAH (dépistage positif)';
            this.textResultat = 'Au moins 4 réponses dans la zone critique sur les 6 premières questions. Il est conseillé de consulter un spécialiste.';
          } else {
            this.titreResultat = 'Dépistage négatif';
            this.textResultat = 'Moins de 4 réponses dans la zone critique sur les 6 premières questions. Il est peu probable que vous ayez le TDAH, mais si vous ressentez des difficultés, il est recommandé de consulter un professionnel.';
          }
      }


      //** TEST WENDER **//
      else if (this.test.includes('test-Wender')) {
        this.titreTest = 'Échelle de Wender-Utah';
        if (this.pointsTotal < 35) {
          this.titreResultat = 'Risque faible de TDAH';
          this.textResultat = 'Votre résultat indique l\'absence ou des symptômes très faibles du trouble du TDAH. Il est peu probable que vous ayez ce trouble, mais si vous avez des l\'impression que des problèmes de concentration ou d\'attention affectent votre vie, il est recommandé de consulter un professionnel.';
        } else if (this.pointsTotal < 46) {
          this.titreResultat = 'Risque modéré de TDAH';
          this.textResultat = 'Votre résultat peut indiquer la présence de certains symptômes du TDAH. Cela ne confirme pas un diagnostic, mais suggère la nécessité d\'une consultation supplémentaire avec un médecin pour clarifier le diagnostic.';
        } else if (this.pointsTotal > 45) {
          this.titreResultat = 'Risque élevé de TDAH';
          this.textResultat = 'Votre résultat indique une forte probabilité de TDAH. Nous vous conseillons vivement de consulter un spécialiste pour un examen approfondi et un diagnostic précis.';
        }
      }


      //** TEST RCTQ **//
      else if (this.test.includes('test-RCTQ')) {
        this.titreTest = 'Test RCTQ-13';
        this.titreResultat = 'Résultat à interpréter cliniquement';
        this.textResultat = 'Le score obtenu à ce test ne permet pas, à lui seul, de poser un diagnostic. Il doit être interprété dans le cadre d’une évaluation clinique globale par un professionnel de santé. Si vous vous sentez concerné(e) par une activité mentale rapide ou envahissante, parlez-en à un spécialiste.';
      }
      
      
      //** TEST UPPS **//
      else if (this.test.includes('test-UPPS')) {
        if (this.pointsTotal < 24) {
          this.titreTest = 'Test UPPS';
          this.titreResultat = 'Risque faible d\'impulsivité';
          this.textResultat = 'Votre résultat indique l\'absence ou des symptômes très faibles d\'impulsivité. Il est peu probable que vous ayez ce trouble, mais si vous avez des l\'impression que des problèmes de contrôle des impulsions affectent votre vie, il est recommandé de consulter un professionnel.';
        } else if (this.pointsTotal < 48) {
          this.titreTest = 'Test UPPS';
          this.titreResultat = 'Risque modéré d\'impulsivité';
          this.textResultat = 'Votre résultat peut indiquer la présence de certains symptômes d\'impulsivité. Cela ne confirme pas un diagnostic, mais suggère la nécessité d\'une consultation supplémentaire avec un médecin pour clarifier le diagnostic.';
        } else if (this.pointsTotal > 47) {
          this.titreTest = 'Test UPPS';
          this.titreResultat = 'Risque élevé d\'impulsivité';
          this.textResultat = 'Votre résultat indique une forte probabilité d\'impulsivité. Nous vous conseillons vivement de consulter un spécialiste pour un examen approfondi et un diagnostic précis.';
        }
      }


      //** TEST CTQ **//
      else if (this.test.includes('test-CTQ')) {
        if (this.pointsTotal < 24) {
          this.titreTest = 'Test CTQ';
          this.titreResultat = 'Risque faible de traumatisme émotionnel';
          this.textResultat = 'Votre résultat indique l\'absence ou des symptômes très faibles de traumatisme émotionnel. Il est peu probable que vous ayez subi un traumatisme émotionnel significatif, mais si vous ressentez des effets persistants, il est recommandé de consulter un professionnel.';
        } else if (this.pointsTotal < 48) {
          this.titreTest = 'Test CTQ';
          this.titreResultat = 'Risque modéré de traumatisme émotionnel';
          this.textResultat = 'Votre résultat peut indiquer la présence de certains symptômes liés à un traumatisme émotionnel. Cela ne confirme pas un diagnostic, mais suggère la nécessité d\'une consultation supplémentaire avec un médecin pour clarifier le diagnostic.';
        } else if (this.pointsTotal > 47) {
          this.titreTest = 'Test CTQ';
          this.titreResultat = 'Risque élevé de traumatisme émotionnel';
          this.textResultat = 'Votre résultat indique une forte probabilité de traumatisme émotionnel. Nous vous conseillons vivement de consulter un spécialiste pour un examen approfondi et un diagnostic précis.';
        }
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
      let message = JSON.stringify(data, null, 2);
      alert(message);
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
