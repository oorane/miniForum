class Topic {

    constructor(id, title, date, author_id){
        this.id=id;
        this.title = title;
        this.date = date;
        this.author_id=author_id;
    };

    displayTopic(){
        console.log(`Topic n° ${id}: ${title} crée le ${date} par ${author_id}.`);
    }; 
    
}