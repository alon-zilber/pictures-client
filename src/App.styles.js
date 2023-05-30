import Grid2 from '@mui/material/Unstable_Grid2'
import {Box, styled} from '@mui/material'

export const AppContainer = styled(Box)`
    width: 90%;
    max-width: 90rem;
    margin: 3rem auto;

`

export const PicturesGrid = styled(Grid2)`
    width: 90%;
    max-width: 90rem;
    margin: 0 auto;

    img{
        width: 100%;
        align-self: center;
    }
`