import React from 'react';

interface PageProps {
  title: string;
}

const HomePage: React.FC<PageProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default HomePage;