import { useRouteError } from "react-router-dom";
import { Flex, Container, Paragraph, Header } from "./components/styles/UI";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page" height="50%" width="50%" center={true}>
      <Header margin="0 0 2rem">Oops!</Header>
      <Paragraph margin="0 0 1rem">
        Sorry, an unexpected error has occurred
      </Paragraph>
      <Paragraph>{error.statusText || error.message}</Paragraph>
    </Container>
  );
}
