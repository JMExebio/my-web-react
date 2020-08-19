import React from "react";
import styled from "styled-components";
const DescriptionStyled = styled.div`
@media screen and (min-width:768px){
    grid-area: description;
    .copy{
      font-size: 20px;
    }
}
`;
function Description() {
  return (
    <DescriptionStyled className="hero-description">
      <h1 className="title-h1">Hola Bienvenidos</h1>
      <p className="copy">
        Soy Jesús Exebio un educador que le apasiona la ciencia, aqui pude
        publicar algunos de mis trabajos.
      </p>
    </DescriptionStyled>
  );
}

export default Description;
