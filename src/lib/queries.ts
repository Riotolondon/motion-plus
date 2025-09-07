import groq from 'groq'

export const GALLERIES_QUERY = groq`*[_type == "gallery"] | order(publishedAt desc){
  _id,
  title,
  description,
  kind,
  coverImage,
  "coverVideoUrl": coverVideo.asset->url,
  media[]{
    _key,
    _type,
    title,
    alt,
    "url": asset->url,
    "thumbnail": asset->metadata.thumbnail.asset->url
  }
}`