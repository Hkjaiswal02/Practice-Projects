import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

const Footer = () => {
  return (
    <FooterContainer>
      {/* App Download Section */}
      <DownloadSection>
        <h2>Get the best experience on your device!</h2>
        <p>
          Download the <span>FoodyZone</span> App now.
        </p>
        <ButtonGroup>
          <StoreButton>
            <SiAppstore size={22} /> App Store
          </StoreButton>
          <StoreButton>
            <SiGoogleplay size={22} /> Google Play
          </StoreButton>
        </ButtonGroup>
      </DownloadSection>

      <MainFooter>
        {/* Logo + About */}
        <FooterCol>
          <img src="./images/logo1.png" alt="" />
          <p>
            Delicious food, anytime, anywhere. Bringing flavors from around the
            world straight to your table.
          </p>
        </FooterCol>

        {/* Quick Links */}
        <FooterCol>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </FooterCol>

        {/* Support */}
        <FooterCol>
          <h4>Support</h4>
          <ul>
            <li>📞 +91-999-888-7777</li>
            <li>✉️ support@foodyzone.com</li>
            <li>📍 New Delhi, India</li>
          </ul>
        </FooterCol>

        {/* Socials */}
        <FooterCol>
          <h4>Follow Us</h4>
          <SocialIcons>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </SocialIcons>
        </FooterCol>
      </MainFooter>

      {/* Copyright */}
      <BottomBar>
        © 2025 <span>FoodyZone</span>. All rights reserved. |
        <a href="#"> Terms </a> |<a href="#"> Privacy Policy</a>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

export const FooterContainer = styled.footer`
  margin-top: 50px;
  background: #000000;
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DownloadSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #ccc;
    margin-bottom: 1rem;

    span {
      color: #ff715b;
      font-weight: 600;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const StoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(90deg, #ff5f6d, #ff715b);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 10px #ff715b;
  }
`;

export const MainFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
`;

export const FooterCol = styled.div`
  img {
    width: 200px;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #fff;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #aaa;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
      color: #bbb;
    }

    a {
      color: #bbb;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ff715b;
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.3rem;

  a {
    color: #bbb;
    transition: 0.3s ease;

    &:hover {
      color: #ff715b;
      transform: scale(1.1);
    }
  }
`;

export const BottomBar = styled.div`
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #888;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;

  span {
    color: #ff715b;
  }

  a {
    color: #bbb;
    margin-left: 4px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff715b;
    }
  }
`;
