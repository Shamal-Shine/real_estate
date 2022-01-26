import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e4ef6646dcmshb0e9a936edbe7e3p18a73cjsnd7bdc928a916'
          }
    });

    return data;
}