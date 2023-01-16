import { Paper, Tooltip, Typography } from "@mui/material";
import React from "react";
import { News } from "../../types/news";
import moment from "moment";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
    <Paper
      elevation={1}
      sx={
        {
          // "&:hover": {
          //   boxShadow: 5,
          // },
        }
      }
      className="p-3 flex items-cente"
    >
      <Typography variant="h5" className="text-gray-400">
        {number}. &nbsp;
      </Typography>

      <div className="w-full flex justify-between gap-5">
        <div>
          <Typography variant="h5">{title || "[ No Title ]"}</Typography>

          {comment_text && (
            <p
              className="font-medium"
              dangerouslySetInnerHTML={{ __html: comment_text }}
            />
          )}

          <Typography variant="body2" className="text-gray-400">
            {points} points by{" "}
            <a
              href={`http://hn.algolia.com/api/v1/users/${author}`}
              className="hover:underline"
            >
              {author}
            </a>
            {" | "}
            {moment(created_at).fromNow()}
            {" | "}
            {`${num_comments} comments`}
          </Typography>
        </div>

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
    </Paper>
  );
};
