import React, { useEffect, useState }  from "react";
import { SimpleGrid } from "@chakra-ui/react"
import Post from "./Post"
import redditImageFetcher from "reddit-image-fetcher";

export default function Posts(props) {
  const fetchImagesForSubreddit = async subreddit => {
    return await redditImageFetcher.fetch({
      type: 'custom',
      total: props.count,
      subreddit: [props.subreddit]
    })
  }
  
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImagesForSubreddit(props.subreddit)
    .then(setImages)
    .catch(console.error)
  }, [props.subreddit])

  return ( 
    <SimpleGrid columns={3} spacing={10}>
      {images.map(image => <Post key={image.id} {...image} />)}
    </SimpleGrid>
  )
}