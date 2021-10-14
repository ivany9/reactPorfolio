import styled from 'styled-components';

export const Box = styled.div`
display:flex;
padding: 80px 60px;
background: black;
position: absolute;
bottom: 0;
width: 100%;
align-items: center;
justify-content: center;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
`


export const FooterLink = styled.a`

color: #fff;
font-size: 1.8rem;
padding: 0 1rem;


&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

