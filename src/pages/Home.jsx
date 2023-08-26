import {Features, OptForm} from '../components';
import {FaqsContainer} from '../containers/faqsContainer';
import {FooterContainer} from '../containers/footer';
import {HeaderContainer} from '../containers/Header';
import {JumbotronContainer} from '../containers/Jumbotron';

JumbotronContainer;
export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Features>
          <Features.Title>Unlimited movies, TV shows, and more</Features.Title>
          <Features.SubTitle>Watch anywhere. Cancel anytime.</Features.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Enter Email" />
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break></OptForm.Break>
            <OptForm.Text>
              Ready to Watch? Enter email to create or restart membership.
            </OptForm.Text>
          </OptForm>
        </Features>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};
