import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const BgNA = styled.div`
  background-color: #F0F0F2; ///E6F5FF FCFDFF
  padding: 1px 0px 50px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({products,wishedProducts}) {
  return (
    <BgNA>
    <Center>
      <Title>Новые поступления</Title>
      <ProductsGrid products={products} wishedProducts={wishedProducts} />
    </Center>
    </BgNA>
  );
}