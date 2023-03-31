import Container from '@mui/system/Container';
import Box from '@mui/system/Box';
import content from './content.json';
import { TextContainerArea } from './components/TextContainerArea';
import { IconLinkList } from './components/IconLinkList';
import './App.scss';

function App() {
  if (!content['reach-me'].length) {
    return (
      <Box
        position="fixed"
        width="100%"
        height="100%"
        m={0}
        zIndex={9999}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: 'rgba(54, 0, 72, 0.7)'
        }}
      >
        <img
          src="https://s2.svgbox.net/loaders.svg?ic=hearts&color=ff7575"
          width="100"
          height="100"
          alt="loader"
        />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <TextContainerArea
        header={content.header}
        subheader={content.subheader}
      />
      <IconLinkList data={content['reach-me']} />
    </Container>
  );
}

export default App;
