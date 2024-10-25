import {Box, createTheme, IconButton, Stack, ThemeProvider} from "@mui/material"
import {grey} from "@mui/material/colors"
import {Brand} from "@app/components/Brand";
import {Header} from "@app/components/Header";
import 'dayjs/locale/ko'
import dayjs from "dayjs";
import {Navigation} from "@app/components/Navigation";
import {Menu} from 'styled-icons/boxicons-regular'
import {Logout} from 'styled-icons/material'
import studentsSvg from '@app/assets/happy-students.svg'


dayjs.locale("ko-kr")

const theme = createTheme({
    palette: {
        secondary: {main: grey[600]},
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} width="100%">
                <Box><Header/></Box>
                <Box><Brand/></Box>
                <Navigation/>
            </Stack>
            <Stack flexGrow={1}>
                <Stack py={4} alignItems='center' px={2} maxWidth={60} flexGrow={1} justifyContent='space-between'>
                    <IconButton><Menu size={24}/></IconButton>
                    <Stack spacing={4} alignItems='center' width='100%'>
                        <Logout size={20}/>
                        <Box mb={2} marginBottom='70px' width='100%' alignItems='center'>
                            <img className='img-fluid' src={studentsSvg} alt='students' />
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </ThemeProvider>
    )
}

export default App
