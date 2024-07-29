// import React from "react";
// import { Card, Image } from "@mantine/core";

// const CatCard = ({ cat }) => {
//   return (
//     <Card shadow="sm" padding="lg" radius="md" style={{ borderRadius:"50px",}}>
//       <Card.Section>
//         <Image src={cat.url} alt={cat.name} height={250}/>
//       </Card.Section>
//     </Card>
//   );
// };

// export default CatCard;

import React from "react";
import { Card, Image } from "@mantine/core";

const CatCard = ({ cat }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      style={{
        borderRadius: "50%",
        overflow: "hidden",
        width: "250px",
        height: "250px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Card.Section>
        <Image
          src={cat.url}
          alt={cat.name}
          height={250}
          w="auto"
        />
      </Card.Section>
    </Card>
  );
};

export default CatCard;
