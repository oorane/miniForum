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