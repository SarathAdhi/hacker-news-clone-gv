import { useState } from "react";
import axios from "../../lib/axios";
import { News } from "../types/news";

type Response = {
  hits: News[];
  nbPages: number;
};

export const useFetchApi = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationCount, setPaginationCount] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchNews(params: string) {
    setIsLoading(true);

    const url = `${params}&page=${currentPage - 1}&hitsPerPage=10`;

    try {
      const data: Response = await axios.get(url);
      setPaginationCount(data.nbPages !== 0 ? data.nbPages - 1 : 0);

      setNewsData(data.hits);
    } catch (error) {
      alert(error);
    }

    setIsLoading(false);
  }

  function hideNews(id: News["objectID"]) {
    setNewsData(newsData.filter((news) => news.objectID !== id));
  }

  return {
    newsData,
    isLoading,
    fetchNews,
    currentPage,
    setCurrentPage,
    paginationCount,
    hideNews,
  };
};
