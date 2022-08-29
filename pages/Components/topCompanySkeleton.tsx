import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

function TopCompanySkeleton() {
  return (
    <div>
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="circular" width={80} height={80} />
        <Skeleton variant="rectangular" width={370} height={75} />
        <Skeleton variant="rounded" width={370} height={75} />
        <Skeleton variant="rounded" width={370} height={75} />
        <Skeleton variant="rounded" width={370} height={75} />
        <Skeleton variant="rounded" width={370} height={75} />
      </Stack>
    </div>
  );
}
export default TopCompanySkeleton;
