import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { News } from "../../types/news";
import moment from "moment";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

type Props = {
  number: number;
  hideNews: (id: string) => void;
} & News;

export const NewsCard: React.FC<Props> = ({
  objectID,
  number,
  title,
  url,
  comment_text,
  points,
  author,
  created_at,
  hideNews,
  num_comments,
}) => {
  return (
    <Paper elevation={1} className="p-3 flex gap-2">
      <Typography variant="h5" className="flex text-gray-400">
        {number}.
      </Typography>

      <div className="w-full flex items-start justify-between gap-10">
        <div className="flex flex-col justify-between h-full">
          <Typography variant="h5">{title || "[ No Title ]"}</Typography>

          {comment_text && (
            <p
              className="font-medium text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: comment_text }}
            />
          )}

          <span className="text-xs md:text-base text-gray-400 !font-medium flex items-center gap-1">
            {points} points by {author} {`| ${moment(created_at).fromNow()}`}
            {` | ${num_comments || 0} comments`}
          </span>
        </div>

        <div className="flex flex-col items-end gap-4">
          <Tooltip title="Upvote" placement="left">
            <ArrowDropUpIcon className="cursor-pointer" />
          </Tooltip>

          <div className="flex items-center gap-4">
            <Tooltip title="Hide News" placement="left">
              <DeleteOutlineIcon
                className="cursor-pointer"
                onClick={() => hideNews(objectID)}
              />
            </Tooltip>

            {url && (
              <a href={url}>
                <Tooltip title={url} placement="bottom-start">
                  <OpenInNewIcon className="cursor-pointer" />
                </Tooltip>
              </a>
            )}
          </div>
        </div>
      </div>
    </Paper>
  );
};
