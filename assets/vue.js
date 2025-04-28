const app = Vue.createApp({
  data() {
    return {
      questionActuelleIndex: 0,
      questions: [
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
      options: ['Jamais', 'Rarement', 'Quelquefois', 'Souvent', 'Très souvent'],
    };
  },

	//***** BOUTONS *****//
  methods: {
    retour() {
      if (this.questionActuelleIndex > 0) {this.questionActuelleIndex--;}
    },
    suivent() {
      if (this.questionActuelleIndex < this.questions.length - 1) {this.questionActuelleIndex++;}
    }
  }
});

app.mount('#app');
