import axios from "axios";
import React from "react";

interface ImageServiceProps { }

// const ImageService = (props: ImageServiceProps) => {
//   const list_arr = getPics();

//   return (
//     <div>
//       {list_arr.map((img: any, idx: number) => {
//         <img key={idx} src={img.download_url} />;
//       })}
//     </div>
//   );
// };

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

async function ImageService() {
  const res = await axios({
    method: "get",
    url: `https://picsum.photos/v2/list?page=${getRandomInt(99)}&limit=10`,
  });

  return res.data;
}

export default ImageService;
