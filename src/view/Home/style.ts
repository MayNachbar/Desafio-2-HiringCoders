import styled from 'styled-components';

export const Container = styled.div`
width: 80%;
height: 100%;
margin: auto;

    .nav{
        heigth: 100hv;
        width: 100%;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
       
    .bloco{
        heigth: 100hv;
        width: auto;
        margin-left: 450px;
        padding: 15px;
        display: flex;
        text-align: center;
        justify-content: space-between;
    }
     
    .bloco2{
        heigth: 100hv;
        width: auto;
        margin-left: 450px;
        padding: 15px;
        display: flex;
        text-align: center;
        justify-content: space-between;
    }

    .cart{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .foot{
        heigth: 100hv;
        width: auto;
        margin-left: 500px;
        padding: 15px;
        display: flex;
        text-align: center;
        justify-content: space-between;
    }
  }

section {
    heigth: 100hv;
    width: 100%;
    background: #000;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 15px 10px;
    border-radius: 12px;
    padding: 15px;

    .product-content {
        display: grid;
        text-align: center;
        heigth: 600px;
        background: #fff;
        margin: 15px 0;
        border-radius: 12px;
        padding: 12px;
    }
}

`