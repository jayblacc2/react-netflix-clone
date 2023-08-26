import {Features} from '../components';
import {OptForm} from '../components';

export function FeaturesContainer() {
  return (
    <Features>
      <OptForm>
        <OptForm.Input placeholder="Enter Email" />
        <OptForm.Button>Try it Now</OptForm.Button>
        <OptForm.Break></OptForm.Break>
        <OptForm.Text>
          Ready to Watch? Enter email to create or restart membership.
        </OptForm.Text>
      </OptForm>
    </Features>
  );
}
