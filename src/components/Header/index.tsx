import {Avatar, Box, Button, Container, Stack, Typography,} from "@mui/material"
import {grey} from "@mui/material/colors"
import {Mail} from 'styled-icons/fluentui-system-filled'
import {Bell} from 'styled-icons/heroicons-solid'
import {MessageRoundedDots} from 'styled-icons/boxicons-solid'
import {PieChart} from 'styled-icons/entypo'

export const Header = () => {
    return (
        <Container sx={{mx: "auto"}}>
            <Box display="flex" alignItems="center" py={2}>
                <Box></Box>
                <Stack mx="auto" direction="row" spacing={4}>
                    <Button
                        color="secondary"
                        startIcon={<Mail size={20} color={grey[700]}/>}
                    >
                        3개 읽지 않는 메시지
                    </Button>
                    <Button
                        startIcon={<Bell size={20} color={grey[700]}/>}
                        color="secondary"
                    >
                        3개 읽지 않는 알림
                    </Button>
                    <Button startIcon={<MessageRoundedDots size={20} color={grey[700]} />} color="secondary">뮤니티</Button>
                    <Button startIcon={<PieChart size={20} color={grey[700]} />} color="secondary">Insights</Button>
                </Stack>
                <Stack
                    spacing={2}
                    alignItems="center"
                    direction="row"
                    justifyContent="flex-end"
                    textAlign="right"
                >
                    <Box>
                        <Typography variant="h6" lineHeight={1} fontSize={15}>
                            Norbek Yusupjonov
                        </Typography>
                        <Typography fontSize={13} color={grey[600]}>
                            Student
                        </Typography>
                    </Box>
                    <Avatar/>
                </Stack>
            </Box>
        </Container>
    )
}
