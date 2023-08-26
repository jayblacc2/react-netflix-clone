import {Accordion, OptForm} from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Input placeholder="Enter Email" />
        <OptForm.Button>Try it Now</OptForm.Button>
        <OptForm.Break></OptForm.Break>
        <OptForm.Text>
          Ready to Watch? Enter email to create or restart membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
