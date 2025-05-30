const app = Vue.createApp({
  data() {
    return {
      questionActuelleIndex: 0,
			
			//** TEST ASRS **/
      questionsASRS: [
        {text: "Avez-vous des difficultés à finaliser les ultimes détails d’un projet une fois que le plus difficile a été fait?"},
        {text: "Avez-vous des difficultés à mettre les choses en ordre lorsque vous devez accomplir une tâche qui exige de l’organisation?"},
        {text: "Avez-vous tendance à oublier des rendez-vous ou d’autres obligations?"},
				{text: "Avez-vous tendance à éviter ou à retarder une tâche qui exige beaucoup de réflexion?"},
				{text: "Vous arrive-t-il d’avoir la bougeotte ou d’agiter vos mains ou vos pieds lorsque vous devez rester assis pendant un long moment?"},
				{text: "Vous arrive-t-il de vous sentir trop actif et irrésistiblement poussé à faire quelque chose, comme si vous étiez actionné par un moteur?"},
				{text: "Faites-vous des fautes d’inattention lorsque vous devez accomplir une tâche ennuyeuse et difficile?"},
				{text: "Avez-vous des difficultés à rester attentif lorsque vous faites un travail ennuyeux ou répétitif?"},
				{text: "Avez-vous des difficultés à vous concentrer sur ce que les gens vous disent, même lorsqu’ils s’adressent directement à vous?"},
				{text: "Vous arrive-t-il d’égarer ou d’avoir des difficultés à retrouver des objets à la maison ou au travail?"},
				{text: "Êtes-vous distrait par l’activité ou le bruit autour de vous?"},
				{text: "Vous arrive-t-il de quitter votre siège dans des réunions ou d’autres situations dans lesquelles vous êtes censé rester assis?"},
				{text: "Avez-vous la bougeotte ou vous sentez-vous agité?"},
				{text: "Avez-vous de la difficulté à vous détendre ou à vous relaxer lorsque vous avez du temps pour vous?"},
				{text: "Vous arrive-t-il d’être trop bavard(e) lorsque vous êtes en compagnie d’autres personnes?"},
				{text: "Dans la conversation, vous arrive-t-il de finir les phrases des autres avant qu’ils ne les terminent eux-mêmes?"},
				{text: "Avez-vous des difficultés à attendre votre tour dans une file d’attente?"},
				{text: "Vous arrive-t-il d’interrompre les autres lorsqu’ils sont occupés?"},
      ],



			//** TEST WENDER **/
      questionsWender: [
        {text: "J’avais du mal à me concentrer et j’étais facilement distrait."},
        {text: "J’étais souvent anxieux ou préoccupé."},
        {text: "J’étais nerveux ou agité."},
				{text: "J’étais inattentif, dans la lune."},
				{text: "J’étais impatient."},
				{text: "J’avais un tempérament explosif, j’étais colérique."},
				{text: "J’avais des difficultés à terminer les tâches que je commençais."},
				{text: "J’étais obstiné, très déterminé."},
				{text: "J’étais souvent triste, mélancolique ou déprimé."},
				{text: "J’étais désobéissant, rebelle ou insolent envers mes parents."},
				{text: "J’avais une faible estime de moi-même."},
				{text: "J’étais facilement irritable."},
				{text: "J’avais des sautes d’humeur fréquentes."},
				{text: "J’avais souvent des accès de rage."},
				{text: "J’agissais de façon impulsive, sans réfléchir."},
				{text: "J’étais immature pour mon âge."},
				{text: "Je ressentais souvent de la culpabilité ou des regrets."},
				{text: "Je perdais facilement le contrôle de moi-même."},
				{text: "Je pensais ou agissais de manière irrationnelle."},
				{text: "J’étais impopulaire et j’avais du mal à me faire ou garder des amis."},
				{text: "J’avais des difficultés à comprendre le point de vue des autres."},
				{text: "J’avais des problèmes avec l’autorité ou à l’école (conflits, visites chez le directeur)."},
				{text: "J’étais un élève faible, lent à apprendre."},
				{text: "J’avais des difficultés en mathématiques ou avec les chiffres."},
				{text: "Je n’exploitais pas pleinement mon potentiel à l’école."},
      ],



			//** TEST RCTQ **/
      questionsRCTQ: [
        {text: "J’ai trop de pensées en même temps."},
        {text: "Mes pensées vont à 200 à l’heure."},
        {text: "Mes pensées changent trop souvent ou trop vite de sujet."},
				{text: "J’ai une succession de pensées qui filent l’une derrière l’autre avec une incroyable facilité."},
				{text: "Chaque objet, chaque détail autour de moi fait surgir une nouvelle pensée."},
				{text: "Mon cerveau n’arrive pas à gérer toutes les pensées qui arrivent en même temps."},
				{text: "Je suis gêné(e) dans ma vie quotidienne par mes pensées nombreuses ou rapides."},
				{text: "Je n’arrive pas à stopper le mécanisme qui produit des flots de pensées dans ma tête."},
				{text: "Je n’ai pas le temps de saisir une pensée qu’une autre arrive déjà."},
				{text: "Rester concentré(e) au milieu de ce trop-plein de pensées est une lutte permanente."},
				{text: "Une pensée en induit instantanément une autre puis une autre, puis une autre..."},
				{text: "Mes pensées m’amènent sans arrêt très loin de mon point de départ."},
				{text: "Quand mes pensées s’emballent, je me déconnecte de ce qui se passe autour de moi."},
				{text: "Merci de mettre une croix, dans le tableau suivant, pour préciser la fréquence à laquelle vous aviez ce type de pensées (en trop grand nombre et/ou à trop grande vitesse) en fonction des moments de la journée: Matin"},
				{text: "Merci de mettre une croix, dans le tableau suivant, pour préciser la fréquence à laquelle vous aviez ce type de pensées (en trop grand nombre et/ou à trop grande vitesse) en fonction des moments de la journée: Après-midi"},
				{text: "Merci de mettre une croix, dans le tableau suivant, pour préciser la fréquence à laquelle vous aviez ce type de pensées (en trop grand nombre et/ou à trop grande vitesse) en fonction des moments de la journée: Soir"},
				{text: "Merci de mettre une croix, dans le tableau suivant, pour préciser la fréquence à laquelle vous aviez ce type de pensées (en trop grand nombre et/ou à trop grande vitesse) en fonction des moments de la journée: Coucher"},
      ],



			//** TEST UPPS **/
      questionsUPPS: [
        {text: "D’habitude je réfléchis soigneusement avant de faire quoi que ce soit."},
        {text: "Quand je suis vraiment enthousiaste, j’ai tendance à ne pas penser."},
        {text: "J’aime parfois faire des choses qui sont un petit peu effrayantes."},
				{text: "Quand je suis contrarié(e), j’agis souvent sans réfléchir."},
				{text: "Je préfère généralement mener les choses jusqu’au bout."},
				{text: "Ma manière de penser est d’habitude réfléchie et méticuleuse."},
				{text: "Quand la discussion s’échauffe, je dis souvent des choses que je regrette ensuite."},
				{text: "J’achève ce que je commence."},
				{text: "J’éprouve du plaisir à prendre des risques."},
				{text: "Quand je suis ravi(e), je ne peux pas m’empêcher de m’emballer."},
				{text: "Une fois que je commence un projet, je le termine presque toujours."},
				{text: "J’aggrave souvent les choses parce que j’agis sans réfléchir quand je suis contrarié(e)."},
				{text: "D’habitude je me décide après un raisonnement bien mûri."},
				{text: "Je recherche généralement des expériences et sensations nouvelles et excitantes."},
				{text: "Quand je suis vraiment enthousiaste, j'agis souvent sans réfléchir."},
				{text: "Je suis une personne productive qui termine toujours son travail."},
				{text: "Quand je me sens rejeté(e), je dis souvent des choses que je regrette par la suite."},
				{text: "Je me réjouis des expériences et sensations nouvelles même si elles sont un peu effrayantes et non-conformistes."},
				{text: "Avant de me décider, je considère tous les avantages et inconvénients."},
				{text: "Quand je suis très heureux/heureuse, j’ai l’impression qu’il est normal de céder à ses envies ou de se laisser aller à des excès."},
      ],



			//** TEST CTQ **/
      questionsCTQ: [
        {text: "Il m’est arrivé de ne pas avoir assez à manger."},
        {text: "Je savais qu’il y avait quelqu’un pour prendre soin de moi et me protéger."},
        {text: "Des membres de ma famille me disaient que j’étais «stupide», «paresseux» ou «laid»."},
				{text: "Mes parents étaient trop saouls ou « pétés » pour s’occuper de la famille."},
				{text: "Il y avait quelqu’un dans ma famille qui m’aidait à sentir que j’étais important ou particulier."},
				{text: "Je devais porter des vêtements sales."},
				{text: "Je me sentais aimé(e)."},
				{text: "Je pensais que mes parents n’avaient pas souhaité ma naissance."},
				{text: "J’ai été frappé(e) si fort par un membre de ma famille que j’ai dû consulter un docteur ou aller à l’hôpital."},
				{text: "Je n’aurais rien voulu changer à ma famille."},
				{text: "Un membre de ma famille m’a frappé(e) si fort que j’ai eu des bleus ou des marques."},
				{text: "J’étais puni(e) au moyen d’une ceinture, d’un bâton, d’une corde ou un autre objet dur."},
				{text: "Les membres de ma famille étaient attentifs les uns aux autres."},
				{text: "Des membres de ma famille me disaient des choses blessantes ou insultantes."},
				{text: "Je pense que j’ai été physiquement maltraité(e)."},
				{text: "J’ai eu une enfance parfaite."},
				{text: "J’ai été frappé(e) ou battu(e) si fort que quelqu’un l’a remarqué (par ex. un professeur, un voisin ou l’hôpital)."},
				{text: "J’avais le sentiment que quelqu’un dans ma famille me détestait."},
				{text: "Les membres de ma famille se sentaient proches les uns des autres."},
				{text: "Quelqu’un a essayé de me faire des attouchements sexuels ou de m’en faire faire."},
				{text: "Quelqu’un a menacé de me blesser ou de raconter des mensonges à mon sujet, si je ne faisais pas quelque chose de nature sexuelle avec lui."},
				{text: "J’avais la meilleure famille du monde."},
				{text: "Quelqu’un a essayé de me faire faire des actes sexuels ou de me faire regarder de tels actes."},
				{text: "J’ai été victime d’abus sexuels."},
				{text: "Je pense que j’ai été maltraité affectivement."},
				{text: "Il y avait quelqu’un pour m’emmener chez le docteur si j’en avais besoin."},
				{text: "Je pense qu’on a abusé de moi sexuellement."},
				{text: "Ma famille était source de force et de soutien."},
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
			pointsCTQ: [0, 1, 2, 3, 4],
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
		if (path.includes('test-ASRS.html')) {this.questions = this.questionsASRS; this.options = this.optionsASRS; this.points = this.pointsASRS;}
		else if (path.includes('test-Wender.html')) {this.questions = this.questionsWender; this.options = this.optionsWender; this.points = this.pointsWender;}
		else if (path.includes('test-RCTQ.html')) {this.questions = this.questionsRCTQ; this.options = this.optionsRCTQ; this.points = this.pointsRCTQ;}
		else if (path.includes('test-UPPS.html')) {this.questions = this.questionsUPPS; this.options = this.optionsUPPS; this.points = this.pointsUPPS;}
		else if (path.includes('test-CTQ.html')) {this.questions = this.questionsCTQ; this.options = this.optionsCTQ; this.points = this.pointsCTQ;}
		if (this.réponses = JSON.parse(localStorage.getItem('réponses'))) {
			} else {
				this.réponses = Array(this.questions.length).fill('');}
		if (this.commentaires = JSON.parse(localStorage.getItem('commentaires'))) {
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
    suivent() {
			if (this.réponses[this.questionActuelleIndex] === '') {
				alert('Veuillez répondre à la question actuelle avant de continuer.');
				return;
			}
			console.log('testSuivent:');
      if (this.questionActuelleIndex < this.questions.length - 1) {this.questionActuelleIndex++;}
    },
    terminer() {
  		var pointsRéponse = [];
  		for (var réponseIndex = 0; réponseIndex < this.réponses.length; réponseIndex++) {
  		  var index = this.options.indexOf(this.réponses[réponseIndex]);
  		  pointsRéponse.push(this.points[index]);
  		}
  		localStorage.setItem('test', this.test);
  		localStorage.setItem('questions', JSON.stringify(this.questions));
  		localStorage.setItem('réponses', JSON.stringify(this.réponses));
  		localStorage.setItem('commentaires', JSON.stringify(this.commentaires));
  		localStorage.setItem('points', JSON.stringify(pointsRéponse));
			window.location.href = 'test-resultats.html';
  	}
	}
});

app.mount('#app');