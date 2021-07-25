import styled from 'styled-components'
import {primaryColor, secondaryColor, tercearyColor} from '../../Constants/colors'
export const InfosContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 32px;
    section{
        border-radius: 30px;
        padding: 16px 32px;
        max-width: 15vw;
        text-align:center;
        opacity: 50%;
        h1{
            opacity: 100%;
            font-size: 2em;
        }
        p{
            font-size: 0.9em;
        }
    }
`
export const PrimaryColorContainer = styled.section`
    background-color: ${primaryColor};
`
export const SecondaryColorContainer = styled.section`
    background-color: ${secondaryColor};
`
export const TercearyColorContainer = styled.section`
    background-color: ${tercearyColor};
`
export const DepoimentsSection = styled.section`
    background-color: ${primaryColor};
    color: white;
`