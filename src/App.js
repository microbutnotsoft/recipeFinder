import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import Search from "./components/Search";
import {BrowserRouter, Link} from 'react-router-dom';
import {BiFoodMenu} from 'react-icons/bi';
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <BiFoodMenu/>
        <Logo to={'/'}>PantryPal </Logo>
      </Nav>
      <Search/>
      <Categories/>
     <Pages/>
     </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two' , cursive;
`;

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;

svg{
  font-size: 2rem;
}
`;

export default App;
