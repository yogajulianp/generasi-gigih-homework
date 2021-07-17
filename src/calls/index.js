const calls = (data) => {
    const {
      album: {images: [imgSrc], artists: [artist], name: albumName, },
      external_urls: { spotify },
      name: title,
      id,
    } = data;
  
    return { id, title,  imgSrc, artist, albumName, spotify };
  };

export default calls;