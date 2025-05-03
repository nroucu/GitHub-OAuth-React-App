import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function RepoCard({ name, html_url, owner }) {
  return (
    <Card sx={{ marginBottom: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Владелец:{" "}
          <a
            href={owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            {owner.login}
          </a>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={html_url}
          target="_blank"
          sx={{ marginTop: 1 }}
        >
          Перейти к репозиторию
        </Button>
      </CardContent>
    </Card>
  );
}

export default RepoCard;
