import * as React from "react";

import inspire from "./inspire";

export const Inspire: React.FC<{ quote?: string }> = props => {
  return <blockquote>{props.quote ? props.quote : inspire()}</blockquote>;
};
