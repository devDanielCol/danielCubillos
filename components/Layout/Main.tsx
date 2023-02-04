import { Component, ReactNode } from "react";
import NavbarDeskop from "../Topbar/Navbar/NavbarDeskop/Molecules/NabvarDeskop";
import FooterDocument from "./Footer";
import HeadDocument from "./Head";

interface ContentSimpleProsps {
  children?: ReactNode;
  title: string;
  description?: string;
}

export default class MainLayout extends Component {
  props: Readonly<ContentSimpleProsps>;

  constructor(props: ContentSimpleProsps) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <HeadDocument
          title={this.props.title}
          description={this.props.description}
        />

        <NavbarDeskop />
        <>{this.props.children}</>
        <FooterDocument />
      </>
    );
  }
}
