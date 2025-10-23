declare module "react-360-view" {
  import * as React from "react";

  interface React360ViewProps {
    amount: number;
    imagePath: string;
    fileName: string;
    fileExtension?: string;
    autoplay?: boolean;
    loop?: boolean;
    width?: number;
    height?: number;
  }

  const React360View: React.FC<React360ViewProps>;
  export default React360View;
}
