import { createApp } from 'vue'

const app = createApp({
	data() {
		return {
			questionActuelleIndex: 0,
			questions: [
				{text: "Il m’est arrivé de ne pas avoir assez à manger."},
				{text: "Je savais qu’il y avait quelqu’un pour prendre soin de moi et me protéger."},
				{text: "Des membres de ma famille me disaient que j’étais «stupide», «paresseux» ou «laid»."}
			],
		}
	}
})