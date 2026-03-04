import MainPage from '../pages/MainPage.tsx';

type AppProps = {
  placesCount: number;
}

export default function App({placesCount}: AppProps) {
  return (
    <MainPage placesCount={placesCount}/>
  );
}
