import { ItemCard } from "@/components/UI/ItemCard";
import Layout from "@/components/UI/Layout";
import { Container } from "@mui/material";

export const MdxLayout = ({ children }: { children: React.ReactNode }) => {
  // Create any shared layout or styles here
  return (
    <div>
      <Layout>
        <Container maxWidth="xl">
          <ItemCard direction="column" justify="center">
            {children}
          </ItemCard>
        </Container>
      </Layout>
    </div>
  );
};
