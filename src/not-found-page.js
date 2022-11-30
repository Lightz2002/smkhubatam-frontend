import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    // <Container id="error-page" height="50%" width="50%" center={true}>
    // <Header margin="0 0 2rem">Oops!</Header>
    // <Paragraph margin="0 0 1rem">
    <p>Sorry, an unexpected error has occurred</p>
    // </Paragraph>
    // <Paragraph>{error.statusText || error.message}</Paragraph>
    // </Container>
  );
}
