import { Card, useMediaQuery } from "@mui/material";

interface ItemCardProps {
  children: React.ReactNode;
  justify?:
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-evenly"
    | undefined;
  direction?: "row" | "column" | undefined;
}

export function ItemCard(props: ItemCardProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  let justify = props.justify ? props.justify : "space-between";
  let direction = props.direction ? props.direction : "row";

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent:  justify,
        flexDirection: direction,
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
