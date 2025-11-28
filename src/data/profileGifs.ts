import computingBg1 from "../images/computing-bg-1.gif";
import computingBg2 from "../images/computing-bg-2.gif";
import theatreBg1 from "../images/theatre-bg-1.gif";
import theatreBg2 from "../images/theatre-bg-2.gif";

export const profileBackgroundGifs = {
  Computing: [computingBg1, computingBg2],
  Theatre: [theatreBg1, theatreBg2],
};

export const getRandomGif = (profile: "Computing" | "Theatre"): string => {
  const gifs = profileBackgroundGifs[profile];
  return gifs[Math.floor(Math.random() * gifs.length)];
};
