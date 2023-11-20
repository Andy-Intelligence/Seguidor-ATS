import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Preview,
  Button,
  Tailwind,
  Html,
  Img,
  Link,
  Section,
  Text,
} from '@react-email/components';


interface EmailProps {
  name?: string;
  email?: string;
  interviewer?:string;
  applicant?:string;
  job?:string;
  scheduledDate?:string;
  interviewStartTime?:string;
  interviewEndTime?:string;
  title?:string;
  description?:string;
  summary?:string;
  venue?:string;
  details?:string;
  inviteLink?:string;
}





const Email = ({
  name, 
  email,
  interviewer,
  applicant,
  job,
  scheduledDate,
  interviewStartTime,
  interviewEndTime,
  title,
  description,
  summary,
  venue,
  details,
  inviteLink,}: EmailProps)=>{

  return (
    <Html>
      <Head/>
      <Tailwind>
        <Body className='flex items-center justify-center bg-white my-12 mx-auto font-sans'>
          <Container className='p-8 rounded-lg shadow-lg'>
            <Text className='text-3xl font-[800] text-blue-700'>Seguidor</Text>
            <Heading className='text-xl pt-4'>Hello, {name}!</Heading>
            <Text className='text-lg font-medium text-gray-700'>
              Thanks for joining us in the application process for the role of {job}. 
              Unfortunately We cannot move further with your application please fill free to check other vacant positions by clicking the button below.
            </Text>
            <Button className='bg-blue-800 text text-white font-bold px-2 py-4 rounded-md' href='www.google.com'>
              Check out other Vacancies
            </Button>
          </Container>
        </Body>
      </Tailwind>

    </Html>

  )
}


export default Email