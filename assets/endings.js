const ENDING_FILE = {
  intact: "stills/结局_6原典_intact_v3.jpg",
  seams: "stills/结局_5-4原典_seams_v1.jpg",
  dissolve: "stills/结局_3原典_dissolve_v1.jpg",
  broken: "stills/结局_2-1原典_broken_v1.jpg",
  noise: "stills/结局_0原典_v1.jpg"
};

// n 是本局放进去的原典块数，total 是马的总块数。
function endingTier(n, total) {
  if (n >= total) return "intact";
  if (n >= total - 2) return "seams";
  if (n === total - 3) return "dissolve";
  if (n >= 1) return "broken";
  return "noise";
}

function isEndingTier(tier) {
  return Object.prototype.hasOwnProperty.call(ENDING_FILE, tier);
}

function endingImage(tier) {
  return encodeURI(ENDING_FILE[isEndingTier(tier) ? tier : "intact"]);
}
