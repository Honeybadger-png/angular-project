export class Root{
    status : string;
    totalResults: number;
    news:News;
    constructor(status:string,totalResults:number,news:News){
        this.status=status;
        this.totalResults = totalResults;
        this.news = news;
    }
}

export class News{
    source : Source;
    author:string;
    title:string;
    description:any;
    url:string;
    urlToImage:any;
    publishedAt:string;
    content:any;

    constructor(
        source:Source,author:string,title:string,description:any,url:string,
        urlToImage:any,
        publishedAt:string,
        content:any
    ){
        this.source = source;
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.content = content;
    }
}

export class Source {
    id:string;
    name:string;
    constructor(id:string,name:string){
        this.id=id;
        this.name=name;
    }
}