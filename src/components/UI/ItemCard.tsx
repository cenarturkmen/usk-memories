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
  background?: string;
  shadow?: string;
  padding?: string;
  margin?: string;
}

export function ItemCard(props: ItemCardProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  let justify = props.justify ? props.justify : "space-between";
  let direction = props.direction ? props.direction : "row";

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: justify,
        flexDirection: direction,
        background: props.background ? props.background : "#121212",
        margin: props.margin ? props.margin : "1rem 0rem 3rem 0rem",
        padding: props.padding
          ? props.padding
          : isMobile
          ? "2rem 1rem 2rem 1rem"
          : "3rem",
        borderRadius: "1rem",
        color: "white",
        opacity: "0.95",
        boxShadow: props.shadow
          ? props.shadow
          : "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      }}
    >
      {props.children}
    </Card>
  );
}
