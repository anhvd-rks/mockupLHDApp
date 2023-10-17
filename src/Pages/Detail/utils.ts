import axios from 'axios';

export async function getDataDetail(data: string){
    //https://rickandmortyapi.com/documentation
    const url = `https://rickandmortyapi.com/api/character/${data}`
    try{
        const response = await axios.get(url);
        return response
    } catch (e) {
        return e
    }
}
