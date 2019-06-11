import styled from 'styled-components'
import banner from '../../images/banner.jpg'

export const NavWrapper = styled.ul`
    width: 90%;
    padding: 0;
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    li{
        padding:4px 10px;
        list-style-type: none;
        flex:1 0 auto;
    }
    .nav-active{
        position:relative;
        font-weight: bold;

        &:after{
            content:'';
            width:60%;
            height:2px;
            background-color: rgb(248,206,0);
            position:absolute;
            left:20%;
            bottom:0;
        }
    }
`

export const NavArrow = styled.div`
    position:fixed;
    right:0px;
    top:16px;
    background: white;
    padding:4px 10px;
`

export const Banner = styled.div`
    width:100%;
    height:160px;
    background: url(${banner});
    background-size: 100% 100%;
    position:relative;

    .turn{
      position:absolute;
      bottom:14px;
      right:14px;

    .turnBanner{
        width:6px;
        height:6px;
        background-color: white;
        float:left;
        margin:2px 4px;
      }
      .banner-active{
        background-color: rgb(248,206,0);
      }
    }
`