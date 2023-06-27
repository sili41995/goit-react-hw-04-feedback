import PropTypes from 'prop-types';
import css from 'components/Section/Section.styled';

const { Container, Title } = css;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default Section;
