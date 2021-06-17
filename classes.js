

class Message {

    constructor(id, content, date, topic_id, author_id) {
        this.id = id;
        this.content = content;
        this.date = date;
        this.topic_id = topic_id;
        this.author_id = author_id;
    }

    titreMessage() {
        var newDate = new Date(date * 1000);
        var year    = newDate.getFullYear();
        var month   = newDate.getMonth();
        var day     = newDate.getDay();
        var hour    = newDate.getHours();
        var minute  = newDate.getMinutes();
        return `Par ${this.author_id.username}, le ${day}/${month}/${year} à ${hour}:${minute}.`;
    }
}

class User {



	constructor(id, username, password, admin){
		this.id= id;
		this.username= username;
		this.password= password;
		this.admin= admin;
	}
}


export class Sujet {

    constructor(id, title, date, author_id) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.author_id = author_id;
    };

    displaySujet() {
        console.log(`Topic n° ${id}: ${title} crée le ${date} par ${author_id.username}.`);
    };

    infoSujet() {

        let newDate = new Date(this.date * 1000);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        return  `Posté le ${day}/${month}/${year} à ${hour}:${minute} par ${this.author_id.username}`;

    }

}