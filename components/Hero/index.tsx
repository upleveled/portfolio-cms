import { ReactTyped } from 'react-typed';
import { attributes } from '../../content/main';

type Props = {
  data: (typeof attributes)['hero'];
};

export default function Hero({ data }: Props) {
  const { heading, typed, firstButton, secondButton, social, image } = data;
  const typedStrings: string[] = [];
  typed.forEach((string) => {
    typedStrings.push(string.text);
  });
  return (
    <div
      id="hero"
      data-test-id="myHero"
      className="h-screen w-screen bg-gray-800 text-white flex items-center justify-center"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
      }}
    >
      <div className="hero__overlay absolute top-0 left-0 h-screen w-screen bg-black opacity-50" />
      <div className="hero__content text-center z-40">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <h2 className="text-5xl font-bold" style={{ minHeight: '70px' }}>
          <ReactTyped
            strings={typedStrings}
            typeSpeed={70}
            backSpeed={50}
            showCursor={false}
            loop
          />
        </h2>
        <div className="hero__buttons flex justify-center my-3">
          <a
            href={firstButton.link}
            className="font-bold border-solid border-2 border-white py-3 px-5 mx-3 hover:bg-white hover:text-gray-800"
          >
            <i className={`mdi mdi-${firstButton.icon} mr-2 text-xl`} />
            {firstButton.text}
          </a>
          <a
            href={secondButton.link}
            className="font-bold border-solid border-2 border-white py-3 px-5 mx-3 hover:bg-white hover:text-gray-800"
          >
            <i className={`mdi mdi-${secondButton.icon} mr-2 text-xl`} />
            {secondButton.text}
          </a>
        </div>
        <div className="hero__social flex justify-center py-3">
          {social.facebook.show && (
            <a
              href={social.facebook.link}
              target="_blank"
              className="mx-2 px-1 text-xl hover:bg-gray-800 rounded-lg"
            >
              <i className="mdi mdi-facebook" />
            </a>
          )}
          {social.instagram.show && (
            <a
              href={social.instagram.link}
              target="_blank"
              className="mx-2 px-1 text-xl hover:bg-gray-800 rounded-lg"
            >
              <i className="mdi mdi-instagram" />
            </a>
          )}
          {social.linkedin.show && (
            <a
              href={social.linkedin.link}
              target="_blank"
              className="mx-2 px-1 text-xl hover:bg-gray-800 rounded-lg"
            >
              <i className="mdi mdi-linkedin" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
