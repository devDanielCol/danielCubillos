import Document, {
  DocumentProps,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";

export default class CustomDocument extends Document {
  constructor(props: DocumentProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
