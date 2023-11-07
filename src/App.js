import {useState} from 'react';
import './App.css';
const user ={
name:'Madhurip',
ImageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
imageSize: 90,
};

export default function Profile(){
  return(
    <>
    <h1>{user.name}</h1>
    <img 
    className='avater'
    src={user.imageUrl}
    alt={'photo of '+user.name}
    style={{
     width: user.imageSize,
     height: user.imageSize
    }}
    />
    </>
  );
}

