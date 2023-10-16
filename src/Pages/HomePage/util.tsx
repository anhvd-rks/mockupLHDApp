import axios from 'axios';

export async function getData(){
    //https://rickandmortyapi.com/documentation
    try{
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        return response
    } catch (e) {
        console.log("error!")
    }
}
