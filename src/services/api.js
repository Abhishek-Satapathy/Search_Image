import axios from "axios";


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;


export async function fetchPhotos(query, page, per_page) {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
  })

  return res.data
}
