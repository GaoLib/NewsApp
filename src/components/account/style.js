import styled  from 'styled-components'

export const AccountWrapper = styled.div`
    height: 30vmin;
    display: flex;
    padding-left: 8vmin;
    align-items: center;
    border-bottom: 1px solid #ccc;
    position: relative;
    a{
        text-decoration: none;
    }
`
export const Profile = styled.div`
    color: #525151;
    i{
        font-size: 14vmin;
        margin-right: 4vmin;
        vertical-align: middle;
    }
    span{
        vertical-align: middle;
    }
    
`
export const TurnToLogin = styled.div`
    font-size: 6vmin;
    position: absolute;
    top: 10vmin;
    right: 6vmin;
    color: #525151;
`

export const LifeWrapper = styled.div`
    width: 100%;
    height: 75vh;
    position: relative;
    background: #f5f3f3;
`

export const LifeMoment1 = styled.img`
    position: absolute;
    top: 8vmin;
    left: 6vmin;
    width: 40vmin;
    border-radius: 4vmin;
    transform: rotate(-8deg);
`

export const LifeMoment2 = styled.img`
    position: absolute;
    top: 44vmin;
    right: 6vmin;
    width: 40vmin;
    border-radius: 4vmin;
    transform: rotate(16deg);
`

export const LifeMoment3 = styled.img`
    position: absolute;
    top: 78vmin;
    left: 6vmin;
    width: 40vmin;
    border-radius: 4vmin;
    transform: rotate(-6deg);
`

export const Pin1 = styled.div`
    position: absolute;
    top: 6vmin;
    left: 5vmin;
    z-index: 1;
    font-size: 8vmin;
`
export const Pin2 = styled.div`
    position: absolute;
    top: 36vmin;
    right: 30vmin;
    z-index: 1;
    font-size: 8vmin;
    transform: rotate(14deg);
`
export const Pin3 = styled.div`
    position: absolute;
    top: 76vmin;
    left: 5vmin;
    z-index: 1;
    font-size: 8vmin;
`

export const LoginHeader = styled.div`
    height: 8vmin;
    padding: 2vmin;
    border-bottom: 1px solid #bbb;
    position: relative;
`

export const BackToAccount = styled.div`
    position: absolute;
    left: 4vmin;
    top: 3vmin;
`

export const Form = styled.div`
    width: 100%;
    height: 30vh;
    margin-top: 24vh;
    position: relative;
`

export const Input = styled.input`
    width: 80%;
    height: 10vmin;
    margin: 1vh 9vw;
    text-align: center;
    border-radius: 4vmin;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 2px #999 inset;
`
export const Button = styled.div`
    width: 80%;
    height: 10vmin;
    margin: 3vh 9vw;
    border-radius: 4vmin;
    background: #f5ef3e;
    border: 1px solid #dad7d7;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ErrorMessage = styled.div`
    position: absolute;
    bottom: 11vh;
    left: 26vw;
    color: #cec81ce0;
`