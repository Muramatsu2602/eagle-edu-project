import * as Icons from "react-icons/fa";

const DynamicFaIcon = ({ name, iconSize }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.FaGraduationCap size={iconSize} />;
  }

  return <IconComponent size={iconSize}/>;
};

export default DynamicFaIcon;