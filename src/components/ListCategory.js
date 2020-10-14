import React from 'react'
import Category from './Category'
import './Category.css'
import Nav from './Nav'

const category = [   
    {   id : 23,
        name : "History",
        image : "https://cdn.pixabay.com/photo/2016/08/15/08/22/greece-1594689_960_720.jpg",
        
    },
    {   id : 22,
        name : "Geography",
        image : "https://cdn.pixabay.com/photo/2017/08/17/07/47/travel-2650303_960_720.jpg",
        
    },
    {   id : 11,
        name : "Movies",
        image : "https://cdn.pixabay.com/photo/2016/06/03/12/42/popcorn-1433326_960_720.jpg"
    },
    {
        id : 24,
        name : "Politics",
        image : "https://cdn.pixabay.com/photo/2016/08/26/20/01/the-white-house-1623005_960_720.jpg"
    },
    {
        id : 12,
        name : "Music",
        image : "https://cdn.pixabay.com/photo/2018/06/29/01/47/piano-3505109_960_720.jpg"
    },
    {
        id : 9,
        name : "General Knowledge",
        image : "https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_960_720.jpg"
    },
    {
        id : 15,
        name : "Video Games",
        image : "https://cdn.pixabay.com/photo/2016/07/30/14/25/mario-1557240_960_720.jpg"
    },
    {
        id : 20,
        name : "Mythology",
        image : "https://cdn.pixabay.com/photo/2016/05/31/11/31/poseidon-1426660_960_720.jpg"
    },
    {
        id : 17,
        name : "Science & Nature",
        image : "https://cdn.pixabay.com/photo/2018/04/17/11/43/color-3327344_960_720.jpg"
    },
    {
        id : 31,
        name : "Japanese Anime & Manga",
        image : "https://cdn.pixabay.com/photo/2016/10/20/06/12/spirited-away-1754734_960_720.jpg"
    },
    {
        id : 28,
        name : "Vehicles",
        image : "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg"
    },
    {
        id : 18,
        name : "Computers",
        image : "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg"
    }
];


const ListCategory = (props) => (
    <div >
        <Nav />
        
        <figure style={{width:'100%',margin:'auto'}}><img style={{width:'100%',marginTop:'70px'}} src='https://i.ibb.co/WxH9dQG/quiz.png' alt='quizz'></img></figure>
        <span className='ListCategory'>{category.map(item => (
        
            <Category className='ListCategory' key={item.id} name={item.name} image={item.image} id={item.id} />       
            
        ))}</span>
    
    </div>
);

export default ListCategory;
