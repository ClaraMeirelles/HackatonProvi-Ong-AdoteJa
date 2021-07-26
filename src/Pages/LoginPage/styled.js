import styled from 'styled-components'
import { Button } from "@material-ui/core"

export const LoginPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    form{
        display: flex;
        flex-direction: column;
        width: 30vw;
    }
`


export const LoginButton = styled(Button)`
    border-radius: 30px;
`