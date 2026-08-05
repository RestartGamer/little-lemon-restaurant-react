
import {
    Box,
    InputLabel,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material"

import {
    BackBtn,
    SectionTitle as PageTitle,
} from "../components"

import { ContentSection } from "../sections"

import { LittleLemonExampleImage, LemonCardIcon, HeartCardIcon, HouseCardIcon } from "../assets"

import { convert } from "../utils/muiConverter"

const highlights = [
    {
        src: LemonCardIcon,
        title: "Fresh ingredients",
        description: "Selected for every dish",
    },
    {
        src: HeartCardIcon,
        title: "Made with care",
        description: "Inspired by family recipes",
    },
    {
        src: HouseCardIcon,
        title: "Warm atmosphere",
        description: "A place to eat and connect",
    },
]


function HighlightBox({ title, description, src }) {

    return (
        <Stack>
            <Box component="img" alt="image of highlight" src={src} />
            <Typography variant="bigCardTitle" component="span" sx={{
                color: black,
                fontWeight: 600,
            }}>
                {title}
            </Typography>
            <Typography variant="bodyMedium" component="span" sx={{
                color: black
            }}>
                {description}
            </Typography>
        </Stack>
    )
}


export function AboutPage() {

    return (
        <>
            <BackBtn />

            <ContentSection>
                <Stack direction="row" sx={{
                    px: convert(40),
                    pt: convert(60),
                    pb: convert(30)
                }}>
                    <Box component="img" alt="image of restaurant" src={LittleLemonExampleImage} />
                    <Stack sx={{
                        px: convert(70)
                    }}>
                        <PageTitle title="About Little Lemon" />
                        <Typography variant="headingTitle" component="h3" sx={{
                            color: "text.primary",
                        }}>
                            Our Story
                        </Typography>
                        <Typography variant="bodyLarge" component="p" sx={{
                            color: "black",
                            mt: convert(10)
                        }}>
                            Little Lemon is a fictional Mediterranean restaurant created as part of a responsive
                            web-development project. The website presents the restaurant’s menu, brand identity
                            and services through a clear, modern interface. 
                            <br/><br/>
                            The project focuses on reusable React
                            components, responsive layouts, accessible navigation and an intuitive user experience
                            across desktop and mobile devices.
                        </Typography>
                        <Stack direction="row" sx={{
                            justifyContent: "space-between",
                            mt: convert(45),
                        }}>
                            {highlights.map(({ title, description, src }) => {
                                return (
                                    <Stack sx={{
                                        alignItems: "center",
                                    }}>
                                        <Box component="img" alt="logo of highlight" src={src} sx={{
                                            width: "40px",
                                            height: "40px",
                                        }} />

                                        <Typography variant="cardTitle" component="span" sx={{
                                            color: "black",
                                        }}>
                                            {title}
                                        </Typography>
                                        <Typography variant="bodyLarge" component="span" sx={{
                                            color: "black",
                                        }}>
                                            {description}
                                        </Typography>
                                    </Stack>
                                )
                            })}
                        </Stack>

                    </Stack>

                </Stack>
            </ContentSection>
        </>
    )
}