import React, { useEffect, useState }  from "react";
import { HStack } from "@chakra-ui/react"
import VertiPosts from "./VertiPosts"
import redditImageFetcher from "reddit-image-fetcher";

export default function Posts(props) {

  const postsPerColumn = props.count/3 - props.count % 3;

  return ( 
    <HStack>
      <VertiPosts count={postsPerColumn} subreddit={props.subreddit} />
      <VertiPosts count={postsPerColumn} subreddit={props.subreddit} />
      <VertiPosts count={postsPerColumn} subreddit={props.subreddit} />
    </HStack>
  )
}