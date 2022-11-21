import Section from 'components/Section/Section.jsx';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';

export const App = () => {
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} />
      </Section>
    </div>
  );
};
