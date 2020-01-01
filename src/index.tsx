import * as React from "react";

import inspire from "./inspire";

export const Inspire: React.SFC<{ quote?: string }> = props => {
  return <blockquote>{props.quote ? props.quote : inspire()}</blockquote>;
};
