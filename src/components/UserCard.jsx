import React from "react";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";

function UserCard({ user, onClick }) {
  return (
    <Card sx={{ marginBottom: 2, display: "flex", alignItems: "center", borderRadius: 2 }}>
      <Avatar
        src={user.avatar_url}
        alt={user.login}
        sx={{ width: 56, height: 56, margin: 2 }}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="h6">{user.login}</Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={() => onClick(user.login)}
          sx={{ marginTop: 1 }}
        >
          Смотреть репозитории
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserCard;
