import moment from 'moment';

export default[
{

	subject: "how did we do",
	content: ` Hello `,
	isImportant: true,
	isDeleted: false,
	isRead: false,
	type:'incoming',
	//date: moment().subtract(10,minutes),
	from: {
		name : 'hoangson',
		email: 'vihoangson@gmail.com'
	},
	attachment:[]
},
{

	subject: "how did we do3",
	content: ` Hello `,
	isImportant: true,
	isDeleted: true,
	isRead: false,
	type:'incoming',
	//date: moment().subtract(10,minutes),
	from: {
		name : 'hoangson',
		email: 'vihoangson@gmail.com'
	},
	attachment:[]
},
{

	subject: "how did we do4",
	content: ` Hello `,
	isImportant: true,
	isDeleted: false,
	isRead: true,
	type:'incoming',
	//date: moment().subtract(10,minutes),
	from: {
		name : 'hoangson',
		email: 'vihoangson@gmail.com'
	},
	attachment:[]
},
{

	subject: "how did we d4",
	content: ` Hello `,
	isImportant: false,
	isDeleted: false,
	isRead: false,
	type:'incoming',
	//date: moment().subtract(10,minutes),
	from: {
		name : 'hoangson',
		email: 'vihoangson@gmail.com'
	},
	attachment:[]
}
];