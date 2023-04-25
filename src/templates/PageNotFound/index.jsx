import P from 'prop-types';
import { GridContent } from '../../components/GridContent';
export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>a página que vc procurava n foi encontrada <a href="/">Clique aqui para voltar</a></p>'
    />
  );
};
