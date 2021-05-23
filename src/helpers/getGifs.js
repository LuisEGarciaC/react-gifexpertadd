
export const getgif = async (category) => {
  const urlserch =
    `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=7nmoLIkbrex7EzqAwfCEZMXXIxsRt26B`;
  const resp = await fetch(urlserch);
  const { data } = await resp.json();

  //inforamcion de cada gif es

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  
  return gifs;


};