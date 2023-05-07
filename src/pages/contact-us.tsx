import Contact from "@/components/UI/Contact";
import Layout from "@/components/UI/Layout";
import { Container } from "@mui/material";

export default function ContactUs() {
  return (
    <>
      <Layout>
        <Container maxWidth="xl">
          <Contact />
        </Container>
      </Layout>
    </>
  );
}
