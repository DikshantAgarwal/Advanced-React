import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

describe('ArticleList ',()=>{

    const testProps={
        articles:{
            a:{id:'a'},
            b:{id:'b'},
        },
        store:{
            lookUpAuthor: jest.fn(()=>({})),   
        }
    }
    it('Should render properly',()=>{
        const tree= renderer.create(
            <ArticleList
                {...testProps}
            />
        ).toJSON();
        // console.log(tree);
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(2);
    })
})