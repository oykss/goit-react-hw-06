import ContactList from '../components/ContactList/ContactList';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import Container from '../components/Container/Container';
import SearchBox from '../components/SearchBox/SearchBox';

export default function App() {
  return (
    <main>
      <Container>
        <ContactsForm />
        <SearchBox />
        <ContactList />
      </Container>
    </main>
  );
}
