import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../App'
import { Button } from '../App'

const SearchResult = ({ data }) => {
    return (
        <FoodCardContainer>
            <FoodCards>
                {
                    data?.map(({ name, image, text, price }) => (
                        <FoodCard key={name}>
                            <div className="food_image">
                                <img src={BASE_URL + image} alt="" />
                            </div>
                            <div className='food_info'>
                                <div className="info">
                                    <h3>{name}</h3>
                                    <p>{text}</p>
                                </div>
                                <Button>${price.toFixed(2)}</Button>
                            </div>
                        </FoodCard>
                    ))
                }
            </FoodCards>
        </FoodCardContainer>
    )
}

const FoodCardContainer = styled.section`
  background-image: url("../public/bg.png");
  min-height: calc(100vh - 180px);
  max-width: 100vw;
  background-size: 1550px;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 50px;
`

const FoodCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    width: 80%;
    /* border: 2px solid red; */
    margin: 0 auto;
`

const FoodCard = styled.div`
    width: 340px;
    height: 167px;
    border: 0.66px solid;
    display: flex;
    gap: 10px;
    padding: 10px;

    border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

    background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);
    border-radius: 20px;

    .food_image {
        display: flex;
        justify-content: center;
        align-items: start;
        margin-top: 8px;

        img {
            width: 130px;
            height: 130px;
        }
    }

    .food_info {
        display: flex;
        justify-content: space-between;
        align-items: end;
        flex-direction: column;

        button {
            font-size: 14px;
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 8px;

            h3 {
                font-size: 16px;
                font-weight: 500;
            }
            p {
                margin-top: 4px;
                font-size: 12px;
            }
        }
    }
`

export default SearchResult