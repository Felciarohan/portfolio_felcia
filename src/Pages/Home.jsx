import { Box, Flex, Heading, HStack, Link, Tooltip, Image, Text, Center } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import {  skills } from '../Utils/data';


import Svg1 from '../Components/Svg1';
import Svg2 from '../Components/Svg2';
import Svg3 from '../Components/Svg3';
import Slider from 'react-slick';


const Home = () => {

    const form = useRef();
    const toast = useToast()

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: matchMedia("(max-width: 425px)").matches ? 1 : matchMedia("(max-width: 1024px)").matches ? 2 : 3,
        slidesToScroll: 1,
    };

    useEffect(() => {
        // * it's from Aos library to to use scroll designing
        Aos.init()
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_SERVICE_TEMPLATE, form.current, process.env.REACT_APP_SERVICE_SECRET).then((result) => {

            toast({
                position: 'top-right',
                title: 'Email Sent ✔',
                description: `Thank You ${form.current.from_name.value.split(" ")[0]} for the message!`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            form.current.reset();
        }, (error) => {
            console.log(error.text);
            toast({
                position: 'top-right',
                title: 'Email Not sent.',
                description: "There is some error",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        });;

    };

    return (
        <Box>
            <Box id='home'>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} m="auto" justifyContent="space-around" alignItems="center" h="100%">
                    <Box data-aos="fade-down">
                        <Heading>Hello Everyone!!<span className='themeText'></span></Heading>
                        <Box className='content'>
                            <Heading fontSize="3.3em" className='text' data-text="I Am Felcia"><span className='themeText'>I Am Felcia</span></Heading>
                        </Box>
                        <Text>I am a Computer Science Engineering student skilled web development and programming with experience . I am passionate about solving real-life problems through innovative and aesthetic digital solutions.</Text>
                        
                    </Box>
                    <Box data-aos="fade-down">
                 <img class="image" src="./Felciaa.jpg"></img>
                    </Box>
                </Flex>
            </Box>

            {/* About me */}

            <Box id="aboutMe">
                <Heading>About <span className='themeText'>me</span></Heading>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']} alignItems="center" h="100%">
                    <div data-aos="fade-right">
                    <img src="https://c1.wallpaperflare.com/preview/228/41/129/student-difficult-read-think.jpg"></img>
                    </div>

                    <Flex data-aos="fade-left">
                        <Flex w="100%" gap="10%" justifyContent="center">
                            <Image
                                borderRadius='full'
                                boxSize='250px'
                                src='./felcia.jpg'
                                alt='Felcia' />
                            <Svg3 />
                        </Flex>

                        <Box>
                            <Text>I am a Computer Science Engineering student with a strong passion for technology and creative problem-solving. My expertise lies in web development and programming, where I have worked on projects like event planning systems and portfolio websites. I enjoy designing user-friendly and aesthetically pleasing solutions that make a real impact. I strive to continuously learn and innovate, creating digital experiences that stand out.</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* Technical Skills section */}
            <Box id="skills">
                <Heading>
                    Technical
                    <span className="themeText"> Skills</span>
                </Heading>
                <Flex className='skills'>
                    <Flex>
                        <Heading size="lg">Front<span className='themeText'>end</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "frontend").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-up">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Programming<span className='themeText'> Language</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "backend").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-down">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Platforms <span className='themeText'>& Tools</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "platform").map(skill => <Box
                                    key={skill.id} className="skill"
                                    data-aos="zoom-in">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                </Flex>
            </Box>
{/* Projects Section */}
<Box id="projects"display="flex" justifyContent="center">
                <Heading >My <span className='themeText'>Projects</span></Heading>
                <Flex flexWrap="wrap" justifyContent="space-around" gap="20px" data-aos="fade-up">
                    <Box className="projectBox" data-aos="zoom-in-up">
                        <Box className="projectImage" style={{ backgroundImage: 'url(/event.png)' }}></Box>
                        <Box className="projectDescription">
                            <Heading size="md">Event Planning Website</Heading>
                            <Text>Our event planning website offers a seamless and user-friendly platform for managing and organizing events with ease. It provides tools for event scheduling, guest management, and customizable features to ensure a smooth planning experience.</Text>
                        </Box>
                    </Box>
                    <Box className="projectBox" data-aos="zoom-in-up">
                        <Box className="projectImage" style={{ backgroundImage: 'url(/portfolio.png)' }}></Box>
                        <Box className="projectDescription">
                            <Heading size="md">Portfolio</Heading>
                            <Text>My portfolio website showcases your work as a Computer Science Engineering student, emphasizing your skills in web development through projects like event planning systems and portfolio websites. It highlights my proficiency in technologies such as HTML, CSS, JavaScript and  demonstrating my ability to create functional and visually appealing digital solutions.</Text>
                        </Box>
                    </Box>
                    {/* Add more project boxes as needed */}
                </Flex>
            </Box>

            
            

            {/* Contact me */}
            <Box id='contactMe'>
                <Heading textAlign="center">Contact <span className='themeText'>Me</span></Heading>
                <Flex flexDirection={["column", "column", "column", "row"]} alignItems="center">

                    <Box>
                        <Svg2 />
                    </Box>


                    <Box className='form-section'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='inputBox'>
                                <input type="text" name="from_name" required />
                                <span>Full Name</span>
                            </div>
                            <div className='inputBox'>
                                <input type="email" name="from_mail" required />
                                <span>Email</span>
                            </div>
                            <div>
                                <textarea placeholder='Message 📧' name="message" />
                            </div>
                            <input type="submit" value="Send Message" />
                        </form>
                        <Flex className='contact-info'>
                            <HStack>
                                <SiGmail color="#e34133" />
                                <Text>jeyakumararul91@gmail.com</Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt color="#00a14f" />
                                <Text>+91 6374846861</Text>
                            </HStack>
                        </Flex>
                        <Flex gap={["10px", "20px", "20px", "40px"]}>
                            <Link href='https://wa.me/6374846861' target="_blank">
                                <Tooltip label='+91 6374846861'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png" alt='Whatsapp brand logo'/>
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href='https://www.linkedin.com/in/Felcia A/' target="_blank">
                                <Tooltip label='Felcia A'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt='Linkedin brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="https://github.com/Felciarohan" target="_blank">
                                <Tooltip label='Felciarohan'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='Github brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="mailto:jeyakumararul91@gmail.com" target="_blank">
                                <Tooltip label='jeyakumararul91@gmail.com'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt='Gmail brand logo' />
                                        </Box>
                                    </Box >
                                </Tooltip>
                            </Link>
                        </Flex >
                    </Box >
                </Flex >
            </Box >

            {/* footer */}
            <Flex id='footer'>
                <Text>Copyrights © 2024  | All rights reserved.</Text>
                
            </Flex>
        </Box >
    )
}

export default Home