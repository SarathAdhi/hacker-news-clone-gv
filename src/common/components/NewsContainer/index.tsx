import { Box, Pagination } from "@mui/material";
import React, { useState } from "react";
import { News } from "../../types/news";
import { Component } from "../../types/page";
import { NewsLoadingSkeleton } from "../NewsLoadingSkeleton";
import { NewsCard } from "./NewsCard";

type Props = {
  isLoading: boolean;
  newsData: News[];
  paginationCount: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  hideNews: (value: string) => void;
} & Component;

export const NewsContainer: React.FC<Props> = ({
  isLoading,
  newsData,
  paginationCount,
  currentPage,
  setCurrentPage,
  hideNews,
}) => {
  const [newsCount, setNewsCount] = useState(1);

  if (isLoading) return <NewsLoadingSkeleton />;

  return (
    <Box className="grid gap-3">
      {newsData.map((news, index) => (
        <NewsCard
          key={news.objectID}
          hideNews={(id) => hideNews(id)}
          number={index + newsCount}
          {...news}
        />
      ))}

      <Pagination
        className="p-2 w-full grid place-content-center rounded-sm bg-gray-100"
        count={paginationCount}
        page={currentPage}
        onChange={(_, value) => {
          const prePage = currentPage;

          const diff = value - prePage;

          setCurrentPage(value);

          if (prePage === value - 1) setNewsCount(newsCount + 12);
          else if (prePage === value + 1) setNewsCount(newsCount - 12);
          else
            setNewsCount(
              diff < 0
                ? Math.floor(newsCount - 12 * -diff)
                : 12 * Math.abs(value - prePage) + 1
            );
        }}
        color="primary"
      />
    </Box>
  );
};
