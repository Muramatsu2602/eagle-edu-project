//#Será que não pesa muito importar todos esses componentes ?

import * as Icons from "react-icons/fa";



//#Talvez fosse interessante ter a opção de cor.

const DynamicFaIcon = ({ name, iconSize }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.FaGraduationCap size={iconSize} />;
  }

  return <IconComponent size={iconSize}/>;
};

export default DynamicFaIcon;
