import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';

import { mapData } from '../../api/map-data';

import { Base } from '../Base';
import { mockBase } from '../Base/mock';

import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : 'olha-so-a-minha-pagina';

    const load = async () => {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep,10`,
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        console.log(pageData[0]);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location]);

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        console.log(
          '🚀 ~ file: index.jsx:61 ~ {sections.map ~ component:',
          component,
        );
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
