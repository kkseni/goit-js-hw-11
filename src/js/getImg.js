import axios from "axios";

export async function getImg(name, page) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&safesearch=true&per_page=40&page=${page}&key=29239921-6824171c8e67d20083e37057c`;
    return await axios.get(url);
}