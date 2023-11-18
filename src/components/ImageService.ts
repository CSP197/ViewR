import axios from "axios";
import getRandomInt from '../utils/GetRandomInt';

async function ImageService() {
  const res = await axios({
    method: "get",
    url: `https://picsum.photos/v2/list?page=${getRandomInt(99)}&limit=${getRandomInt(10)}`,
  });

  return res.data;
}

export default ImageService;
