declare module 'qrcode.react' {
      import React from 'react';
    
      interface QRCodeProps {
        value: string;
        size?: number;
        style?: React.CSSProperties;
        renderAs?: 'svg' | 'canvas';
        includeMargin?: boolean;
        margin?: number;
        bgColor?: string;
        fgColor?: string;
        level?: 'L' | 'M' | 'Q' | 'H'; // Error correction levels
      }
    
      const QRCode: React.FC<QRCodeProps>;
      export default QRCode;
    }
    