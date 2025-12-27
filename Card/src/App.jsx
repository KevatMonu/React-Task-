import React from "react";
import Card from "./components/Card";

const App = () => {
 const cards = [
  {
    name: "Izuku Midoriya",
    info: "A determined hero with the power of One For All",
    follower: 22500,
    share: 820,
    bgImage:
      "https://4kwallpapers.com/images/walls/thumbs_2t/13971.png",
  },
  {
    name: "Katsuki Bakugo",
    info: "Explosive temper with overwhelming combat power",
    follower: 19800,
    share: 760,
    bgImage:
      "https://4kwallpapers.com/images/walls/thumbs_2t/20989.jpg",
  },
  {
    name: "Shoto Todoroki",
    info: "Master of fire and ice with a calm personality",
    follower: 24300,
    share: 910,
    bgImage:
      "https://4kwallpapers.com/images/walls/thumbs_2t/20931.jpg",
  },
 {
    name: "Ochaco Uraraka",
    info: "Gravity-defying hero with a kind and determined heart",
    follower: 21400,
    share: 880,
    bgImage:
      "https://4kwallpapers.com/images/walls/thumbs_2t/20254.png",
  },
];


  return (
    <div className="w-full h-fit md:h-screen  bg-amber-300 flex flex-wrap  justify-center items-center gap-[2rem] pt-10 pb-10 relative">
      <h1 className="absolute top-7 font-bold text-2xl">Create Card Using Props-Drilling</h1>
      {
        cards.map((elem)=>{
          return <Card name={elem.name}  info={elem.info} follower={elem.follower} share={elem.share} img={elem.bgImage}/>
        })
      }
      
    </div>
  );
};

export default App;
