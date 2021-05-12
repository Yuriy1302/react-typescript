import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia repellendus sapiente officiis necessitatibus! Libero consectetur modi corrupti iure aliquam dolores architecto, commodi dolor! Sit dolores inventore voluptatibus alias et!</p>
      <button className="btn" onClick={() => history.push("/")}>Обратно к списку дел</button>
    </React.Fragment>
  );
}