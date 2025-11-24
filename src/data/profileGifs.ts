export const profileBackgroundGifs = {
  Computing: [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTd3bDlmdGV3d29keTFrOGRob2pyd3Z3MGJlZTBmNWZ2cjF3NjhudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DqvaPxbqDww0g/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif",
  ],
  Theatre: [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Q2dzgwNmlrNnR6eTRwczR4Y2twMm90NnVocWw3ZHZwaHh2YTd0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDZceiSecNEBgdTbBN/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWlmaTBrb2x2dWJodW52dm9majlnemp3YjI4a2s1N282Z3lrdnh4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPk461838M12n0A/giphy.gif",
  ],
};

export const getRandomGif = (profile: "Computing" | "Theatre"): string => {
  const gifs = profileBackgroundGifs[profile];
  return gifs[Math.floor(Math.random() * gifs.length)];
};
