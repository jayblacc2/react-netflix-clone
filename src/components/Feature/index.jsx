import {Container, SubTitle, Title} from './styles/features';

export default function Features({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Features.Title = function HeaderTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Features.SubTitle = function FeaturesSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
