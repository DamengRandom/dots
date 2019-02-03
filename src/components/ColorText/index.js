import React from "react";

const ColorText = (WrappedComponent) => {
  const colors = ['#00a7f8', '#db2938', '#2fbb28'];
  const randomColor = colors[Math.floor(Math.random() * 3)];

  return (props) => (
    <React.Fragment>
      <WrappedComponent {...props} color={randomColor} />
    </React.Fragment>
  );
}

export { ColorText };
