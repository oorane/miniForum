class Sujet {

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

        var newDate = new Date(date * 1000);
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDay();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var seconds = date.getSeconds();
        return  `Posté le ${newDate.day}/${newDate.month}/${newDate.year} à ${newDate.hour}:${newDate.minute} par ${this.author_id.username}`;

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
