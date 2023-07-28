import { useState, useEffect } from 'react';

import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Post } from '../../models'

/**
 * Get all posts in DataStore
 * 
 * @returns Array of Post entries in DataStore
 */
const useFetchFeed = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const posts = await DataStore.query(Post, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING)
      });
      setPosts(posts);
      setIsLoading(false);
    }
    fetchFeed();
  }, []);

  return { posts, isLoading };
}

export default useFetchFeed;