import { useState, useEffect } from 'react';
import ImageMap from '../components/ImageMap';
import styled from 'styled-components';
import { customMedia } from '../styles/GlobalStyle';

export interface IProps {
  productData: { id: number; imageUrl: string; productList: IProductList[] };
}

export interface IProductList {
  idx: number;
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}

function Main() {
  const [productData, setProductData] = useState<IProps['productData']>({
    id: 0,
    imageUrl: '',
    productList: [],
  });

  console.log('data: ', productData);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        'https://cdn.ggumim.co.kr/test/image_product_link.json'
      ).then((res) => res.json());
      setProductData(res);
    };
    getData();
  }, []);

  return (
    <Container>
      <ImageMap {...productData} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 800px;
  padding: 40px 0;
  margin: 0 auto;
  ${customMedia.lessThan('mobile')`
		width: 100%;
	`}
`;

export default Main;
