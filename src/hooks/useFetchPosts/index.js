import { useState, useEffect } from 'react';

import { DataStore, SortDirection } from 'aws-amplify';
import { Post } from '../../models';

const useFetchPosts = (userId) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    if (!userId) return;
    const subscription = DataStore.observeQuery(Post, (p) => p.postUserId.eq(userId), {
      sort: (p) => p.createdAt(SortDirection.DESCENDING),
    }).subscribe(({ items }) => {
      setPosts(items);
      setIsLoading(false);
    });
    return () => subscription.unsubscribe();
  }, [userId]);

  return { posts, isLoading };
}

export default useFetchPosts;