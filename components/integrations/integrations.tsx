import GoogleAnalytics from "./google_analytics";
import React from "react";
import Tawk from "./tawk";

export default class Integrations extends React.PureComponent {
  public render() {
    return (
      <div id="_integrations">
        <GoogleAnalytics />
        <Tawk />
      </div>
    );
  }
}
