import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Container from '../components/Container/Container';
import SearchBox from '../components/SearchBox/SearchBox';

export default function App() {
  return (
    <main>
      <Container>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Container>
    </main>
  );
}
