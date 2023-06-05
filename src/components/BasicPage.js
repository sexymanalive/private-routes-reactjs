import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";

export const BasicPage = ({ title, icon }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>{icon}</Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
    </Container>
  );
};
