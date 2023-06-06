// import styled from "styled-components";
// import Center from "./Center";
// import Button from "./Button";
// import ButtonLink from "./ButtonLink";
// import CartIcon from "./icons/CartIcon";
// import { useContext } from "react";
// import { CartContext } from "./CartContext";


// const Bg = styled.div`
//   background-color: #222;
//   color:#E6F5FF;
//   padding: 50px 0;
// `;
// const Title = styled.h1`
//   margin:0;
//   font-weight:normal;
//   font-size:1.5rem;
//   @media screen and (min-width: 768px) {
//     font-size:3rem;
//   }
// `;
// const Desc = styled.p`
//   color:#aaa;
//   font-size:.8rem;
// `;
// const ColumnsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 40px;
//   img{
//     max-width: 100%;
//     max-height: 300px;
//     display: block;
//     margin: 0 auto;
//   }
//   div:nth-child(1) {
//     order: 2;

//   }
//   @media screen and (min-width: 768px) {
//     grid-template-columns: 1.1fr 0.9fr;
//     div:nth-child(1) {
//       order: 0;
//     }
//     img{
//       max-width: 100%;
//     }
//   }
// `;
// const Column = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const ButtonsWrapper = styled.div`
//   display: flex;
//   gap:10px;
//   margin-top:25px;
// `;

// export default function Featured({product}) {
//   const {addProduct} = useContext(CartContext)
//   function addFeaturedToCart(){
//     addProduct(prev => [product._id])
//   }
//   return (
//     <Bg>
//       <Center>
//         <ColumnsWrapper>
//           <Column>
//           <div>
//             <Title>Pro anywhere</Title>
//             <Desc>{product.description}</Desc>
//             <ButtonsWrapper>
//               <ButtonLink href={'/products/'+product._id} outline={1} white={1}>Подробнее</ButtonLink>
//               <Button primary={1} onClick={addFeaturedToCart}>
//                 <CartIcon/>
//                 В корзину
//               </Button>
//             </ButtonsWrapper>
//           </div>
//           </Column>
//           <Column>
//             <img src="https://ivangrunin-next-ecommerce.s3.amazonaws.com/1684793164173.png" alt=""></img>
//           </Column>
//         </ColumnsWrapper>

//       </Center> 
//     </Bg>
//   )
// }





import Center from "@/components/Center";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import FlyingButton from "@/components/FlyingButton";
import {RevealWrapper} from 'next-reveal'

const Bg = styled.div`
  background-color: #222;
  color:#E6F5FF;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:1.7rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img.main{
    max-width: 100%;
    max-height: 300px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    & > div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;
const CenterImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImgColumn = styled(Column)`
  & > div{
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
`;

export default function Featured({product}) {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <RevealWrapper origin={'left'} delay={0}>
                <ContentWrapper>
                 <Title>Профессионален во всем</Title>   {/*{product.title} */}
                  <Desc>{product.description}</Desc>
                  <ButtonsWrapper>
                    <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Подробнее</ButtonLink>
                    <FlyingButton primary={1} _id={product._id} src={product.images?.[0]}>
                      <CartIcon />
                      В корзину
                    </FlyingButton>
                  </ButtonsWrapper>
                </ContentWrapper>
              </RevealWrapper>
            </div>
          </Column>
          <ImgColumn>
            <RevealWrapper delay={0}>
              <CenterImg>
                <img className={'main'} src={product.images?.[0]} alt=""/>
              </CenterImg>
            </RevealWrapper>
          </ImgColumn>
        </ColumnsWrapper>
      </Center>

    </Bg>
  );
}