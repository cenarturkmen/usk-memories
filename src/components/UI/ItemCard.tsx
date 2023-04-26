import { Card, useMediaQuery } from "@mui/material";

interface ItemCardProps {
  children: React.ReactNode;
}

export function ItemCard(props: ItemCardProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        background: "#121212",
        margin: "3rem 0rem 3rem 0rem",
        padding: isMobile ? "2rem 1rem 2rem 1rem" : "2rem",
        borderRadius: "1rem",
        color: "white",
        opacity: "0.95",
      }}
    >
      {props.children}
    </Card>
  );
}
