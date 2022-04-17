import React from 'react';

interface Props {
  name: string;
  color: string;
}

interface OtherProps {
  name: string;
  color: string;
}

function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>;
}

const OtherHeading: React.FC<OtherProps> = ({ name, color }) => (
  <h1>My Website Heading</h1>
);
