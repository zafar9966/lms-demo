import {Box, Container, Link, Stack, styled} from "@mui/material";
import {grey} from "@mui/material/colors";
import {GraduationCap} from 'styled-icons/entypo'
import {ChatBubblesQuestion, DataPie, DocumentBulletList} from 'styled-icons/fluentui-system-filled'
import {Quiz} from 'styled-icons/material'
import {CalendarCheck} from 'styled-icons/fa-regular'
import {Checklist} from 'styled-icons/octicons'


const arr = [
    {title: 'Students', icon: <GraduationCap size={20}/>},
    {title: 'Sections', icon: <DataPie size={20}/>},
    {title: 'Questions', icon: <ChatBubblesQuestion size={20}/>},
    {title: 'Quizzes', icon: <Quiz size={20}/>},
    {title: 'Lessons', icon: <DocumentBulletList size={20} />},
    {title: 'Attendance', icon: <CalendarCheck size={20} />},
    {title: 'Grade', icon: <Checklist size={20} />}
]

export const Navigation = () => {
    return (
        <Box py={3} bgcolor='#fff'>
            <Container>
                <Stack direction='row' spacing={4}>
                    {
                        arr.map(item => (
                            <StyledLink underline='none' href='#' key={item.title}>
                                {item.icon}
                                {item.title}
                            </StyledLink>
                        ))
                    }
                </Stack>
            </Container>
        </Box>
    )
}

const StyledLink = styled(Link)`
    color: ${grey[900]};
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
`