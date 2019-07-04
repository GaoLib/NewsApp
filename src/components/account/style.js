import styled  from 'styled-components'

export const AccountWrapper = styled.div`
    height: 30vmin;
    display: flex;
    padding-left: 8vmin;
    align-items: center;
    border-bottom: 1px solid #ccc;
    position: relative;
`
export const Profile = styled.div`
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