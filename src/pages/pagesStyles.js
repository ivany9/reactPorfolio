import styled from 'styled-components';
import contact from '../images/cont.jpg'


export const ImgLink= styled.a`
font-size: 2.0rem;
color:black;
text-Decoration:none;



&:hover {
	color: green;
	transition: 200ms ease-in;
}

`
export const Form= styled.div`




justify-content: center;
padding:80px;
margin:  auto;
aline-item:center;
widht:400px;
font-size:20px;
color:black;

`
export const Cont= styled.div`


background:lightgray;
color: black;
padding:30px;
justify-content: center;
aline-item:center;


`

export const Back= styled.div`


 color:red;
 display:flex;
 flex-direction:row;
 justify-content:center;
 aline-items:center:


@media screen and (max-width: 768px) {
    

	display:flex;
	flex-direction:column;
	font-size:8px;
    
  }

`
export const ContactLink = styled.a`{

color: black;
font-size: 1.8rem;
padding: 2rem;
text-decoration:none;


&:hover {
	color: gray;
	transition: 200ms ease-in;
}

@media screen and (max-width: 768px) {
    

	display:flex;
	flex-direction:row;
	font-size:30px;
	padding:10px;
	
    p{
     display:none

	}

	}
    
  }







}
`
export const Container= styled.div`


color: black;
text-align: justify;
padding: 20px;


`

export const Photo=styled.img`
 
height: 300px;
border-radius: 25px;


`
export const Img=styled.img`
 
height: 150px;


`





