const app = Vue.createApp({
  data() {
    return {
      questionActuelleIndex: 0,
			
			//** TEST ASRS **/
      questionsASRS: [
        {text: "1. Avez-vous des difficultés à finaliser les ultimes détails d’un projet une fois que le plus difficile a été fait?"},
        {text: "2. Avez-vous des difficultés à mettre les choses en ordre lorsque vous devez accomplir une tâche qui exige de l’organisation?"},
        {text: "3. Avez-vous tendance à oublier des rendez-vous ou d’autres obligations?"},
				{text: "4. Avez-vous tendance à éviter ou à retarder une tâche qui exige beaucoup de réflexion?"},
				{text: "5. Vous arrive-t-il d’avoir la bougeotte ou d’agiter vos mains ou vos pieds lorsque vous devez rester assis pendant un long moment?"},
				{text: "6. Vous arrive-t-il de vous sentir trop actif et irrésistiblement poussé à faire quelque chose, comme si vous étiez actionné par un moteur?"},
				{text: "7. Faites-vous des fautes d’inattention lorsque vous devez accomplir une tâche ennuyeuse et difficile?"},
				{text: "8. Avez-vous des difficultés à rester attentif lorsque vous faites un travail ennuyeux ou répétitif?"},
				{text: "9. Avez-vous des difficultés à vous concentrer sur ce que les gens vous disent, même lorsqu’ils s’adressent directement à vous?"},
				{text: "10. Vous arrive-t-il d’égarer ou d’avoir des difficultés à retrouver des objets à la maison ou au travail?"},
				{text: "11. Êtes-vous distrait par l’activité ou le bruit autour de vous?"},
				{text: "12. Vous arrive-t-il de quitter votre siège dans des réunions ou d’autres situations dans lesquelles vous êtes censé rester assis?"},
				{text: "13. Avez-vous la bougeotte ou vous sentez-vous agité?"},
				{text: "14. Avez-vous de la difficulté à vous détendre ou à vous relaxer lorsque vous avez du temps pour vous?"},
				{text: "15. Vous arrive-t-il d’être trop bavard(e) lorsque vous êtes en compagnie d’autres personnes?"},
				{text: "16. Dans la conversation, vous arrive-t-il de finir les phrases des autres avant qu’ils ne les terminent eux-mêmes?"},
				{text: "17. Avez-vous des difficultés à attendre votre tour dans une file d’attente?"},
				{text: "18. Vous arrive-t-il d’interrompre les autres lorsqu’ils sont occupés?"},
      ],



			//** TEST WENDER **/
      questionsWender: [
        {text: "1. J’avais du mal à me concentrer et j’étais facilement distrait."},
        {text: "2. J’étais souvent anxieux ou préoccupé."},
        {text: "3. J’étais nerveux ou agité."},
				{text: "4. J’étais inattentif, dans la lune."},
				{text: "5. J’étais impatient."},
				{text: "6. J’avais un tempérament explosif, j’étais colérique."},
				{text: "7. J’avais des difficultés à terminer les tâches que je commençais."},
				{text: "8. J’étais obstiné, très déterminé."},
				{text: "9. J’étais souvent triste, mélancolique ou déprimé."},
				{text: "10. J’étais désobéissant, rebelle ou insolent envers mes parents."},
				{text: "11. J’avais une faible estime de moi-même."},
				{text: "12. J’étais facilement irritable."},
				{text: "13. J’avais des sautes d’humeur fréquentes."},
				{text: "14. J’avais souvent des accès de rage."},
				{text: "15. J’agissais de façon impulsive, sans réfléchir."},
				{text: "16. J’étais immature pour mon âge."},
				{text: "17. Je ressentais souvent de la culpabilité ou des regrets."},
				{text: "18. Je perdais facilement le contrôle de moi-même."},
				{text: "19. Je pensais ou agissais de manière irrationnelle."},
				{text: "20. J’étais impopulaire et j’avais du mal à me faire ou garder des amis."},
				{text: "21. J’avais des difficultés à comprendre le point de vue des autres."},
				{text: "22. J’avais des problèmes avec l’autorité ou à l’école (conflits, visites chez le directeur)."},
				{text: "23. J’étais un élève faible, lent à apprendre."},
				{text: "24. J’avais des difficultés en mathématiques ou avec les chiffres."},
				{text: "25. Je n’exploitais pas pleinement mon potentiel à l’école."},
      ],



			//** TEST RCTQ **/
      questionsRCTQ: [
        {text: "1. J’ai trop de pensées en même temps."},
        {text: "2. Mes pensées vont à 200 à l’heure."},
        {text: "3. Mes pensées changent trop souvent ou trop vite de sujet."},
				{text: "4. J’ai une succession de pensées qui filent l’une derrière l’autre avec une incroyable facilité."},
				{text: "5. Chaque objet, chaque détail autour de moi fait surgir une nouvelle pensée."},
				{text: "6. Mon cerveau n’arrive pas à gérer toutes les pensées qui arrivent en même temps."},
				{text: "7. Je suis gêné(e) dans ma vie quotidienne par mes pensées nombreuses ou rapides."},
				{text: "8. Je n’arrive pas à stopper le mécanisme qui produit des flots de pensées dans ma tête."},
				{text: "9. Je n’ai pas le temps de saisir une pensée qu’une autre arrive déjà."},
				{text: "10. Rester concentré(e) au milieu de ce trop-plein de pensées est une lutte permanente."},
				{text: "11. Une pensée en induit instantanément une autre puis une autre, puis une autre..."},
				{text: "12. Mes pensées m’amènent sans arrêt très loin de mon point de départ."},
				{text: "13. Quand mes pensées s’emballent, je me déconnecte de ce qui se passe autour de moi."},
				{text: "14. Merci de mettre une croix, dans le tableau suivant, pour préciser la fréquence à laquelle vous aviez ce type de pensées (en trop grand nombre et/ou à trop grande vitesse) en fonction des moments de la journée: Matin"},
				{text: "15. Merci de mettre une croix, dans le tableau suivant, pour préciser la fréquence à laquelle vous aviez ce type de pensées (en trop grand nombre et/ou à trop grande vitesse) en fonction des moments de la journée: Après-midi"},
				{text: "16. Merci de mettre une croix, dans le tableau suivant, pour préciser la fréquence à laquelle vous aviez ce type de pensées (en trop grand nombre et/ou à trop grande vitesse) en fonction des moments de la journée: Soir"},
				{text: "17. Merci de mettre une croix, dans le tableau suivant, pour préciser la fréquence à laquelle vous aviez ce type de pensées (en trop grand nombre et/ou à trop grande vitesse) en fonction des moments de la journée: Coucher"},
      ],



			//** TEST UPPS **/
      questionsUPPS: [
        {text: "1. D’habitude je réfléchis soigneusement avant de faire quoi que ce soit."},
        {text: "2. Quand je suis vraiment enthousiaste, j’ai tendance à ne pas penser."},
        {text: "3. J’aime parfois faire des choses qui sont un petit peu effrayantes."},
				{text: "4. Quand je suis contrarié(e), j’agis souvent sans réfléchir."},
				{text: "5. Je préfère généralement mener les choses jusqu’au bout."},
				{text: "6. Ma manière de penser est d’habitude réfléchie et méticuleuse."},
				{text: "7. Quand la discussion s’échauffe, je dis souvent des choses que je regrette ensuite."},
				{text: "8. J’achève ce que je commence."},
				{text: "9. J’éprouve du plaisir à prendre des risques."},
				{text: "10. Quand je suis ravi(e), je ne peux pas m’empêcher de m’emballer."},
				{text: "11. Une fois que je commence un projet, je le termine presque toujours."},
				{text: "12. J’aggrave souvent les choses parce que j’agis sans réfléchir quand je suis contrarié(e)."},
				{text: "13. D’habitude je me décide après un raisonnement bien mûri."},
				{text: "14. Je recherche généralement des expériences et sensations nouvelles et excitantes."},
				{text: "15. Quand je suis vraiment enthousiaste, j'agis souvent sans réfléchir."},
				{text: "16. Je suis une personne productive qui termine toujours son travail."},
				{text: "17. Quand je me sens rejeté(e), je dis souvent des choses que je regrette par la suite."},
				{text: "18. Je me réjouis des expériences et sensations nouvelles même si elles sont un peu effrayantes et non-conformistes."},
				{text: "19. Avant de me décider, je considère tous les avantages et inconvénients."},
				{text: "20. Quand je suis très heureux/heureuse, j’ai l’impression qu’il est normal de céder à ses envies ou de se laisser aller à des excès."},
      ],



			//** TEST CTQ **/
      questionsCTQ: [
        {text: "1. Il m’est arrivé de ne pas avoir assez à manger."},
        {text: "2. Je savais qu’il y avait quelqu’un pour prendre soin de moi et me protéger."},
        {text: "3. Des membres de ma famille me disaient que j’étais «stupide», «paresseux» ou «laid»."},
				{text: "4. Mes parents étaient trop saouls ou « pétés » pour s’occuper de la famille."},
				{text: "5. Il y avait quelqu’un dans ma famille qui m’aidait à sentir que j’étais important ou particulier."},
				{text: "6. Je devais porter des vêtements sales."},
				{text: "7. Je me sentais aimé(e)."},
				{text: "8. Je pensais que mes parents n’avaient pas souhaité ma naissance."},
				{text: "9. J’ai été frappé(e) si fort par un membre de ma famille que j’ai dû consulter un docteur ou aller à l’hôpital."},
				{text: "10. Je n’aurais rien voulu changer à ma famille."},
				{text: "11. Un membre de ma famille m’a frappé(e) si fort que j’ai eu des bleus ou des marques."},
				{text: "12. J’étais puni(e) au moyen d’une ceinture, d’un bâton, d’une corde ou un autre objet dur."},
				{text: "13. Les membres de ma famille étaient attentifs les uns aux autres."},
				{text: "14. Des membres de ma famille me disaient des choses blessantes ou insultantes."},
				{text: "15. Je pense que j’ai été physiquement maltraité(e)."},
				{text: "16. J’ai eu une enfance parfaite."},
				{text: "17. J’ai été frappé(e) ou battu(e) si fort que quelqu’un l’a remarqué (par ex. un professeur, un voisin ou l’hôpital)."},
				{text: "18. J’avais le sentiment que quelqu’un dans ma famille me détestait."},
				{text: "19. Les membres de ma famille se sentaient proches les uns des autres."},
				{text: "20. Quelqu’un a essayé de me faire des attouchements sexuels ou de m’en faire faire."},
				{text: "21. Quelqu’un a menacé de me blesser ou de raconter des mensonges à mon sujet, si je ne faisais pas quelque chose de nature sexuelle avec lui."},
				{text: "22. J’avais la meilleure famille du monde."},
				{text: "23. Quelqu’un a essayé de me faire faire des actes sexuels ou de me faire regarder de tels actes."},
				{text: "24. J’ai été victime d’abus sexuels."},
				{text: "25. Je pense que j’ai été maltraité affectivement."},
				{text: "26. Il y avait quelqu’un pour m’emmener chez le docteur si j’en avais besoin."},
				{text: "27. Je pense qu’on a abusé de moi sexuellement."},
				{text: "28. Ma famille était source de force et de soutien."},
      ],
      questions: [],



			//** COMMENTAIRES **/
			commentaires: [],



			//** OPTIONS **/
      optionsASRS: ['Jamais', 'Rarement', 'Parfois', 'Souvent', 'Très souvent'],
			pointsASRS: [0, 1, 2, 3, 4],
      optionsWender: ['Pas du tout', 'Légèrement', 'Modérément', 'Beaucoup', 'Énormément'],
			pointsWender: [0, 1, 2, 3, 4],
      optionsRCTQ: ['0', '1', '2', '3', '4'],
			pointsRCTQ: [0, 1, 2, 3, 4],
      optionsUPPS: ['1', '2', '3', '4'],
			pointsUPPS: [1, 2, 3, 4],
      optionsCTQ: ['Jamais', 'Rarement', 'Quelquefois', 'Souvent', 'Très souvent'],
			pointsCTQ: [1, 2, 3, 4, 5],
			options: [],
			réponses: [],
			points: [],



			//** RESULTATS **/
      test: '',
      titreTest: '',
      titreResultat: '',
      textResultat: '',
    };
  },


	//***** COMPUTED *****//
	computed: {
		toutEstFini() {
			return this.réponses.every(réponse => réponse !== '')
		},
		progress() {
			const totalQuestions = this.questions.length;
			const questionsRépondues = this.réponses.filter(réponse => réponse !== '').length;
			return totalQuestions > 0 ? (questionsRépondues / totalQuestions) * 100 : 0;
		}
	},

	created() {
		const path = window.location.pathname;
		if (path.includes('test-ASRS.html')) {this.test = 'test-ASRS'; this.questions = this.questionsASRS; this.options = this.optionsASRS; this.points = this.pointsASRS;}
		else if (path.includes('test-Wender.html')) {this.test = 'test-Wender'; this.questions = this.questionsWender; this.options = this.optionsWender; this.points = this.pointsWender;}
		else if (path.includes('test-RCTQ.html')) {this.test = 'test-RCTQ'; this.questions = this.questionsRCTQ; this.options = this.optionsRCTQ; this.points = this.pointsRCTQ;}
		else if (path.includes('test-UPPS.html')) {this.test = 'test-UPPS'; this.questions = this.questionsUPPS; this.options = this.optionsUPPS; this.points = this.pointsUPPS;}
		else if (path.includes('test-CTQ.html')) {this.test = 'test-CTQ'; this.questions = this.questionsCTQ; this.options = this.optionsCTQ; this.points = this.pointsCTQ;}
		if (this.réponses = JSON.parse(localStorage.getItem('réponses_' + this.test))) {
			} else {
				this.réponses = Array(this.questions.length).fill('');}
		if (this.commentaires = JSON.parse(localStorage.getItem('commentaires_' + this.test))) {
			} else {
		this.commentaires = Array(this.questions.length).fill('');}
		if (path.includes('test-ASRS.html')) return this.test = 'test-ASRS';
		else if (path.includes('test-Wender.html')) return this.test = 'test-Wender';
		else if (path.includes('test-RCTQ.html')) return this.test = 'test-RCTQ';
		else if (path.includes('test-UPPS.html')) return this.test = 'test-UPPS';
		else if (path.includes('test-CTQ.html')) return this.test = 'test-CTQ';
	},


	//***** BOUTONS *****//
  methods: {
    retour() {
      if (this.questionActuelleIndex > 0) {this.questionActuelleIndex--;}
    },
    suivant() {
			if (this.réponses[this.questionActuelleIndex] === '') {
				alert('Veuillez répondre à la question actuelle avant de continuer.');
				return;
			}
			console.log('testSuivant:');
      if (this.questionActuelleIndex < this.questions.length - 1) {this.questionActuelleIndex++;}
    },
    terminer() {
  		var pointsRéponse = [];
  		for (var réponseIndex = 0; réponseIndex < this.réponses.length; réponseIndex++) {
  		  var index = this.options.indexOf(this.réponses[réponseIndex]);
  		  pointsRéponse.push(this.points[index]);
  		}
  		localStorage.setItem('test', this.test);
  		localStorage.setItem('questions_' + this.test, JSON.stringify(this.questions));
  		localStorage.setItem('réponses_' + this.test, JSON.stringify(this.réponses));
  		localStorage.setItem('commentaires_' + this.test, JSON.stringify(this.commentaires));
  		localStorage.setItem('points_' + this.test, JSON.stringify(pointsRéponse));
			window.location.href = 'test-resultats.html';
  	}
	}
});

app.mount('#app');