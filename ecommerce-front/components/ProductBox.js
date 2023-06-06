import styled from "styled-components";
import Button, {ButtonStyle} from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "@/components/CartContext";
import {primary} from "@/lib/colors";
import FlyingButton from "@/components/FlyingButton";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon";
import HeartSolidIcon from "@/components/icons/HeartSolidIcon";
import axios from "axios";

const ProductWrapper = styled.div`
  button{
    width: 50px;
    text-align: center;
    justify-content: center;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 10px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  position: relative;
  img{
    max-width: 100%;
    max-height: 130px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.8rem;
  color:black;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  padding: 5px;
  background-color: #FCFCFF;
  border-radius: 0px 0px 5px 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  color:black;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    color:black;
    text-align: left;
  }
`;

const WishlistButton = styled.button`
  border:0;
  width: 40px !important;
  height: 40px;
  padding: 10px;
  position: absolute;
  top:0;
  right:0;
  background:transparent;
  cursor: pointer;
  ${props => props.wished ? `
    color:red;
  ` : `
    color:black;
  `}
  svg{
    width: 16px;
  }
`;

export default function ProductBox({
  _id,title,description,price,images,wished=false,
  onRemoveFromWishlist=()=>{},
}) {
  const url = '/product/'+_id;
  const [isWished,setIsWished] = useState(wished);
  function addToWishlist(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const nextValue = !isWished;
    if (nextValue === false && onRemoveFromWishlist) {
      onRemoveFromWishlist(_id);
    }
    axios.post('/api/wishlist', {
      product: _id,
    }).then(() => {});
    setIsWished(nextValue);
  }
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <WishlistButton wished={isWished} onClick={addToWishlist}>
            {isWished ? <HeartSolidIcon /> : <HeartOutlineIcon />}
          </WishlistButton>
          <img src={images?.[0]} alt=""/>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            {price} ₽
          </Price>
          <FlyingButton _id={_id} src={images?.[0]}><CartIcon/></FlyingButton>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}