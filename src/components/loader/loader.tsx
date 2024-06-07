import React from "react";
import { Box, Skeleton } from "@mui/material";

const SkeletonLoader: React.FC = () => {
  return (
    <Box className="w-full">
      <Skeleton
        variant="text"
        width="80%"
        height={40}
        style={{ marginBottom: 20 }}
      />
      <Skeleton
        variant="rectangular"
        height={56}
        style={{ marginBottom: 20 }}
      />
      <Skeleton
        variant="rectangular"
        height={56}
        style={{ marginBottom: 20 }}
      />
      <Skeleton variant="rectangular" height={36} width="100%" />
    </Box>
  );
};

export default SkeletonLoader;
