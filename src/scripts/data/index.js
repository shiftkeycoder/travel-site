import * as config from './config.json';

const db = {
	header: {
		title: config.header.title,
		link: config.header.link,
		pg1: {
			git: {
				ref: config.header.pg1.git.ref,
				text: config.header.pg1.git.text
			},
			node: {
				ref: config.header.pg1.node.ref,
				text: config.header.pg1.node.text
			},
			vscode: {
				ref: config.header.pg1.vscode.ref,
				text: config.header.pg1.vscode.text
			},
			auto: {
				ref: config.header.pg1.auto.ref,
				text: config.header.pg1.auto.text
			}

		}
	},
	hero: {
		title: config.hero.title,
		author: config.hero.author,
		about: config.hero.about,
		btn: config.hero.btn
	},
	nav: {
		alert: config.nav.alert
	},
	return: {
		text: config.return.text,
		icon: config.return.icon
	},
	article: {
		icon: config.article.icon
	},
	pg1: {
		header: config.pg1.header,
		ref: config.pg1.ref,
		id: config.pg1.id,
		topic: config.pg1.topic,
		asset1: {
			topic: config.pg1.asset1.topic,
			ref: config.pg1.asset1.ref,
			refText: config.pg1.asset1.refText,
			icon: config.pg1.asset1.icon
		},
		asset2: {
			topic: config.pg1.asset2.topic,
			ref: config.pg1.asset2.ref,
			refText: config.pg1.asset2.refText,
			icon: config.pg1.asset2.icon
		},
		asset3: {
			topic: config.pg1.asset3.topic,
			ref: config.pg1.asset3.ref,
			refText: config.pg1.asset3.refText,
			icon: config.pg1.asset3.icon
		},
		asset4: {
			topic: config.pg1.asset4.topic,
			tag: config.pg1.asset4.tag,
			webpack: {
				ref: config.pg1.asset4.webpack.ref,
				text: config.pg1.asset4.webpack.text
			},
			css: {
				ref: config.pg1.asset4.css.ref,
				text: config.pg1.asset4.css.text,
				focus: config.pg1.asset4.css.focus
			},
			js: {
				ref: config.pg1.asset4.js.ref,
				text: config.pg1.asset4.js.text,
			},
			vue: {
				ref: config.pg1.asset4.vue.ref,
				text: config.pg1.asset4.vue.text
			},
			icon: config.pg1.asset4.icon
		}
	},
	pg2: {
		header: config.pg2.header,
		topic: config.pg2.topic
	},
	pg3: {
		header: config.pg3.header,
		topic: config.pg3.topic
	},
	pg4: {
		header: config.pg4.header,
		topic: config.pg4.topic
	},
	footer: {
		brand: config.footer.brand,
		author: config.footer.author,
		year: config.footer.year
	}
}

export default db;
