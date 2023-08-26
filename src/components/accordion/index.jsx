/* eslint-disable react/prop-types */
import {useState, useContext} from 'react';
import {ToggleContext} from '../../context/context';
import {
  Container,
  Inner,
  Title,
  Header,
  Body,
  Item,
  Frame,
} from './style/accordion';

export default function Accordion({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Title = function AccordionTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({children, ...restProps}) {
  const {toggleShow, setToggleShow} = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Close" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({children, ...restProps}) {
  const {toggleShow} = useContext(ToggleContext);
  return toggleShow && <Body {...restProps}>{children}</Body>;
};
