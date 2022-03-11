import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

const className = {
  socialItems: "list-none flex items-center justify-center mt-4",
  socialItem: "ml-2 first:ml-0 inline-block hover:scale-110 duration-300",
};

interface Props {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

const TeacherCardSocialLinks = ({
  facebook,
  instagram,
  linkedin,
  twitter,
}: Props) => {
  if (!facebook && !instagram && !linkedin && !twitter) {
    return null;
  }

  return (
    <ul className={className.socialItems}>
      {facebook && (
        <li className={className.socialItem}>
          <a href={facebook} rel="noreferrer" target="_blank">
            <IoLogoFacebook
              className="text-[#1877f2] hover:text-[#1877f2]/80"
              size={24}
            />
          </a>
        </li>
      )}
      {twitter && (
        <li className={className.socialItem}>
          <a href={twitter} rel="noreferrer" target="_blank">
            <IoLogoTwitter
              className="text-[#1d9bf0] hover:text-[#1d9bf0]/80"
              size={24}
            />
          </a>
        </li>
      )}
      {instagram && (
        <li className={className.socialItem}>
          <a href={instagram} rel="noreferrer" target="_blank">
            <IoLogoInstagram
              className="text-[#c7288f] hover:text-[#c7288f]/80"
              size={24}
            />
          </a>
        </li>
      )}
      {linkedin && (
        <li className={className.socialItem}>
          <a href={linkedin} rel="noreferrer" target="_blank">
            <IoLogoLinkedin
              className="text-[#0e76a8] hover:text-[#0e76a8]/80"
              size={24}
            />
          </a>
        </li>
      )}
    </ul>
  );
};

export default TeacherCardSocialLinks;
