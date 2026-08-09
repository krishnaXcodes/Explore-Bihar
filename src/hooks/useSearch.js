import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';

export function useSearch(data, options = {}) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse(data, {
      ...options,
    });
  }, [data, options]);

  const results = useMemo(() => {
    if (!query) {
      return data;
    }
    return fuse.search(query).map(result => result.item);
  }, [query, fuse, data]);

  return { query, setQuery, results };
}
