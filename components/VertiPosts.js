import React, { useEffect, useState }  from "react";
import { VStack } from "@chakra-ui/react"
import Post from "./Post"
import redditImageFetcher from "reddit-image-fetcher";

export default function VertiPosts(props) {
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
    <VStack>
      {images.map(image => <Post key={image.id} {...image} />)}
    </VStack> 
  )
}