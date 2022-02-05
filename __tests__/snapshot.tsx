import { render } from '@testing-library/react'
import FourthButton from 'components/buttons/FourthButton'
import PrimaryButton from 'components/buttons/PrimaryButton'
import SecondaryButton from 'components/buttons/SecondaryButton'
import ThirdButton from 'components/buttons/ThirdButton'
import ListDetailMovesTypes from 'components/card/ListDetailMovesTypes'
import PokemonCard from 'components/card/PokemonCard'
import PokemonList from 'components/card/PokemonList'
import Header from 'components/header/Header'
import TypeMoveList from 'components/list/TypeMoveList'
import Loading from 'components/loading/Loading'
import Logo from 'components/logo/Logo'
import MenuTitle from 'components/menu-title/MenuTitle'
import Pagination from 'components/pagination/Pagination'
import Root from 'config/Root'
import Layout from 'layout/Layout'
import Home from 'pages/index'
import MyPokemonList from "pages/my-pokemon-list"
import PokemonDetail from 'pages/pokemon-detail/[pokemonName]'

const onClick = jest.fn();

const isMainMenu = false;
const title = "";

const pokemonListData = {
  pokemons: {
    count: 0,
    message: "",
    next: "",
    previous: "",
    status: true,
    __typename: "",
    results: [
      {
        image: "",
        name: "",
        url: "",
        nickname: "",
        __typename: "",
      },
    ],
  },
};



describe('renders each component', () => {
  // * pages
  it('renders homepage unchanged', () => {
    const { container } = render(
        <Root>
          <Home />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

  it('renders my pokemon list unchanged', () => {
    const { container } = render(
        <Root>
          <MyPokemonList />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

  it('renders pokemon detail unchanged', () => {
    const pokemon = {
      id: 0,
      name: "",
      sprites: {
        front_default: "",
      },
      moves: [{
        __typename: "",
        move: {
          __typename: "",
          name: "",
        },
      }],
      types: [{
        __typename: "",
        type: {
          __typename: "",
          name: "",
        },
      }],
      pokemonName: "" || [{}]
    };
    
    const { container } = render(
        <Root>
          <PokemonDetail pokemon={pokemon} />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

  // * components/buttons
  it('renders primary button unchanged', () => {
    const { container } = render(
        <Root>
          <PrimaryButton onClick={onClick} />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

  it('renders secondary button unchanged', () => {
    const { container } = render(
        <Root>
          <SecondaryButton onClick={onClick} />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

  it('renders third button unchanged', () => {
    const { container } = render(
        <Root>
          <ThirdButton onClick={onClick} />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

  it('renders fourth button unchanged', () => {
    const { container } = render(
        <Root>
          <FourthButton onClick={onClick} />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

    // * components/buttons
    it('renders primary button unchanged', () => {
      const { container } = render(
          <Root>
            <PrimaryButton onClick={onClick} />
          </Root>
      );
      expect(container).toMatchSnapshot()
    })

      // * components/card
  it('renders list detail moves and types unchanged', () => {
    const dataDetail = {
      __typename: "",
      move: {
        __typename: "",
        name: "",
      },
      type: {
        __typename: "",
        name: "",
      },
    };
    
    const { container } = render(
        <Root>
          <ListDetailMovesTypes dataDetail={dataDetail} />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

  it('renders pokemon card unchanged', () => {
    const item = {
      image: '',
      name: '',
      url: '',
      __typename: '',
      nickname: '',
    };
    
    const { container } = render(
        <Root>
          <PokemonCard isMainMenu={isMainMenu} item={item} />
        </Root>
    );
    expect(container).toMatchSnapshot()
  })

  it('renders pokemon list unchanged', () => {
    const myPokemonData = [
      {
        image: "",
        name: "",
        url: "",
        __typename: "",
        nickname: "",
      },
    ];

    const { container } = render(
      <Root>
        <PokemonList
          isMainMenu={isMainMenu}
          title={title}
          pokemonListData={pokemonListData}
          myPokemonData={myPokemonData}
        />
      </Root>
    );
    expect(container).toMatchSnapshot()
  })

    // * components/header
    it('renders list detail moves and types unchanged', () => {
      const { container } = render(
          <Root>
            <Header isMainMenu={isMainMenu} />
          </Root>
      );
      expect(container).toMatchSnapshot()
    })

    // * components/list
    it('renders list detail moves and types unchanged', () => {
      const pokemonData = {
        moves: [
          {
            __typename: "",
            move: {
              __typename: "",
              name: "",
            },
          },
        ],
        types: [
          {
            __typename: "",
            type: {
              __typename: "",
              name: "",
            },
          },
        ],
      };

      const { container } = render(        
          <Root>
            <TypeMoveList pokemonData={pokemonData} />
          </Root>
      );
      expect(container).toMatchSnapshot()
    })

    // * components/loading
    it('renders loading screen unchanged', () => {
      const { container } = render(        
          <Root>
            <Loading />
          </Root>
      );
      expect(container).toMatchSnapshot()
    })

    // * components/logo
    it('renders logo image unchanged', () => {
      const hideLogo = false
      const customFlexPosition = "flex-start";
      
      const { container } = render(        
          <Root>
            <Logo isMainMenu={isMainMenu} hideLogo={hideLogo} customFlexPosition={customFlexPosition} />
          </Root>
      );
      expect(container).toMatchSnapshot()
    })

    // * components/menu-title
    it('renders menu title unchanged', () => {
      const { container } = render(        
          <Root>
            <MenuTitle isMainMenu={isMainMenu} title={title} />
          </Root>
      );
      expect(container).toMatchSnapshot()
    })

     // * components/pagination
     it('renders pagination unchanged', () => {
      const { container } = render(        
          <Root>
            <Pagination isMainMenu={isMainMenu} data={pokemonListData} />
          </Root>
      );
      expect(container).toMatchSnapshot()
    })

     // * layout
     it('renders layout unchanged', () => {
      const { container } = render(        
          <Root>
            <Layout isMainMenu={isMainMenu} />
          </Root>
      );
      expect(container).toMatchSnapshot()
    })
  


})