import styled from 'styled-components'
// import banner from '../../images/banner.jpg'

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
    &::-webkit-scrollbar {
        width: 100%;
        height: 0.2vmin;
    }
`

export const NavArrow = styled.div`
    position:fixed;
    right:0;
    top:16px;
    background: white;
    padding:4px 10px;
`

export const Banner = styled.div`
    width: 100%;
    height: 30vh;
    background: url(${props=>props.imageUrl});
    background-size: 100% 100%;
    position:relative;
`

export const Turn = styled.div`
    position: absolute;
    bottom: 4vmin;
    right: 4vmin;

    .banner-active{
        background-color: rgb(248,206,0);
        width: 2.4vmin;
        height: 2.4vmin;
        margin-top: -0.14vmin;
    }
`

export const TurnBanner = styled.div`
    width: 2vmin;
    height: 2vmin;
    background-color: white;
    float: left;
    margin: 0 0.6vmin;
    vertical-align: middle;
`