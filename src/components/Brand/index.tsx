import {Container, IconButton, Stack, Typography} from "@mui/material";
import {Home} from 'styled-icons/heroicons-solid/'
import dayjs from "dayjs";

export const Brand = () => {
    return (
        <Container sx={{mx: 'auto'}}>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton size='small' color='primary'>
                        <Home size={20}/>
                    </IconButton>
                    <Typography>Software eng Faculty</Typography>
                </Stack>
                <Typography>{dayjs().format('YYYY년 M월 D일 HH:mm')}</Typography>
            </Stack>
        </Container>
    )
}