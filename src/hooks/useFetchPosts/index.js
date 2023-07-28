import { useState, useEffect } from 'react';

import { DataStore, SortDirection } from 'aws-amplify';
import { Post } from '../../models';

const useFetchPosts = (userId) => {
  const [ posts, setPosts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (!userId) return;
    const fetchPosts = async () => {
      const feed = await DataStore.query(Post, (p) => p.postUserId.eq(userId), {
        sort: (p) => p.createdAt(SortDirection.DESCENDING)
      });
      setPosts(feed);
      setIsLoading(false);
    }
    fetchPosts();
  }, [userId]);

  return { posts, isLoading };
}

export default useFetchPosts;