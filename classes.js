class Message {

    constructor(id, content, date, topic_id, author_id) {
        this.id = id;
        this.content = content;
        this.date = date;
        this.topic_id = topic_id;
        this.author_id = author_id;
    }

    titreMessage() {
        var date = new Date(timestamp * 1000);
        var year    = date.getFullYear();
        var month   = date.getMonth();
        var day     = date.getDay();
        var hour    = date.getHours();
        var minute  = date.getMinutes();
        var seconds = date.getSeconds();
        return `Par ${this.author_id.username}, le ${day}/${month}/${year} à ${hour}:${minute}.`;
    }
    
}