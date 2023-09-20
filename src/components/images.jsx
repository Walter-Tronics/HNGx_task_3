import * as Image from "./imports";

//const url = "https://walter-tronics.github.io/media/assets/""

const images = [
    {id: 1, tag: 'Animal', src: Image.animal},
    {id: 2, tag: 'Animal', src: Image.animal2},
    {id: 3, tag: 'Animal', src: Image.animal3},
    {id: 4, tag: 'Animal', src: Image.animal4},
    {id: 5, tag: 'Art', src: Image.art},
    {id: 6, tag: 'Art', src: Image.art2},
    {id: 7, tag: 'Art', src: Image.art3},
    {id: 8, tag: 'Art', src: Image.art4},
    {id: 9, tag: 'Car', src: Image.car},
    {id: 10, tag: 'Car', src: Image.car2},
    {id: 11, tag: 'Car', src: Image.car3},
    {id: 12, tag: 'Car', src: Image.car4},
    {id: 13, tag: 'Car', src: Image.car5},
    {id: 14, tag: 'Cityscape', src: Image.cityscape},
    {id: 15, tag: 'Cityscape', src: Image.cityscape2},
    {id: 16, tag: 'Cityscape', src: Image.cityscape3},
    {id: 17, tag: 'Cityscape', src: Image.cityscape4},
    {id: 18, tag: 'Housing', src: Image.housing},
    {id: 19, tag: 'Housing', src: Image.housing2},
    {id: 20, tag: 'Housing', src: Image.housing3},
    {id: 21, tag: 'Housing', src: Image.housing4},
    {id: 22, tag: 'Nature', src: Image.nature},
    {id: 23, tag: 'Nature', src: Image.nature2},
    {id: 24, tag: 'Nature', src: Image.nature3},
    {id: 25, tag: 'Nature', src: Image.nature4},
    {id: 26, tag: 'Nature', src: Image.nature5},
    {id: 27, tag: 'Tech', src: Image.tech},
    {id: 28, tag: 'Tech', src: Image.tech2},
    {id: 29, tag: 'Tech', src: Image.tech3},
    {id: 30, tag: 'Tech', src: Image.tech4},
    {id: 31, tag: 'Travel', src: Image.travel},
    {id: 32, tag: 'Travel', src: Image.travel2},
    {id: 33, tag: 'Travel', src: Image.travel3},
    {id: 34, tag: 'Travel', src: Image.travel4},
];

const randomImage = images.sort(()=> 0.5 - Math.random());

export default randomImage;