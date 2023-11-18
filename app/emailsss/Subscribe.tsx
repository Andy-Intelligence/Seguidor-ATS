import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface SubscribeEmailProps {
    name?: string;
    email?: string;
  }
  
  export const SubscribeEmail = ({name, email}: SubscribeEmailProps) => {
    return (
      <Html>
        <Head />
        <Preview>Dropbox reset your password</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section>
      
              <Text style={text}>Hi {name},</Text>
              <Text style={text}>
                Thank you for subscribing to our Newsletter. Your {email} has been added to our mailing list
              </Text>
              <Text style={text}>
                Our Bi-weekly newsletter will always be in your inbox with all.
                Major Announcements, Special Offers, and much more exciting
                things. We won't spam your mailbox. See you soon!
              </Text>
              <Text style={text}>
                If you've got any other questions, please don&apos;t hesitate to
                contact Us via our Help Center for more help.
              </Text>
              <Text style={text}> Thank you. Happy Coding!</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default SubscribeEmail;
  


  const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
  };
  
  const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "45px",
  };
  
  const text = {
    fontSize: "16px",
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px",
  };
  
  const button = {
    backgroundColor: "#007ee6",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "210px",
    padding: "14px 7px",
  };
  
  const anchor = {
    textDecoration: "underline",
  };