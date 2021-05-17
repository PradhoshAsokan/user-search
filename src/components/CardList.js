import React from 'react';
import Card from './Card';

const CardList = ({employee}) => {
  return (
    <div>
      {
        employee.map((user,i) => {
          return(
            <Card
              key={i}
              id={employee[i].id}
              name={employee[i].name}
              email={employee[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;