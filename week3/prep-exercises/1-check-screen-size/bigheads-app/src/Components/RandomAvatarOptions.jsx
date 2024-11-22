const randomAvatarOptions = () => ({
  hat: Math.random() > 0.5 ? "beanie" : "none",
  hatColor: ["red", "blue", "pink"][Math.floor(Math.random() * 3)],
  accessory: Math.random() > 0.5 ? "roundGlasses" : "none",
  clothing: ["shirt", "tankTop"][Math.floor(Math.random() * 2)],
  clothingColor: ["red", "blue", "green"][Math.floor(Math.random() * 3)],
  graphic: Math.random() > 0.5 ? "react" : "vue",
});

export default randomAvatarOptions;
