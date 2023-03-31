import content from './content.json';
import { TextContainerArea } from './components/TextContainerArea';
import { IconLinkList } from './components/IconLinkList';
import './App.scss';

function App() {
  if (!content['reach-me'].length) {
    return (
      <div className="loader">
        <img
          src="https://s2.svgbox.net/loaders.svg?ic=hearts&color=ff7575"
          width="100"
          height="100"
          alt="loader"
        />
      </div>
    );
  }

  return (
    <>
      <TextContainerArea
        header={content.header}
        subheader={content.subheader}
      />
      <IconLinkList data={content['reach-me']} />
    </>
  );
}

export default App;
