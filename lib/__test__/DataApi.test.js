import StateApi from '../state-api';
import {data} from '../testData';

const store = new StateApi(data)


describe("DataApi",()=>{
    it("exposess articles array into object",()=>{
            const articles = store.getState().articles;           
            const articleId = data.articles[0].id;
            const articleTitle = data.articles[0].title;

            expect(articles).toHaveProperty(articleId);
            expect(articles[articleId].title).toBe(articleTitle)
    });
    it("exposess author array into object",()=>{
        const authors = store.getState().authors;
        const authorId = data.authors[0].id;
        const authorFirstName = data.authors[0].firstname

        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstname).toBe(authorFirstName)
    });
})