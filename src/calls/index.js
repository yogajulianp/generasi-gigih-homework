export const calls = (data) => {
    const {
      album: {images: [imgSrc], artists: [artist], name: albumName, },
      external_urls: { spotify },
      name: title,
      id,
    } = data;
  
    return { id, title,  imgSrc, artist, albumName, spotify };
};

export const getKeygen = (opener) => {
    let keygen;
    let type;
  
    const newUrl = String(opener.location.href).replace("#", "?");
    const queryString = new URL(newUrl).search;
  
    if (queryString.length > 0) {
      const params = new URLSearchParams(queryString);
      keygen = params.get("access_keygen");
      type = params.get("keygen_type");
    }
    return { keygen, type };
};
  