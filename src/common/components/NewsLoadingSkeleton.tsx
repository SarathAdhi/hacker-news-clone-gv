import { Skeleton } from "@mui/material";

export const NewsLoadingSkeleton = () => {
  return (
    <div className="w-full grid">
      {[...Array(12)].map((_, index) => (
        <Skeleton key={index} height={80} animation="wave" />
      ))}
    </div>
  );
};
