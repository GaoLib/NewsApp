import styled from 'styled-components'

export const FooterWrapper = styled.div`
    position:fixed;
    width:100%;
    height: 13.4vmin;
    bottom:0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top:1px solid #DCDCDC;

    a{
        text-decoration: none;
    }
`

export const IconWrapper = styled.i`
    font-size: 10vmin;
	color: ${(props) => props.color};
`