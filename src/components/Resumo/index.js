import React from "react";

import {
  CreativeSection,
  CreativeInfo,
  Title,
  InfoDesc,
  InfoDir,
  Span,
} from "./style";

const Resumo = () => {
  return (
    <div class="creative">
      <CreativeSection>
        <CreativeInfo>
          <Title>
            <Span>Este somos</Span> Nós
          </Title>
          <InfoDir>Diretor Administrativo</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus
            dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </CreativeInfo>
      </CreativeSection>
    </div>
  );
};

export default Resumo;
