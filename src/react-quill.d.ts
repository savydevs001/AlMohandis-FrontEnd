declare module 'react-quill' {
      import * as React from 'react';
    
      interface QuillProps {
        value: string;
        onChange: (content: string) => void;
        placeholder?: string;
        modules?: any;
        formats?: string[];
        readOnly?: boolean;
        theme?: string;
        className?: string;
      }
    
      class Quill extends React.Component<QuillProps> {}
      export = Quill;
      export as namespace Quill;
    }
    